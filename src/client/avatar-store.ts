import { ASSISTANT_PRESETS, USER_PRESETS, type AvatarPreset } from './avatars.ts'

export type AvatarRole = 'user' | 'assistant'
export const AVATAR_CHANGE_EVENT = 'dsh-chat-avatars-change'
export const MAX_AVATAR_FILE_BYTES = 1_500_000
export const DEFAULT_AVATAR_SIZE = 72
export const MIN_AVATAR_SIZE = 24
export const MAX_AVATAR_SIZE = 72

const KEYS: Record<AvatarRole, string> = {
  user: 'dsh.chatAvatars.user.v1',
  assistant: 'dsh.chatAvatars.assistant.v1',
}
const SIZE_KEY = 'dsh.chatAvatars.size.v1'
const CUSTOM_IMAGE = /^data:image\/(?:png|jpeg|webp|gif|avif);base64,/i

export function presetsFor(role: AvatarRole): readonly AvatarPreset[] {
  return role === 'user' ? USER_PRESETS : ASSISTANT_PRESETS
}

export function defaultAvatarSource(role: AvatarRole): string {
  return presetsFor(role)[0]!.src
}

function validSource(role: AvatarRole, value: string): boolean {
  return presetsFor(role).some(preset => preset.src === value)
    || (value.length <= 2_100_000 && CUSTOM_IMAGE.test(value))
}

export function loadAvatarSource(role: AvatarRole): string {
  try {
    const value = window.localStorage.getItem(KEYS[role])
    return value !== null && validSource(role, value) ? value : defaultAvatarSource(role)
  } catch {
    return defaultAvatarSource(role)
  }
}

export function saveAvatarSource(role: AvatarRole, source: string): void {
  if (!validSource(role, source)) throw new Error('invalid-avatar-source')
  try {
    if (source === defaultAvatarSource(role)) window.localStorage.removeItem(KEYS[role])
    else window.localStorage.setItem(KEYS[role], source)
  } catch {
    throw new Error('avatar-storage-failed')
  }
  window.dispatchEvent(new Event(AVATAR_CHANGE_EVENT))
}

export function loadAvatarSize(): number {
  try {
    const value = Number(window.localStorage.getItem(SIZE_KEY))
    return Number.isInteger(value) && value >= MIN_AVATAR_SIZE && value <= MAX_AVATAR_SIZE
      ? value
      : DEFAULT_AVATAR_SIZE
  } catch {
    return DEFAULT_AVATAR_SIZE
  }
}

export function saveAvatarSize(size: number): void {
  if (!Number.isInteger(size) || size < MIN_AVATAR_SIZE || size > MAX_AVATAR_SIZE) {
    throw new Error('invalid-avatar-size')
  }
  try {
    if (size === DEFAULT_AVATAR_SIZE) window.localStorage.removeItem(SIZE_KEY)
    else window.localStorage.setItem(SIZE_KEY, String(size))
  } catch {
    throw new Error('avatar-storage-failed')
  }
  window.dispatchEvent(new Event(AVATAR_CHANGE_EVENT))
}

export function readAvatarFile(file: File): Promise<string> {
  if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/avif'].includes(file.type)) {
    return Promise.reject(new Error('avatar-file-type'))
  }
  if (file.size > MAX_AVATAR_FILE_BYTES) return Promise.reject(new Error('avatar-file-size'))
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('avatar-file-read'))
    reader.onload = () => typeof reader.result === 'string'
      ? resolve(reader.result)
      : reject(new Error('avatar-file-read'))
    reader.readAsDataURL(file)
  })
}
