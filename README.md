# Next-Gen Learning Dashboard 🚀

A premium, highly interactive, AI-powered learning dashboard built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Supabase SSR**.

This project provides students with a visually stunning user experience featuring personalized learning stats, dynamic active course tracking, and an interactive contribution-style learning heatmap, all backed by a real-time relational database.

---

## 🛠️ Tech Stack & Key Technologies

| Technology | Purpose | Key Benefit |
| :--- | :--- | :--- |
| **Next.js 16 (App Router)** | Framework | Leverage React Server Components, Suspense boundaries, SSR layouts, and API routing. |
| **React 19** | Core UI library | Utilizes modern React features, hooks, and Concurrent rendering. |
| **Tailwind CSS v4** | Styling | Modern, performance-focused, CSS-first Tailwind engine with CSS variable styling. |
| **Framer Motion** | Animation | Fluid page entrance animations, hover micro-interactions, and real-time mouse-tracking glow templates. |
| **Supabase SSR** | Backend-as-a-Service | Secure database interactions via SSR client context and cookie-based session hydration. |
| **Lucide React** | Icons | Crisp, clean SVG icon assets matching the modern visual language. |

---

## 🏛️ Architectural Choices

```mermaid
graph TD
    subgraph Server (SSR / Server Component)
        Page[app/page.tsx] -->|Fetch Profile| getUserData[getUserData]
        Page -->|Fetch Courses| getCoursesData[getCoursesData]
        getUserData -->|Supabase Client Server| SupabaseServer[(Supabase DB)]
        getCoursesData -->|Supabase Client Server| SupabaseServer
    end

    subgraph Client (Interactive UI Components)
        Page -->|Injects Data| Hero[Hero.tsx Client Component]
        Page -->|Injects Data| Active[Active.tsx Client Component]
        Page -->|Static Layout| Sidebar[Sidebar.tsx Client Component]
        Page -->|Static Layout| Nav[Nav.tsx Client Component]
        Page -->|Static Layout| Streek[Streek.tsx Client Component]
        
        Hero -->|Uses| PuzzleCardHero[PuzzleCard.tsx]
        Active -->|Uses| PuzzleCardActive[PuzzleCard.tsx]
        Streek -->|Uses| PuzzleCardStreek[PuzzleCard.tsx]
        
        Sidebar -->|Consumes Context| SidebarContext[SidebarContext.tsx]
        Nav -->|Consumes Context| SidebarContext
    end
    
    classDef server fill:#1e1a4a,stroke:#7B68EE,stroke-width:2px,color:#fff;
    classDef client fill:#16172a,stroke:#4BC0C8,stroke-width:2px,color:#fff;
    classDef db fill:#0d0d18,stroke:#89CFF0,stroke-width:1px,color:#fff;
    class Page,getUserData,getCoursesData server;
    class Hero,Active,Sidebar,Nav,Streek,PuzzleCardHero,PuzzleCardActive,PuzzleCardStreek,SidebarContext client;
    class SupabaseServer db;
```

### 1. Server-First Data Fetching with Suspense
The landing route `app/page.tsx` runs entirely on the server. Instead of fetching data client-side and showing a generic page loader, we fetch the profile stats and active courses data concurrently on the server.
* **Perceived Performance**: By wrapping asynchronous sub-fetches (`HeroSection` and `ActiveCoursesSection`) in independent React `<Suspense>` boundaries, we render the layout shell immediately while the server-side queries resolve.
* **Fallbacks**: While fetching, the UI displays bespoke shimmer skeletons (`HeroSkeleton` and `ActiveCoursesSkeleton`) that perfectly align with final card layouts.

### 2. Context-Driven Responsive Layout
To avoid layout shift, the layout sidebar toggle state is globalized inside `SidebarContext.tsx` via the React Context API. The state persists on client reloads using browser `localStorage`. 

### 3. SVG-Clipped Visual Identity
For a distinct "Next-Gen" aesthetic, components are structured with a custom `PuzzleCard` wrapper. It generates SVG-based clipping paths dynamically to represent interlocking puzzle edges (tabs and cutouts).

---

## ⚡ Server vs. Client Component Split

To maximize loading speeds, minimize client bundle sizes, and keep the application interactive, components were strictly divided by their operational needs:

### 📥 Server Components (Fetch & Feed)
* **`app/page.tsx`**: Serves as the database controller, loading data from Supabase servers and serving it to downstream client components.
* **`lib/api/course/get.ts` & `lib/api/profile/get.ts`**: Contain SQL selectors that request records from tables `courses` and `users`. These execute exclusively on the server, keeping credentials and SQL syntax out of the client bundle.
* **`utils/supabase/server.ts`**: Bootstraps the server-side Supabase client (`createServerClient`), reading user context and cookies securely.

### 🖱️ Client Components (Animate & Interact)
* **`component/PuzzleCard.tsx`**: Uses Framer Motion's `useMotionValue` and `useMotionTemplate` for real-time mouse tracking (generating a premium glassmorphic hover glow effect) and tracks dimensions using a `ResizeObserver`.
* **`component/SidebarContext.tsx` & `Sidebar.tsx`**: Manage user interaction toggles, animating sidebar transitions and local storage.
* **`component/streek.tsx` (Streak Heatmap)**: Renders calendar days and custom tooltips, handling user-hover events dynamically.
* **`component/hero.tsx` & `component/active.tsx`**: Display dynamic states with Entrance animations (Spring physics in Framer Motion) and fallback caching when database query failures occur.

---

## 🚧 Challenges Faced & Solutions

### 1. Hydration Mismatches on Random Heatmap Data
* **Problem**: In the absence of full database records, the contribution heatmap generates randomized daily learning scores. If generated on the server during pre-rendering, the output inevitably differs from the random arrays generated on the client, throwing a React hydration error.
* **Solution**: Implemented a `mounted` state inside `streek.tsx` triggered by a client-side `useEffect`. The component renders blank placeholder cards during the SSR phase and fills them with randomized logs only after reaching the client.

### 2. Scalable Clip Paths & Responsive Clipping
* **Problem**: SVG clip paths utilize static pixel measurements. On mobile viewports and tablets, clipping puzzle shapes leads to overflowing text or cramped margins, as the screen size shrinks below the path's dimensions.
* **Solution**: Developed a dual-mode layout in `PuzzleCard.tsx`. It uses a `ResizeObserver` to recompute SVG bounding coordinates dynamically on desktop screen sizes. Additionally, the component checks screen width and gracefully degrades to standard rounded CSS borders on screen resolutions below `1280px` (non-desktop).

### 3. Cookies and Server Component Limitations
* **Problem**: Next.js Server Components cannot set cookies mid-render because HTTP headers have already been streamed to the browser. Bootstrapping Supabase using standard methods inside deep-nested components throws a write error.
* **Solution**: Configured exception handling inside the `setAll` cookie handler within `utils/supabase/server.ts`. This permits passive session cookie reads during render pipelines while delegating active cookie writing to Middleware functions and Server Actions.

### 4. Transitioning to Tailwind CSS v4
* **Problem**: Tailwind CSS v4 relies on a CSS-first approach, removing the standard `tailwind.config.js` and altering how custom fonts, colors, and layout theme extensions are defined.
* **Solution**: Configured all theme modifications (including Geist fonts, background presets, and border/card colors) directly inside `app/globals.css` using the new `@theme inline` syntax.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have your Supabase credentials configured.

1. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to see the dashboard.
