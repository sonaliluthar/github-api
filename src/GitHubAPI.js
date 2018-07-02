import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import axios from "axios";

export default class GitHubAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyvalue: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/repos/facebook/react/contributors")
      .then(res => {
        const data = res.data;
        const logins = data.map(contributor => contributor.login);
        const contributions = data.map(
          contributor => contributor.contributions
        );
        const keyvalue = [];
        for (let i = 0; i < logins.length; i++) {
          keyvalue.push({ login: logins[i], contribution: contributions[i] });
        }
        this.setState({ keyvalue: keyvalue });
      });
  }

  render() {
    if (this.state.keyvalue.length === 0) {
      return null;
    }
    let output = [
      this.state.keyvalue[0],
      this.state.keyvalue[5],
      this.state.keyvalue[10],
      this.state.keyvalue[15],
      this.state.keyvalue[20],
      this.state.keyvalue[25]
    ];
    return (
      <div>
        <VictoryChart domainPadding={30}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={this.state.keyvalue.login}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={this.state.keyvalue.contribution}
          />
          <VictoryChart>
            <VictoryBar data={output} x="login" y="contribution" />
          </VictoryChart>
        </VictoryChart>
      </div>
    );
  }
}
