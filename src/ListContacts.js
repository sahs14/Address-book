import React from 'react';
import Card from 'react-bootstrap/Card';

function ListContacts(props) {
  let contacts = [...props.contacts];
  let contactsList = contacts.filter(contact => {
      for(let i in contact)
        if (contact[i].toLowerCase().indexOf(props.filterPhrase.toLowerCase()) !== -1)
          return true;
      return false;
    }).map(contact =>
      <Card key={contact.key}>
        <Card.Body>
        <Card.Title><h5>{contact.Name}</h5></Card.Title>
        <Card.Subtitle><h6>Email {contact.email}</h6></Card.Subtitle>
        <Card.Text>Phone: {contact.phone}</Card.Text>
        <span>
          <i key={contact.key}
            onClick={props.closer.bind(null,contact.key)} />
        </span>
        </Card.Body>
      </Card>);
    return contactsList;
}

export default ListContacts;