// src/app/page.tsx
// Main dashboard page — Next.js server component, runs on the server at request time.
// No client-side data fetching; data is passed as props directly to child components.

// getStats()
//   Queries Supabase for aggregate metrics:
//     - total number of orders
//     - total revenue (sum of all order totals)
//     - average order value
//   Returns a plain object consumed by <StatsCards />.

// getOrdersByStatus()
//   Queries Supabase for count of orders grouped by status field.
//   Returns an array of { status, count } objects consumed by <StatusChart />.

// getOrdersByUtmSource()
//   Queries Supabase for count of orders grouped by utm_source.
//   Returns an array of { utm_source, count } objects consumed by <UtmChart />.

// getRecentOrders()
//   Fetches the 20 most recent orders ordered by synced_at descending.
//   Returns an array of order rows consumed by <OrdersTable />.

// Page (default export)
//   Calls all four data functions in parallel (Promise.all).
//   Renders <StatsCards />, <StatusChart />, <UtmChart />, <OrdersTable />, and a sync trigger button.
