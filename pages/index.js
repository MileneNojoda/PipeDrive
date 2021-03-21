import ReactDOM from 'react-dom';
import React, { useEffect, useState } from "react";
import { CardItem } from './components/carditem'
import Server from './api/ssr-server'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const server = new Server();

function App({ persons }) {

  return (
    <div>
      <h1>PipeDrive</h1>
      <h2>People's List</h2>
      <hr />
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      {persons.data.map(person => <CardItem  key={person.id} {...person} />)}
    </div>
  )
}


export async function getStaticProps() {

  const persons = await server.getAllPersons();

  return {
    props: {
      persons,
    },
  }
}

export default App
