# Changelog

## 1.0.1 — 2026-10-31

- Added Apply suggested settings and Keep current settings choices after startup, manual, and enabled automatic reevaluations.
- Added supported interactive prompts with a plain-question fallback, and manual guidance when the host cannot change a setting directly.
- Required explicit acceptance and verification of actual changes; kept global defaults and other chats outside the action's scope.
- Avoided repeated prompts for unchanged pending or declined recommendations, while allowing a fresh manual check.
- Updated installation guidance to target and verify version 1.0.1, preserving manual CLI, ZIP, and Git paths.

## 1.0.0 — 2026-10-31

- Added the shared model, reasoning-effort, and speed evaluation skill.
- Added all six priority orders for cost, quality, and speed.
- Added an opt-in direction-change detector with `on`, `off`, `once`, and `status` modes.
- Packaged the eight skills with portable and Codex compatibility manifests, a local marketplace catalog, installation instructions, and usage examples.
- Defaulted evaluation to cost, quality, speed and the best-value point before diminishing returns, subject to required quality and explicit constraints.
