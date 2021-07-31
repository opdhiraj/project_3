import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function  FilterForm () {
    
 const classes = useStyles();

        return (
          <form className={classes.root}  noValidate autoComplete="off">
              <legend>Find Movie By</legend>
            <TextField id="filled-basic" type="text" placeholder="Movie name" />
            <TextField id="filled-basic" label="Genres"   />
            <TextField id="filled-basic" label="Artist"  />
            <TextField id="filled-basic" type="date"  placeholder="Release Date" />
            <TextField id="outlined-basic" type="date" placeholder="Release Date End" />
            <Button variant="contained" color="primary">Apply</Button>
          </form>
    
    )
}

 