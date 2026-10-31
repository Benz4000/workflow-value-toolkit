# Workflow Value Toolkit: Codex Skills for Model Selection

Eight installable Codex skills for choosing an AI model, reasoning effort, and Standard, Fast, or Ultrafast speed. Compare cost, quality, and completion time, then choose a practical best-value configuration before diminishing returns.

The default priority is **cost → quality → speed**. Required correctness, budgets, capabilities, and explicit deadlines remain constraints in every mode. Recommendations are provisional until task results support them; this package does not promise a measured optimum or guaranteed savings.

[Installation guide](INSTALL.md) · [Usage guide](workflow-value-toolkit/README.md) · [Releases](https://github.com/Benz4000/workflow-value-toolkit/releases) · [Report a problem](https://github.com/Benz4000/workflow-value-toolkit/issues)

## Install in Codex

Requires Git and a Codex client with local plugin marketplace support.

```sh
git clone https://github.com/Benz4000/workflow-value-toolkit.git
cd workflow-value-toolkit
codex plugin marketplace add .
codex plugin add workflow-value-toolkit@workflow-value-local
```

Keep the cloned folder available for later refreshes. Start a new chat after installation. You can also download the install ZIP from [Releases](https://github.com/Benz4000/workflow-value-toolkit/releases), extract it, and run the two `codex plugin` commands in the folder containing `INSTALL.md`.

Installation adds the skills. It does not edit your `AGENTS.md`, change global model settings, or enable the direction detector. The shared `workflow-check` skill can be selected implicitly when relevant; the other seven skills require explicit invocation. See [installation details and the optional startup rule](INSTALL.md).

## Quick start

Ask for a best-value workflow:

```text
$workflow-check
Choose a model, reasoning effort, and speed for formatting a long manuscript.
Preserve the text and validate the rendered pages. Prioritize cost, quality, speed.
```

Change the current task's priorities:

```text
$workflow-quality-cost-speed
Reevaluate for a final publication review. Quality comes first.
```

Restore the default order:

```text
$workflow-check reset
```

Use the host's skill picker if plugin skills are namespaced or the shorthand does not resolve.

## All eight skills

| Skill | What it does |
|---|---|
| [`workflow-check`](workflow-value-toolkit/skills/workflow-check/SKILL.md) | Evaluates model, reasoning effort, and speed; defaults to cost → quality → speed |
| [`workflow-cost-quality-speed`](workflow-value-toolkit/skills/workflow-cost-quality-speed/SKILL.md) | Cost first, quality second, speed third |
| [`workflow-cost-speed-quality`](workflow-value-toolkit/skills/workflow-cost-speed-quality/SKILL.md) | Cost first, speed second, quality third |
| [`workflow-quality-cost-speed`](workflow-value-toolkit/skills/workflow-quality-cost-speed/SKILL.md) | Quality first, cost second, speed third |
| [`workflow-quality-speed-cost`](workflow-value-toolkit/skills/workflow-quality-speed-cost/SKILL.md) | Quality first, speed second, cost third |
| [`workflow-speed-cost-quality`](workflow-value-toolkit/skills/workflow-speed-cost-quality/SKILL.md) | Speed first, cost second, quality third |
| [`workflow-speed-quality-cost`](workflow-value-toolkit/skills/workflow-speed-quality-cost/SKILL.md) | Speed first, quality second, cost third |
| [`workflow-direction-check`](workflow-value-toolkit/skills/workflow-direction-check/SKILL.md) | Optional checks for meaningful changes in task direction during ordinary chat turns |

Priority presets apply to the current task until changed. Explicit instructions in your request take precedence.

## Optional direction-change detection

```text
$workflow-direction-check on
$workflow-direction-check once
$workflow-direction-check status
$workflow-direction-check off
```

`on` enables lightweight checks for the current chat. `once` checks without changing the remembered on/off preference. `status` reports that preference, and `off` stops the detector. Invoking the detector without a mode means `on`.

The detector looks for material changes in the objective, deliverable, priorities, constraints, task phase, or repeated diagnosed failures. It stays quiet for ordinary continuations and status questions. It runs as part of normal conversation reasoning: no idle polling, timer, extra model request, or background service. Context and reasoning still consume resources, and remembered state depends on the conversation context.

Turning the detector off does not disable independent selection of `workflow-check`.

## How model and effort selection works

1. Identify the deliverable, quality requirements, budget, deadline, and available controls.
2. Compare a small set of plausible model, reasoning-effort, and speed combinations.
3. Exclude configurations that cannot satisfy the requirements.
4. Consider total cost per accepted result, including retries and review, plus useful quality gains and end-to-end completion time.
5. Stop upgrading when the next improvement is small relative to its added cost. Reevaluate when evidence or requirements change.

Standard is the value baseline where supported. Fast and Ultrafast are considered when model latency affects completion time; they cannot fix slow uploads or rendering. **Ultra reasoning and Ultrafast service are different controls.** Availability and pricing depend on the host, model, and account. Dated examples in the [selection guide](workflow-value-toolkit/skills/workflow-check/references/selection-guide.md) must be rechecked when relevant.

## Does this automatically switch models?

No. These are instruction-based skills. They distinguish a recommendation, a requested setting, and a verified active setting. A host must expose a supported, authorized control before any setting can actually change. Installing a skill cannot create that capability.

## Example uses

- **Book formatting:** preserve manuscript text and validate rendered pages while choosing an economical editing and review workflow.
- **Routine code changes:** use a capable baseline and escalate effort for diagnosed difficult cases.
- **Final quality review:** choose a quality-first preset while keeping cost and deadlines visible.
- **Time-sensitive tasks:** compare speed tiers against the time spent in tools, rendering, and uploads.

## Package contents and compatibility

The installable plugin contains eight `SKILL.md` directories, UI metadata, a shared selection guide, manifests, an icon, and documentation. It has no MCP server, executable installation script, lifecycle hook, or API-key requirement. Model access and usage costs belong to the host service.

`plugin.json` is the portable manifest; `.codex-plugin/plugin.json` supplies Codex compatibility metadata. The repository's `.agents/plugins/marketplace.json` registers the local plugin source. Other skill-capable hosts may import the eight directories, but their discovery and activation behavior must be checked separately.

## Contributing

Open an [issue](https://github.com/Benz4000/workflow-value-toolkit/issues) with the skill name, expected behavior, actual behavior, and a minimal example with private information removed. Useful improvements include clearer decision rules, verified compatibility fixes, and task evidence for model selection. Avoid unsupported savings claims or hard-coded assumptions about account access.

## License

[MIT](LICENSE). You may use, modify, and redistribute the package under the license terms.

Maintained by [Benz4000](https://github.com/Benz4000). This is an independent project and is not affiliated with OpenAI.
