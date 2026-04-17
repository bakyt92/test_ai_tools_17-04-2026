// scripts/sync-to-supabase.ts
// Pulls all orders from RetailCRM and upserts them into Supabase.
// Also fires a Telegram notification for any order whose total exceeds 50,000 ₸.
// Usage: npx tsx scripts/sync-to-supabase.ts

// fetchOrdersFromRetailCRM()
//   Calls GET /api/v5/orders on RetailCRM with pagination support.
//   Collects all pages and returns a flat array of raw RetailCRM order objects.

// computeTotal(items)
//   Receives the items array from a RetailCRM order.
//   Returns the sum of quantity * initialPrice for all items.
//   Used before upsert and before the Telegram threshold check.

// mapToSupabaseRow(retailCRMOrder)
//   Transforms a raw RetailCRM order object into the flat row shape expected by the Supabase `orders` table.
//   Extracts: id, first_name, last_name, phone, status, total (via computeTotal), city, utm_source, items (raw jsonb).

// upsertOrders(rows)
//   Sends the mapped rows to Supabase using an upsert (insert or update on conflict by id).
//   Uses SUPABASE_URL and SUPABASE_ANON_KEY from environment.

// sendTelegramAlert(order)
//   Calls the Telegram Bot API to send a message to TELEGRAM_CHAT_ID.
//   Message includes order id, customer name, total, and city.
//   Only called when order total > 50,000 ₸.

// main()
//   Orchestrates the full sync: fetchOrdersFromRetailCRM → mapToSupabaseRow → upsertOrders.
//   After upsert, iterates rows and calls sendTelegramAlert for qualifying orders.
//   Logs a summary: how many orders synced, how many alerts sent.
