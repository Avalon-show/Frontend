import React from "react";
import CarouselItem from "../components/CarouselItem";
import Carousel from 'react-elastic-carousel';
import "./styles/NavbarMain.css";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=577cca3";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(`${API}&s=movie`);
    const resJSON = await res.json();
    this.setState({ data: resJSON.Search });
  }

  render() {
    return (
      <div>
        {this.state.data.map((movie, i) => {
          return (
              <CarouselItem movie={movie} key={i} />
          )
        })}
        <div className="form">
              <form
                className="form-container"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <input
                  type="text"
                  className="form-input"
                  placeholder="Serarch"
                  onChange={(e) =>
                    this.setState({ searchTerm: e.target.value })
                  }
                  autoFocus
                />
              </form>
              <p>{this.state.error ? this.state.error : ""}</p>
            </div>
      </div>
    );
  }
}

export default List;
