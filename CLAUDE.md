# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **AI Tools Specialist test assignment** — a mini orders analytics dashboard integrating RetailCRM, Supabase, Vercel, and Telegram. The goal is to demonstrate AI-assisted development from data ingestion to a deployed dashboard.

## Tech Stack

| Concern | Choice |
|---|---|
| Frontend + API routes | Next.js 14 (App Router) |
| Charts | Recharts |
| DB client | `@supabase/supabase-js` |
| Styles | Tailwind CSS |
| ETL scripts | Node.js with `tsx` |

## Architecture

```
mock_orders.json
      │
      ▼
scripts/upload-to-retailcrm.ts   ← run once to seed RetailCRM
      │
      ▼
RetailCRM REST API
      │
scripts/sync-to-supabase.ts      ← run manually or via POST /api/sync
      │
      ├──▶ Supabase `orders` table
      │         │
      │         └──▶ src/app/page.tsx (server component, reads DB directly)
      │
      └──▶ Telegram Bot (fires inline when synced order total > 50,000 ₸)
```

### Design decisions
- **Sync is pull-based** from RetailCRM, not webhook-based — simpler for this scope
- **Dashboard is a Next.js server component** — reads Supabase server-side, no client fetching or loading states
- **Telegram alert fires from the sync script**, not a Supabase trigger — avoids Edge Functions setup
- `/api/sync` route lets you trigger a sync from the dashboard UI with a button

## Folder Structure

```
/
├── mock_orders.json
├── .env.local
├── package.json
│
├── scripts/
│   ├── upload-to-retailcrm.ts   # one-time: POST all 50 orders to RetailCRM
│   └── sync-to-supabase.ts      # pull from RetailCRM → upsert Supabase + Telegram alert
│
└── src/
    └── app/
        ├── layout.tsx
        ├── page.tsx             # main dashboard page
        ├── components/
        │   ├── StatsCards.tsx   # total orders, revenue, avg order value
        │   ├── StatusChart.tsx  # bar chart: orders by status
        │   ├── UtmChart.tsx     # pie chart: orders by utm_source
        │   └── OrdersTable.tsx  # recent orders list
        └── api/
            └── sync/
                └── route.ts     # POST /api/sync — triggers sync on demand
```

## Supabase Table

```sql
create table orders (
  id         text primary key,   -- RetailCRM order id
  first_name text,
  last_name  text,
  phone      text,
  status     text,
  total      numeric,            -- computed: sum(quantity * initialPrice)
  city       text,
  utm_source text,
  items      jsonb,              -- raw items array preserved
  synced_at  timestamptz default now()
);
```

## mock_orders.json Schema

```json
{
  "firstName", "lastName", "phone", "email",
  "orderType": "eshop-individual",
  "orderMethod": "shopping-cart",
  "status": "new",
  "items": [{ "productName", "quantity", "initialPrice" }],
  "delivery": { "address": { "city", "text" } },
  "customFields": { "utm_source" }
}
```

`total` is not in the raw data — compute as `sum(item.quantity * item.initialPrice)` before upserting or evaluating the Telegram threshold.

## Common Commands

```bash
# Run ETL scripts
npx tsx scripts/upload-to-retailcrm.ts
npx tsx scripts/sync-to-supabase.ts

# Dev server
npm run dev

# Build & deploy (Vercel handles this automatically on push)
npm run build
```

## Environment Variables

Set in `.env.local` locally and as Vercel environment variables in production:

```
RETAILCRM_URL=https://<your-site>.retailcrm.ru
RETAILCRM_API_KEY=
SUPABASE_URL=
SUPABASE_ANON_KEY=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

## Deliverables

1. Deployed dashboard URL (Vercel)
2. This GitHub repo with source code
3. Screenshot of a Telegram notification for an order > 50,000 ₸
4. README section: AI prompts used, obstacles hit, and how they were resolved

Submit via Telegram to @DmitriyKrasnikov.
