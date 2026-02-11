// types.ts (or wherever you define your types)
export interface SelectedVerbsState {
  selectedVerbs: string[];
}

export interface SelectedTensesState {
  selectedTenses: string[];
}

export interface RootState {
  selectedVerbs: SelectedVerbsState;
  selectedTenses: SelectedTensesState;
}

export type Person0To5 = 0 | 1 | 2 | 3 | 4 | 5;
