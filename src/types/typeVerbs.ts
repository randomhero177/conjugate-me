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
