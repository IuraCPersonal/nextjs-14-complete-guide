import { redirect } from "next/navigation";

import { storePost } from "@/lib/posts";
import PostForm from "@/components/post-form";

export default function NewPostPage() {
  async function createPost(prevState, formData) {
    "use server";

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

  return <PostForm createPost={createPost} />;
}
