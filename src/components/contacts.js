import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Word Results</h1></center>
      {contacts.map((contact) => (
        <div className="list-group">
          <li className="list-group-item justify-content-between">
            {contact[0]}
            <h5><span className="badge badge-primary badge-pill ">{"ACC = "+contact[1]}</span></h5>
          </li>
        </div>
      ))}
    </div>
  )
};

export default Contacts