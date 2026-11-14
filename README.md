# Good Deeds 2.0

**Small actions. A better world.** A frontend-only prototype of a positive social platform where people share good deeds, discover causes and encourage each other.

Every person, post and interaction in this app is fictional demo data. Nothing is sent to a server.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build && pnpm start   # production build
```

Requires Node 20.9+ and pnpm 10 (`corepack enable` gives you pnpm).

## Demo accounts

| Persona | Email | Password |
| --- | --- | --- |
| Sarah Green: trees, gardens, cleanups | sarah@demo.gooddeeds.app | Sarah123 |
| Aarav Helps: food drives, volunteering | aarav@demo.gooddeeds.app | Aarav123 |
| Maya Cares: strays, rescue, shelters | maya@demo.gooddeeds.app | Maya123 |

The credentials are checked in the browser for demo purposes only. They are not real authentication. Use the account menu (sidebar on desktop, avatar on mobile) to switch persona, log out or **Reset demo data**.

## Deploy to Vercel

1. Push this folder to a Git repository.
2. In Vercel choose **Add New → Project**, import the repo and keep the detected **Next.js** preset. Vercel picks up pnpm from `pnpm-lock.yaml` automatically.
3. Click **Deploy**. No environment variables are needed.

Or from the CLI: `npx vercel` and then `npx vercel --prod`.

## Structure

```
src/
  app/            Routes (App Router). (app)/ holds the signed-in shell: feed, discover, create,
                  notifications, saved, u/[username], deed/[id]
  components/
    ui/           shadcn-style primitives (Radix + cva + Tailwind tokens)
    layout/       App shell, sidebar, bottom nav, right rail, account menu
    deeds/ profile/ discover/ notifications/ auth/ common/
  config/         Categories, badges, routes, image catalogue, demo accounts
  data/seed/      Fictional community: 26 people, 63 deeds, comments, follows, activities
  services/       Service contracts + browser mock implementation (localStorage)
  store/          Zustand stores (session, users, deeds, notifications, activities, feed filters)
  hooks/          Business logic used by components
  lib/            Selectors, recognition rules, formatting, image prep
  types/          Domain types
```

### Swapping in a real backend

All data access goes through the `Services` interface in `src/services/contracts.ts`. To connect a real API, implement that interface (for example with `fetch`) and change the single export in `src/services/index.ts`. Stores, hooks and components stay as they are.

## Limitations

- Demo data lives in `localStorage`, so it is per browser and per device. Uploaded photos are resized and stored there too, which means very large or very many photos can fill the browser's quota. The app tells you when that happens.
- Deed and profile photos are hot-linked from the Unsplash CDN, so they need an internet connection. If a photo can't load, a styled fallback is shown instead.
- There are no real-time updates. Another persona's activity shows up after you switch accounts or open Notifications.
- Profile editing is not included in this prototype.
