// types.ts (or wherever you define your types)
export interface SelectedVerbsState {
  selectedVerbs: string[];
}

export interface RootState {
  selectedVerbs: SelectedVerbsState;
}
