# AI Writing Patterns Audit — LANA Immigration Website

**Audit date:** April 12, 2026
**Auditor:** Writing editor (AI pattern detection)
**Scope:** All English-language pages and blog posts on lanacanada.com

---

## Executive Summary

Overall, this website reads remarkably well. The writing is clear, direct, and avoids most of the worst AI-generated patterns. The voice is consistent across pages: professional but accessible, with a consultative tone that fits an immigration practice. Most pages sound like they were written by someone who understands the subject and cares about being understood.

That said, there are recurring patterns that flag as machine-generated writing to a trained reader. The issues are mild and concentrated in a few areas:

**Severity breakdown:**
- **CLEAN** (0-1 minor issues): 12 pages
- **MILD** (2-4 issues): 14 pages
- **MODERATE** (5-8 issues): 4 pages
- **HEAVY** (9+ issues): 0 pages

The most common patterns found are:
1. **Repeated signposting phrase** "Let's break it down" (appears on 3 pages, identical phrasing)
2. **Templated CTA sections** at the bottom of every page use near-identical language
3. **"Vibrant" used figuratively** in one blog post
4. **Em dash density** is high across the site but mostly justified
5. **Formulaic "The Bottom Line" closings** on some blog posts
6. **Our team page** has some promotional/corporate-stiff language in Svetlana's bio

---

## Per-Page Findings

---

### index.html
**Rating: CLEAN**

The homepage reads naturally. The copy is concise and conversational. "We work with you from your first consultation through to citizenship, building a strategy around your specific situation and getting the paperwork right" is a good example of plain, human language.

No significant AI patterns detected.

---

### why-work-with-consultant.html
**Rating: MODERATE**

This is the longest content page and has the most issues, though they are all relatively minor.

**Finding 1 — Signposting phrase**
> "Let's talk about why."

