import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
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
  const [open, setOpen] = React.useState(false);

  function handleClose() {
    props.onClose();
  };

  function deletePerson() {
    console.log(person.id);
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
              <CloseIcon onClick={handleClose} className={classes.close} /></p>

              <h3 id="simple-modal-title" className={classes.aligncenter}>{person.name}</h3>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
              <h2 className={classes.contact}>+{person.phone[0].value}</h2>
            </div>
            <hr />
            <p className={classes.aligncenter}>Email {person.email[0].value}</p>
            <p className={classes.aligncenter}>Organization</p>
            <p className={classes.aligncenter}>Assistant</p>
            <p className={classes.aligncenter}>Groups</p>
            <p className={classes.aligncenter}>Location</p>
            <hr />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={deletePerson}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );

}

export { SimpleModal };