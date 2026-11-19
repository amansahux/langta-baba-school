⚡ Next.js Optimization Rules
A clean checklist for building fast, production-ready Next.js applications.
1. Server & Client Components
- Prefer Server Components by default.
- Use "use client" only when necessary.
- Keep Client Component boundaries as small as possible.
- Avoid unnecessary hydration.
- Keep server-only logic out of client bundles.
2. Rendering Optimization
- Choose the appropriate rendering strategy: SSR, SSG, ISR or CSR.
- Avoid unnecessary client-side rendering.
- Use streaming and Suspense where beneficial.
- Avoid unnecessary component re-renders.
- Split large components into smaller components.
3. Data Fetching Optimization
- Fetch data on the server when appropriate.
- Avoid duplicate API requests.
- Use parallel fetching with Promise.all() when requests are independent.
- Fetch only required data.
- Avoid unnecessary sequential requests.
- Use appropriate caching and revalidation.
- Prefetch data when useful.
4. Caching Optimization
- Use Next.js caching features appropriately.
- Configure cache and revalidation strategies based on data freshness.
- Avoid unnecessary cache invalidation.
- Reuse cached responses where appropriate.
- Understand the difference between request, data, and route caching.
5. React Optimization
- Use React.memo() when beneficial.
- Use useMemo() for expensive calculations.
- Use useCallback() when stable function references matter.
- Keep state local.
- Avoid duplicate and derived state.
- Optimize Context providers.
- Use functional state updates where appropriate.
6. API & Backend Optimization
- Optimize Route Handlers and Server Actions.
- Validate incoming requests.
- Avoid unnecessary database queries.
- Fetch only required database fields.
- Use pagination for large datasets.
- Optimize database indexes and queries.
- Cancel unnecessary client-side requests.
7. Code Splitting & Bundle Optimization
- Use dynamic imports for heavy components.
- Lazy-load non-critical components.
- Avoid unnecessary dependencies.
- Use tree-shakable imports.
- Import only required modules.
- Analyze production bundle size.
- Reduce unnecessary JavaScript sent to the browser.
8. Image Optimization
- Use next/image.
- Specify image dimensions.
- Use appropriate image sizes.
- Prefer WebP / AVIF where beneficial.
- Lazy-load below-the-fold images.
- Prioritize important above-the-fold images.
- Use responsive image delivery.
9. Font & Asset Optimization
- Use next/font.
- Load only required font weights.
- Prefer optimized local assets.
- Optimize SVGs and icons.
- Avoid unnecessary third-party assets.
- Prevent layout shifts caused by assets.
10. Input & Event Optimization
- Debounce search inputs.
- Throttle high-frequency events.
- Optimize scroll and resize handlers.
- Use requestAnimationFrame for visual updates where appropriate.
- Clean up event listeners and timers.
- Use AbortController for obsolete requests.
11. Loading UX Optimization
- Implement loading.tsx where appropriate.
- Use Suspense boundaries.
- Create skeleton components.
- Implement proper loading states.
- Handle error states with error.tsx.
- Provide meaningful empty states.
- Use optimistic UI where appropriate.
12. Expensive Computation
- Memoize expensive calculations.
- Optimize filtering and sorting.
- Move static calculations outside components.
- Use Web Workers for heavy client-side CPU tasks.
- Avoid blocking the main thread.
13. Core Web Vitals
- Optimize LCP (Largest Contentful Paint).
- Improve INP (Interaction to Next Paint).
- Prevent CLS (Cumulative Layout Shift).
- Reduce render-blocking resources.
- Minimize main-thread work.
- Optimize critical rendering paths.
14. Performance Debugging
- Use React DevTools Profiler.
- Use Chrome DevTools Network.
- Analyze Chrome Performance recordings.
- Run Lighthouse audits.
- Use Next.js bundle analysis.
- Test production builds.
- Follow Measure → Identify → Fix → Measure.