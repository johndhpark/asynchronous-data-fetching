import PropTypes from "prop-types";
import classes from "./Movie.module.css";

const Movie = ({ title, releaseDate, openingText }) => (
  <li className={classes.movie}>
    <h2>{title}</h2>
    <h3>{releaseDate}</h3>
    <p>{openingText}</p>
  </li>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  openingText: PropTypes.string.isRequired,
};

export default Movie;
