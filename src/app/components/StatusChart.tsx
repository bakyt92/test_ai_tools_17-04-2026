// src/app/components/StatusChart.tsx
// Bar chart showing the distribution of orders across different statuses (e.g. new, processed, completed).
// Client component ("use client") because Recharts requires browser APIs.

// StatusChart({ data })
//   Receives an array of { status, count } from page.tsx.
//   Renders a Recharts <BarChart> with status on the X axis and order count on the Y axis.
//   Each bar is labelled with its count value.
