## Devkit rule loading

Before implementation, load only relevant canonical guidance with `specdest rules --category <category>` or `specdest rules --id <rule>`. Do not preload the whole rule catalog. After `specdest check` reports failures, use `specdest rules --failed` to load the failed rule guidance.

## Specdest rule: checker-determinism

Project-owned enforcement checkers must be deterministic and read-only. Run `specdest check` before handoff.
