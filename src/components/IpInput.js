import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import Button from 'react-bootstrap/Button'

import AddressInfo from "./AddressInfo";

class IpInput extends Component {
  constructor(props) {
    super(props);
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
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  getAddrInfo = address => {
    axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${address}`
    ).then(res => {
        this.setState({addrInfo: res.data})
    }).catch(err => {
        console.log(err)
    })
  };

  render() {
    return (
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
    );
  }
}

export default IpInput;
