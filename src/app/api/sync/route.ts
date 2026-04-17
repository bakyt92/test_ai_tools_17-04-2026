// src/app/api/sync/route.ts
// Serverless API route: POST /api/sync
// Allows triggering a RetailCRM → Supabase sync from the dashboard UI without running the script manually.

// POST()
//   Imports and calls the same sync logic used in scripts/sync-to-supabase.ts (shared via src/lib/).
//   Returns a JSON response with the number of orders synced and alerts sent.
//   Returns 500 with an error message if the sync fails.
