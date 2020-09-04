import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

import AddressInfo from "./AddressInfo";


class IpInput extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = { 
        value: "",
        addrInfo: "" 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  getAddrInfo = (address) => {
    axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${address}`
    ).then(res => {
        const location = res.data.location
        this.setState({addrInfo: res.data});
        this.setLocation(location);
    }).catch(err => {
        console.log(err)
    })
  };

  setLocation = (location) => {
    this.props.setLocation(location)
  }

  render() {
    return (
    <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            IP Address:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="submit" onClick={() => this.getAddrInfo(this.state.value)}/>
          <AddressInfo ipAddr={this.state.addrInfo.ip} location={this.state.addrInfo.location} isp={this.state.addrInfo.isp} />
        </form>
      </div>
    </div>
    );
  }
}

export default IpInput;
