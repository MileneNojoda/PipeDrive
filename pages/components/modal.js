import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

function getModalStyle() {
  const pos = 50;

  return {
    top: `${pos}%`,
    left: `${pos}%`,
    transform: `translate(-${pos}%, -${pos}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  aligncenter: {
    textAlign: 'center',
  },
  contact: {
    textAlign: 'center',
    color: "#32CD32"
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  button: {
    margin: theme.spacing(1),
  },
  close: {
    float: "right",
  },
}));

function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const person = props.person;

  function handleClose() {
    props.onClose();
  };

  function handleClick(e) { e.preventDefault(); console.log(person.id); }

  let email;
  let phoneNumber;
  let location = person['528715166d29a988537acf4167c8f74d4def2743'];
  let organization = person['084904d6d769ff8d6ddd8013450bef4c72dc3b22'];
  let assistant = person['dbaf1321c6fe0246767203206c7aa8a996cefa14'];
  let groups = person['62f8aaa2a16ffbcf14576d1bf58a1f93120fd95d'];

  if (Array.isArray(person.email) && person.email.length) {
    email = person.email[0].value;
  }

  if (Array.isArray(person.phone) && person.phone.length) {
    phoneNumber = person.phone[0].value;
  }


  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div>
          <div style={modalStyle} className={classes.paper}>
            <div>
              <p id="simple-modal-title" className={classes.alignleft}>Person Information
              <CloseIcon onClick={handleClose} className={classes.close} />
              </p>

              <h3 id="simple-modal-title" className={classes.aligncenter}>{person.name}</h3>
              <Avatar className={classes.avatar}>
              </Avatar>
              <h2 className={classes.contact}>+{phoneNumber}</h2>
            </div>
            <hr />
            <p className={classes.aligncenter}>Email {email}</p>
            <p className={classes.aligncenter}>Organization {organization}</p>
            <p className={classes.aligncenter}>Assistant {assistant}</p>
            <p className={classes.aligncenter}>Groups {groups}</p>
            <p className={classes.aligncenter}>Location {location}</p>
            <hr />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={handleClick}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );

}

export { SimpleModal };