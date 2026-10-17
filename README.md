# DSH Chat Avatars (custom)

English | [中文](README.zh.md)

Adds a persistent visual identity layer to the native DeepSeek Harness (DSH) conversation view: assistant messages receive a portrait on the left and user messages receive a portrait on the right. The plugin does not replace DSH message bubbles, Markdown, tool cards, code blocks, or message actions.

Avatar settings live on their own first-level settings page. It provides separate user and assistant selectors with three embedded portraits each, instant preview, restore-default controls, local custom image uploads, and a shared 24-72 px size control. Assistant-owned tool and action rows keep the same left content edge, and the transcript spacing follows the selected portrait size.

Tested with DSH Desktop 0.2.1-rc.2.

## Install

This is a browser-only plugin with no host-side state or network access. `lib/` is prebuilt and committed, so no build step is needed.

1. Clone this repository somewhere stable:

   ```sh
   git clone https://github.com/dkqfly/dsh-chat-avatars-custom.git
   ```

2. In your DSH profile `package.json` (the desktop app uses `~/.dsh/profiles/desktop/package.json`), add the dependency and the bundle:

   ```json
   {
     "dependencies": {
       "@linxin666/dsh-client-ui-chat-avatars-custom": "link:/absolute/path/to/dsh-chat-avatars-custom"
     },
     "dsh": {
       "profile": {
         "bundles": ["@linxin666/dsh-client-ui-chat-avatars-custom"]
       }
     }
   }
   ```

   Keep your existing dependencies and bundles; only append these entries.

3. Run `pnpm install` in the profile directory, then restart DSH.

## Config

Open Settings and choose Avatars. Selecting a portrait or moving the size slider applies immediately and persists in this browser. The size control adjusts both portraits from 24 to 72 px and defaults to 72 px. Custom PNG, JPEG, WebP, GIF, or AVIF images up to 1.5 MB are stored only in browser local storage.

## Build

`build/tsdown.client.ts` and `build/web-platform.ts` are the client bundle preset copied from dsh-web-ui. With dependencies installed, `pnpm build` regenerates `lib/`.

## Known limitations

Avatar choices and size are browser-local and do not synchronize between browsers or devices. Clearing site data restores both default portraits and the default size.

## Credits

Based on the `dsh-chat-avatars` plugin from [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui), licensed under Apache-2.0. Changes in this fork: a standalone first-level settings page, a 72 px default size, and no reserved avatar height on folded (`hidden`) transcript rows, which previously left large blank gaps after long tool-call turns.
