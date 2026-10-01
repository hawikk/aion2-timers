# Atreia Timers — AION 2 (EU / Global) companion

A small web app for a new AION 2 player on the EU servers:

- **Timers** (`/`): live countdowns to world bosses, Spacetime Rifts, the Artifact Siege, hourly Shugo Festival / Dimensional Invasion events, and the daily and weekly resets. Events are sorted by soonest, and anything currently running shows a "Happening now" state. Each time is shown in your local time and in server time. You can filter by category and turn on optional alerts (in-app toasts plus browser notifications) a few minutes before an event starts.
- **Level 45 guide** (`/guide`): what to chase at the level cap (gear path, enhancement rules, content, currencies), plus daily and weekly checklists. Checklist ticks are saved in `localStorage` and clear themselves at the daily or weekly reset.

Every timing carries a confidence badge (Confirmed / Datamined / Estimate) and links to its sources. NC has not published an official Global event schedule, so most times come from community datamines of the Global client.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:43123
```

Production build: `npm run build` writes a fully static site to `out/` (`output: "export"`). Run `npm start` to serve it on port 43123.

## Deploying (GitHub Pages)

The public copy at [hawikk/aion2-timers](https://github.com/hawikk/aion2-timers) is live at **https://hawikk.github.io/aion2-timers/**. On every push to `main`, `.github/workflows/deploy-pages.yml` builds with `PAGES_BASE_PATH=/<repo-name>` (so assets and links resolve under the project sub-path) and publishes `out/` to the `gh-pages` branch. Pages serves that branch. To deploy anywhere else, run `npm run build` and upload `out/`; leave `PAGES_BASE_PATH` unset when serving from a domain root.

## Correcting the schedule

All timed content lives in **`src/data/schedule.ts`**:

- `EVENTS`: each event has a `recurrence` in **server time**, either `{ type: "interval", everyMinutes, firstAt }` or `{ type: "weekly", days, at }`. It also has a `durationMinutes` window for the "Happening now" state, a `confidence` level, and a `timingNote`.
- `RESETS`: daily and weekly reset times.
- `SERVER_CLOCKS` / `DEFAULT_SERVER_CLOCK_ID`: the time zone the server clock runs on. Sources disagree (UTC+9 vs UTC), so the app lets you switch clocks in the header. To check which one is right, compare the in-game Duty Quest reset timer (`J` → Duty) with the app's *Daily reset* card.

Guide copy and checklist items are in `src/data/guide.ts`, and source links are in `src/data/sources.ts`.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (Base UI) · lucide icons · sonner toasts. There is no backend; everything runs in the browser.
