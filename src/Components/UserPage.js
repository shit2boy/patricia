import React, { Component } from "react";
import NavBar from "./NavBar";
import { Container, Col, Row, Table } from "react-bootstrap";

export class UserPage extends Component {
  render() {
    return (
      <>
        <NavBar isActive="true" />
        <Container fluid>
          <Row>
            <Col lg={1} className="d-none d-lg-block side">
              <div class="sidebar">
                <a href="#home">Trade</a>
                <a href="#services">Exchange</a>
                <a href="#clients">Accounts</a>
                <a href="#contact">Data</a>
              </div>
            </Col>
            <Col md={10} className="mx-auto">
              <div className="d-flex mt-2 shadow p-2 mb-1 justify-content-between">
                <div>
                  {" "}
                  <p>
                    Welcome back, <span className="text-primary">Akeem</span>{" "}
                  </p>
                </div>
                <div className="d-flex p-2 justify-content-around">
                  <p>Settings</p>
                  <p className="ml-2 text-primary ">Security</p>
                </div>
              </div>
              <div className="row mx-auto">
                <div className="col shadow p-3">
                  <small>Hello</small>
                  <h6>Akeem</h6>
                  <p>+2347037860938</p>
                  <p>writeshittu@gmail.com</p>
                  <hr />
                  <address>Number 14 Allen Avenue, surulere.</address>
                </div>
                <div className="col shadow p-3">
                  <h5>Wallet</h5>
                  <hr />
                  <p>Available BTC</p>
                  <h5>0.0230145 BTC</h5>
                  <div className="d-flex justify-content-between p-2">
                    <div>
                      <p>Total Equity</p>
                      <strong>78950.35 USD</strong>
                    </div>
                    <div>
                      <p>Available Margin</p>
                      <strong>56845.25 USD</strong>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between p-2">
                    <div>
                      <p> Buy this month</p>
                      <strong>3.0215485 BTC</strong>
                    </div>
                    <div>
                      <p>Sell this month</p>
                      <strong>3.0215485 BTC</strong>
                    </div>
                  </div>
                </div>
              </div>
              <Row className="mt-4 mb-3">
                <div className="col-lg-3  col-sm-2 p-3 text-center shadow">
                  <p>Maintainance</p>
                  <strong>0.03654 BTC</strong>
                </div>
                <div className="col-lg-3  col-sm-2 p-3 text-center shadow">
                  <p>Unrealized P&L</p>
                  <strong>0.03654 BTC</strong>
                </div>
                <div className="col-lg-3  col-sm-2 p-3 text-center shadow">
                  <p>Open Positions</p>
                  <strong>0.03654 BTC</strong>
                </div>
                <div className="col-lg-3  col-sm-2 p-3 align-items-center text-center shadow">
                  <p>Active Orders</p>
                  <strong>0.03654 BTC</strong>
                </div>
              </Row>
              <Row>
                <Table striped responsive bordered hover>
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> # 565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&L</td>
                      <td> 0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td> # 565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&L</td>
                      <td> 0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td> # 565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&L</td>
                      <td> 0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td> # 565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&L</td>
                      <td> 0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                    <tr>
                      <td> # 565845522</td>
                      <td>January 10, 2020</td>
                      <td>Realized P&L</td>
                      <td> 0.254782 BTC</td>
                      <td>Completed</td>
                      <td>0.125476 BTC</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Col>
          </Row>
          <footer className=" mt-2 text-center text-primary">
            &#169; Copyright 2020
          </footer>
        </Container>
      </>
    );
  }
}

export default UserPage;
