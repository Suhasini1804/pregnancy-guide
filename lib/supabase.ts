import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// Returns null if env vars not configured — app works offline without them
export function getSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createSupabaseClient(supabaseUrl, supabaseAnonKey)
  : null;
