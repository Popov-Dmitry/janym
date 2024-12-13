"use server";

import { createSupabaseServerClient } from "@/utils/supabase-server-client";

export const getPreviews = async () => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, title, price");

  return data;
}

export const getProduct = async (slug) => {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.from("products")
    .select("title, description, material, color, size, price, images")
    .eq("slug", slug);

  return data[0];
};
