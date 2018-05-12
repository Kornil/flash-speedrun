import React, { Component } from 'react';

class WikipediaViewer extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      searchResult: null,
    };
  }
  handleChange = async (e) => {
    await this.setState({ searchText: e.target.value });
    const response = await fetch(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&generator=search&prop=extracts|info&inprop=url&exintro&explaintext&exsentences=1&exlimit=10&gsrsearch=${
      this.state.searchText
    }`);
    const searchResult = await response.json();
    this.setState({ searchResult });
  };
  render() {
    const { searchText } = this.state;
    return (
      <div>
        <h2>Wiki</h2>
        <input onChange={this.handleChange} placeholder="Search" type="text" value={searchText} />
        <div className="grid">
          {this.state.searchResult &&
            this.state.searchText &&
            this.state.searchResult.query &&
            Object.entries(this.state.searchResult.query.pages).map(article => (
              <div className="card" key={article[0]}>
                <a href={article[1].fullurl}>
                  <h2>{article[1].title}</h2>
                  <p>{article[1].extract}</p>
                </a>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default WikipediaViewer;
