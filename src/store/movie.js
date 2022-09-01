import { createSlice } from "@reduxjs/toolkit";
import konfigurasi from "config";

const initialState = {
  searching: "",
  dataActors: [],
};

let queryData = `
query{actors {
  id,
  name,
  age,
    movies {
      id,
      name,genre
    }
}}
`;

// FETCH DATA
// eslint-disable-next-line no-unused-vars
export const getData = () => async (dispatch) => {
  fetch(konfigurasi.api.baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },

    body: JSON.stringify({
      query: queryData,
    }),
  })
    .then((response) => response.json())
    .then((data) => dispatch(setData(data.data.actors)))
    .catch((error) => console.error(error));
};

export const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searching: (state, action) => {
      state.searching = action.payload;
    },
    setData: (state, action) => {
      state.dataActors = action.payload;
    },
  },
});

export const selectDataActor = (state) => state.dataMovie.dataActors;
export const selectSearch = (state) => state.dataMovie.searching;

export const { searching, setData } = movies.actions;

export default movies.reducer;
