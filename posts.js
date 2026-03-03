const posts = [
  {
    date: "2026-03-03",
    title: "Be clear and direct",
    body: "Think of Claude as a brilliant new colleague who has zero context on your work. The more precisely you explain what you want, the better the result. A good test: show your prompt to someone with minimal context — if they'd be confused, Claude will be too. Be specific about output format, constraints, and use numbered steps when order matters."
  },
  {
    date: "2026-03-03",
    title: "Explain the why behind instructions",
    body: "Don't just give commands — explain your reasoning. Instead of saying 'never use ellipses', say 'your response will be read aloud by a text-to-speech engine, so avoid ellipses since the engine can't pronounce them.' Claude is smart enough to generalize from explanations. Understanding the reason behind a rule helps it handle edge cases you didn't anticipate."
  },
  {
    date: "2026-03-03",
    title: "Use few-shot examples",
    body: "Examples are the most reliable way to steer Claude's output format, tone, and structure. Include 3 to 5 diverse, relevant examples to dramatically improve accuracy and consistency. Make sure they mirror your actual use case and cover edge cases. You can even ask Claude to evaluate your examples for diversity, or generate additional ones."
  },
  {
    date: "2026-03-03",
    title: "Structure prompts with XML tags",
    body: "XML tags help Claude parse complex prompts without ambiguity. Wrap each type of content in its own tag — instructions, context, input — to reduce misinterpretation. Use consistent, descriptive tag names and nest them when content has a natural hierarchy. This is especially powerful when your prompt mixes instructions, examples, and variable inputs."
  },
  {
    date: "2026-03-03",
    title: "Assign Claude a role",
    body: "A single sentence like 'You are a helpful coding assistant specializing in Python' makes a measurable difference. Setting a role in the system prompt focuses Claude's behavior, vocabulary, and tone for your use case. This works for any domain: legal analysis, creative writing, data science, customer support."
  },
  {
    date: "2026-03-03",
    title: "Put long documents first",
    body: "When working with large inputs of 20K+ tokens, place your documents at the top of the prompt — above your query and instructions. Anthropic's testing found that placing the query at the end can improve response quality by up to 30%. Structure document content with XML metadata tags for extra clarity."
  },
  {
    date: "2026-03-03",
    title: "Ground responses in quotes",
    body: "For document-heavy tasks, ask Claude to quote relevant parts of the source first before answering. This anchors responses in actual text and significantly reduces hallucination. A simple instruction like 'find relevant quotes first, then answer based on those quotes' can make a big difference in accuracy."
  },
  {
    date: "2026-03-03",
    title: "Say what to do, not what not to do",
    body: "Positive instructions beat prohibitions. Instead of 'do not use markdown', say 'write in smoothly flowing prose paragraphs.' You can even match your prompt style to your desired output — removing markdown from your own prompt text reduces markdown in Claude's response. Tell Claude what you want, not what you don't."
  },
  {
    date: "2026-03-03",
    title: "Ask Claude to self-check",
    body: "Add a verification step: 'Before you finish, verify your answer against these criteria.' This catches errors reliably, especially for code and math. Even better — have Claude generate a draft, review it, then refine. This structured self-review loop significantly improves accuracy on complex tasks."
  },
  {
    date: "2026-03-03",
    title: "Chain complex tasks into steps",
    body: "For multi-step work like research synthesis or document analysis, break it into sequential steps. This prevents Claude from dropping intermediate steps. Each step can be a separate prompt so you can inspect and branch at any point. The most effective pattern: generate, review, refine."
  },
  {
    date: "2026-03-03",
    title: "Be explicit about actions",
    body: "If you say 'can you suggest some changes', Claude may only suggest rather than implement. For Claude to act, be direct: say 'change this function' or 'make these edits.' The difference between suggesting and doing comes down to how you phrase your request. Say what you mean."
  },
  {
    date: "2026-03-03",
    title: "Don't over-engineer your prompts",
    body: "If your prompts use aggressive language like 'CRITICAL: You MUST...' to compensate for older model limitations, dial it back. Modern Claude models are significantly more capable and follow instructions well with normal phrasing. Overly forceful instructions can now cause overtriggering. Keep it simple. Keep it focused."
  },
  {
    date: "2026-03-03",
    title: "Stop wasting tokens",
    body: "If you're using AI tools like Claude Code, stop wasting tokens on things that don't matter. Every unnecessary prompt, every bloated context window, every forgotten memory file — it all adds up. Clear your memory regularly. Remove outdated notes, stale instructions, and context that no longer applies. A clean memory means faster responses, lower costs, and better results. Treat your tokens like a budget. Spend them where they count."
  },
  {
    date: "2026-03-03",
    title: "First post",
    body: "Welcome to my blog. Here I share short thoughts and texts."
  },
  {
    date: "2026-03-03",
    title: "How it works",
    body: "Adding new texts is simple: open posts.js and add a new object at the top of the list. That's all."
  }
];
