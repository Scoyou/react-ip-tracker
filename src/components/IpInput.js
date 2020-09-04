import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";

import AddressInfo from "./AddressInfo";
import Styles from "../styles/Styles";

class IpInput extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      value: "",
      addrInfo: "",
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
    const regex = /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/i;
    if (regex.test(address)) {
      axios
        .get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&domain=${address}`
        )
        .then((res) => {
          const location = res.data.location;
          this.setState({ addrInfo: res.data });
          // sets location state for banner.js
          this.setLocation(location);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${address}`
        )
        .then((res) => {
          const location = res.data.location;
          this.setState({ addrInfo: res.data });
          // sets location state for banner.js
          this.setLocation(location);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  setLocation = (location) => {
    this.props.setLocation(location);
  };

  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <InputGroup>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Search for any IP address or domain"
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button
                  variant="dark"
                  style={Styles.inputButton}
                  type="submit"
                  value="submit"
                  onClick={() => this.getAddrInfo(this.state.value)}
                >
                  <FontAwesomeIcon icon={Icons.faAngleRight} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <AddressInfo
            ipAddr={this.state.addrInfo.ip}
            location={this.state.addrInfo.location}
            isp={this.state.addrInfo.isp}
          />
        </Form>
      </Container>
    );
  }
}

export default IpInput;
