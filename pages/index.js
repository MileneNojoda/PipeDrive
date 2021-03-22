import ReactDOM from 'react-dom';
import React, { useEffect, useState } from "react";
import { CardItem } from './components/carditem'
import { FormModal } from './components/newpersonmodal'
import Server from './api/ssr-server'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const server = new Server();

const useStyles = makeStyles((theme) => ({
  header: {
    color: "#FFFFFF",
    backgroundColor: "#696969",
    padding: "20px",
  },
  listTitle: {
    padding: "10px",
  },
}));


function App({ persons }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1 className={classes.header}>PipeDrive</h1>
      <h2 className={classes.listTitle}>People's List</h2>
      <hr />
      <Button variant="contained" color="primary" onClick={handleOpen} startIcon={<AddIcon />}>
        Create New Person
      </Button>
      <FormModal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      </FormModal>
      {persons.map(person => <CardItem key={person.id} {...person} />)}
    </div>
  )
}


export async function getStaticProps() {

  const result = await server.getAllPersons();

  let persons;

  if (result.success)
    persons = result.data != undefined ? result.data : [];
  else
    persons = [];

  return {
    props: {
      persons,
    },
  }
}

export default App
