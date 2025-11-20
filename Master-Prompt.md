# **BESTech Competition – Master Prompt Template (Use After the Challenge is Revealed)**

Below is a structured set of questions and placeholders.
Before the event, keep this template **empty**.
During the event, paste the **official challenge text** into the `[COMPETITION_DESCRIPTION]` field and send the whole template to GPT/Copilot.

---

# **MASTER PROMPT TEMPLATE START**

**BESTech Rome 25 – Challenge Understanding + Strategy Builder**

**Challenge Description (paste the entire problem statement here):**
`[COMPETITION_DESCRIPTION]`

**Evaluation Criteria (paste if provided):**
`[EVALUATION_CRITERIA]`

**Rules & Constraints (paste if provided):**
`[COMPETITION_RULES]`

**Inputs Provided (data, APIs, devices, formats):**
`[INPUTS_PROVIDED]`

**Outputs Required:**
`[OUTPUTS_REQUIRED]`

---

## **SECTION A – Deep Understanding of the Challenge**

Please analyze the description and answer:

1. **What is the core problem in one clear sentence?**
2. **Who is the main user?**
3. **What user pain points or needs does the challenge want us to address?**
4. **What is the minimum viable functionality required to satisfy the challenge?**
5. **What are the explicit constraints (time, resources, technology)?**
6. **What hidden or implicit constraints should we consider?**
7. **What are the deliverables that must be shown to judges?**
8. **What elements in the challenge description have the highest scoring impact?**

---

## **SECTION B – Solution Space Exploration**

1. Provide **3–5 distinct solution concepts**, each with:

   * Concept name
   * Short description
   * Pros
   * Cons
   * Estimated implementation time
   * Difficulty level

2. Rank them by:

   * **Impact**
   * **Feasibility in 5–7 hours**
   * **Simplicity**
   * **Potential to impress judges**

3. Recommend **ONE** concept as the best for this specific competition, **with justification**.

---

## **SECTION C – MVP Definition**

Define the minimal product we must build in order to **present a complete working demo**:

1. **Main user story** in one sentence.
2. **3–4 key features** required for the MVP.
3. **What can be removed** without losing the core functionality?
4. **What “wow features”** could be added if time remains?

---

## **SECTION D – Technical Architecture (Built for Speed)**

Based on the selected solution, recommend a **fastest, simplest, stable** architecture with:

1. **Frontend stack:**
   `[React / Next.js / Vite / plain HTML depending on challenge]`

2. **Backend stack:**
   `[FastAPI / Node.js / Express depending on challenge]`

3. **Database or in-memory store:**
   `[SQLite / JSON file / in-memory dictionary]`

4. **Key endpoints:**

   * `[ENDPOINT_1]`
   * `[ENDPOINT_2]`
   * `[ENDPOINT_3]`

5. **Data model:**
   Provide minimal JSON schemas for:

   * Inputs
   * Outputs
   * Internal processing

6. **System diagram:**
   Provide a clear architecture diagram in text (arrows, components).

---

## **SECTION E – Development Workflow (5–7 Hours)**

Split the work into precise phases:

### **1. 09:30–11:00 — Understanding + Architecture**

* Extract requirements
* Decide MVP
* Assign roles
* Build repo structure

### **2. 11:00–13:00 — First working prototype**

* Implement backend skeleton
* Implement frontend skeleton
* Ensure “Hello World end-to-end” works

### **3. 14:00–15:30 — Complete MVP**

* Implement main features
* Basic UI
* Connect API

### **4. 15:30–17:15 — Add 1 WOW feature + Presentation**

* Add optional enhancement
* Draft slides
* Run full demo

### **5. 17:30–18:30 — Final pitch**

Provide specific tasks for each phase based on the challenge.

---

## **SECTION G – Presentation Structure (5–7 minutes)**

Create a pitch with:

1. **Problem** (clear & concise)
2. **Solution** (short demo)
3. **Architecture** (diagram + key choices)
4. **Impact** (why this matters)
6. **Future improvements**

Provide:

* A short script for each part
* Key sentences to use
* Optional visuals

---

## **SECTION H – Risk Reduction Checklist**

Ask GPT:

1. What are the biggest risks for **not finishing in time**?
2. What features should be **cut first** if time is tight?
3. What are possible technical pitfalls?
4. What should we absolutely avoid?
5. What can we prepare in advance (structure, boilerplate)?

---

## **SECTION I – Output: Complete Solution Plan**

After processing everything, GPT should output:

* **A single recommended solution**
* **Full technical architecture**
* **MVP spec**
* **Workflow schedule**
* **Task assignment**
* **Final presentation outline**

---

# **MASTER PROMPT TEMPLATE END**