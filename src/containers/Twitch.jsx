import React, { Component } from 'react';

class Twitch extends Component {
  constructor() {
    super();

    this.state = {
      twitchAPI: 'https://wind-bow.glitch.me/twitch-api/streams/',
      streamersList: [
        'ESL_SC2',
        'OgamingSC2',
        'zai',
        'freecodecamp',
        'w33haa',
        'Gorgc',
        'ybicanoooobov',
        'noobs2ninjas',
        'BeyondTheSummit',
        'AdmiralBulldog',
      ],
      streamersData: null,
    };

    this.fetchStreams();
  }

  fetchStreams = async () => {
    await this.state.streamersList.map(streamer => this.singleFetchAction(streamer));
  };

  singleFetchAction = async (streamer) => {
    const { twitchAPI } = this.state;
    const response = await fetch(twitchAPI + streamer);
    const streamData = await response.json();
    await this.setState({ streamersData: { ...this.state.streamersData, [streamer]: streamData } });
  };

  render() {
    return (
      <div>
        <h2>Twitch App</h2>
        <div className="grid">
          {this.state.streamersData &&
            Object.entries(this.state.streamersData)
              // online always first
              .sort((a, b) => (a[1].stream === null) - (b[1].stream === null))
              .map(stream => (
                <div className="card" key={stream[0]}>
                  <a
                    href={`https://www.twitch.tv/${stream[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3>{stream[0]}</h3>
                    <p>
                      {stream[1].stream
                        ? `${stream[1].stream.stream_type} -- ${stream[1].stream.game}`
                        : 'offline'}
                    </p>
                  </a>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default Twitch;
