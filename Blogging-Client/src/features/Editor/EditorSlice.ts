import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EditorState {
  text: string;
}

const initialState: EditorState = {
  text: "",
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    edit: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { edit } = editorSlice.actions;
export default editorSlice.reducer;
