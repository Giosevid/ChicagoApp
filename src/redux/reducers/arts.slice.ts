import {createSlice} from '@reduxjs/toolkit';

const artsSlice = createSlice({
  name: 'arts',
  initialState: {
    list: [],
    favorites: [],
  },
  reducers: {
    setArts: (state, action) => {
      state.list = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const {setArts, setFavorites} = artsSlice.actions;

export default artsSlice.reducer;
