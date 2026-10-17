/** Text-free portraits embedded into the client bundle. */

export interface AvatarPreset {
  id: string
  src: string
}

function svgDataUrl(svg: string): string {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/** Convert an image source into a safe CSS background-image value. */
export function avatarCssUrl(src: string): string {
  return `url(${JSON.stringify(src)})`
}

const USER_WARM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="8" y1="6" x2="56" y2="58"><stop stop-color="#fff1d6"/><stop offset="1" stop-color="#eaa76f"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#b)"/><circle cx="32" cy="25" r="12" fill="#f6d3b5"/><path d="M19 26c0-10 5-16 13-16s14 6 14 16c-3-2-5-5-6-8-5 5-11 7-21 8Z" fill="#3f3433"/><path d="M12 61c2-15 9-23 20-23s19 8 21 23H12Z" fill="#343a49"/><path d="M28 31c2 2 6 2 8 0" fill="none" stroke="#b16f64" stroke-width="1.5" stroke-linecap="round"/></svg>`
const USER_BLUE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="8" y1="4" x2="57" y2="61"><stop stop-color="#d7f2ff"/><stop offset="1" stop-color="#6f8fe8"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#a)"/><circle cx="32" cy="25" r="12" fill="#efd0b6"/><path d="M19 27c0-12 6-18 14-18 9 0 14 7 13 19-4-2-7-6-8-10-4 5-10 8-19 9Z" fill="#202a46"/><path d="M10 64c2-17 10-25 22-25 13 0 21 8 23 25Z" fill="#25385f"/><path d="M26 31c4 3 8 3 12 0" fill="none" stroke="#b36f69" stroke-width="1.5" stroke-linecap="round"/></svg>`
const USER_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="d" x1="7" y1="5" x2="56" y2="58"><stop stop-color="#5d6478"/><stop offset="1" stop-color="#171923"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#d)"/><circle cx="32" cy="24" r="11" fill="#d8aa8b"/><path d="M20 24c0-10 5-16 12-16 9 0 14 7 13 18-6-1-11-5-14-10-3 5-7 7-11 8Z" fill="#12141b"/><path d="M11 64c2-17 9-26 21-26s20 9 22 26Z" fill="#0f1118"/></svg>`
const ASSISTANT_WHALE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="o" x1="9" y1="7" x2="56" y2="59"><stop stop-color="#baf1ff"/><stop offset=".52" stop-color="#4389f2"/><stop offset="1" stop-color="#2445a8"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#o)"/><path d="M14 37c8-13 17-19 29-18 4 0 8 1 11 3-4 1-7 4-9 7 5 0 9 2 12 5-7 6-15 9-25 8-7 0-13-2-18-5Z" fill="#fff" fill-opacity=".94"/><path d="M19 35c7 2 13 1 18-2-2 5-6 9-12 12" fill="none" stroke="#2465c7" stroke-width="2.5" stroke-linecap="round"/><circle cx="43" cy="25" r="2" fill="#173579"/></svg>`
const ASSISTANT_ORBIT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><radialGradient id="n"><stop stop-color="#d7c8ff"/><stop offset=".55" stop-color="#755bd5"/><stop offset="1" stop-color="#252459"/></radialGradient></defs><rect width="64" height="64" rx="32" fill="url(#n)"/><circle cx="32" cy="32" r="12" fill="#fff" fill-opacity=".9"/><circle cx="32" cy="32" r="6" fill="#6e58cb"/><ellipse cx="32" cy="32" rx="24" ry="10" fill="none" stroke="#fff" stroke-opacity=".82" stroke-width="2" transform="rotate(-24 32 32)"/><circle cx="50" cy="23" r="3" fill="#bff4ff"/></svg>`
const ASSISTANT_CORE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="7" y1="5" x2="57" y2="59"><stop stop-color="#bff8ea"/><stop offset="1" stop-color="#158477"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#c)"/><rect x="15" y="16" width="34" height="30" rx="11" fill="#f5fffd"/><circle cx="26" cy="30" r="3" fill="#176d68"/><circle cx="38" cy="30" r="3" fill="#176d68"/><path d="M25 38c5 3 9 3 14 0" fill="none" stroke="#176d68" stroke-width="2" stroke-linecap="round"/><path d="M32 10v6M27 10h10" stroke="#eafffb" stroke-width="2" stroke-linecap="round"/></svg>`

export const USER_PRESETS: readonly AvatarPreset[] = [
  { id: 'warm', src: svgDataUrl(USER_WARM) },
  { id: 'blue', src: svgDataUrl(USER_BLUE) },
  { id: 'dark', src: svgDataUrl(USER_DARK) },
]

export const ASSISTANT_PRESETS: readonly AvatarPreset[] = [
  { id: 'whale', src: svgDataUrl(ASSISTANT_WHALE) },
  { id: 'orbit', src: svgDataUrl(ASSISTANT_ORBIT) },
  { id: 'core', src: svgDataUrl(ASSISTANT_CORE) },
]

export const USER_AVATAR = avatarCssUrl(USER_PRESETS[0]!.src)
export const ASSISTANT_AVATAR = avatarCssUrl(ASSISTANT_PRESETS[0]!.src)
