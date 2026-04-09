---
headline: "Training Day Part 3/3 - OSINT"
date: "2026-04-09"
datetime: "2026-04-09T19:00:00Z"
readTime: "6 min read"
teaser: "In the third part of this series I am talking about how I plan the OSINT team challenges that will wrap up the whole training. Every aspect we trained before will be reviewed."
tags: ["OSINT", "team training", "challenge design", "methodology", "debrief"]
---

### The OSINT Team Challenge

The team challenge is where everything comes together. After a day of learning Linux fundamentals, OSINT standards, AI tools, and safe practices, the team gets to apply all of it in a scenario built from real cases. I cannot share the actual cases my team works on, but I can describe how I design these challenges to test the skills that matter.

I use popular OSINT challenges by [OSINT Industries](https://ctf.osint.industries/) and [Bellingcat](https://challenge.bellingcat.com/) as templates to create my own team challenge. These popular challenges provide a very good entry into OSINT and can be challenging also for advanced investigators. 

In my opinion a good OSINT team challenge has four elements. It must be realistic enough that participants feel the real pressure. It must be complex enough that no single approach solves it. It must have multiple valid paths so different strengths can all lead to success. And it must have enough ambiguity that participants have to make judgment calls and document their reasoning.

### The Four Elements Explained

**Element 1: Realism**

Realism means participants feel genuine cognitive load. I simulate time pressure, incomplete information, and ambiguous evidence just like in real investigations. The challenge should feel like work, not a puzzle game. When investigators know they are being timed but also know the quality of their documentation matters, they start making the same tradeoffs they will face in the field.

**Element 2: Complexity**

A well-designed challenge cannot be solved with a single Google search or one database query. I build in verification requirements that force cross-referencing across at multiple independent sources. If one approach fails, another should still lead forward. Complexity ensures the challenge tests sustained investigative effort rather than a single flash of insight.

**Element 3: Multiple Valid Paths**

Different investigators have different strengths. Some excel at geolocation, others at social media OSINT, others at financial tracing. Good challenges accommodate multiple approaches. As long as the methodology is sound and the conclusion is defensible, the path taken should not matter. This also means the scoring cannot reward only one "correct" way.

**Element 4: Ambiguity and Judgment Calls**

Real cases do not come with neat labels. I intentionally introduce ambiguity where evidence points in different directions. Participants must decide how to proceed with incomplete information, document their reasoning, and be prepared to explain their choices. This is where good investigators separate themselves from mediocre ones.

### Essential Tools for Team Challenges

Before a challenge starts, the team needs to have its toolset ready. Here are the essential categories with examples of tools that they can use:

| Category | Tools | Purpose |
|----------|-------|---------|
| **Link Analysis** | Maltego, Spiderfoot | Map relationships between entities |
| **Image Analysis** | Google Images, Yandex, Bing Reverse Image | Find original sources of images |
| **Geolocation** | Google Earth, GeoGuessr, OpenStreetMap | Verify locations in photos/videos |
| **Social Media** | Social Searcher, NodeXL, platform-specific tools | Track online presence and connections |
| **Financial Tracing** | OpenCorporates, Company House, registry searches | Trace shell companies and financial links |
| **Documentation** | Git, Obsidian, timestamps/screenshots with archive.org | Version control and evidence preservation |

### Using Git for Investigative Documentation

Among these tools, Git deserves special attention for OSINT work. Unlike traditional note-taking, Git provides version control for your entire investigative timeline. Every change is tracked, timestamped, and attributable. This matters in court.

When you document your investigation in a Git repository, you create an immutable audit trail. You can prove what you found, when you found it, and why you pursued a particular lead. If you make a mistake, you can always revert to a previous state. If questioned, you can show the exact evolution of your investigative process.

For team investigations, Git enables collaboration without version conflicts. Multiple investigators can work on the same case, and every contribution is logged. This is not overkill. This is the standard that professional OSINT work demands. And it is free and open source.

### Challenge Categories

I design challenges across several categories depending on the skill set I want to test:

| Challenge Type | Skills Tested | Example Scenario |
|----------------|---------------|------------------|
| **Geolocation** | Image analysis, mapping tools, attention to detail | Locate a building from three photographs with conflicting metadata |
| **Social Media OSINT** | Platform knowledge, timeline analysis, relationship mapping | Identify a person from sparse online presence across five platforms |
| **Financial Tracing** | Corporate records, open source databases, pattern recognition | Trace ownership of a shell company through three jurisdictions |
| **Combined Investigation** | All of the above, plus time management and documentation | Full investigation of a complex fraud case with multiple leads to pursue |

### Scoring Criteria

Challenges are evaluated on five dimensions. None of these alone determines success. The overall assessment reflects how well the team balanced these competing demands.

**Accuracy (25%)** 
Did the team reach the correct conclusion? An incorrect finding that took the right investigative approach still earns more credit than a lucky guess that cannot be reproduced.

**Methodology (25%)**
Is the investigative process sound and defensible? Could another investigator follow the same steps and reach the same conclusion? This is where most teams lose points. They find the answer but cannot show a clean trail.

**Documentation (20%)**
Every query, every result, every decision timestamped and sourced. Can the team reproduce their findings from their notes alone? Documentation is not optional. It is the work.

**OPSEC (15%)**
Did the team maintain operational security throughout? Were research accounts kept separate from personal identities? Did they avoid contaminating evidence with identity-linked services?

**Efficiency (15%)**
Time matters. Investigations have deadlines. Teams that deliver accurate, well-documented results within the time limit demonstrate the pace real cases demand.

### Debrief Structure

After a challenge, we spend significant time in structured debrief. Each team member presents their approach, what worked, what they would do differently next time. I share my observations about their process, highlight moments where they made good judgment calls, and point out places where they took risks that happened to pay off but were not good practice.

I use the After Action Review model: What was supposed to happen? What actually happened? Why was there a difference? What can we learn and apply next time?

The goal is not to create performers who can win challenges. The goal is to create investigators who can handle real cases with professionalism and a standard much higher than the expectations of those who might question their methods.

> "In our work it is not only that we need the results for our investigations, but we also need them **as fast as possible**."

The ultimate measure of a good training day is whether the team leaves with new habits, not just new knowledge. If they leave with better documentation discipline, cleaner OPSEC practices, and realistic understanding of AI capabilities and limitations, then the training was worth every hour. The tools will change. The models will improve. But the fundamentals of careful, documented, defensible investigative work are what make an OSINT professional reliable when it matters most.

### To sum it up

The broader principle here is that good OSINT work is reproducible work. When we verify a lead, we document the exact query, the exact timestamp, and the exact result. When we visit a website, we note 

* what we found, 
* when we found it and 
* why it mattered. 

We generate **hash values** for the attachments we add to a report so that a change of files is noticable later on. This documentation habit is what separates amateur OSINT from professional investigation. Coming back to Linux. Documenting every step can be done even by tools like Git for version control. It's very important to teach your team to treat every investigation like it might be reviewed by a hostile attorney or prosecutor. Because sometimes it is. 

From my own experience judges, prosecutors, even the suspects and their attorneys can be very surprised when you are able to answer every question they ask and by doing so, showing your profound knowledge in this area.

### Conclusion

Training a team in AI and Linux for OSINT work is not about teaching them to use new tools. It is about instilling a mindset: that every investigation must be defensible, every finding documentable, and every AI-assisted lead verified by human judgment. The technology will evolve, but discipline endures. Give your team the fundamentals, and they will adapt to whatever comes next.
