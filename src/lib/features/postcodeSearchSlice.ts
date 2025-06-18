import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostcodeSearchState {
  isOpen: boolean;
  selectedAddress: string;
}

const initialState: PostcodeSearchState = {
  isOpen: false,
  selectedAddress: "",
};

const postcodeSearchSlice = createSlice({
  name: "postcodeSearch",
  initialState,
  reducers: {
    openPostcode(state) {
      state.isOpen = true;
    },
    closePostcode(state) {
      state.isOpen = false;
    },
    setSelectedAddress(state, action: PayloadAction<string>) {
      state.selectedAddress = action.payload;
    },
    resetSelectedAddress(state) {
      state.selectedAddress = "";
    }
  },
});

export const {
  openPostcode,
  closePostcode,
  setSelectedAddress,
  resetSelectedAddress
} = postcodeSearchSlice.actions;

export default postcodeSearchSlice.reducer;