Pattern: **Signposting** (#13). This phrase appears right after the intro and feels like a filler transition.
Suggested rewrite: Cut entirely. The reader already knows why they are on this page.

**Finding 2 — Persuasive authority trope**
> "When your future is at stake, expert guidance matters."

Pattern: **Persuasive authority trope** (#12). This is a generic motivational closer that could appear on any consulting website.
Suggested rewrite: "A refused application can set you back years. Getting it right the first time is worth the investment."

**Finding 3 — Significance inflation**
> "One of the most important parts of immigration is something many people don't think about at the beginning: strategy planning."

Pattern: **Significance inflation** (#1) — "one of the most important" is an AI filler construction.
Suggested rewrite: "Most people don't think about strategy planning until they're already deep in the process. That's a mistake."

**Finding 4 — Generic parallelism**
> "Instead of guessing, you get clarity. Instead of stress, you get structure."

Pattern: **Negative parallelism** (#7). This reads like it was generated rather than thought through.
Suggested rewrite: "You'll know exactly what's needed and in what order."

**Finding 5 — Filler phrase**
> "smoothly and efficiently"

Pattern: **Filler** (#10). Two adverbs saying the same thing.
Suggested rewrite: "without scrambling."

**Finding 6 — Generic positive conclusion**
> "Your future is too important to leave to chance."

Pattern: **Generic positive conclusion** (#9). Vague motivational line.
Suggested rewrite: Cut this. The CTA button that follows is sufficient.

---

### how-immigration-works.html
**Rating: CLEAN**

Concise, well-structured page. The intro paragraph reads naturally: "If you're thinking about immigrating to Canada, you've probably already discovered one thing: it's not simple." Good conversational opening.

**Minor note:**
> "Let's break it down in a clear and simple way."

Pattern: **Signposting** (#13). Same "let's break it down" phrase used on other pages. Feels templated.
Suggested rewrite: "Here's how it works." or cut entirely.

---

### citizenship.html
**Rating: MILD**

**Finding 1 — Signposting (repeated phrase)**
> "Let's break them down in a simple and clear way."

Pattern: **Signposting** (#13). Third instance of "let's break [it/them] down." This is a telltale AI pattern — identical transitional phrasing reused across pages.
Suggested rewrite: "Here's what each one covers." or cut entirely.

**Finding 2 — Significance inflation**
> "Citizenship is more than just a passport — it's security, belonging, and the ability to fully participate in Canadian society without limitations."

Pattern: **Rule of three** (#6) combined with **significance inflation** (#1). "Security, belonging, and the ability to fully participate" is an AI-flavored triple.
Suggested rewrite: "Citizenship means you can vote, travel on a Canadian passport, and never worry about residency requirements again."

**Finding 3 — Generic emotional close**
> "Citizenship gives you stability, security, and full participation in Canadian life. It is not just paperwork — it is belonging."

Pattern: **Generic positive conclusion** (#9), **Rule of three** (#6), **Negative parallelism** (#7) ("not just...it is").
Suggested rewrite: "Once you have citizenship, your status in Canada is permanent. No more renewals, no more residency calculations."

---

### citizenship-grant.html
**Rating: CLEAN**

Straightforward informational content. Reads like a reference page. No significant AI patterns. The language is appropriately formal for explaining eligibility requirements.

---

### citizenship-certificate.html
**Rating: CLEAN**

Same as above — clear, factual, well-organized. No significant issues.

---

### coming-to-canada-temporarily.html
**Rating: MILD**

**Finding 1 — Signposting (repeated phrase)**
> "Let's break them down in a simple and clear way."

Pattern: **Signposting** (#13). Fourth instance of this exact phrase template across the site.
Suggested rewrite: Vary the transitions. "Here's what you should know about each one." or simply remove the transition line.

**Finding 2 — Rule of three**
> "Temporary status is not a waiting room — it's an active phase."

Pattern: This is actually fine — it is a single metaphor, not a forced triple. No change needed.

**Finding 3 — Generic list structure**
The "Why Temporary Status Can Be a Smart First Step" section has 6 benefit cards that all follow an identical structure: emoji icon, title, one-paragraph description. While each card's content is solid, the uniform length and structure feels template-generated.
Suggested fix: Vary paragraph lengths. Make some cards 2 sentences, others 3-4. Add a specific detail or number to at least two of them.

---

### testimonials.html
**Rating: CLEAN**

The testimonials themselves read authentically (the second one in particular — the paramedic's story — has genuine personality and imperfect phrasing that reads as real). The surrounding copy is minimal and appropriate.

**Minor note:**
> "These are real stories from real people who trusted us with one of the most important decisions of their lives."

Pattern: Borderline **significance inflation** (#1). "One of the most important decisions" is a mild cliche, but it is also genuinely true for immigration. Not flagging this as an issue — it reads naturally in context.

---

### our-team.html
**Rating: MILD**

**Finding 1 — Promotional language in hero**
> "Our team combines deep expertise in Canadian immigration law with a genuine commitment to every client's success."

Pattern: **Promotional language** (#2) — "deep expertise" and "genuine commitment to every client's success" are corporate-stiff phrases.
Suggested rewrite: "The people who will actually work on your file."

**Finding 2 — Svetlana's bio**
> "I am passionate about helping individuals, families, and employers navigate the Canadian immigration process with clarity and confidence. I believe in providing personalized, professional, and detail-oriented support, with a strong commitment to integrity, compliance, and client care."

Pattern: **Rule of three** (#6) x2 ("individuals, families, and employers" + "personalized, professional, and detail-oriented" + "integrity, compliance, and client care"), **promotional language** (#2) ("passionate about"), **commitment to** (#2).
Suggested rewrite: "I founded Lana Immigration in 2019 after working in the industry for several years. I handle every case personally and work in English, French, Russian, and Hebrew. What matters to me is getting the details right and keeping clients informed throughout the process."

**Finding 3 — Olha's bio**
> "Results-driven, with a passion for helping clients succeed."

Pattern: **Promotional language** (#2). "Results-driven" and "passion for helping clients succeed" are LinkedIn cliches.
Suggested rewrite: "Focused on getting cases done right and keeping clients updated along the way."

---

### contact.html
**Rating: CLEAN**

Minimal copy, appropriately functional. No issues.

---

### faq.html
**Rating: CLEAN**

The FAQ answers are factual, concise, and well-written. The Q&A format naturally avoids AI patterns because each answer is short and focused on a specific question. No issues detected.

---

### payment.html
**Rating: CLEAN**

Functional page. The copy is appropriately minimal and clear. No issues.

---

### privacy-disclaimer.html
**Rating: CLEAN**

Legal/regulatory content. Appropriately formal. No AI pattern issues (formal legal language is expected here).

---

### assessment.html
**Rating: CLEAN**

Minimal copy. No issues.

---

## Blog Posts

---

### blog-foreign-credential-recognition.html
**Rating: CLEAN**

Well-structured guide with practical information. Clear, helpful, no AI patterns. Good example of informational blog writing.

---

### blog-renting-in-canada.html
**Rating: CLEAN**

Practical guide. Reads naturally. No issues.

---

### blog-immigration-fraud-protection.html
**Rating: CLEAN**

Strong, direct writing. Good use of specific examples. No issues.

---

### blog-french-speaking-immigrants.html
**Rating: MILD**

**Finding 1 — "Vibrant"**
> "vibrant Francophone communities exist across the country"

Pattern: **Promotional language** (#2) — "vibrant" is on the AI vocabulary list.
Suggested rewrite: "active Francophone communities" or "established Francophone communities"

**Finding 2 — Significance inflation**
> "the advantages have never been stronger"

Pattern: **Significance inflation** (#1). Superlative claim without supporting evidence.
Suggested rewrite: "the advantages are substantial right now"

---

### blog-express-entry-2026.html
**Rating: MILD**

**Finding 1 — Signposting**
> "this post breaks it all down in plain language"

Pattern: **Signposting** (#13). Promise-to-explain phrase.
Suggested rewrite: Cut this phrase. The reader can see the article is about to explain things.

**Finding 2 — Generic heading**
> "The Bottom Line"

Pattern: **Generic conclusion heading** (#9). Reads as AI-generated section closer.
Suggested rewrite: "What this means for your application" or "So where does this leave you?"

---

### blog-ukraine-status-extension-2027.html
**Rating: CLEAN**

Excellent writing. This is one of the best pages on the site. It has genuine personality: "A lot of Ukrainians in Canada have been stuck in a difficult spot" is a natural, empathetic opening. The tone is conversational without being informal. The structure follows the reader's actual thought process. No AI patterns detected.

---

### blog-skilled-worker-shortage.html
**Rating: MILD**

**Finding 1 — Em dashes**
This post has a high density of em dashes (8+). Most are justified, but when stacked in consecutive paragraphs they become noticeable.
Suggested fix: Convert 2-3 em dashes to commas or restructure those sentences.

**Finding 2 — Promotional compound**
> "This programme offers work permits that can be processed in as little as two weeks — a fraction of the time standard applications require."

Pattern: Fine in isolation, but the em-dash explanatory style is used repeatedly throughout. Reads as templated.
Suggested fix: Vary sentence structure. Sometimes use a period and a new sentence instead.

---

### blog-immigration-reset-2026.html
**Rating: CLEAN**

Good analysis piece. The writing is measured and balanced. No issues.

---

### blog-faster-pr-already-in-canada.html
**Rating: MILD**

**Finding 1 — Significance inflation**
> "Here's some genuinely exciting news"

Pattern: **Promotional language** (#2). Telling the reader how to feel.
Suggested rewrite: "There's a concrete policy shift you should know about"

**Finding 2 — Motivational close**
> "Living and working in a new country takes tremendous courage. The government's 2026 policies recognize that. Don't let this window of opportunity pass."

Pattern: **Generic positive conclusion** (#9). The courage line is filler. The "window" line is a sales push.
Suggested rewrite: "If you qualify, act before the policies shift again." or cut entirely.

---

### blog-ontario-new-rules-newcomers.html
**Rating: MILD**

**Finding 1 — Motivational close**
> "Your skills are needed. The rules are changing to reflect that."

Pattern: **Generic positive conclusion** (#9). Two-sentence motivational closer.
Suggested rewrite: Cut entirely. The article already made the case.

**Finding 2 — Persuasive trope**
> "The direction of travel is clear: barriers are being removed, transparency is increasing, and the system is becoming more fair."

Pattern: **Rule of three** (#6) and **significance inflation** (#1). Reads like a press release.
Suggested rewrite: "Ontario is removing barriers. That is good news if you are looking for work."

---

### blog-easiest-provinces-immigrate.html
**Rating: CLEAN**

Thoughtful, well-balanced writing. The "What 'Easiest' Actually Means" section is particularly good — it pushes back on the reader's assumptions rather than just telling them what they want to hear. No AI patterns.

---

### blog-move-to-canada-without-job-offer.html
**Rating: CLEAN**

Direct, myth-busting opening. Strong, clear writing throughout. No issues.

---

### blog-increase-crs-score.html
**Rating: CLEAN**

Practical, well-structured advice. No issues. The numbered format is natural for this type of content.

---

### blog-minimum-crs-score-2026.html
**Rating: CLEAN**

Excellent writing. Uses a personal voice ("One of the most common questions I hear from clients...") that feels genuine. Explains a technical topic clearly without dumbing it down. No issues.

---

### blog-express-entry-2025.html
**Rating: CLEAN**

Straightforward informational post. No issues.

---

### blog-fastest-immigration-programs.html
**Rating: CLEAN**

Detailed, well-structured guide. No issues.

---

### blog-express-entry-draw-history.html
**Rating: CLEAN**

One of the strongest blog posts on the site. Technical content explained clearly with genuine analytical depth. No AI patterns.

---

### blog-studying-in-canada-2026.html
**Rating: CLEAN**

Well-written guide. Balanced tone — does not oversell studying in Canada while still presenting the opportunity honestly.

---

### blog-tr-to-pr-pathway-2026.html
**Rating: CLEAN**

Good cautious tone appropriate for speculative policy content. "There is reason to be cautiously optimistic, but key details are still missing" reads like genuine professional advice. No issues.

---

### blog-federal-skilled-immigration-model-2026.html
**Rating: CLEAN**

Short, measured policy update. Appropriately cautious. "This is a noteworthy development" is a borderline AI phrase but acceptable for a brief news update. No significant issues.

---

## Sitewide Pattern: Templated CTA Sections

Every page ends with a CTA section that follows this exact template:
> **"[Question related to page topic]?"**
> "Get a personal assessment of your profile and a clear action plan from a licensed Canadian immigration consultant."
> [Book a Consultation] [Send Us a Message]

The subtitle text is nearly identical across 15+ pages. This is the single most obvious sign of machine-generated content on the site — not because CTAs are bad, but because the wording is so uniform it reads as copy-pasted from a template.

**Suggested fix:** Write 4-5 different CTA subtitle variations and rotate them. Examples:
- "Talk through your situation with someone who's seen cases like yours."
- "We'll look at your profile and tell you what's realistic."
- "Schedule a call and we'll map out your next steps."
- "Book a consultation. We'll give you a straight answer about where you stand."

---

## Sitewide Pattern: "Let's break it/them down"

This exact phrase appears on 4 pages:
- `how-immigration-works.html`: "Let's break it down in a clear and simple way."
- `citizenship.html`: "Let's break them down in a simple and clear way."
- `coming-to-canada-temporarily.html`: "Let's break them down in a simple and clear way."
- `why-work-with-consultant.html`: "Let's talk about why."

The repetition makes these feel generated from the same prompt. Each instance should be unique or removed entirely.

---

## Quick Wins (Highest Impact, Lowest Effort)

1. **Delete all "Let's break it/them down" lines** across the site. They add nothing and are the most recognizable AI pattern. (4 pages, ~30 seconds each)

2. **Vary the CTA subtitle text** across pages. Write 4-5 unique versions and distribute them. (1 hour)

3. **Rewrite Svetlana's bio on our-team.html.** The current version uses triple-stacked promotional language ("passionate about," "commitment to," rule-of-three x2). Replace with a brief, personal statement that sounds like a real person wrote it. (15 minutes)

4. **Fix the motivational closers** on `why-work-with-consultant.html`, `blog-faster-pr-already-in-canada.html`, and `blog-ontario-new-rules-newcomers.html`. Cut or rewrite the generic "your future is too important" / "your skills are needed" lines. (15 minutes)

5. **Replace "vibrant" with "active" or "established"** in `blog-french-speaking-immigrants.html`. (30 seconds)

6. **Change "The Bottom Line" heading** in `blog-express-entry-2026.html` to something less generic. (30 seconds)

---

## Final Assessment

This site is in good shape. The writing quality is well above average for professional services websites. The blog posts in particular are strong — many of them (Ukraine extension, draw history, easiest provinces, CRS minimum score) have genuine analytical depth and a voice that feels human and knowledgeable.

The issues that do exist are mostly pattern repetition (same transitions, same CTA copy) rather than the kind of bloated, promotional AI writing that makes readers cringe. The quick wins listed above would address the most visible patterns with minimal effort.
