# DSH 聊天头像（custom）

[English](README.md) | 中文

给 DeepSeek Harness（DSH）原生对话界面增加稳定的身份层：助手消息左侧显示头像，用户消息右侧显示头像。插件不会替换 DSH 原有的消息气泡、Markdown、工具卡片、代码块或消息操作。

头像设置是一个独立的一级设置页，分别提供用户头像和助手头像选择器，各有三张内置头像，并支持即时预览、恢复默认、上传本机自定义图片，以及统一的 24-72 px 尺寸调节。工具行和助手操作行会与助手正文保持同一左边线，聊天区留白跟随所选头像尺寸。

已在 DSH Desktop 0.2.1-rc.2 上测试。

## 安装

这是纯浏览器插件，不保存 Host 状态，也不访问网络。`lib/` 已预先构建并提交，不需要再构建。

1. 把仓库克隆到一个固定位置：

   ```sh
   git clone https://github.com/dkqfly/dsh-chat-avatars-custom.git
   ```

2. 在 DSH profile 的 `package.json`（桌面版是 `~/.dsh/profiles/desktop/package.json`）里加上依赖和 bundle：

   ```json
   {
     "dependencies": {
       "@linxin666/dsh-client-ui-chat-avatars-custom": "link:/克隆目录的绝对路径/dsh-chat-avatars-custom"
     },
     "dsh": {
       "profile": {
         "bundles": ["@linxin666/dsh-client-ui-chat-avatars-custom"]
       }
     }
   }
   ```

   保留原有的依赖和 bundles，只追加这两项。

3. 在 profile 目录运行 `pnpm install`，然后重启 DSH。

## 配置

打开设置，进入「头像设置」。选择头像或拖动尺寸滑杆后会立即生效并保存在当前浏览器。尺寸同时作用于双方头像，可在 24-72 px 之间调节，默认 72 px。自定义图片支持不超过 1.5 MB 的 PNG、JPEG、WebP、GIF 或 AVIF，图片只写入浏览器本地存储。

## 构建

`build/tsdown.client.ts` 和 `build/web-platform.ts` 是从 dsh-web-ui 复制来的客户端打包预设。装好依赖后运行 `pnpm build` 即可重新生成 `lib/`。

## 已知限制

头像选择和尺寸只保存在当前浏览器，不会跨浏览器或设备同步。清除站点数据后会恢复默认头像和默认尺寸。

## 来源

基于 [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) 中的 `dsh-chat-avatars` 插件，遵循 Apache-2.0 许可。本仓库的改动：独立的一级设置页、默认尺寸 72 px，以及不再给已收起（`hidden`）的对话行保留头像高度——此前长时间工具调用后会因此出现大段空白。
