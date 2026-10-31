# Get started with Benz's Workflow Value Toolkit

Add the toolkit to Codex, then try it on a task you already have. The download is free; your usual Codex usage charges still apply.

Choose [guided Codex setup](#easiest-let-codex-set-it-up), [manual installation](#manual-installation), or [compatibility and imports for other apps](COMPATIBILITY.md).

## Easiest: let Codex set it up

**[Set up in Codex →](https://benz4000.github.io/workflow-value-toolkit/)**

1. Click **Set up in Codex** on that page. If your browser asks whether to open Codex, choose **Open**.
2. Codex opens with the setup message ready. Press **Send** and approve setup if your app asks.
3. Once Codex confirms installation, start a new chat and try `$workflow-check`.

On supported local installations, Codex handles the setup commands. You don't need to download a ZIP, unpack folders, or type commands into a terminal.

This is a guided setup, not a silent installation. Opening the page or clicking its button does not install anything by itself. You need the Codex desktop app and support for local plugins. A regular ChatGPT web chat alone cannot install the package.

### If the button doesn't open Codex

Use **Copy setup message** on the setup page, paste it into a local Codex chat, and press **Send**. If the browser blocks clipboard access, the message is shown on the page so you can select and copy it yourself.

If the guided setup has trouble but your app supports local plugins, try the manual instructions below. If Codex reports that local plugin installation isn't supported, [ask for help](https://github.com/Benz4000/workflow-value-toolkit/issues). Managed accounts may require help from an administrator.

## Manual installation

Prefer the terminal? With a Codex CLI that supports plugins, install the published version directly:

```sh
codex plugin marketplace add Benz4000/workflow-value-toolkit --ref v1.0.1 --json
codex plugin add workflow-value-toolkit@workflow-value-local --json
codex plugin list --json
```

The final command lets you verify that `workflow-value-toolkit@workflow-value-local` is installed and enabled. Start a new chat after installation. If that marketplace name already points to a different source, resolve the conflict before adding it; don't replace an existing source blindly.

You can also use the full ZIP or a Git checkout below. These are Codex commands; for Claude Code, Cursor, GitHub Copilot, or Gemini CLI, use the [manual skill import guide](COMPATIBILITY.md).

## Updating an existing installation

Already have the toolkit? Paste this into a local Codex chat:

```text
Update Workflow Value Toolkit from https://github.com/Benz4000/workflow-value-toolkit to v1.0.1. Read INSTALL_FOR_CODEX.md in that repository and inspect my existing installation first. Preserve my other skills and settings, leave the direction check off, and verify the installed version before saying the update is complete.
```

Codex should check your installed version and source before updating. A marketplace refresh alone doesn't move an installation pinned to an older tag. The tested remote update path is below; local-folder and customized installations should keep their existing source.

<details>
<summary><strong>Manual update from an older remote version</strong></summary>

First inspect the current source and installed version:

```sh
codex plugin marketplace list --json
codex plugin list --json
```

Use this sequence only when `workflow-value-local` points to **Benz4000/workflow-value-toolkit on GitHub** and you intend to update it. Record the old source, ref, and any source options before proceeding so you can restore them if needed. Keep local-folder sources and custom copies unchanged.

Run each command separately and stop if it fails:

```sh
codex plugin marketplace remove workflow-value-local --json
codex plugin marketplace add Benz4000/workflow-value-toolkit --ref v1.0.1 --json
codex plugin add workflow-value-toolkit@workflow-value-local --json
codex plugin list --json
```

This replaces only the toolkit's marketplace registration, then installs the new version. The old plugin cache remained intact in our test; don't run `plugin remove` or remove other marketplaces. If adding the new source fails, restore the recorded source/ref with `marketplace add` and verify the old installation before retrying. If restoration fails, keep the cache and report the error instead of deleting anything.

Verify that the installed plugin is **enabled at version 1.0.1**, then start a new chat. A marketplace listing alone does not prove the installed plugin was updated.

</details>

For a standalone skill-folder installation, compare and update the existing `workflow-check` folder and its supporting files from v1.0.1, preserving any custom edits. Restart or open a new chat as your app requires.

<details>
<summary><strong>Manual ZIP install: download, extract, and run two commands</strong></summary>

This alternative requires a Codex CLI with local plugin marketplace support. You don't need to write code, but you will paste two commands into a terminal.

## 1. Download and unpack

Go to the [download page](https://github.com/Benz4000/workflow-value-toolkit/releases/latest) and choose **`workflow-value-toolkit-1.0.1.zip`** under **Assets**.

Unzip it into a folder you plan to keep. Open the folder named **`workflow-value-toolkit-1.0.1`**. You should see `INSTALL.md` and a `workflow-value-toolkit` folder inside it.

Keep all the extracted files, including folders whose names start with a dot. Those contain the information Codex needs to find the toolkit. Choose the full ZIP above; the file ending in `-plugin.zip` is for other import methods.

## 2. Add it to Codex

Open a terminal in the folder containing `INSTALL.md`. A terminal is the app where you can paste commands. On Windows, you can right-click an empty area in the folder and choose **Open in Terminal** if that option is available.

Paste the first line, press Enter, then do the same with the second:

```sh
codex plugin marketplace add .
codex plugin add workflow-value-toolkit@workflow-value-local
```

The first command tells Codex where the toolkit is. The second installs it.

After the first command, you can also finish in Codex's **Plugins Directory**: choose the **Workflow Value Toolkit** source and install **Workflow Value Toolkit**. Restart Codex if the new source does not appear.

Keep the extracted folder where it is so Codex can find it for later refreshes. **Start a new chat after installation.**

These commands were checked against Codex CLI help on October 31, 2026. If `codex` is not recognized, or `plugin` is not a supported command, the required command-line tool is not available in that terminal or your client does not support this install method. See the [official plugin guide](https://developers.openai.com/plugins/build/plugins) or [ask for help](https://github.com/Benz4000/workflow-value-toolkit/issues).

## 3. Try your first check

Paste this into the new Codex chat:

```text
$workflow-check
I'm writing a short email to a customer.
Recommend a sensible AI setup. Keep costs down while making it clear and polished.
Explain your choice in plain English.
```

Codex should recommend an AI model, how much thinking the task needs, and a speed option. When a change is suggested, v1.0.1 offers **Apply suggested settings** or **Keep current settings** using clickable choices where supported. It explains any controls you need to change manually and confirms only settings it can verify.

You can also find **workflow-check** under **Workflow Value Toolkit** in the skill picker. If you already have standalone copies of these skills, installation won't remove them; choose the copy you intend to use.

</details>

## Make it suit you

The default priority is **cost, then quality, then speed**. Tell Codex when something else matters more. The six shortcuts in the [main guide](README.md#eight-tools-one-sensible-starting-point) let you choose a specific order.

For an important final review, try:

```text
$workflow-quality-cost-speed
Quality comes first for this task. Help me choose a setup for a careful review.
```

To go back to the default:

```text
$workflow-check reset
```

The optional change-of-plan check starts off. To enable it for the current chat:

```text
$workflow-direction-check on
```

Use `off` to stop it, `once` for a single check, and `status` to see its remembered setting. It works during normal chat turns and does nothing while the chat is idle.

## What installation changes

Installation makes the eight skills available in Codex. It doesn't rewrite your global settings or startup instructions, and it doesn't enable the change-of-plan check.

Codex may use the main `workflow-check` skill when it is relevant without you naming it each time. The six priority shortcuts and change-of-plan check require you to invoke them. Turning the change-of-plan check off doesn't turn off the main check.

The toolkit has no separate login or API-key setup. It can only recommend options supported by your app and account.

<details>
<summary><strong>Optional: request a check at the start of new tasks</strong></summary>

This is an advanced, optional step. Add the text below to a project's `AGENTS.md`, or your global Codex guidance if you want it to apply everywhere:

> At the beginning of each substantive new task, use the workflow-check skill from Workflow Value Toolkit for a lightweight model, reasoning-effort, and speed check. Default to cost, quality, speed and the best-value point before diminishing returns while preserving all required quality and explicit constraints. Reuse current evidence. Manual priority skills override the order for the current task. Skip greetings and trivial continuations. Keep recommended settings distinct from verified active settings. Do not activate workflow-direction-check unless the user explicitly requests it for the current chat.

Adding this instruction does not activate the change-of-plan check.

</details>

<details>
<summary><strong>Alternative: install from the Git repository</strong></summary>

If you already use Git:

```sh
git clone --branch v1.0.1 --depth 1 https://github.com/Benz4000/workflow-value-toolkit.git
cd workflow-value-toolkit
codex plugin marketplace add .
codex plugin add workflow-value-toolkit@workflow-value-local
```

For Claude Code, Cursor, GitHub Copilot, and Gemini CLI, see the [compatibility and manual skill import guide](COMPATIBILITY.md). Their skill-file support is documented, but this toolkit has not been tested in those apps.

</details>

[Back to the toolkit](README.md) · [Detailed usage guide](workflow-value-toolkit/README.md) · [Official skill documentation](https://learn.chatgpt.com/docs/build-skills)

The setup button uses the [documented Codex link format](https://learn.chatgpt.com/docs/app/commands) to prepare a message. On October 31, 2026, isolated Windows profiles passed a fresh v1.0.1 installation from a local repository and a remote update from v1.0.0 to the published v1.0.1 tag. The updated plugin was installed and enabled with all eight skills; the direction check retained explicit-only activation. Live interactive setting changes have not been tested.
