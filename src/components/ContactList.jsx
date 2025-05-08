import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/contactList.scss';
import { Images } from '../assets/img';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts')
      .then((res) => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch contacts.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div className="contact-card">
        <img src={Images.profile} alt={contact.name} />
        <div className="contact-card-content">
          <h3 title={contact.name}>{contact.name}</h3>
          <p title={contact.email}>Email: {contact.email}</p>
          <p title={contact.phone}>Phone: {contact.phone}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ContactList;
