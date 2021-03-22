import Avatar from '@material-ui/core/Avatar';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import { SimpleModal } from './modal'
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
        float: "right",
    },
    card:{
        padding: "20px",
        border: "solid 1px #696969",
        borderRadius: "4px",
        margin: "20px",
    },
  }));



function CardItem(props) {
    const classes = useStyles();
    const person = props;
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card id={person.id} className={classes.card}>
            <CardActionArea onClick={handleOpen}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {person.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    </Typography>
                    <Typography variant="body2" component="p">
                        <br />
                        <ApartmentIcon></ApartmentIcon>
                        <Avatar className={classes.avatar}>
                            <PersonIcon />
                        </Avatar>
                    </Typography>
                </CardContent>
                <SimpleModal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    person={person}
                >
                </SimpleModal>
            </CardActionArea>
        </Card>

    );
}


export { CardItem };