"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addVerb,
  removeVerb,
  setSelectedVerbs,
} from "@/features/selectedVerbsSlice";
import { RootState } from "@/types/typeVerbs";
import { PagesUrl } from "@/data/urls";

export default function ChooseTensePage() {
  const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
  );

  return (
    <div>
      <div>Hello choose tense</div>
      {selectedVerbs.length > 0 && <div>there are some</div>}
      {selectedVerbs} asd
    </div>
  );
}
