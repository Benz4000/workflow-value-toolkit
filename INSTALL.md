# Get started with Benz's Workflow Value Toolkit

Add the toolkit to Codex, then try it on a task you already have. The download is free; your usual Codex usage charges still apply.

**You'll need a Codex app or CLI that supports local plugin marketplaces.** A regular ChatGPT chat alone cannot install this package. You don't need to write code, but setup currently includes two terminal commands.

## 1. Download and unpack

Go to the [download page](https://github.com/Benz4000/workflow-value-toolkit/releases/latest) and choose **`workflow-value-toolkit-1.0.0.zip`** under **Assets**.

Unzip it into a folder you plan to keep. Open the folder named **`workflow-value-toolkit-1.0.0`**. You should see `INSTALL.md` and a `workflow-value-toolkit` folder inside it.

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

Codex should recommend an AI model, how much thinking the task needs, and a speed option. It should explain the choice and be clear about whether any setting actually changed.

You can also find **workflow-check** under **Workflow Value Toolkit** in the skill picker. If you already have standalone copies of these skills, installation won't remove them; choose the copy you intend to use.

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
git clone https://github.com/Benz4000/workflow-value-toolkit.git
cd workflow-value-toolkit
codex plugin marketplace add .
codex plugin add workflow-value-toolkit@workflow-value-local
```

Other apps that support agent skills may import the eight folders from `workflow-value-toolkit/skills`. Follow that app's own instructions; compatibility outside Codex has not been verified.

</details>

[Back to the toolkit](README.md) · [Detailed usage guide](workflow-value-toolkit/README.md) · [Official skill documentation](https://learn.chatgpt.com/docs/build-skills)
