import { useRef } from "react";
import PropTypes from "prop-types";
import classes from "./AddMovie.module.css";

function AddMovie({ onAddMovie }) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" ref={titleRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">
          Opening Text
          <textarea rows="5" id="opening-text" ref={openingTextRef} />
        </label>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">
          Release Date
          <input type="text" id="date" ref={releaseDateRef} />
        </label>
      </div>
      <button>Add Movie</button>
    </form>
  );
}

AddMovie.propTypes = {
  onAddMovie: PropTypes.func.isRequired,
};

export default AddMovie;
