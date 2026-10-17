import { useState, type ChangeEvent } from 'react'
import type { PropsLocale } from '@deepseek-ai/dsh-client-ui-slots'
import { ASSISTANT_PRESETS, USER_PRESETS, type AvatarPreset } from './avatars.ts'
import {
  DEFAULT_AVATAR_SIZE,
  MAX_AVATAR_SIZE,
  MIN_AVATAR_SIZE,
  defaultAvatarSource,
  loadAvatarSize,
  loadAvatarSource,
  readAvatarFile,
  saveAvatarSize,
  saveAvatarSource,
  type AvatarRole,
} from './avatar-store.ts'
import type { ChatAvatarKey } from './locales.ts'
import css from './avatar-settings.module.css'

function errorKey(error: unknown): ChatAvatarKey {
  if (error instanceof Error && error.message === 'avatar-file-type') return 'settings.errorType'
  if (error instanceof Error && error.message === 'avatar-file-size') return 'settings.errorSize'
  if (error instanceof Error && error.message === 'avatar-storage-failed') return 'settings.errorStorage'
  return 'settings.errorRead'
}

function RolePicker(props: {
  role: AvatarRole
  label: string
  presets: readonly AvatarPreset[]
  source: string
  onChange: (source: string) => void
  t: PropsLocale<'chat-avatars'>['t']
}) {
  const { role, label, presets, source, onChange, t } = props
  const [error, setError] = useState<ChatAvatarKey | undefined>()
  const isCustom = !presets.some(preset => preset.src === source)

  const select = (next: string) => {
    try {
      saveAvatarSource(role, next)
      onChange(next)
      setError(undefined)
    } catch (cause) {
      setError(errorKey(cause))
    }
  }

  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (file === undefined) return
    try {
      select(await readAvatarFile(file))
    } catch (cause) {
      setError(errorKey(cause))
    }
  }

  return (
    <section className={css.roleSection} aria-labelledby={`chat-avatar-${role}`}>
      <div className={css.roleHead}>
        <div>
          <h4 className={css.roleTitle} id={`chat-avatar-${role}`}>{label}</h4>
          <p className={css.roleHint}>{t('settings.preset')}</p>
        </div>
        <button className={css.reset} type="button" onClick={() => select(defaultAvatarSource(role))}>
          {t('settings.default')}
        </button>
      </div>
      <div className={css.choices}>
        {presets.map((preset, index) => {
          const selected = source === preset.src
          return (
            <button className={css.choice} data-selected={selected ? '' : undefined} type="button" key={preset.id}
              aria-label={`${label} ${index + 1}`} aria-pressed={selected} onClick={() => select(preset.src)}>
              <img className={css.portrait} src={preset.src} alt="" />
              {selected ? <span className={css.selected}>{t('settings.selected')}</span> : null}
            </button>
          )
        })}
        {isCustom ? (
          <button className={css.choice} data-selected="" type="button" aria-pressed="true">
            <img className={css.portrait} src={source} alt="" />
            <span className={css.selected}>{t('settings.custom')}</span>
          </button>
        ) : null}
      </div>
      <div className={css.uploadRow}>
        <label className={css.uploadButton}>
          {isCustom ? t('settings.replace') : t('settings.upload')}
          <input className={css.fileInput} type="file" accept="image/png,image/jpeg,image/webp,image/gif,image/avif" onChange={upload} />
        </label>
        <span className={css.fileHint}>{t('settings.fileHint')}</span>
      </div>
      {error !== undefined ? <p className={css.error} role="alert">{t(error)}</p> : null}
    </section>
  )
}

export type AvatarSettingsSectionProps = PropsLocale<'chat-avatars'>

/** First-level settings page: avatar size and local uploads get their own column. */
export function AvatarSettingsSection({ t }: AvatarSettingsSectionProps) {
  const [userSource, setUserSource] = useState(() => loadAvatarSource('user'))
  const [assistantSource, setAssistantSource] = useState(() => loadAvatarSource('assistant'))
  const [size, setSize] = useState(loadAvatarSize)
  const [sizeError, setSizeError] = useState<ChatAvatarKey | undefined>()

  const selectSize = (next: number) => {
    try {
      saveAvatarSize(next)
      setSize(next)
      setSizeError(undefined)
    } catch (cause) {
      setSizeError(errorKey(cause))
    }
  }

  return (
    <section className={css.page} aria-labelledby="chat-avatars-page-title">
      <div className={css.pageHead}>
        <h3 className={css.pageTitle} id="chat-avatars-page-title">{t('settings.title')}</h3>
        <p className={css.pageDescription}>{t('settings.description')}</p>
      </div>
      <div className={css.pageBody}>
        <section className={css.sizeSection} aria-labelledby="chat-avatar-size">
          <div className={css.sizeHead}>
            <div>
              <h4 className={css.roleTitle} id="chat-avatar-size">{t('settings.size')}</h4>
              <p className={css.roleHint}>{t('settings.sizeHint')}</p>
            </div>
            <output className={css.sizeValue} htmlFor="chat-avatar-size-slider">{size} px</output>
            <button className={css.reset} type="button" disabled={size === DEFAULT_AVATAR_SIZE}
              onClick={() => selectSize(DEFAULT_AVATAR_SIZE)}>{t('settings.default')}</button>
          </div>
          <input className={css.sizeSlider} id="chat-avatar-size-slider" type="range"
            min={MIN_AVATAR_SIZE} max={MAX_AVATAR_SIZE} step="1" value={size}
            aria-label={t('settings.size')} onChange={event => selectSize(Number(event.target.value))} />
          <div className={css.sizeRange} aria-hidden="true"><span>{MIN_AVATAR_SIZE} px</span><span>{MAX_AVATAR_SIZE} px</span></div>
          {sizeError !== undefined ? <p className={css.error} role="alert">{t(sizeError)}</p> : null}
        </section>
        <RolePicker role="user" label={t('settings.user')} presets={USER_PRESETS} source={userSource} onChange={setUserSource} t={t} />
        <RolePicker role="assistant" label={t('settings.assistant')} presets={ASSISTANT_PRESETS} source={assistantSource} onChange={setAssistantSource} t={t} />
      </div>
    </section>
  )
}
