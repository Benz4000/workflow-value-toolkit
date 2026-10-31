# Install Workflow Value Toolkit 1.0.0

This archive contains eight instruction-based skills and a local Codex plugin catalog. Extract the whole archive to a permanent folder. Keep its `.agents` and `.codex-plugin` directories; archive tools may display them as hidden.

## Install with Codex

Open a terminal in the extracted `workflow-value-toolkit-1.0.0` folder, the folder containing this file, and run:

```sh
codex plugin marketplace add .
codex plugin add workflow-value-toolkit@workflow-value-local
```

These commands were checked against Codex CLI help on October 31, 2026. They register the extracted local catalog and install the plugin. Keep the extracted folder available for later refreshes.

Alternatively, after the first command, open the desktop Plugins Directory, choose the **Workflow Value Toolkit** source, and install **Workflow Value Toolkit** there. Restart the app if the new source does not appear. Start a new chat after installation.

The package requires a Codex client supporting local plugin marketplaces. It has no MCP server, login, API key, Python package, background process, or executable lifecycle hook. Other skill-capable hosts can import the eight directories from `workflow-value-toolkit/skills` if they support that format; follow that host's activation controls.

## Activate only what you want

- Use `$workflow-check` for a selection check.
- Use one of the six priority skills listed in the [usage guide](workflow-value-toolkit/README.md).
- The eighth skill is explicit-only. Use `$workflow-direction-check on` to enable conversational direction checks for that chat. Use `off` to stop, `once` for a single check, or `status` to inspect the remembered preference.

The shared `workflow-check` skill allows implicit selection when relevant after installation, even without the optional startup rule. The six priority presets and the direction detector require explicit invocation. Turning the direction detector `off` stops that detector only; it does not disable independent selection of `workflow-check` when the task or priorities warrant it.

In hosts that namespace plugin skills, select the matching skill under **Workflow Value Toolkit** in the skill picker. Existing standalone copies are not removed by plugin installation; choose the intended copy if both appear.

## Optional startup rule

The plugin does not edit global `AGENTS.md` or install the direction detector as a startup rule. For automatic checks at the beginning of substantive tasks, add the following text to the project's `AGENTS.md`, or to the user's global Codex guidance if it should apply everywhere:

> At the beginning of each substantive new task, use the workflow-check skill from Workflow Value Toolkit for a lightweight model, reasoning-effort, and speed check. Default to cost, quality, speed and the best-value point before diminishing returns while preserving all required quality and explicit constraints. Reuse current evidence. Manual priority skills override the order for the current task. Skip greetings and trivial continuations. Keep recommended settings distinct from verified active settings. Do not activate workflow-direction-check unless the user explicitly requests it for the current chat.

This startup rule is optional. Adding it does not activate the direction detector.

## Check the installation

In a new chat invoke `$workflow-check` with a small task. Confirm that the response states a model/effort/speed recommendation and does not claim an unsupported control was changed. The six priority presets and `workflow-direction-check` should also appear in the skill picker. Plugin installation does not guarantee a particular model, reasoning effort, or speed tier is available on the account.

Sources: [OpenAI plugin packaging](https://developers.openai.com/plugins/build/plugins), [skill discovery](https://learn.chatgpt.com/docs/build-skills).
