import React, { Component } from "react";
import axios from "axios";
import apiKey from "../../apiKey";
import styled from "styled-components";

import ImageList from "../image-list/ImageList";

const sectionStyled = styled.section`
  overflow: scroll;
  border: 5px solid black;
  height: 800px;
`;

export default class FetchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
      query: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&api_key=${apiKey}&text=${this.props.query}&size=q&per_page=56&format=json&nojsoncallback=1`
      )
      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          query: "",
        });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <ImageList data={this.state.photos} />
        )}
      </div>
    );
  }
}
