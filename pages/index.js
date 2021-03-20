import ReactDOM from 'react-dom';
import React, { useEffect, useState } from "react";

function ListOfPersons({ persons }) {
  return (
    <div>
      <h1>PipeDrive</h1>
      <h2>People's List</h2>
      <hr/>
      <ul>
        {persons.data.map(person => <PersonCard key={person.id} {...person} />)}
      </ul>
    </div>
  )
}

class PersonCard extends React.Component {
  render() {
    const person = this.props;
    return (
      <div className="pipedrivePerson">
        <div className="info">
          <div className="fullname">{person.first_name} {person.last_name}</div>
        </div>
      </div>
    );
  }
}


export async function getStaticProps() {

  const res = await fetch('http://localhost:1800/')
  const persons = await res.json()

  return {
    props: {
      persons,
    },
  }
}

export default ListOfPersons

