import React, { Fragment, Component } from "react";

import "./App.css";
import Banner from "./components/banner/Banner";
import SearchBox from "./components/search-box/search-box";
import Card from "./components/card/card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
      userData: "",
      repoData : []
    };
  }

  onInputChange = (event) => {
    this.setState({ searchName: event.target.value }, () => {
      this.getData(this.state.searchName);
    });
  };

  getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => this.setState({ userData: data }))
      .catch((error) => {
        alert("Oops! Could not reach GitHub");
        console.log("Oops! We have an error", error);
      });
      fetch(`https://api.github.com/users/${userName}/repos?sort=created`)
      .then((res) => res.json())
      .then((data)=>{this.setState({repoData:data})}
      )
      // .then((data) => console.log(data[0].name,data))
      .catch((error) => {
        alert("Oops! Could not reach GitHub");
        console.log("Oops! We have an error", error);
      });
  };

  render() {
    return (
      <Fragment>
        <Banner />
        <SearchBox onInputChange={this.onInputChange} />
        {this.state.userData.id && this.state.searchName !== "" ? (
          <Card profile={this.state.userData} repoData={this.state.repoData} />
        ) : (
          <div className="no-data">
            No user Found! <br />
          </div>
        )}

      </Fragment>
    );
  }
}

export default App;
