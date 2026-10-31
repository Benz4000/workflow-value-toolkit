# Workflow Value Toolkit

Eight reusable skills for choosing a model, reasoning effort, and service speed at the best-value point before diminishing returns. Default priorities are **cost, quality, speed**. Required correctness, fidelity, budgets, and explicit deadlines remain constraints in every mode.

## Included skills

| Skill | Purpose | Activation |
|---|---|---|
| `workflow-check` | Shared model/effort/speed evaluation; `reset` restores default priorities | Explicit, or implicit when relevant |
| `workflow-cost-quality-speed` | Cost, then quality, then speed | Explicit |
| `workflow-cost-speed-quality` | Cost, then speed, then quality | Explicit |
| `workflow-quality-cost-speed` | Quality, then cost, then speed | Explicit |
| `workflow-quality-speed-cost` | Quality, then speed, then cost | Explicit |
| `workflow-speed-cost-quality` | Speed, then cost, then quality | Explicit |
| `workflow-speed-quality-cost` | Speed, then quality, then cost | Explicit |
| `workflow-direction-check` | Lightweight direction checks during ordinary turns | Explicit opt-in for each chat |

Invoke a skill as `$skill-name` where the host supports that syntax, or choose it from the plugin's skill picker. Natural-language priorities in the current request take precedence over a preset. A priority preset applies to the current task until changed; it does not rewrite global preferences.

## Direction check

```text
$workflow-direction-check on
$workflow-direction-check once
$workflow-direction-check status
$workflow-direction-check off
```

Invoking the skill without a mode has the same effect as `on`. It remembers a compact task summary in the conversation and notices material changes while the assistant processes normal turns. It stays quiet when nothing meaningful changes. A significant change can invoke `workflow-check`; ordinary continuations and status questions do not automatically cause a full evaluation.

This is a conversational instruction, not a background daemon, polling loop, extra model request, or guarantee of persistent state. It does nothing while the chat is idle. Instruction context and reasoning still use resources; the design minimizes overhead rather than claiming zero cost. It does not automatically switch models or grant permission for external actions.

## Selection behavior

The evaluator considers all supported combinations of model, effort, and Standard/Fast/Ultrafast service that are plausible for the task. It does not run an exhaustive benchmark sweep. It uses total cost per accepted result, useful quality gains, review/repair effort, and end-to-end time. Extra reasoning and faster service solve different problems. Ultra reasoning is distinct from Ultrafast service.

A recommendation is provisional unless task measurements support it. Dated model/rate examples in the reference are orientation only. The skill checks current sources when needed and labels unavailable or unverified controls. A skill cannot change runtime settings simply by announcing a model name.

## Package behavior

The package contains skills, manifests, an icon, and documentation only. It contains no polling hooks, timers, MCP connections, or executable installation scripts. It does not edit the user's startup guidance. An optional startup-rule snippet is included with the install instructions; the direction detector remains separately opt-in.

The `plugin.json` at the root is the portable manifest. `.codex-plugin/plugin.json` provides compatibility metadata. Relative links keep the eight skills portable together. Use the local catalog in the install archive to install through Codex, or follow the target host's documented skill import process.
