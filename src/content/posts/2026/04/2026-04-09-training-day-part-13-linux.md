---
headline: "Training Day Part 1/3 - Linux"
date: "2026-04-09"
datetime: "2026-04-09T17:00:00Z"
readTime: "6 min read"
teaser: "One Day to Train my Team - One Day for them to become experts in AI and Linux Environments"
tags: ["Linux", "OPSEC", "OSINT", "documentation", "virtualization"]
---

### Sorry..

I won't pretend the teaser isn't catchy clickbait. Nowadays it has to be catchy for people to read further. So here I will tell you how I am planning a training for my team in using AI and Linux Environments to improve their workflows and make them aware of the possibilities of current LLMs. I will share my approach to teach skilled investigators and technology enthusiasts in Claude Code / OpenCode, Agent harnesses and what my experience with AI and using Linux as my daily-driver taught me in real investigations and time critical situations. And of course I know that becoming experts in AI and Linux is not going to be done in one day - but somewhere we have to start.

### Disclaimer

**I can't share the actual content of my training because it contains classified information but I will try to give you as many insights as possible.**

### The Room Setup

My Team is small so we can tackle a lot of current problems but the main focus in the first part of the workshop is how to find a Linux distribution that fits your needs, setting up clean **Linux** environments as **virtual machines**, how to prepare them for OSINT investigations and what standards we should apply for our everyday work. We will talk about OPSEC and best practices tailored for our workload.

The second part of the training will focus on the usage of **AI models**, local and via API. We will talk about security issues and - again - **best practices** how to make use of the LLMs and what their capabilities are. The theoretical part will be as compact as possible so that we can get hands on experience using AI to help in investigations and writing helper scripts and programs for our daily work.

We will finish the workshop with an **OSINT team challenge** where we can use the new knowledge to investigate a scenario based on a real case.

### Linux Part

The main focus about Linux is getting used to the OS, taking away the fear that hits many users when they don't see their typical Windows interface. Linux is simple and much more powerful for OSINT investigations because the tools are mainly written by software engineers who use Linux themselves. Most of them are available via *GitHub* and easy to set up.

But beyond the initial comfort with the command line, I want my team to internalize something more important: the mindset that makes a good OSINT practitioner. Linux is just the enabler. The discipline of operational security, the habit of maintaining clean environments, and the rigor of documentation are what actually make an investigator effective and defensible in court or professional review.

Let's imagine a beginner in OSINT investigations and lets give him a name, Olaf. Olaf had to learn his lessons the hard way.

*Three years ago, Olaf worked a financial fraud case that involved tracing transactions through seventeen shell companies across six jurisdictions. He had all his OSINT tools running on his personal laptop, bookmarks everywhere, browser sessions mixed with his normal browsing, and no real system for isolation. Halfway through the investigation, he realized he could not prove which information he had found on which date, which sources were reliable, and whether he had inadvertently contaminated evidence by visiting corporate registries while logged into Google accounts tied to his identity. The data was solid, but his methodology was a mess. It took him weeks to reconstruct an audit trail that should have been automatic.*

Even this was just a made-up story it can tell us, how we should approach Linux environments for investigations. Every machine we use for sensitive OSINT work is a clean virtual machine. We use **snapshots** extensively. Before every investigation or when switching between cases, we revert to a clean base snapshot or a snapshot we took specifically for one case. It takes seconds to save a snapshot and saves hours of contamination concerns. The habit has to be trained into muscle memory. It's like a mantra that needs to be applied for any serious kind of investigation. At the end we have to set exemplary standards so that we can withstand any upcoming questions in court. 

VPN usage is non-negotiable. Not just any **VPN**, at best a service we control or as alternative one we at least pay for. The point is not paranoia. 

> "But I have to be honest with you..."

A paid VPN with a monthly (or yearly) subscription is not an option for many government organizations. Sad but true. 
But the benefits are undoubtedly worth every penny. The point is that our IP addresses, DNS queries, and connection patterns are part of our investigative trail. If we ever have to testify about how we found information, we should be able to explain clearly what data we accessed and through what intermediaries. Using commercial VPNs with clear logging policies creates an auditable layer. We should never use free VPN services because they have to monetize somewhere, and that somewhere is usually your browsing data.

OPSEC extends far beyond network configuration. It includes how we store credentials, how we share information within the team, and how we document our methodology. We use password managers to store all the credentials we use on a daily basis. We have a strict rule: no investigative usernames, handles, or email addresses associated with personal accounts or devices. When we create accounts on research platforms, we use dedicated email addresses. This may sound like overkill until you have to answer questions in court.

Linux offers great tools and it is easy to use once you are getting to know it better. In the workshop we will setup a machine that is specifically modified to meet our needs for our types of investigations. I know that there are pre-built Linux distros out there but they are usually already too "powerful" and overwhelming for a newbie.

If you enjoyed reading the first part of my article and you want to know more, click here for the next part [Training Day Part 2/3 - AI](https://www.markusword.de/post/2026/04/2026-04-09-training-day-part-23-ai)
