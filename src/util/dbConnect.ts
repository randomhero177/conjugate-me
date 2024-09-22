import clientPromise from "@/plugins/mongodb";

let isConnected = false; // Keep track of connection state

export default async function dbConnect() {
  if (isConnected) {
    console.log(isConnected);
    return; // If connected, do nothing
  }

  const client = await clientPromise; // Await clientPromise to resolve the connection
  isConnected = true; // Set the connection status manually
  console.log(isConnected);
  // You can also optionally return the `db` if needed
  return client;
}
