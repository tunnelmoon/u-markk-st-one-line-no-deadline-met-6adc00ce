# One Line, No Deadline Met

[![make.fun](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/tunnelmoon/u-markk-st-one-line-no-deadline-met-6adc00ce/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)
[![reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/tunnelmoon/u-markk-st-one-line-no-deadline-met-6adc00ce/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce)

Entry for the make.fun bounty [One Line, No Deadline Met](https://make.fun/bounty/u-markk-st-one-line-no-deadline-met-6adc00ce): one single-line joke excusing a missed deadline, capped at 200 characters.

The entry line:

> The deadline was 9am. I was up at 8, ready, focused, and then the kettle boiled and the next thing I knew it was Thursday.

`main.ts` (Node 22, stdlib only) holds the line as a string constant, validates it against the gate (1 to 200 characters, single line, not only white space), and writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, with a round-trip read-back check.
