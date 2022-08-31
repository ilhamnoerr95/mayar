import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";
import { selectMovie, selectActors } from "store/movie";
import MovieItem from "./movie/MovieItem";

function Main() {
  const dataMovie = useSelector(selectMovie);
  const dataActors = useSelector(selectActors);
  const [search, setSearch] = useState("");

  const filterMovie = dataActors.filter((data) => {
    return data.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    console.log(dataActors);
  }, [dataMovie]);

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Find Movie</InputGroup.Text>
        <Form.Control
          aria-label="First name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      <div className="container">
        <MovieItem filterMovie={filterMovie} />
      </div>
    </div>
  );
}

export default Main;
