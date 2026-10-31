# Install Workflow Value Toolkit for the user

This guide is for Codex after a user sends the setup request. The web page only prepares that request; opening it does not install anything or authorize execution on its own.

## Scope

Install the eight-skill `workflow-value-toolkit` plugin from the public repository `https://github.com/Benz4000/workflow-value-toolkit`, using the published `v1.0.0` package. Use the user's normal local Codex account and supported plugin controls. Do not run the setup inside a disposable environment unless the user specifically requests a test.

Preserve existing skills, plugins, model settings, and startup instructions. Do not edit `AGENTS.md`, replace standalone skills, activate `workflow-direction-check`, install unrelated software, or change approval/security settings. Do not run a workflow evaluation as part of installation. Follow any approval required by the host.

## Supported installation

1. Locate the user's installed Codex CLI or an equivalent supported plugin-management control. Inspect its help if the commands below are unfamiliar or unsupported. If the CLI is bundled with the desktop app but not on PATH, use its verified executable path. Do not guess executable paths or install a CLI silently.
2. Inspect the current plugin and marketplace list. Avoid duplicates. If this plugin is already installed and enabled from this repository, verify it and report that it is ready.
3. Check for an existing marketplace named `workflow-value-local`. If that name belongs to a different source, stop and explain the conflict instead of replacing it. If the same toolkit is already registered from an older local folder, preserve that source and verify what is installed before proposing a source change.
4. For a new installation, add the repository at the published version, then install its plugin:

```sh
codex plugin marketplace add Benz4000/workflow-value-toolkit --ref v1.0.0 --json
codex plugin add workflow-value-toolkit@workflow-value-local --json
```

Use the exact return values to determine success. Do not claim the install worked because a command was attempted. The first command tracks the Git repository for the user; it removes the need to download, unzip, or manually keep a folder.

5. Verify the result using the supported listing command:

```sh
codex plugin list --json
```

Confirm `workflow-value-toolkit@workflow-value-local` is installed and enabled. Where the host exposes the installed path, check that it contains all eight skill directories. The optional direction check must retain `allow_implicit_invocation: false`.

6. Tell the user the result in plain English. On success, ask them to start a new chat and try:

```text
$workflow-check
Help me choose sensible AI settings for my next task. Explain your choice in plain English.
```

If the short command is not recognized, point to **Workflow Value Toolkit** in the skill picker.

## If setup cannot finish

Explain the specific missing capability or error and the smallest next step. Some clients, remote environments, or managed accounts may not support this install path. Keep completed progress, avoid repeated blind retries, and do not create a different kind of installation without explaining the change. Use [the manual guide](INSTALL.md) as the fallback.

Official references: [plugin commands](https://learn.chatgpt.com/docs/developer-commands), [Git marketplace sources](https://developers.openai.com/plugins/build/plugins), [links that open a setup message](https://learn.chatgpt.com/docs/app/commands).
