-- Pregnancy Companion V2 — Supabase Schema
-- Run this in the Supabase SQL Editor after creating your project.
-- Enable Email auth in: Authentication > Providers > Email

-- Profiles (extends auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz default now()
);
alter table public.profiles enable row level security;
create policy "Users can view and edit their own profile"
  on public.profiles for all using (auth.uid() = id);

-- Settings
create table if not exists public.settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  due_date date,
  notification_time text,
  partner_mode boolean default false,
  updated_at timestamptz default now()
);
alter table public.settings enable row level security;
create policy "Users can manage their own settings"
  on public.settings for all using (auth.uid() = user_id);

-- Birth plans
create table if not exists public.birth_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  answers jsonb default '{}',
  updated_at timestamptz default now(),
  unique(user_id)
);
alter table public.birth_plans enable row level security;
create policy "Users can manage their own birth plan"
  on public.birth_plans for all using (auth.uid() = user_id);

-- Bookmarks
create table if not exists public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  item_type text not null,
  item_id text not null,
  title text not null,
  created_at timestamptz default now(),
  unique(user_id, item_type, item_id)
);
alter table public.bookmarks enable row level security;
create policy "Users can manage their own bookmarks"
  on public.bookmarks for all using (auth.uid() = user_id);

-- User progress (tasks, lessons, practices)
create table if not exists public.user_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  item_type text not null,   -- 'task' | 'lesson' | 'practice'
  item_id text not null,
  completed boolean default false,
  completed_at timestamptz,
  updated_at timestamptz default now(),
  unique(user_id, item_type, item_id)
);
alter table public.user_progress enable row level security;
create policy "Users can manage their own progress"
  on public.user_progress for all using (auth.uid() = user_id);

-- Hospital bag items
create table if not exists public.hospital_bag_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  item_id text not null,
  category text not null,
  item_name text not null,
  packed boolean default false,
  photo_url text,
  notes text,
  updated_at timestamptz default now(),
  unique(user_id, item_id)
);
alter table public.hospital_bag_items enable row level security;
create policy "Users can manage their own hospital bag"
  on public.hospital_bag_items for all using (auth.uid() = user_id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
