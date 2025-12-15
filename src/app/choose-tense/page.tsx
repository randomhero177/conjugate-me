import type { Metadata } from "next";
import ChooseTenseClient from "./ChooseTenseClient";

export const metadata: Metadata = {
  title: "Select tenses | Spanish Conjugation App free",
  description: "Browse and practice all Spanish tenses.",
};

export default function ChooseTensePage() {
  return <ChooseTenseClient />;
}
