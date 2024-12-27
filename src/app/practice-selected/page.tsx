"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function PracticeSelected() {
    const dispatch = useDispatch();
    const selectedVerbs = useSelector(
    (state: RootState) => state.selectedVerbs.selectedVerbs,
    );

    return (
        <div>
        a
        <div>{selectedVerbs}</div>
        <div>asd</div>

        </div>
    )
}