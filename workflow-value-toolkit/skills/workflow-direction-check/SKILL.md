---
name: "workflow-direction-check"
description: "Opt in to lightweight direction-change checks within the current chat, or run one check, disable checks, or inspect their status. Invoke explicitly."
---

# Workflow Direction Check

Notice meaningful changes during ordinary turns without running a background monitor. This packaged skill does nothing until explicitly invoked. Invocation does not authorize installing it, altering startup instructions, or activating it in other chats.

## Invocation

- Default or `on`: enable this conversational instruction for the current chat, retaining a compact baseline in context.
- `once`: check the current message or phase once; do not change an existing on/off preference.
- `off`: stop applying this instruction on later turns in this chat.
- `status`: briefly report the preference and last handled change from available context. If unavailable, say it is unknown.

These modes are instructions remembered in conversation, not a hidden runtime flag, timer, OS process, or guaranteed persistent service.

Briefly confirm `on` or `off`; changing the detector preference alone does not require a full evaluation.

## Lightweight check

Maintain a short in-context summary of the objective, deliverable, ordered priorities, material constraints, and current phase, plus the last meaningful change handled. Reuse the existing conversation; create a baseline if none is available. Do not write a tracking file.

While enabled, compare each new user message and material phase transition with that summary as part of normal reasoning. Do not make separate model or agent calls, browse, or use tools merely to detect a change. Do not poll while idle.

Trigger [Workflow Check](../workflow-check/SKILL.md) only when the goal, work type, required quality, budget, deadline, priorities, or other material constraint changes, or a repeated diagnosed failure warrants a new approach. That evaluation follows the sibling skill's own evidence and tool rules.

Treat new messages as steering the original objective unless the user clearly replaces or cancels it. Continuations, status requests, greetings, minor edits, and tangential questions do not themselves trigger evaluation. Keep quiet when direction is unchanged. Do not recheck a change already handled; update the summary after a meaningful evaluation and briefly explain why it occurred.

Detection never automatically switches models, changes permissions, or expands authorization. Preserve the sibling skill's distinction between recommended, requested, and verified settings.
