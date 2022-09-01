import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import "./_movieItem.scss";

MovieItem.propTypes = {
  filterMovie: PropTypes.array,
};

function MovieItem(props) {
  const { filterMovie } = props;
  return (
    <>
      <div className="wrapper row gy-3 justify-content-center py-5">
        {filterMovie.map((data) => (
          <Card key={data.id} className="col-xs-12 col-sm-12 col-md-5 mx-1">
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted ">
                Age: {data.age}
              </Card.Subtitle>
              {/* <Card.Text> */}
              <h5>Movie:</h5>
              <div>
                {data.movies.map((movie) => (
                  <span key={movie.id} style={{ marginRight: "0.5rem" }}>
                    {movie.name}
                  </span>
                ))}
              </div>
              {/* </Card.Text> */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MovieItem;
