# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal LeetCode solutions repository for storing problem solutions and notes in Japanese. Solutions are written in TypeScript.

## Repository Structure

```
problems/
├── easy/
│   └── {problem-number}-{problem-name}/
│       └── solution.ts
├── medium/
│   └── {problem-number}-{problem-name}/
│       └── solution.ts
└── hard/
    └── {problem-number}-{problem-name}/
        └── solution.ts
```

- Problems are organized by difficulty (easy/medium/hard)
- Each problem has its own directory named with the problem number and name (e.g., `001-two-sum`)
- Solutions are stored in `solution.ts` files

## Solution File Structure

Each `solution.ts` file may contain:
- The main solution function implementation
- AI-generated or alternative solutions (marked with `// === AI回答 ====`)
- Problem-specific class definitions (e.g., `ListNode` for linked list problems)
- Multiple solution approaches for comparison

## Language and Comments

- Code is written in TypeScript
- Comments and notes are in Japanese
- AI-generated solutions are marked with `// === AI回答 ====`

## Adding New Solutions

When adding a new LeetCode solution:

1. Create a directory under the appropriate difficulty level: `problems/{difficulty}/{number}-{problem-name}/`
2. Create `solution.ts` with the solution implementation
3. Include problem-specific type definitions if needed (e.g., `ListNode`, `TreeNode`)
4. If comparing multiple approaches, separate them with clear comments
5. Mark AI-generated solutions with `// === AI回答 ====`
