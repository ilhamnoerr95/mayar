// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { selectDataActor, selectSearch, getData } from "store/movie";
import MovieItem from "./movie/MovieItem";
import "./_main.scss";

function Main() {
  const dataActors = useSelector(selectDataActor);
  const searching = useSelector(selectSearch);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  const filterMovie = dataActors.filter((data) => {
    return (
      data.name.toLowerCase().includes(searching.toLowerCase()) ||
      // source https://stackoverflow.com/questions/51589685/javascript-array-filter-by-element-in-children
      data.movies.some((movie) =>
        movie.name.toLowerCase().includes(searching.toLowerCase())
      )
    );
  });

  // dispatch(getData());

  useEffect(() => {
    dispatch(getData());
    setTimeout(async () => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="container">
          <MovieItem filterMovie={filterMovie} />
        </div>
      ) : (
        // KODE CSS https://loading.io/css/
        <div className="lds-circle">
          <div></div>
        </div>
      )}
    </>
  );
}

export default Main;
