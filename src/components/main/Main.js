// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectActors, selectSearch } from "store/movie";
import MovieItem from "./movie/MovieItem";

function Main() {
  const dataActors = useSelector(selectActors);
  const searching = useSelector(selectSearch);

  const filterMovie = dataActors.filter((data) => {
    return data.name.toLowerCase().includes(searching.toLowerCase());
  });

  // useEffect(() => {
  //   // console.log(dataActors);
  // }, [dataMovie]);

  return <MovieItem filterMovie={filterMovie} />;
}

export default Main;
