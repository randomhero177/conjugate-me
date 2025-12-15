import type { Metadata } from "next";
import AllVerbsClient from "./AllVerbsClient";

export const metadata: Metadata = {
  title: "Select verbs | Spanish Conjugation App free",
  description: "Browse and practice all Spanish verbs.",
};

export default function AllVerbsPage() {
  return <AllVerbsClient />;
}
