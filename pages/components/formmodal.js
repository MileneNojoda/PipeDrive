import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';


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

function FormModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    function handleClose() {
        props.onClose();
    };

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
                            <p id="simple-modal-title" className={classes.alignleft}>
                                <CloseIcon onClick={handleClose} className={classes.close} />
                            </p>

                            <h3 id="simple-modal-title" className={classes.aligncenter}>New Person Information</h3>
                            <Avatar className={classes.avatar}>
                            </Avatar>
                        </div>
                        <hr />
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Name" fullWidth />
                            <TextField id="standard-basic" label="Phone Number" fullWidth />
                            <TextField id="standard-basic" label="Email" fullWidth />
                            <TextField id="standard-basic" label="Organization" fullWidth />
                            <TextField id="standard-basic" label="Assistant" fullWidth />
                            <TextField id="standard-basic" label="Groups" fullWidth />
                            <TextField id="standard-basic" label="Location" fullWidth />
                        </form>
                        <hr />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<AddIcon />}>
                            Add Person
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );

}

export default FormModal ;