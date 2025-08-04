// lib/kv.ts
import { KV } from "@vercel/kv";

// These env vars come from your Vercel project settings
export const kv = new KV({
  url: process.env.KV_REST_URL!,
  token: process.env.KV_REST_TOKEN!,
});
