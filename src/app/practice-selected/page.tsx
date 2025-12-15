import type { Metadata } from "next";
import PracticeSelectedClient from "./PracticeSelectedClient";

export const metadata: Metadata = {
  title: "Practice spanish verbs | Spanish Conjugation App free",
  description: "Practice spanish conjugations",
};

export default function PracticeSelectedPage() {
  return <PracticeSelectedClient />;
}
