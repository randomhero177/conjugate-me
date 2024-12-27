"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types/typeVerbs";
import Pronomb from "@/data/pronomb";
import getRandomInRange from "@/util/getRandom";

export default function PracticeSelected() {
    const dispatch = useDispatch();
    const selectedVerbs = useSelector(
        (state: RootState) => state.selectedVerbs.selectedVerbs,
    );

    const selectedTenses = useSelector(
        (state: RootState) => state.selectedTenses.selectedTenses,
    );

    const [currentPronomb, setCurrentPronomb] = useState('')

    useEffect(() => {
        console.log('asdasda asdasd 2');
        console.log(selectedVerbs);
        console.log(selectedVerbs.length);
        console.log(selectedTenses);
        console.log(selectedTenses.length);
        console.log(Pronomb);
        setCurrentPronomb(Pronomb[getRandomInRange(0, 5)]);
      }, []);

    return (
        <div>
        a
        <div>{selectedVerbs}</div>
        <div>asd</div>
                {currentPronomb}
        </div>
    )
}