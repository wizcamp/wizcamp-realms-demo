# Session 6 — Browser Storage & Caching

Adding Question Caching 💾

You're about to supercharge your trivia game with browser storage and caching! This guide walks you through implementing localStorage to store API responses, understanding performance optimization techniques, and building a robust caching system that makes your game lightning-fast. Ready to experience the magic of instant loading? Let's go!

## Table of Contents

- [Access Your Codespace](#access-your-codespace)
- [Why Caching Matters](#why-caching-matters)
- [Exploring Browser Storage](#exploring-browser-storage)
- [Building Cache Helper Functions](#building-cache-helper-functions)
- [Updating fetchQuestions with Caching](#updating-fetchquestions-with-caching)
- [Testing Your Cache](#testing-your-cache)
- [Essential Terms](#essential-terms)
- [Ask the AI](#ask-the-ai)

<a id="access-your-codespace"></a>

## ☁️ Access Your Codespace

Visit [github.com/codespaces](https://github.com/codespaces) to relaunch your Codespace from Session 5.

<a id="why-caching-matters"></a>

## ⚡ Why Caching Matters

Before we dive into code, let's understand why **caching** is crucial for modern web applications.

**The Problem:** Every time you click a zone, your game makes a network request to the OpenTrivia Database. This means:
- **Slow loading** - Network requests take time
- **Wasted bandwidth** - Downloading the same questions repeatedly
- **Rate limiting** - APIs limit how often you can request data (OpenTrivia allows one request per 5 seconds)
- **Poor user experience** - Users wait for content they've already seen

**The Solution:** **Caching** stores API responses in the browser so subsequent requests are instant.

### 💡 Why This Matters

**Caching** is a fundamental performance optimization technique used by every major website and app. When you visit YouTube, Netflix, or Instagram, they cache images, videos, and data locally so your experience is fast and smooth. **Rate limiting** means APIs restrict request frequency to protect their servers — caching helps you avoid these limits while providing a better user experience.

### 🏆 Bonus Challenge

Think about apps you use daily — can you identify what data they might be caching to improve performance?

<a id="exploring-browser-storage"></a>

## 🗄️ Exploring Browser Storage

Let's understand **localStorage** — your browser's built-in storage system for saving data locally.

**localStorage** is like a digital filing cabinet in your browser where you can store **key-value pairs** of information. Unlike variables that disappear when you refresh the page, localStorage data persists until you explicitly remove it.

### Common localStorage Use Cases:
- **User preferences** - Theme, language, font size
- **Game progress** - Completed levels, high scores, settings
- **Form data** - Draft messages, shopping cart contents
- **API responses** - Cached data for faster loading

### localStorage Lifecycle (CRUD Operations):

```
┌─────────────────────────────────────────────────────────────────┐
│                    localStorage Lifecycle                       │
├─────────────────────────────────────────────────────────────────┤
│ CREATE/UPDATE: localStorage.setItem('key', 'value')             │
│ READ:          const value = localStorage.getItem('key')        │
│ DELETE:        localStorage.removeItem('key')                   │
│ CHECK:         if (localStorage.getItem('key')) { ... }         │
└─────────────────────────────────────────────────────────────────┘
```

### 💡 Why This Matters

**localStorage** provides persistent storage that survives browser refreshes and even computer restarts. It's **synchronous** (blocking), so use it wisely with small to medium amounts of data. For your trivia game, it's perfect for caching question sets that are relatively small but expensive to fetch over the network.



<a id="building-cache-helper-functions"></a>

## 🔧 Building Cache Helper Functions

Time to build the foundation of your caching system! Let's create three helper functions that handle all the localStorage complexity.

1. **Open `src/services/trivia.js`**
2. **Add all three cache helper functions** after the existing helper functions:

   ```javascript
   // Generate cache key for localStorage
   function getCacheKey(zoneId) {
     return `trivia_questions_zone_${zoneId}`;
   }

   // Get cached questions for a zone
   function getCachedQuestions(zoneId) {
     const cacheKey = getCacheKey(zoneId);
     const cached = localStorage.getItem(cacheKey);
     return cached ? JSON.parse(cached) : null;
   }

   // Save questions to cache
   function setCachedQuestions(zoneId, questions) {
     const cacheKey = getCacheKey(zoneId);
     localStorage.setItem(cacheKey, JSON.stringify(questions));
   }
   ```

### Example Usage:
```javascript
// This is what your functions do:
setCachedQuestions(0, questions);  // Store questions for zone 0
const cached = getCachedQuestions(0);  // Get questions for zone 0 (or null if none)
```

### 💡 Why This Matters

**The Ternary Operator:** Notice `cached ? JSON.parse(cached) : null` in `getCachedQuestions` — this is the **ternary operator** (`condition ? valueIfTrue : valueIfFalse`). It's a concise way to write: "If cached data exists, parse it; otherwise return null."

**Helper functions** abstract the complexity of localStorage operations. `getCacheKey` creates unique identifiers, `getCachedQuestions` handles **deserialization** with `JSON.parse()`, and `setCachedQuestions` handles **serialization** with `JSON.stringify()`.

<a id="updating-fetchquestions-with-caching"></a>

## 🔄 Updating fetchQuestions with Caching

Now let's integrate your cache functions into the main `fetchQuestions` function to implement the complete caching flow.

1. **Add cache checking** at the beginning of `fetchQuestions` (before the zone lookup):

   ```javascript
   export async function fetchQuestions(zoneId, count = null) {
     // Check cache first
     const cachedQuestions = getCachedQuestions(zoneId);
     if (cachedQuestions) {
       console.log(`Cache hit for zone ${zoneId}`);
       return cachedQuestions;
     }

     console.log(`Cache miss for zone ${zoneId} - fetching from API`);

     const zone = getZoneById(zoneId);
     // ... rest of existing code
   ```

2. **Add cache storage** after successful data transformation (before the return statement):

   ```javascript
   // Transform each API question into our game format
   const questions = data.results.map(apiQuestion => transformQuestion(apiQuestion));
   
   // Store in cache after successful fetch
   setCachedQuestions(zoneId, questions);
   
   
   return questions;
   ```

### 💡 Why This Matters

This implements the classic **cache-aside pattern** used in professional applications: check cache first, fetch from source on miss, store result in cache. The console logging helps you understand when cache hits and misses occur, which is valuable for debugging and performance monitoring.

<a id="testing-your-cache"></a>

## 🧪 Testing Your Cache

Let's see your caching system in action! You'll observe cache **misses**, **hits**, and **persistence** using DevTools and localStorage.

### 🔍 Setup: Open DevTools and Locate Local Storage

- Press F12 or right-click → **Inspect**
- Navigate to:
  - **Chrome/Edge**: Application tab
  - **Firefox**: Storage tab
- In the sidebar, expand **Local Storage** and select your site's domain (e.g., `http://localhost:5173`)
- Keep DevTools open — you'll watch cache entries appear in real-time

---

### 🧊 First-Time Load: Observe a Cache Miss

- Click the active zone for the **first time**
- In the **console**, look for: `Cache miss for zone X - fetching from API`
- In **localStorage**, confirm:
  - A new entry appears: `trivia_questions_zone_0`
  - It contains serialized JSON data
- Click the entry to inspect the cached questions

---

### 🔁 Repeat Load: Confirm a Cache Hit

- Click the **same zone again**
- In the **console**, look for: `Cache hit for zone X`
- In **localStorage**, verify:
  - The entry remains unchanged
  - No new data was fetched

---

### 🔄 Page Reload: Test Cache Persistence

- Refresh the browser
- Click the same zone again
- Confirm:
  - Console still shows `Cache hit`
  - Cached entry is still present in localStorage

---

### 🧹 Manual Clear: Test Cache Reset

- In localStorage, **right-click** the cache entry → Delete
- Click the zone again
- Confirm:
  - Console shows `Cache miss`
  - Entry repopulates with fresh data

### Cache Data Flow:

```
User clicks zone → Check cache → Cache hit? → Return cached data
                                     │
                                     ▼ (Cache miss)
                              Fetch from API → Store in cache → Return data
```

### 💡 Why This Matters

**localStorage inspection** gives you X-ray vision into your cache system. You can see exactly what data is stored, verify serialization is working correctly, and understand the complete cache lifecycle. This is essential for debugging and understanding how browser storage works in real applications.

<a id="essential-terms"></a>

## 📚 Essential Terms

_Quick reference for all the caching and browser storage concepts you just learned:_

| Term | Definition | Why it matters |
|------|------------|----------------|
| 💾 localStorage | Browser storage that persists data as key-value pairs across sessions and page refreshes. | Your trivia questions stay cached even after closing and reopening the browser, providing instant loading. |
| ⚡ caching | Storing frequently accessed data in fast storage to avoid expensive operations like network requests. | Makes your game feel instant and professional by eliminating repeated API calls for the same questions. |
| 🎯 cache hit | When requested data is found in cache and can be returned immediately without external requests. | Your zones load instantly on subsequent clicks, providing smooth user experience. |
| 🔍 cache miss | When requested data is not in cache and must be fetched from the original source. | Triggers API request to OpenTrivia Database and stores result for future cache hits. |
| 📦 serialization | Converting JavaScript objects into text format for storage using JSON.stringify(). | localStorage only stores strings, so your question objects must be serialized before storage. |
| 🔄 deserialization | Converting stored text back into JavaScript objects using JSON.parse(). | Transforms cached text back into usable question objects for your game. |
| 🚦 rate limiting | API restrictions on request frequency to prevent server overload and ensure fair usage. | OpenTrivia Database limits requests to once every 5 seconds — caching helps avoid these limits. |
| 🔑 key-value pairs | Data storage format where each piece of information has a unique identifier (key) and associated data (value). | localStorage uses this format: your cache keys identify zones, values contain question data. |
| ❓ ternary operator | Concise conditional syntax using ? and : for simple if/else logic in expressions. | Used in your cache retrieval: `cached ? JSON.parse(cached) : null` — clean and readable. |

<a id="ask-the-ai"></a>

## 🤖 Ask the AI — Understanding Caching

You just built your first caching system with localStorage and helper functions — great work!

Here are some key questions to ask your AI assistant to deepen your understanding of what you just built:

- **Why is caching so important for web apps and user experience?**
- **How does localStorage work and why does it only store strings?**
- **What happens when I use JSON.stringify and JSON.parse with my question data?**
- **Why do we need helper functions like getCacheKey and getCachedQuestions?**
- **How does the cache-aside pattern work in my fetchQuestions function?**
- **What would happen if I didn't have caching in my trivia game?**
- **How can I use the browser DevTools to debug localStorage issues?**

---

### 💬 Pro Tip:

Caching is everywhere in professional development — from browser caches to CDNs to database query caches. The patterns you learned today (check cache first, store on miss, handle serialization) apply to caching systems at every scale. Master these fundamentals and you'll understand how the entire internet stays fast!