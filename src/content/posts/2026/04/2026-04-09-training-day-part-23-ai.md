---
headline: "Training Day Part 2/3 - AI"
date: "2026-04-09"
datetime: "2026-04-09T18:00:00Z"
readTime: "7 min read"
teaser: "In the second part of this series I am talking about how AI can speed up investigations, about concerns and security issues, concepts for implementation and real world examples."
tags: ["AI", "investigations", "LLM", "privacy", "training"]
---

## Investigations and AI

The theoretical foundations of AI usage fit in a short intro:

* understanding how large language models process prompts
* how context windows limit working memory
* how temperature affects randomness
* how function calling enables tool use
* the concept of agentic harness
* agents, skills and mcp servers

These are not complicated concepts. What matters is developing intuition for where models are reliable and where they hallucinate, where they need human verification and where they can be trusted to run autonomously. For my training I will focus on developing that intuition 

As of April 2026, Claude Code, OpenCode and Pi have become my tools of choice when working with AI. I use Claude Code because it's the industry standard, OpenCode because it is an open-source alternative to Claude Code and Pi because it has the most possibilities to individualize your experience. What I like about OpenCode and Pi is that they are not tied to a single model-provider. They can connect to Anthropic's Claude, OpenAI's GPT models, Google's Gemini, and local models running on your own hardware, you name it.

For us investigators, the privacy dimension is critical, so running OpenCode against local models is our way to go. These models can run containerized and completely self-sufficient. New sessions start with a new context-window and the right choice of a model guarantees to a certain point a neutral bias.

For software engineering and development, OpenRouter extends these capabilities by providing a unified API interface across over 300 models from 60 providers. I typically use it when a local model is not able to handle the request I am asking it to do. In such cases anonymising every bit that could identify you or your investigation is mandatory. But if done right, the right answer is just one prompt away.

The view on security changes when we talk about Chinese AI providers like Minimax or DeepSeek. These models are increasingly capable and cost-effective, but using them via API or subscription means sending your data to servers in China. 

Many of the Chinese models are open-weight models. So everyone can download them and make them locally available. But with increasing capabilities the resources necessary to run models on your own machine becomes quite a challenge. In the end you have to decide yourself, whether you want to send your requests primarily to the US, China, or to your local model. My recommendation - always choose the local model if you can afford the hardware to run the models.

For some time now local model deployment has become remarkably accessible. Apple's Mac Studio, Nvidia's DGX Spark and similar machines with Shared GPU memory are reasonable options because of their affordable price tags. For teams that need more power, massive models containing trillions of parameters or when you need to use the full context window of current models reaching up to a million tokens, EXO is the answer. EXO enables distributed inference across multiple machines. It's not that difficult to deploy and large open-weight models become a real option even in secure environments.

I want to share a real investigation example to show how these tools fit into actual work. Two months ago, I tried to geolocate a series of photographs posted by a person of interest. The images showed a unique style of architecture, but I couldn't identify the specific location from visual inspection alone. I fed the images to a local vision-capable LLM with a prompt asking for detailed description of architectural features, signage, vegetation, climate indicators, and any identifiable landmarks. The model identified several unique objects and another LLM generated several Overpass Turbo queries for OpenStreetMap. The result - I found the place the pictures were taken in less than an hour. Using AI reduced the time I would have needed to find the right spot by maybe two thirds. The AI did not solve the case alone, but while it worked on the geolocation, I used my own time to investigate another path.

**Now to the fun part. (At least it's fun for me)**

In the past, analyzing data provided by large companies like Google, Meta or Apple, parsing log files, generating regex patterns to extracting information from unstructured data etc. has been a real pain in the butt.

With AI we can create helper scripts to analyze the data when there are no other programs available to do the job. Using AI itself for the analysis of data is possible but always has its risks because it's difficult to guarantee that the data is not compromised by the AI.

*What does this mean in practice?*

When you use AI to vibe code a script, the code can look like spaghetti. But to the people using it, that does not matter. They need results for specific problems. They want solutions, and they do not care how the code looks as long as it works.

AI opens doors for people who have no background in coding. That is beautiful and concerning at the same time. In my line of work, safety precautions are not optional. I teach my team the necessary measures because they will be working with tools they do not fully understand, and that is the point.

That means:

* Do not share any knowledge that is not openly available
* Anonymise any data you don't want third-party providers to know about
* Use local AI-models first to guarantee privacy and security measures
* Treat AI output like junior analyst output (useful for leads, but requiring human review before admission into official reports)
* Know your limits - Recognize when professional software engineering is needed versus when quick scripts suffice
* Documentation discipline: Every step, every finding, every verification must be documented with timestamps and sources

If you want something to be production ready and you don't know anything about software engineering, maybe you should ask somebody for help who knows their stuff. Knowing your own limits in this matter is very important.

Not long ago a colleague came to me, showing me a prototype of an android app that targets a very specific problem. The app looks nice, a bit outdated and without an eye for design. But it fulfills a function that nobody else on the market provides. It was clearly developed with AI but it helps negotiators in life dangerous situations to follow a certain protocol and gives ideas how to talk with a subject. 

I would recommend this app to be refined by professionals and to be published state-wide on a broader level but I also know that the financial resources won't be provided in the near future. So AI becomes an enabler for limited groups of people who have their very own solution for a specific problem.

Scripts can be analyzed and checked for their reliability and they work very well in a short term context.

A production ready software solution has higher standards that we have to meet before deployment.

Every AI-assisted analysis requires human verification before it goes into any official report. I train my team to treat AI output like output from any junior analyst: useful for leads and hypothesis generation, but not admissible without review.

I do that not because I don't believe in the capabilities of AI but because mistakes during an investigation are unacceptable and the technology is still too new and from a law enforcement-standpoint not reliable or reproducible enough.

Software engineering discipline matters even when AI assists. Version control your scripts. Review the code before running it. Test on synthetic data before production. Document what the script does and why. This is not anti-AI purism. It is the same discipline we apply to any tool in an investigation.

A hammer does not make you a carpenter, but it makes a carpenter much faster. AI makes investigators more productive, but only if they maintain the foundational skills that make their work defensible.

The right tool for the right job: You don't bring a precision instrument to a construction site, nor a sledgehammer to fine woodworking. AI is a powerful enabler, but it amplifies the methodology behind it. Without solid investigative discipline, AI simply helps you build the wrong thing faster.
