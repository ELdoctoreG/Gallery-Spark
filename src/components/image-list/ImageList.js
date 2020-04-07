import React from "react";
import Image from "../image/Image";
import NotFound from "../not-found/NotFound";
import apiKey from "../../apiKey";
import styled from "styled-components";

const ImageListBox = styled.section`
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
  height: calc(100vh - 214px);
  padding-bottom: 60px;
  overflow: auto;
`;

const ImageList = (props) => {
  const results = props.data;
  let images;

  if (results.length > 0) {
    console.log("Results returned " + results.length + " images.");
    images = results.map((image) => (
      <Image
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`}
        key={image.id}
        title={image.title}
      />
    ));
  } else {
    console.log(
      "This is part of the ELSE condition. Results has a length of " +
        results.length
    );
    images = <NotFound />;
  }

  return <ImageListBox>{images}</ImageListBox>;
};

export default ImageList;
