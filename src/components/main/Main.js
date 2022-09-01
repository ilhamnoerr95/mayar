// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { selectActors, selectSearch, getData } from "store/movie";
import MovieItem from "./movie/MovieItem";

function Main() {
  const dataActors = useSelector(selectActors);
  const searching = useSelector(selectSearch);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const filterMovie = dataActors.filter((data) => {
    return data.name.toLowerCase().includes(searching.toLowerCase());
  });

  // dispatch(getData());

  useEffect(() => {
    dispatch(getData());
  }, []);

  return <MovieItem filterMovie={filterMovie} />;
}

export default Main;
