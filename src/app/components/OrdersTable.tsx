// src/app/components/OrdersTable.tsx
// Table listing the 20 most recent orders with key fields.
// Pure presentational component — receives all data as props from page.tsx.

// OrdersTable({ orders })
//   Receives an array of order rows from page.tsx.
//   Renders a table with columns: #, Customer, City, Status, UTM Source, Total (₸), Synced At.
//   Highlights rows where total > 50,000 ₸ (the Telegram alert threshold) with a distinct background.
