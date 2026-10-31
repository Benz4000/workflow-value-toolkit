# Compatibility: Codex first, other AI tools by manual adaptation

**Codex is the primary supported experience.** Installation of all eight skills was verified in an isolated Windows Codex profile. The optional direction check stayed off. This is an installation check, not a guarantee of every recommendation's quality.

Claude Code, Cursor, GitHub Copilot in VS Code, and Gemini CLI document support for `SKILL.md` files. The paths below are based on their official documentation, checked October 31, 2026. **This toolkit has not been tested in those apps.** Manual adjustments may be needed.

| App | Status | Installation route |
|---|---|---|
| **OpenAI Codex** | **Primary · installation tested** | [Guided setup](https://benz4000.github.io/workflow-value-toolkit/) or [CLI, ZIP, and Git instructions](INSTALL.md#manual-installation) |
| Claude Code | Manual adaptation · untested | Skill folders in `.claude/skills/` |
| Cursor | Manual adaptation · untested | Skill folders in `.cursor/skills/` |
| GitHub Copilot in VS Code | Manual adaptation · untested | Skill folders in `.github/skills/` |
| Gemini CLI | Main check only suggested · untested | `workflow-check` folder in `.gemini/skills/` |

The Codex setup button, plugin package, and marketplace commands are for Codex. Other apps use the skill folders described below. Importing them does not add models, paid features, or Codex speed controls to another app.

## Before a manual import

Download the [full ZIP](https://github.com/Benz4000/workflow-value-toolkit/releases/download/v1.0.0/workflow-value-toolkit-1.0.0.zip) and extract it, or check out tag `v1.0.0` from this repository. Inside the package, find `workflow-value-toolkit/skills/`.

- Start with the complete `workflow-check` folder, including its `references` directory.
- Preserve existing skill folders; don't overwrite a name collision without reviewing it.
- If you add the six presets or direction check, keep them alongside `workflow-check`. They use relative links to that folder.
- Codex's `agents/openai.yaml` activation policy is not a portable guarantee. Apply the host-specific guidance below before importing optional skills.
- Ask for recommendations using the models, thinking levels, and speed choices actually available in your app. Standard, Fast, and Ultrafast are not universal options.

## Claude Code

Copy the selected complete folders into your project's `.claude/skills/` or your personal `~/.claude/skills/`. Invoke the main check with `/workflow-check`.

For each of the six priority presets and `workflow-direction-check`, add this field inside the existing YAML frontmatter of the **imported copy**:

```yaml
disable-model-invocation: true
```

Keep its existing `name` and `description`. This host control prevents automatic invocation; it replaces reliance on Codex-specific metadata. [Claude Code skill documentation](https://code.claude.com/docs/en/skills).

## Cursor

Copy selected folders into the project's `.cursor/skills/` or personal `~/.cursor/skills/`. In Agent chat, type `/` and choose the skill.

Apply the same `disable-model-invocation: true` frontmatter adjustment above to the seven optional skills. Cursor attaches a manually selected skill to a message; don't assume a priority or direction-check preference survives subsequent messages. Restate it when needed. [Cursor skill documentation](https://cursor.com/docs/skills).

## GitHub Copilot

This guidance is for **GitHub Copilot in VS Code**. Other Copilot clients may differ.

Copy selected folders into your project's `.github/skills/` or personal `~/.copilot/skills/`. Choose the skill from `/` in chat. Apply `disable-model-invocation: true` to the seven optional skills as described above. [VS Code agent skills documentation](https://code.visualstudio.com/docs/agent-customization/agent-skills).

## Gemini CLI

Start with **only `workflow-check`**, copied into the project's `.gemini/skills/` or personal `~/.gemini/skills/`. Run `/skills reload`, inspect `/skills list`, then ask for `workflow-check` by name and approve activation when prompted. `/workflow-check` is not the documented invocation path. [Gemini CLI skill documentation](https://geminicli.com/docs/cli/skills/).

Keep the six presets and direction check out of Gemini's skill discovery until their manual-only behavior has been adapted and tested. The documentation does not establish an equivalent to the frontmatter control above. `/skills disable NAME` disables that skill entirely. [Gemini skill management](https://geminicli.com/docs/cli/using-agent-skills/).

## Check your imported copy

Try a small task and confirm the app finds the main skill and its reference files. Ask it to explain a recommendation and distinguish advice from settings it actually changed. Confirm optional skills stay inactive until requested before relying on them.

[Back to the toolkit](README.md) · [Manual Codex installation](INSTALL.md#manual-installation) · [Report compatibility results](https://github.com/Benz4000/workflow-value-toolkit/issues)

Independent project. App names identify compatibility targets, not affiliations or endorsements.
