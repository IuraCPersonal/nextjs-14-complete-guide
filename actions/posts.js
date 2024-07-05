"use server";

import { redirect } from "next/navigation";
import { storePost } from "@/lib/posts";

export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title) {
    errors.push("Title is required");
  }

  if (!image || !image.size) {
    errors.push("Image is required");
  }

  if (!content) {
    errors.push("Content is required");
  }

  if (errors.length) {
    return { errors };
  }

  await storePost({ title, imageUrl: "", content, userId: 1 });

  redirect("/feed");
}
