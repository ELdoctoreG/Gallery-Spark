import React from "react";
import LazyLoad from "react-lazy-load";
import "./Image.scss";

const Image = (props) => {
  const flickrTitles = props.title;
  console.log(flickrTitles);

  let photoTitle;

  if (flickrTitles.length > 25) {
    photoTitle = props.title.substring(0, 22) + "...";
    console.log(photoTitle + " was truncated");
  } else {
    photoTitle = flickrTitles;
  }

  return (
    <LazyLoad debounce={true} throttle={250} offsetVertical={500}>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img src={props.url} alt={props.title} />
      </a>
    </LazyLoad>
  );
};

export default Image;
