// src/app/components/StatsCards.tsx
// Displays three summary metric cards at the top of the dashboard.
// Pure presentational component — receives all data as props from page.tsx.

// StatsCards({ totalOrders, totalRevenue, avgOrderValue })
//   Renders three cards side by side:
//     - Total Orders: count of all orders in Supabase
//     - Total Revenue: sum of all order totals formatted as ₸
//     - Avg Order Value: totalRevenue / totalOrders formatted as ₸
