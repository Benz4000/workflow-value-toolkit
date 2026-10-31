---
name: workflow-check
description: Choose model, reasoning effort, and Standard/Fast/Ultrafast speed for a substantive task at startup or when priorities, difficulty, budget, or deadline change. Supports manual reevaluation and best value before diminishing returns.
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

## Apply and report honestly

A skill cannot change its own runtime by declaring a model. Use supported controls only when available and authorized. Keep **recommended**, **requested**, and **verified active** settings distinct, especially speed. If controls are absent, give the selection and continue permitted work; do not repeatedly ask the user to configure it.

For authorized delegation, assign narrow work and concise context using supported model/effort overrides. A speed or priority change grants no new permission to upload, publish, purchase, or message other chats. Preserve progress and running writes. Before any stop-and-restart, verify that the restart path exists and is authorized; otherwise leave the ongoing work running and report the recommendation. Never edit global defaults as a side effect of a check.

Keep the startup result to a short sentence when useful; on manual reevaluation give the priority order, selected model/effort/speed, one reason, evidence level, and any unverified control. Record a decision in an existing task handoff only when continuity needs it. No new log file is required for ordinary tasks.
