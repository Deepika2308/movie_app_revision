import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useState} from "react";
import {Counter} from "./App.js";
import IconButton from '@mui/material/IconButton';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import {useHistory} from "react-router-dom";



export function DisplayMovie({name,poster,alt_name,year,rating,summary,id,deleteButton,editButton}){
  
    let styles = {color: rating>7 ? "green" : "red"};
    let [checked,setChecked] = useState(false);
    
    //useHistory hook to change url on button click
    let history = useHistory();
    //show or not show summary on toggle
    // let summaryStyle = {display: checked ? "block" : "none"};
    
    return(
      <Card className="movie-container">
         <img className="movie-poster" src={poster} alt={alt_name}></img>
         <div className ="MovieName-div">
           <h4 className="movie-name">{name} <IconButton color="primary" size="small" aria-label="add to shopping cart">
               <InfoRoundedIcon onClick={() => history.push("/movies/" +id) }/>
            </IconButton></h4>
         </div>
         <CardContent> 
            <div className="movie-details">
               <p className="release-year">{year}</p>
               <p style={styles} className="movie-rating">⭐ {rating}</p>
            </div>  
           <FormGroup className="summary-switch">
           <FormControlLabel control={<Switch  size="small" color="default" onChange={(event) => setChecked(event.target.checked)}/>} label="Summary" />
           </FormGroup>
           {/* <p style={summaryStyle} className="movie-summary">{summary}</p> */}
           {checked ? <p className="movie-summary">{summary}</p> : ''}

          <div className="counter-delete-edit">
              <Counter />  
              <div className="del-edit">{deleteButton} {editButton}
              </div>    
          </div> 
           
         </CardContent>
      </Card>
    );
  }