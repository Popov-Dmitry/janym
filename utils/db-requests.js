import { createClient } from "@/utils/supabase";

export const getPreviews = async () => {
  const supabase = await createClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, title, price");

  return data;
}

export const getProduct = async (slug) => {
  const supabase = await createClient();
  const { data } = await supabase.from("products")
    .select("title, description, material, color, size, price, images")
    .eq("slug", slug);

  return data[0];
};