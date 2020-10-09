import React from "react";
import CarouselItem from "../components/CarouselItem";
import "./styles/NavbarMain.css";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=577cca3";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      error: "",
    };
  }

  async componentDidMount() {
    const res = await fetch(`${API}&s=movie`);
    const resJSON = await res.json();
    this.setState({ data: resJSON.Search });
  }
  async handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      return this.setState({ error: "Por favor escribe un texto válido" });
    }

    const res = await fetch(`${API}&s=${this.state.searchTerm}`);
    const data = await res.json();
    this.setState({ data: data.Search });
  }

  render() {
    return (
      <div>
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
        {this.state.data.map((movie, i) => {
          return (
              <CarouselItem movie={movie} key={i} />
          )
        })}
      </div>
    );
  }
}

export default List;
