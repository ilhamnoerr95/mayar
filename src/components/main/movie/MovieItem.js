import PropTypes from "prop-types";

MovieItem.propTypes = {
  data: PropTypes.array,
};

function MovieItem(props) {
  const { data } = props;
  return (
    <>
      <h1> {data.name}</h1>
    </>
  );
}

export default MovieItem;
