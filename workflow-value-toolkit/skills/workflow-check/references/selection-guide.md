# Selection guide

## Priorities are preferences within constraints

Required correctness, fidelity, safety, budget caps, supported capabilities, and explicit deadlines are gates for every mode. Do not discard them to optimize a preferred metric. Higher quality means useful, task-specific improvement, not verbosity or a bigger model label.

| Order | Decision emphasis after passing the gates |
|---|---|
| Cost, quality, speed | Minimize total cost per accepted result; pay for meaningful quality/rework gains, then useful latency gains. Default. |
| Cost, speed, quality | Minimize total cost; among comparable choices favor completion time, then optional polish. |
| Quality, cost, speed | Prefer substantive correctness, completeness, and polish; stop where quality improvement becomes marginal, then favor lower cost. |
| Quality, speed, cost | Prefer substantive quality, then useful completion time; do not pay indefinitely for imperceptible gains. |
| Speed, cost, quality | Prefer fastest acceptable end-to-end completion, then lower total cost and optional polish. |
| Speed, quality, cost | Prefer fastest acceptable completion, then substantive quality; avoid premiums that do not shorten the actual critical path. |

The presets express best-value preferences, not a promise to maximize the first metric at any price. If the user explicitly demands strict ranking, honor it among candidates that meet all hard constraints. Respect numeric weights or thresholds supplied by the user instead of inventing them. An exact optimum needs task-specific observations and a valuation of time/quality; without these, label the recommendation provisional. If feasible, reject configurations dominated in quality, total cost, and elapsed time by another candidate. Prefer the point where the next improvement becomes small relative to its extra cost. Do not calculate a universal quality-per-dollar score from guessed numbers.

## Separate the three controls

- **Model:** capabilities and base usage rates.
- **Reasoning effort:** internal reasoning work; higher effort can increase tokens and latency. It is useful for diagnosed reasoning difficulty, not every large file or batch.
- **Speed tier:** Standard, Fast, or Ultrafast service where supported; it changes latency/usage rates, not the task's quality gates. **Ultra reasoning is not Ultrafast speed.**

Standard is the recommended value baseline where supported, especially when external tools dominate. This does not establish active speed or account support: preserve an unknown current speed as unverified, and make unsupported recommendations conditional. Compare Fast and Ultrafast only where model latency changes the useful completion time. Evaluate the selected model at the same effort before attributing a result to its speed tier. Speed-first modes may justify premium tiers; they do not automatically require the most expensive tier. Do not switch to an unnecessarily expensive model just to obtain a faster tier.

## Dated orientation, not a permanent rate card

Official documentation checked **2026-10-31** stated these Codex multipliers relative to the **same model** at Standard:

| Speed | Purchased credits / Enterprise pay-as-you-go | Included subscription usage |
|---|---:|---:|
| Standard | 1x | 1x |
| Fast | 2x | 2.5x |
| Ultrafast | 6x | 8x |

At that check, Ultrafast supported GPT-6.1 Sol and GPT-6 Astra on eligible accounts; not Terra or Luna. Fast availability varied by model/client/account. API-key billing was separate. Refresh these facts when needed; do not assume account eligibility, map these multipliers directly to API billing, or claim a setting was activated from a prompt alone.

For a book-production task, a provisional workflow might use a capable model at medium effort and Standard speed for coordination and visual checks, a smaller model for proven deterministic batches, and a stronger model or higher effort for diagnosed difficult exceptions. Rendered-page inspection, text preservation, exact edition identity, and cover/interior compatibility remain required. Select actual models from the host's current supported options. This example does not establish a measured quality or speed winner.

## Evidence and applying settings

Use host-provided model/control metadata for availability and actual tool results for verified changes. When current documentation is needed, use the available OpenAI Docs skill or these official pages, and actually open the relevant source:

- [Model selection](https://developers.openai.com/api/docs/guides/model-selection)
- [Reasoning effort](https://developers.openai.com/api/docs/guides/reasoning)
- [Codex speed](https://learn.chatgpt.com/docs/agent-configuration/speed)
- [Codex pricing](https://learn.chatgpt.com/docs/pricing)

Reuse recent evidence within the same task. For unfamiliar requirements or materially changed availability, retrieve only what resolves the decision. Do not repeatedly inspect whole transcripts, inject full manuals, or spawn research teams for a simple startup choice. If the necessary evidence is unavailable, state the uncertainty and use the most defensible supported configuration without fabricating precision.

If a host control requires a fresh turn, preserve a safe checkpoint and only restart when the user has authorized managing that chat and the supported resume path is available. Do not stop another chat merely to advise it. Honor any actual approval rejection; changing priorities does not resolve it. If the task only asks for evaluation, return a recommendation without mutating settings or external systems.
