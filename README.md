# Phase 2 — Professional Backend (Express & TypeScript)

A clean, maintainable API rebuilt in **Express + TypeScript** with a **routes → controllers → services** structure.  
Goal: learn professional backend foundations: structure, type safety, predictable builds, and a path toward validation + centralized errors.

---

## Run (dev)

```bash
npm install
npm run dev
```

Server: http://localhost:3000

> Dev uses `ts-node-dev` to run `src/server.ts` with auto-restart.

---

## Build + Run (production-style)

```bash
npm run build
npm start
```

- `npm run build` compiles TypeScript using `tsc` into `dist/`
- `npm start` runs the compiled server: `node dist/server.js`

---

## Project Structure (Lesson 2.1)

```
src/
  app.ts                     # express app setup + middleware + mount routers
  server.ts                  # boots the server (listens on PORT)
  routes/
    index.ts                 # root router (mounts sub-routers)
    health.routes.ts         # /health route definitions
  controllers/
    health.controller.ts     # request/response handling (thin layer)
  services/
    health.service.ts        # business logic (pure functions)
```

Why this structure:
- **Routes** map URL + method → controller
- **Controllers** translate HTTP (req/res) → service calls
- **Services** hold logic you can test without Express

---

## Implemented so far (current)

- GET `/` → 200 OK (text)
- GET `/health` → 200 OK (JSON: `{ "status": "ok" }`)

---

## Curl tests (current)

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/health
```

---

## Environment

Port is read from `PORT`, defaulting to `3000`.

Example:
```bash
PORT=4000 npm run dev
```

---

## Phase 2 Roadmap

### Lessons
- [x] **2.1** Express setup: project structure (routes/controllers/services)
- [ ] **2.2** Basic routing + controller pattern
- [ ] **2.3** Middleware order: JSON parsing, logging
- [ ] **2.4** Central error handler (consistent error shape)
- [ ] **2.5** TypeScript setup: tsconfig + build scripts
- [ ] **2.6** Typed DTOs for request/response payloads
- [ ] **2.7** Validation with Zod (schema-first)
- [ ] **2.8** Env config: dotenv + validated env schema
- [ ] **2.9** Rate limiting basics
- [ ] **2.10** CORS basics (safe defaults)

### Phase 2 Milestones (tags)
- [ ] `phase2-2.4` centralized errors
- [ ] `phase2-2.7` zod validation
- [ ] `phase2-done` Express+TS API complete

---

## Notes (2.1 problems we fixed)

- **TypeScript build errors (module mismatch)**  
  Issue: `verbatimModuleSyntax: true` while compiling as CommonJS caused TS1295/TS1287 errors with ESM-style `import/export`.  
  Fix: disabled/removed `verbatimModuleSyntax` (and removed extra module strictness flags not needed yet).

- **Architecture requirement**  
  Issue: endpoints were initially defined directly in `app.ts` (no separation).  
  Fix: moved logic into `routes/`, `controllers/`, and `services/` so requests flow:  
  `route → controller → service → response`.

---

## Git / Milestone Tags (recommended)

When you finish each milestone, commit and tag:

```bash
git add .
git commit -m "phase2: lesson 2.1 express+ts skeleton with routes/controllers/services"
git tag phase2-2.1
git push
git push --tags
```

Planned milestone tags:
- `phase2-2.4`
- `phase2-2.7`
- `phase2-done`
