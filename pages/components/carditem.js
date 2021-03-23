import Avatar from '@material-ui/core/Avatar';
import ApartmentIcon from '@material-ui/icons/Apartment';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from "react";
import { SimpleModal } from './modal'
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
        margin: "20px !important",
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

    let organization = person['084904d6d769ff8d6ddd8013450bef4c72dc3b22'];

    return (
        <Card id={person.id} className={classes.card}>
            <CardActionArea onClick={handleOpen}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {person.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <br />
                        <ApartmentIcon></ApartmentIcon>
                        <Avatar className={classes.avatar}>
                        </Avatar>                  
                        {organization}
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