import type { Metadata } from "next";
import PracticeSelectedClient from "./PracticeSelectedClient";

export const metadata: Metadata = {
  title: "Practice spanish verbs | Free Spanish Conjugation App ",
  description: "Practice spanish conjugations",
};

export default function PracticeSelectedPage() {
  return <PracticeSelectedClient />;
}
