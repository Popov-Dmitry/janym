import { createClient } from "@/utils/supabase";

export const getPreviews = async () => {
  const supabase = await createClient();
  const { data } = await supabase.from("products").select("slug, cover, title, price");

  return data;
}