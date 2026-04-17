// src/app/components/UtmChart.tsx
// Pie chart showing the share of orders by marketing channel (utm_source).
// Client component ("use client") because Recharts requires browser APIs.

// UtmChart({ data })
//   Receives an array of { utm_source, count } from page.tsx.
//   Renders a Recharts <PieChart> where each slice represents one utm_source (instagram, google, etc.).
//   Includes a legend mapping slice colours to source names.
