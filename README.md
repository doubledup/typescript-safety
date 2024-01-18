# Typescript Safety

A short response to things I keep hearing:

"We believe in the value of type-safety, so we use Typescript to make our code type-safe!"
"Just enable strict mode, with no-implicit-any."
"Also add @typescript-eslint's strict rules, espcecially no-explicit-any."
"And don't forget to check for unhandled runtime exceptions."

("Then manually check for any in the return type of every dependency, I guess.")

Soundness is a non-goal of Typescript. You'll play whack-a-mole with these edge cases, because
handling them all is not what the project is designed for. Think carefully about how much effort you
want to put into preventing errors at compile time, particularly in a system that's not designed to
remove all of them.

Reducing application-level runtime errors is a quantitative improvement: you spend less time
fixing the crashes you've created, or explaining why you're not fixing them.

Removing application-level runtime errors is a qualitative improvement: you no longer think about
the crashes you might have created.

All software can crash, however. In production systems, you will have crashes you couldn't prevent.
What do you want to do about the ones you can prevent? Reduce them, accept them, or remove them?

## Running

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

To run eslint:

```bash
bunx eslint .
```
