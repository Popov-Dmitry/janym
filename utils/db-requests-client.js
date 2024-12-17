import { createSupabaseBrowserClient } from "@/utils/supabase-browser-client";

export const getProductsFromCart = async (productsSlug) => {
  const supabase = await createSupabaseBrowserClient();
  const { data } = await supabase.from("products")
    .select("slug, cover, title, price, size, material")
    .in("slug", productsSlug);

  return data;
};
