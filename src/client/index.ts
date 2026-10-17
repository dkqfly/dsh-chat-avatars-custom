/** Chat avatars browser half: configurable portraits around the native DSH flow. */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-locale/client'
// Type-only: pulls the settings-surface SlotMap merge (the 'settings.section' seat).
import type {} from '@deepseek-ai/dsh-client-ui-settings/client'
import { AvatarSettingsSection } from './AvatarSettingsCard.tsx'
import { avatarCssUrl } from './avatars.ts'
import { AVATAR_CHANGE_EVENT, loadAvatarSize, loadAvatarSource } from './avatar-store.ts'
import { en, zh, type ChatAvatarKey } from './locales.ts'
import './chat-avatars.module.css'

const USER_PROPERTY='--dsh-chat-user-avatar',ASSISTANT_PROPERTY='--dsh-chat-assistant-avatar',SIZE_PROPERTY='--dsh-chat-avatar-size',NS='chat-avatars'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap { 'chat-avatars': ChatAvatarKey }
}

export const inject=['slots','locale']

export function apply(ctx: ClientContext): void {
  const body=document.body,priorUser=body.style.getPropertyValue(USER_PROPERTY),priorAssistant=body.style.getPropertyValue(ASSISTANT_PROPERTY),priorSize=body.style.getPropertyValue(SIZE_PROPERTY),hadMarker=body.dataset.dshChatAvatars!==undefined
  const sync=()=>{body.style.setProperty(USER_PROPERTY,avatarCssUrl(loadAvatarSource('user')));body.style.setProperty(ASSISTANT_PROPERTY,avatarCssUrl(loadAvatarSource('assistant')));body.style.setProperty(SIZE_PROPERTY,`${loadAvatarSize()}px`)}
  body.dataset.dshChatAvatars='';sync();window.addEventListener(AVATAR_CHANGE_EVENT,sync);window.addEventListener('storage',sync)
  ctx.effect(()=>()=>{window.removeEventListener(AVATAR_CHANGE_EVENT,sync);window.removeEventListener('storage',sync);if(!hadMarker)delete body.dataset.dshChatAvatars;body.style.setProperty(USER_PROPERTY,priorUser);body.style.setProperty(ASSISTANT_PROPERTY,priorAssistant);body.style.setProperty(SIZE_PROPERTY,priorSize)},'ui-chat-avatars: identity layer')
  const locale=ctx.get('locale'),slots=ctx.get('slots')
  if(locale!==undefined)ctx.effect(()=>locale.register(NS,{zh,en}),'ui-chat-avatars: dictionaries')
  if(slots!==undefined)ctx.slots.inject('settings.section',()=>ctx.slots.register({
    name:'settings.section',
    id:'chat-avatars',
    order:110,
    label:()=>ctx.locale.bind(NS)('nav'),
    locale:NS,
    inject:()=>({}),
  },AvatarSettingsSection))
}
