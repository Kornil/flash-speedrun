import React, { Component } from 'react';

class Quotes extends Component {
  constructor() {
    super();

    this.state = {
      quoteAPI: 'https://talaikis.com/api/quotes/random/',
      tweet: 'https://twitter.com/intent/tweet?via=Fragno92&hashtags=FreeCodeCamp&text=',
      quote: {},
    };
    this.fetchQuote();
  }

  fetchQuote = async () => {
    const response = await fetch(this.state.quoteAPI);
    const quote = await response.json();
    this.setState({ quote });
  };

  render() {
    const { quote, author } = this.state.quote;
    return (
      <div>
        <h2>Quote Machine</h2>
        <button onClick={this.fetchQuote}>New quote!</button>
        <div className="grid">
          <div className="card card__quote">
            <p>{quote}</p>
            <h5>{author}</h5>

            <a
              href={this.state.tweet + this.state.quote.quote}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet it!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
