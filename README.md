# Mind Mate (prototype)
Run: `npm install && npm run dev` (Node 18+). Build: `npm run build`.

**Windows PowerShell:** if `npm` is blocked by script execution policy, use `npm.cmd install` and `npm.cmd run dev`.

Main pages are now available in demo mode without sign-in: AI Companion, Mood Tracker, Journal, Wellness, Psychologists, and About. Sign-in is still a simulated prototype feature.

## How data works
`src/services/storageService.js` saves moods, journal, chats and the simulated user in `localStorage` under the `mindmate:` prefix. It is NOT secure; the Privacy page has a "Delete my local data" button.

## Going to production
- **Real AI:** add a backend route (e.g. `POST /api/chat`) that keeps the API key in a server env var, prepends `SYSTEM_PROMPT` from `aiService.js`, runs crisis detection and rate limiting, then calls the model. Set `USE_BACKEND = true` in `aiService.js`. Never put keys in frontend code.
- **Auth:** replace the simulated sign-in in `pages/Auth.jsx` with Clerk/Auth0/Firebase/Supabase; verify sessions server-side and move data to an encrypted database.
- **Payments:** add a gateway (e.g. Razorpay) via a server-created order and webhook confirmation; the Booking review step marks the spot.
- **Psychologists:** replace `DOCS` in `pages/Booking.jsx` with verified professionals and a scheduling API (availability, conflict-free slots, confirmations).
- **Crisis numbers:** verify `112` and `14416` and add country-specific services.


## Troubleshooting blank pages

This version validates stored mood, journal, and chat data and includes a React error boundary. If a page crashes, it displays an error panel instead of a blank screen. If the companion history was corrupted, it initializes a fresh conversation.
