const { configureStore } = require("@reduxjs/toolkit");
import movie from "./movie";

export const store = configureStore({
  reducer: {
    dataMovie: movie,
  },
});
