import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        marginTop: "10px",
        marginBottom: "10px",
       
        
        
    },
});
const CardP = (props) => {
    const classes = useStyles();
    return (

        <Card className={'m-auto shadow-sm ' + classes.root}>
            
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                      {props.description}
                    </Typography>
                </CardContent>
            <div>
                <a rel="noreferrer"  target="_blank" href={props.link}class="btnC btn ml-2 mb-2 w-25">Repo</a>
            </div>
                     
          

           
        </Card>
    )
}

export default CardP
