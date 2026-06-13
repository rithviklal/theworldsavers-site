# The World Savers Static Site

Static Vite + React site for `theworldsavers.org`.

## Cloudflare Pages

Build command:

```bash
npm run build
```

Build output directory:

```bash
dist
```

## Environment Variables

Use the same Supabase project as Openvol:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

## Supabase

Run:

```text
supabase/create_world_savers_tables.sql
```

This creates the contact form table.
