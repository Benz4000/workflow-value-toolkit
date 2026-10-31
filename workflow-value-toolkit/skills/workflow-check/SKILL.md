---
name: workflow-check
description: Choose model, reasoning effort, and Standard/Fast/Ultrafast speed at startup or meaningful changes, then offer an Apply or Keep choice. Supports manual reevaluation and best value before diminishing returns.
---

# Workflow check

Select the best-value configuration for the actual task. Default to **cost, quality, speed**, in that order, while satisfying every required quality gate. Treat the point before diminishing returns as a provisional decision unless comparable task measurements establish it.

## When to check

- At the start of a substantive new task, perform one lightweight check. Reuse this skill if already loaded. Skip greetings, acknowledgments, and trivial continuations.
- Rerun when explicitly invoked, priorities change, a distinct task phase begins, a configuration repeatedly fails, or a material budget/deadline constraint changes. Do not reevaluate after every tool call.
- A manual priority skill replaces the order for the current task until the user changes it. Explicit priorities in the current request win. `$workflow-check reset` restores the default; `$workflow-check` without a new order reevaluates the current order.

## Decide

1. Identify the deliverable, required correctness/polish, available tools and models, explicit settings, budget/deadline, and dominant work: routine transformation, visual/app interaction, complex reasoning, or waiting on external tools. Preserve explicit model choices and all existing authorizations and holds.
2. Consider a small plausible set of **model + effort + speed** combinations. Avoid exhaustive sweeps. Read [selection guide](references/selection-guide.md) for the priority meanings, speed comparison, or evidence sources when needed. Reuse relevant current evidence already fetched in this task; verify unstable prices, support, and availability from official sources when they affect a new decision. A dated example is not proof of current access or performance.
3. Reject candidates that miss hard requirements. Compare meaningful quality gains, total cost including retries/review/repairs, and end-to-end time including tool waits. Raw token prices and token-generation speed do not equal task cost and duration. Do not invent scores or convert missing measurements to zero.
4. Follow the selected priority order among feasible candidates, stopping when the next upgrade adds little useful quality or time benefit for its cost. If the user explicitly requests a strict ranking rather than a best-value tradeoff, honor that ranking within the hard constraints. Do not confuse the default with always buying the cheapest or most powerful option. Without measurements, state a provisional best-value choice; use ordinary task outcomes to refine it. Do not start paid benchmark runs merely to perform this check.
5. Diagnose before escalating: poor judgment may need a stronger model or more effort; model waiting may justify a faster tier; slow rendering/uploads need tool or workflow improvements. Repeatedly retrying a failing cheap setup is not economical. After resolving an exception, return to the least costly proven configuration that fits the selected priorities.

## Offer Apply or Keep

After a startup check, manual evaluation (including a priority preset), or meaningful automatic reevaluation, offer one choice:

- **Apply suggested settings**
- **Keep current settings**

Before the choice, state the concrete recommended model, effort, and speed; the current values where verified (otherwise say unknown); the priority order; and one reason. Mention a material cost increase or uncertainty without inventing prices. State which settings the host can change directly. If controls are absent, explicitly explain that **Apply** will provide manual steps rather than change the app. If only some controls are available, identify those and the remaining manual steps before asking.

Use the host's available interactive choice tool, such as `request_user_input_async` when exposed and permitted, so these are clickable choices. Prefer a nonblocking prompt. Never call a tool restricted to Plan mode outside that mode. If no suitable tool exists, use supported action/follow-up buttons; embed the concrete recommendation and this chat's scope in the Apply action, not a vague reference to the latest suggestion. If neither UI exists, ask the same brief choice in plain text. Do not draw fake Markdown buttons or claim a button changes settings by itself.

List Apply first, but a highlighted default, elapsed time, or silence is not acceptance. Continue already-authorized work under the current configuration while the choice is pending. Keep the proposed values and pending/accepted/declined state in the conversation; no tracking file or polling is needed.

If all recommended values already match verified active settings, report that and omit the unnecessary choice. Suppress an unchanged pending or declined recommendation within the task; an explicit manual recheck may offer it again. Automatic checks follow the existing meaningful-change triggers, not every turn; the direction-check instruction remains opt-in and does not poll while idle. Honor explicit evaluation-only, no-change, or no-prompt constraints; do not treat evaluation itself as authorization to apply.

## Handle the choice and verify

A skill cannot change its own runtime by declaring a model. After the user explicitly chooses Apply, use only supported controls for the specific settings and task/chat scope shown. If the task, recommendation, or capability has materially changed since the choice was offered, present the changed proposal before applying it. If the user chooses Keep, leave settings unchanged and continue the task.

Keep **recommended**, **requested**, and **verified active** settings distinct, especially speed. Verify each attempted change from an actual control result or readback. Report partial success honestly; for unsupported settings, give the smallest manual steps using verified app guidance and leave them unverified. A changed subagent model is not a changed model for this chat. Do not simulate application by editing skill text, global configuration, or unrelated files.

The Apply choice does not authorize global defaults, another chat, restarting work, paid benchmarks, installations, or other external actions. Any such action needs its own applicable authorization. If controls are absent, preserve the recommendation and continue permitted work; do not repeatedly ask the user to configure it.

For authorized delegation, assign narrow work and concise context using supported model/effort overrides. A speed or priority change grants no new permission to upload, publish, purchase, or message other chats. Preserve progress and running writes. Before any stop-and-restart, verify that the restart path exists and is authorized; otherwise leave the ongoing work running and report the recommendation. Never edit global defaults as a side effect of a check.

Keep the recommendation and choice concise; include the evidence level and any unverified control. Record a decision in an existing task handoff only when continuity needs it. No new log file is required for ordinary tasks.
