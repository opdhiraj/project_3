import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';
// import genres from "./../../common/genre";
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 240,
    height:350,
  color:theme.palette.primary.light,
  boxShadow:"10px 5px 5px grey",
  margin:theme.spacing.unit,
  },
  
 }));



export default function  FilterForm () {
    
  const classes = useStyles();
 


        return (

          <Card className={classes.root} variant="outlined">
           <h4>FIND MOVIES BY:</h4>
           <form noValidate autoComplete="off">
         
           <FormControl >
           <TextField id="standard-basic" label="Movie Name" />
           <TextField id="standard-basic" label="Genres" />
           <TextField id="standard-basic" label="Artist" />
           <TextField id="standard-basic" type="date" />
           <TextField id="standard-basic" type="date"/>
          <Button variant="contained" color="primary"> Apply</Button>
           </FormControl>
                      
                </form>



      
    </Card>
  );
}
          
    
    


 