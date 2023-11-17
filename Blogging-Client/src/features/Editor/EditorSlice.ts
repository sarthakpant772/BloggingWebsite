import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  text: string;
  open: boolean;
}

const initialState: EditorState = {
  text: "",
  open: false,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    modalState: (state) => {
      state.open = !state.open;
    },
  },
});

export const { edit, modalState } = editorSlice.actions;
export default editorSlice.reducer;
