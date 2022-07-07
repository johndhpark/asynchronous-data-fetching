import PropTypes from "prop-types";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MoviesList = ({ movies }) => (
  <ul className={classes["movies-list"]}>
    {movies.map((movie) => (
      <Movie
        key={movie.id}
        title={movie.title}
        releaseDate={movie.releaseDate}
        openingText={movie.openingText}
      />
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      openingText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
