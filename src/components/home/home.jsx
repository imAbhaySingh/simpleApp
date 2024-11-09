import React, { useState } from 'react';
import './home.css'; 

const Home = () => {
  const [jiraToken, setJiraToken] = useState('');
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Jira Token:', jiraToken);
    console.log('Ticket ID:', ticketId);
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Jira Case Insights</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="jiraToken">Jira Token</label>
            <input
              type="text"
              id="jiraToken"
              value={jiraToken}
              onChange={(e) => setJiraToken(e.target.value)}
              placeholder="Enter your Jira Token"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ticketId">Jira Ticket ID</label>
            <input
              type="text"
              id="ticketId"
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              placeholder="Enter the Ticket ID"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Get Insights</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
