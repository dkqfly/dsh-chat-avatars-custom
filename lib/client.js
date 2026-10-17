window.__ModuleLoader__.load({
	id: "@linxin666/dsh-client-ui-chat-avatars-custom",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/avatars.ts
		function svgDataUrl(svg) {
			return `data:image/svg+xml,${encodeURIComponent(svg)}`;
		}
		/** Convert an image source into a safe CSS background-image value. */
		function avatarCssUrl(src) {
			return `url(${JSON.stringify(src)})`;
		}
		const USER_WARM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="8" y1="6" x2="56" y2="58"><stop stop-color="#fff1d6"/><stop offset="1" stop-color="#eaa76f"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#b)"/><circle cx="32" cy="25" r="12" fill="#f6d3b5"/><path d="M19 26c0-10 5-16 13-16s14 6 14 16c-3-2-5-5-6-8-5 5-11 7-21 8Z" fill="#3f3433"/><path d="M12 61c2-15 9-23 20-23s19 8 21 23H12Z" fill="#343a49"/><path d="M28 31c2 2 6 2 8 0" fill="none" stroke="#b16f64" stroke-width="1.5" stroke-linecap="round"/></svg>`;
		const USER_BLUE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="8" y1="4" x2="57" y2="61"><stop stop-color="#d7f2ff"/><stop offset="1" stop-color="#6f8fe8"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#a)"/><circle cx="32" cy="25" r="12" fill="#efd0b6"/><path d="M19 27c0-12 6-18 14-18 9 0 14 7 13 19-4-2-7-6-8-10-4 5-10 8-19 9Z" fill="#202a46"/><path d="M10 64c2-17 10-25 22-25 13 0 21 8 23 25Z" fill="#25385f"/><path d="M26 31c4 3 8 3 12 0" fill="none" stroke="#b36f69" stroke-width="1.5" stroke-linecap="round"/></svg>`;
		const USER_DARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="d" x1="7" y1="5" x2="56" y2="58"><stop stop-color="#5d6478"/><stop offset="1" stop-color="#171923"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#d)"/><circle cx="32" cy="24" r="11" fill="#d8aa8b"/><path d="M20 24c0-10 5-16 12-16 9 0 14 7 13 18-6-1-11-5-14-10-3 5-7 7-11 8Z" fill="#12141b"/><path d="M11 64c2-17 9-26 21-26s20 9 22 26Z" fill="#0f1118"/></svg>`;
		const ASSISTANT_WHALE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="o" x1="9" y1="7" x2="56" y2="59"><stop stop-color="#baf1ff"/><stop offset=".52" stop-color="#4389f2"/><stop offset="1" stop-color="#2445a8"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#o)"/><path d="M14 37c8-13 17-19 29-18 4 0 8 1 11 3-4 1-7 4-9 7 5 0 9 2 12 5-7 6-15 9-25 8-7 0-13-2-18-5Z" fill="#fff" fill-opacity=".94"/><path d="M19 35c7 2 13 1 18-2-2 5-6 9-12 12" fill="none" stroke="#2465c7" stroke-width="2.5" stroke-linecap="round"/><circle cx="43" cy="25" r="2" fill="#173579"/></svg>`;
		const ASSISTANT_ORBIT = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><radialGradient id="n"><stop stop-color="#d7c8ff"/><stop offset=".55" stop-color="#755bd5"/><stop offset="1" stop-color="#252459"/></radialGradient></defs><rect width="64" height="64" rx="32" fill="url(#n)"/><circle cx="32" cy="32" r="12" fill="#fff" fill-opacity=".9"/><circle cx="32" cy="32" r="6" fill="#6e58cb"/><ellipse cx="32" cy="32" rx="24" ry="10" fill="none" stroke="#fff" stroke-opacity=".82" stroke-width="2" transform="rotate(-24 32 32)"/><circle cx="50" cy="23" r="3" fill="#bff4ff"/></svg>`;
		const ASSISTANT_CORE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="7" y1="5" x2="57" y2="59"><stop stop-color="#bff8ea"/><stop offset="1" stop-color="#158477"/></linearGradient></defs><rect width="64" height="64" rx="32" fill="url(#c)"/><rect x="15" y="16" width="34" height="30" rx="11" fill="#f5fffd"/><circle cx="26" cy="30" r="3" fill="#176d68"/><circle cx="38" cy="30" r="3" fill="#176d68"/><path d="M25 38c5 3 9 3 14 0" fill="none" stroke="#176d68" stroke-width="2" stroke-linecap="round"/><path d="M32 10v6M27 10h10" stroke="#eafffb" stroke-width="2" stroke-linecap="round"/></svg>`;
		const USER_PRESETS = [
			{
				id: "warm",
				src: svgDataUrl(USER_WARM)
			},
			{
				id: "blue",
				src: svgDataUrl(USER_BLUE)
			},
			{
				id: "dark",
				src: svgDataUrl(USER_DARK)
			}
		];
		const ASSISTANT_PRESETS = [
			{
				id: "whale",
				src: svgDataUrl(ASSISTANT_WHALE)
			},
			{
				id: "orbit",
				src: svgDataUrl(ASSISTANT_ORBIT)
			},
			{
				id: "core",
				src: svgDataUrl(ASSISTANT_CORE)
			}
		];
		avatarCssUrl(USER_PRESETS[0].src);
		avatarCssUrl(ASSISTANT_PRESETS[0].src);
		//#endregion
		//#region src/client/avatar-store.ts
		const AVATAR_CHANGE_EVENT = "dsh-chat-avatars-change";
		const KEYS = {
			user: "dsh.chatAvatars.user.v1",
			assistant: "dsh.chatAvatars.assistant.v1"
		};
		const SIZE_KEY = "dsh.chatAvatars.size.v1";
		const CUSTOM_IMAGE = /^data:image\/(?:png|jpeg|webp|gif|avif);base64,/i;
		function presetsFor(role) {
			return role === "user" ? USER_PRESETS : ASSISTANT_PRESETS;
		}
		function defaultAvatarSource(role) {
			return presetsFor(role)[0].src;
		}
		function validSource(role, value) {
			return presetsFor(role).some((preset) => preset.src === value) || value.length <= 21e5 && CUSTOM_IMAGE.test(value);
		}
		function loadAvatarSource(role) {
			try {
				const value = window.localStorage.getItem(KEYS[role]);
				return value !== null && validSource(role, value) ? value : defaultAvatarSource(role);
			} catch {
				return defaultAvatarSource(role);
			}
		}
		function saveAvatarSource(role, source) {
			if (!validSource(role, source)) throw new Error("invalid-avatar-source");
			try {
				if (source === defaultAvatarSource(role)) window.localStorage.removeItem(KEYS[role]);
				else window.localStorage.setItem(KEYS[role], source);
			} catch {
				throw new Error("avatar-storage-failed");
			}
			window.dispatchEvent(new Event(AVATAR_CHANGE_EVENT));
		}
		function loadAvatarSize() {
			try {
				const value = Number(window.localStorage.getItem(SIZE_KEY));
				return Number.isInteger(value) && value >= 24 && value <= 72 ? value : 72;
			} catch {
				return 72;
			}
		}
		function saveAvatarSize(size) {
			if (!Number.isInteger(size) || size < 24 || size > 72) throw new Error("invalid-avatar-size");
			try {
				if (size === 72) window.localStorage.removeItem(SIZE_KEY);
				else window.localStorage.setItem(SIZE_KEY, String(size));
			} catch {
				throw new Error("avatar-storage-failed");
			}
			window.dispatchEvent(new Event(AVATAR_CHANGE_EVENT));
		}
		function readAvatarFile(file) {
			if (![
				"image/png",
				"image/jpeg",
				"image/webp",
				"image/gif",
				"image/avif"
			].includes(file.type)) return Promise.reject(/* @__PURE__ */ new Error("avatar-file-type"));
			if (file.size > 15e5) return Promise.reject(/* @__PURE__ */ new Error("avatar-file-size"));
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onerror = () => reject(/* @__PURE__ */ new Error("avatar-file-read"));
				reader.onload = () => typeof reader.result === "string" ? resolve(reader.result) : reject(/* @__PURE__ */ new Error("avatar-file-read"));
				reader.readAsDataURL(file);
			});
		}
		//#endregion
		//#region \0dsh-css:src/client/avatar-settings.module.css.mjs
		const css$1 = ".aOJMgq_page{flex-direction:column;gap:0;display:flex}.aOJMgq_pageHead{flex-direction:column;gap:4px;display:flex}.aOJMgq_pageTitle{color:var(--dsw-alias-label-primary);margin:0;font-size:16px;font-weight:600;line-height:1.4}.aOJMgq_pageDescription{color:var(--dsw-alias-label-tertiary);margin:0;font-size:12px;line-height:1.5}.aOJMgq_pageBody{border-top:1px solid var(--dsw-alias-border-l2);margin-top:16px}.aOJMgq_sizeSection,.aOJMgq_roleSection{padding:16px 0}.aOJMgq_sizeSection+.aOJMgq_roleSection,.aOJMgq_roleSection+.aOJMgq_roleSection{border-top:1px solid var(--dsw-alias-border-l2)}.aOJMgq_sizeHead,.aOJMgq_roleHead,.aOJMgq_uploadRow{align-items:center;gap:12px;display:flex}.aOJMgq_sizeHead>div,.aOJMgq_roleHead>div{flex:1}.aOJMgq_roleTitle{color:var(--dsw-alias-label-primary);margin:0;font-size:13px;font-weight:600}.aOJMgq_roleHint{color:var(--dsw-alias-label-tertiary);margin:2px 0 0;font-size:12px;line-height:1.5}.aOJMgq_reset,.aOJMgq_uploadButton{border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;background:0 0;border-radius:8px;font-size:12px;line-height:18px}.aOJMgq_reset{padding:4px 10px}.aOJMgq_reset:hover:not(:disabled),.aOJMgq_uploadButton:hover{border-color:var(--dsw-alias-label-dimmed);color:var(--dsw-alias-label-primary)}.aOJMgq_reset:disabled{cursor:default;opacity:.45}.aOJMgq_reset:focus-visible,.aOJMgq_choice:focus-visible,.aOJMgq_uploadButton:focus-within,.aOJMgq_sizeSlider:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}.aOJMgq_sizeValue{min-width:48px;color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums;text-align:right;font-size:13px}.aOJMgq_sizeSlider{width:100%;accent-color:var(--dsw-alias-brand-primary);cursor:pointer;margin:16px 0 0;display:block}.aOJMgq_sizeRange{color:var(--dsw-alias-label-tertiary);justify-content:space-between;margin-top:2px;font-size:10px;line-height:1.4;display:flex}.aOJMgq_choices{flex-wrap:wrap;gap:10px;margin-top:12px;display:flex}.aOJMgq_choice{cursor:pointer;background:0 0;border:2px solid #0000;border-radius:50%;width:64px;height:64px;padding:3px;position:relative}.aOJMgq_choice[data-selected]{border-color:var(--dsw-alias-brand-primary)}.aOJMgq_portrait{object-fit:cover;border-radius:50%;width:54px;height:54px;display:block}.aOJMgq_selected{background:var(--dsw-alias-brand-primary);max-width:72px;color:var(--dsw-alias-bg-base);white-space:nowrap;text-overflow:ellipsis;border-radius:999px;padding:1px 5px;font-size:9px;line-height:13px;position:absolute;bottom:-7px;left:50%;overflow:hidden;transform:translate(-50%)}.aOJMgq_uploadRow{margin-top:16px}.aOJMgq_uploadButton{flex:none;padding:5px 12px;position:relative}.aOJMgq_fileInput{opacity:0;pointer-events:none;width:1px;height:1px;position:absolute}.aOJMgq_fileHint{min-width:0;color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:1.5}.aOJMgq_error{color:var(--dsw-alias-label-error);margin:8px 0 0;font-size:12px;line-height:1.5}@media (width<=640px){.aOJMgq_sizeHead{flex-wrap:wrap;align-items:flex-start}.aOJMgq_sizeHead>div{flex-basis:100%}.aOJMgq_uploadRow{flex-direction:column;align-items:flex-start}}";
		const tagId$1 = "@linxin666/dsh-client-ui-chat-avatars-custom/avatar-settings.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId$1) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@linxin666/dsh-client-ui-chat-avatars-custom";
			tag.dataset.pluginCss = tagId$1;
			tag.textContent = css$1;
			document.head.appendChild(tag);
		}
		var avatar_settings_module_css_default = {
			"choice": "aOJMgq_choice",
			"choices": "aOJMgq_choices",
			"error": "aOJMgq_error",
			"fileHint": "aOJMgq_fileHint",
			"fileInput": "aOJMgq_fileInput",
			"page": "aOJMgq_page",
			"pageBody": "aOJMgq_pageBody",
			"pageDescription": "aOJMgq_pageDescription",
			"pageHead": "aOJMgq_pageHead",
			"pageTitle": "aOJMgq_pageTitle",
			"portrait": "aOJMgq_portrait",
			"reset": "aOJMgq_reset",
			"roleHead": "aOJMgq_roleHead",
			"roleHint": "aOJMgq_roleHint",
			"roleSection": "aOJMgq_roleSection",
			"roleTitle": "aOJMgq_roleTitle",
			"selected": "aOJMgq_selected",
			"sizeHead": "aOJMgq_sizeHead",
			"sizeRange": "aOJMgq_sizeRange",
			"sizeSection": "aOJMgq_sizeSection",
			"sizeSlider": "aOJMgq_sizeSlider",
			"sizeValue": "aOJMgq_sizeValue",
			"uploadButton": "aOJMgq_uploadButton",
			"uploadRow": "aOJMgq_uploadRow"
		};
		//#endregion
		//#region src/client/AvatarSettingsCard.tsx
		function errorKey(error) {
			if (error instanceof Error && error.message === "avatar-file-type") return "settings.errorType";
			if (error instanceof Error && error.message === "avatar-file-size") return "settings.errorSize";
			if (error instanceof Error && error.message === "avatar-storage-failed") return "settings.errorStorage";
			return "settings.errorRead";
		}
		function RolePicker(props) {
			const { role, label, presets, source, onChange, t } = props;
			const [error, setError] = (0, react.useState)();
			const isCustom = !presets.some((preset) => preset.src === source);
			const select = (next) => {
				try {
					saveAvatarSource(role, next);
					onChange(next);
					setError(void 0);
				} catch (cause) {
					setError(errorKey(cause));
				}
			};
			const upload = async (event) => {
				const file = event.target.files?.[0];
				event.target.value = "";
				if (file === void 0) return;
				try {
					select(await readAvatarFile(file));
				} catch (cause) {
					setError(errorKey(cause));
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: avatar_settings_module_css_default.roleSection,
				"aria-labelledby": `chat-avatar-${role}`,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: avatar_settings_module_css_default.roleHead,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
							className: avatar_settings_module_css_default.roleTitle,
							id: `chat-avatar-${role}`,
							children: label
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
							className: avatar_settings_module_css_default.roleHint,
							children: t("settings.preset")
						})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
							className: avatar_settings_module_css_default.reset,
							type: "button",
							onClick: () => select(defaultAvatarSource(role)),
							children: t("settings.default")
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: avatar_settings_module_css_default.choices,
						children: [presets.map((preset, index) => {
							const selected = source === preset.src;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
								className: avatar_settings_module_css_default.choice,
								"data-selected": selected ? "" : void 0,
								type: "button",
								"aria-label": `${label} ${index + 1}`,
								"aria-pressed": selected,
								onClick: () => select(preset.src),
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
									className: avatar_settings_module_css_default.portrait,
									src: preset.src,
									alt: ""
								}), selected ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
									className: avatar_settings_module_css_default.selected,
									children: t("settings.selected")
								}) : null]
							}, preset.id);
						}), isCustom ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
							className: avatar_settings_module_css_default.choice,
							"data-selected": "",
							type: "button",
							"aria-pressed": "true",
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
								className: avatar_settings_module_css_default.portrait,
								src: source,
								alt: ""
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: avatar_settings_module_css_default.selected,
								children: t("settings.custom")
							})]
						}) : null]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: avatar_settings_module_css_default.uploadRow,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("label", {
							className: avatar_settings_module_css_default.uploadButton,
							children: [isCustom ? t("settings.replace") : t("settings.upload"), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								className: avatar_settings_module_css_default.fileInput,
								type: "file",
								accept: "image/png,image/jpeg,image/webp,image/gif,image/avif",
								onChange: upload
							})]
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: avatar_settings_module_css_default.fileHint,
							children: t("settings.fileHint")
						})]
					}),
					error !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: avatar_settings_module_css_default.error,
						role: "alert",
						children: t(error)
					}) : null
				]
			});
		}
		/** First-level settings page: avatar size and local uploads get their own column. */
		function AvatarSettingsSection({ t }) {
			const [userSource, setUserSource] = (0, react.useState)(() => loadAvatarSource("user"));
			const [assistantSource, setAssistantSource] = (0, react.useState)(() => loadAvatarSource("assistant"));
			const [size, setSize] = (0, react.useState)(loadAvatarSize);
			const [sizeError, setSizeError] = (0, react.useState)();
			const selectSize = (next) => {
				try {
					saveAvatarSize(next);
					setSize(next);
					setSizeError(void 0);
				} catch (cause) {
					setSizeError(errorKey(cause));
				}
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: avatar_settings_module_css_default.page,
				"aria-labelledby": "chat-avatars-page-title",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: avatar_settings_module_css_default.pageHead,
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", {
						className: avatar_settings_module_css_default.pageTitle,
						id: "chat-avatars-page-title",
						children: t("settings.title")
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
						className: avatar_settings_module_css_default.pageDescription,
						children: t("settings.description")
					})]
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: avatar_settings_module_css_default.pageBody,
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
							className: avatar_settings_module_css_default.sizeSection,
							"aria-labelledby": "chat-avatar-size",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: avatar_settings_module_css_default.sizeHead,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h4", {
											className: avatar_settings_module_css_default.roleTitle,
											id: "chat-avatar-size",
											children: t("settings.size")
										}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: avatar_settings_module_css_default.roleHint,
											children: t("settings.sizeHint")
										})] }),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("output", {
											className: avatar_settings_module_css_default.sizeValue,
											htmlFor: "chat-avatar-size-slider",
											children: [size, " px"]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											className: avatar_settings_module_css_default.reset,
											type: "button",
											disabled: size === 72,
											onClick: () => selectSize(72),
											children: t("settings.default")
										})
									]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									className: avatar_settings_module_css_default.sizeSlider,
									id: "chat-avatar-size-slider",
									type: "range",
									min: 24,
									max: 72,
									step: "1",
									value: size,
									"aria-label": t("settings.size"),
									onChange: (event) => selectSize(Number(event.target.value))
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: avatar_settings_module_css_default.sizeRange,
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [24, " px"] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [72, " px"] })]
								}),
								sizeError !== void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: avatar_settings_module_css_default.error,
									role: "alert",
									children: t(sizeError)
								}) : null
							]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(RolePicker, {
							role: "user",
							label: t("settings.user"),
							presets: USER_PRESETS,
							source: userSource,
							onChange: setUserSource,
							t
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)(RolePicker, {
							role: "assistant",
							label: t("settings.assistant"),
							presets: ASSISTANT_PRESETS,
							source: assistantSource,
							onChange: setAssistantSource,
							t
						})
					]
				})]
			});
		}
		//#endregion
		//#region src/client/locales.ts
		const zh = {
			"nav": "头像设置",
			"settings.title": "聊天头像",
			"settings.description": "切换你和助手在聊天记录中的头像。选择后立即保存并生效。",
			"settings.expand": "展开聊天头像设置",
			"settings.collapse": "收起聊天头像设置",
			"settings.user": "我的头像",
			"settings.assistant": "助手头像",
			"settings.size": "头像大小",
			"settings.sizeHint": "同时调整你和助手在聊天记录中的头像。",
			"settings.preset": "内置头像",
			"settings.custom": "自定义头像",
			"settings.upload": "从本机选择图片",
			"settings.replace": "更换自定义图片",
			"settings.default": "恢复默认",
			"settings.selected": "当前使用",
			"settings.fileHint": "支持 PNG、JPEG、WebP、GIF 或 AVIF，最大 1.5 MB。图片仅保存在此浏览器。",
			"settings.errorType": "请选择 PNG、JPEG、WebP、GIF 或 AVIF 图片。",
			"settings.errorSize": "图片不能超过 1.5 MB。",
			"settings.errorRead": "无法读取这张图片，请换一张重试。",
			"settings.errorStorage": "浏览器存储空间不足，无法保存这张图片。"
		};
		const en = {
			"nav": "Avatars",
			"settings.title": "Chat avatars",
			"settings.description": "Choose the portraits shown for you and the assistant. Changes save and apply immediately.",
			"settings.expand": "Expand chat avatar settings",
			"settings.collapse": "Collapse chat avatar settings",
			"settings.user": "My avatar",
			"settings.assistant": "Assistant avatar",
			"settings.size": "Avatar size",
			"settings.sizeHint": "Adjust the size of both your avatar and the assistant avatar.",
			"settings.preset": "Built-in avatar",
			"settings.custom": "Custom avatar",
			"settings.upload": "Choose an image from this device",
			"settings.replace": "Replace custom image",
			"settings.default": "Restore default",
			"settings.selected": "Currently selected",
			"settings.fileHint": "PNG, JPEG, WebP, GIF or AVIF, up to 1.5 MB. The image stays in this browser.",
			"settings.errorType": "Choose a PNG, JPEG, WebP, GIF or AVIF image.",
			"settings.errorSize": "The image must be no larger than 1.5 MB.",
			"settings.errorRead": "This image could not be read. Try another one.",
			"settings.errorStorage": "There is not enough browser storage to save this image."
		};
		//#endregion
		//#region \0dsh-css:src/client/chat-avatars.module.css.mjs
		const css = "body[data-dsh-chat-avatars] [data-chat-flow-kind]{box-sizing:border-box}body[data-dsh-chat-avatars] [data-chat-flow-kind]:not([data-chat-flow-kind=user]){padding-left:calc(var(--dsh-chat-avatar-size,72px) + 14px)}body[data-dsh-chat-avatars] [data-chat-flow-kind=assistant-step]:not([hidden]),body[data-dsh-chat-avatars] [data-chat-flow-kind=user]:not([hidden]),body[data-dsh-chat-avatars] [data-chat-flow]>[data-pending-steering]:not([hidden]){min-height:var(--dsh-chat-avatar-size,72px);position:relative}body[data-dsh-chat-avatars] [data-chat-flow-kind=assistant-step]:before,body[data-dsh-chat-avatars] [data-chat-flow-kind=user]:after,body[data-dsh-chat-avatars] [data-chat-flow]>[data-pending-steering]:after{width:var(--dsh-chat-avatar-size,72px);height:var(--dsh-chat-avatar-size,72px);border:2px solid color-mix(in srgb, var(--dsw-alias-bg-base,#fff) 88%, transparent);border-radius:var(--dsh-chat-avatar-radius,32%);background-color:var(--dsw-alias-bg-layer-1,#f3f4f6);content:\"\";pointer-events:none;background-position:50%;background-repeat:no-repeat;background-size:cover;position:absolute;top:0;box-shadow:0 2px 8px #0f172a24}body[data-dsh-chat-avatars] [data-chat-flow-kind=assistant-step]:before{background-image:var(--dsh-chat-assistant-avatar);left:0}body[data-dsh-chat-avatars] [data-chat-flow-kind=user]{transform:translateX(var(--dsh-chat-avatar-shift,10px));padding-right:14px}body[data-dsh-chat-avatars] [data-chat-flow-kind=user]:after,body[data-dsh-chat-avatars] [data-chat-flow]>[data-pending-steering]:after{right:calc(-1 * var(--dsh-chat-avatar-size,72px));background-image:var(--dsh-chat-user-avatar)}body[data-dsh-chat-avatars] [data-chat-flow]>[data-pending-steering]{box-sizing:border-box;padding-right:14px}@media (width<=640px){body[data-dsh-chat-avatars] [data-chat-flow-kind]:not([data-chat-flow-kind=user]){padding-left:calc(var(--dsh-chat-avatar-size,72px) + 10px)}body[data-dsh-chat-avatars] [data-chat-flow-kind=user]{transform:none}body[data-dsh-chat-avatars] [data-chat-flow-kind=user],body[data-dsh-chat-avatars] [data-chat-flow]>[data-pending-steering]{padding-right:calc(var(--dsh-chat-avatar-size,72px) + 10px)}}@media (width<=1080px){body[data-dsh-chat-avatars] [data-chat-flow-kind=user],body[data-dsh-chat-avatars] [data-chat-flow]>[data-pending-steering]{padding-right:calc(var(--dsh-chat-avatar-size,72px) + 14px)}body[data-dsh-chat-avatars] [data-chat-flow-kind=user]:after,body[data-dsh-chat-avatars] [data-chat-flow]>[data-pending-steering]:after{right:0}}";
		const tagId = "@linxin666/dsh-client-ui-chat-avatars-custom/chat-avatars.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@linxin666/dsh-client-ui-chat-avatars-custom";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		//#endregion
		//#region src/client/index.ts
		const USER_PROPERTY = "--dsh-chat-user-avatar";
		const ASSISTANT_PROPERTY = "--dsh-chat-assistant-avatar";
		const SIZE_PROPERTY = "--dsh-chat-avatar-size";
		const NS = "chat-avatars";
		const inject = ["slots", "locale"];
		function apply(ctx) {
			const body = document.body, priorUser = body.style.getPropertyValue(USER_PROPERTY), priorAssistant = body.style.getPropertyValue(ASSISTANT_PROPERTY), priorSize = body.style.getPropertyValue(SIZE_PROPERTY), hadMarker = body.dataset.dshChatAvatars !== void 0;
			const sync = () => {
				body.style.setProperty(USER_PROPERTY, avatarCssUrl(loadAvatarSource("user")));
				body.style.setProperty(ASSISTANT_PROPERTY, avatarCssUrl(loadAvatarSource("assistant")));
				body.style.setProperty(SIZE_PROPERTY, `${loadAvatarSize()}px`);
			};
			body.dataset.dshChatAvatars = "";
			sync();
			window.addEventListener(AVATAR_CHANGE_EVENT, sync);
			window.addEventListener("storage", sync);
			ctx.effect(() => () => {
				window.removeEventListener(AVATAR_CHANGE_EVENT, sync);
				window.removeEventListener("storage", sync);
				if (!hadMarker) delete body.dataset.dshChatAvatars;
				body.style.setProperty(USER_PROPERTY, priorUser);
				body.style.setProperty(ASSISTANT_PROPERTY, priorAssistant);
				body.style.setProperty(SIZE_PROPERTY, priorSize);
			}, "ui-chat-avatars: identity layer");
			const locale = ctx.get("locale"), slots = ctx.get("slots");
			if (locale !== void 0) ctx.effect(() => locale.register(NS, {
				zh,
				en
			}), "ui-chat-avatars: dictionaries");
			if (slots !== void 0) ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "chat-avatars",
				order: 110,
				label: () => ctx.locale.bind(NS)("nav"),
				locale: NS,
				inject: () => ({})
			}, AvatarSettingsSection));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map