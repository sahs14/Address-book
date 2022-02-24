import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ListContacts from './ListContacts.js';
import {generate} from 'randomstring';

class App extends Component {
  state = {
    "contacts": [
      {
        "key": generate(10),
        "Name": "Cathy" ,
        "email": "test123@gmail.com",
        "phone": "200-910-8132"
      },
      {
        "key": generate(10),
        "Name": "Alfonso",
        "email": "test123@gmail.com",
        "phone": "200-657-9362"
      },
      {
        "key": generate(10),
        "Name": "Victor",
        "email": "test123@gmail.com",
        "phone": "200-661-9407"
      },
      {
        "key": generate(10),
        "Name": "Colleen",
        "email": "test123@gmail.com",
        "phone": "200-250-7949"
      }
    ],
    "formName": '',
    "formEmail": '',
    "formphone": '',
    "searchPhrase": ''
  }

  addContactHandler = (event) => {
    event.preventDefault();
    let newContact = {
      key: generate(10),
      Name: this.state.formName,
      email: this.state.formEmail,
      phone: this.state.formphone
    };
    this.setState({contacts: [...this.state.contacts, newContact]});
    this.setState({
      "formName": '',
      "formEmail": '',
      "formphone": ''  
    });
  }

  handleSearchChange = (event) => {
    this.setState({searchPhrase: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <Container>
          <div className="form-inline">
            <input className="form-control"
              type="text"
              placeholder="Search"
              value={this.state.searchPhrase}
              onChange={this.handleSearchChange} />
          </div>
          <header className="App-header text-center">
            <h1>Address Book</h1>
          </header>
          <ListContacts>
          </ListContacts>
          <div>
            <h2 className="text-left">Add a Contact</h2>
            <Form className="text-left" onSubmit={this.addContactHandler}>
              <Form.Group controlId="formContact">
              <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={this.state.formName}
                  onChange={(e) => this.setState({formName: e.target.value})} />
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone"
                  value={this.state.formphone}
                  onChange={(e) => this.setState({formphone: e.target.value})} />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={this.state.formEmail}
                  onChange={(e) => this.setState({formEmail: e.target.value})} />
                  <Button type="submit"><i></i> Add Contact</Button>
              </Form.Group>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
};

export default App;
