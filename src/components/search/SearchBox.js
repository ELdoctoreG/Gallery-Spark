import React, { Component } from "react";
import axios from "axios";
import apiKey from "../../apiKey";
import ImageList from "../image-list/ImageList";
import InfiniteScroll from "react-infinite-scroll-component";

import "./SearchBox.scss";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      items: 10,
      loading: false,
      query: "",
      searchText: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let checkquery = this.query.value;
    console.log('You typed "' + checkquery + '" in the Search field');
    this.performSearch(checkquery);
    e.currentTarget.reset();
  };

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (text = "Random") => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=${apiKey}&text=${text}&per_page=1116&content_type=1&is_getty=1`
      )

      .then((response) => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false, //was false
          checkquery: text,
        });
      })

      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={this.onSearchChange}
            id="search"
            name="search"
            ref={(input) => (this.query = input)}
            placeholder="Search"
          />
          <i className="fa fa-search"></i>
        </form>
        <h2>{this.state.checkquery} images</h2>
        {this.state.loading ? (
          <h4>Loading...</h4>
        ) : (
          <ImageList data={this.state.photos} />
        )}
      </div>
    );
  }
}
