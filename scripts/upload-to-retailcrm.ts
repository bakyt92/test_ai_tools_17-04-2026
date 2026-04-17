// scripts/upload-to-retailcrm.ts
// Run once to seed RetailCRM with all 50 mock orders.
// Usage: npx tsx scripts/upload-to-retailcrm.ts

// loadOrders()
//   Reads mock_orders.json from disk and parses it into an array of order objects.

// buildRetailCRMPayload(order)
//   Maps a single mock order object to the shape expected by the RetailCRM POST /api/v5/orders endpoint.
//   Computes the order total as sum(item.quantity * item.initialPrice).
//   Maps delivery address, customer fields, items array, and utm_source custom field.

// uploadOrder(payload)
//   Sends a single order to RetailCRM via POST /api/v5/orders.
//   Reads RETAILCRM_URL and RETAILCRM_API_KEY from environment.
//   Returns the created order id from the response.

// main()
//   Calls loadOrders(), iterates over each order, calls buildRetailCRMPayload() then uploadOrder().
//   Logs success/failure per order.
//   Adds a short delay between requests to avoid hitting RetailCRM rate limits.
