// import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5; // Revalidate every 5 seconds
// export const dynamic = "force-dynamic"; // Force dynamic

export default async function MessagesPage() {
  // unstable_noStore(); // Disable caching

  // const response = await fetch("http://localhost:8080/messages", {
  // cache: "no-store", // Uncomment this line to disable caching
  // next: {
  //   revalidate: 5, // Revalidate every second
  // },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
