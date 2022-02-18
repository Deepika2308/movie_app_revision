import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';

export function EditMovie() {

  let { idx } = useParams();

  let [editCurrentMovie, SetEditCurrentMovie] = useState(null);

  useEffect(() => {
    fetch("https://620e80fd585fbc3359e511d8.mockapi.io/movies/"+idx)
      .then((data) => data.json())
      .then((mv) => SetEditCurrentMovie(mv));
  }, []);
 
   console.log("edit movie " +editCurrentMovie);
  return  editCurrentMovie ? <EditMovieForm editCurrentMovie={editCurrentMovie}  /> : "";
  
}

function EditMovieForm({editCurrentMovie}){
  let [poster, setPoster] = useState(editCurrentMovie.poster);
  let [alt_name, setAltname] = useState(editCurrentMovie.alt_name);
  let [year, setYear] = useState(editCurrentMovie.year);
  let [name, setName] = useState(editCurrentMovie.name);
  let [rating, setRating] = useState(editCurrentMovie.rating);
  let [summary, setSummary] = useState(editCurrentMovie.summary);
  let [trailer, setTrailer] = useState(editCurrentMovie.trailer);
  let history = useHistory();

    return(
        <div className="Editmovie-form">
        <TextField id="outlined-basic" value={name} label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" value={poster} label="Poster Url" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
        <TextField id="outlined-basic" value={year} label="Year" variant="outlined" onChange={(event) => setYear(event.target.value)} />
        <TextField id="outlined-basic" value={rating} label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
        <TextField id="outlined-basic" value={summary} label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
        <TextField id="outlined-basic" value={alt_name} label="Alt Name" variant="outlined" onChange={(event) => setAltname(event.target.value)} />
        <TextField id="outlined-basic" value={trailer} label="Trailer link" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
        <div className="EditForm-cancel-button">
          <Button variant="outlined"
            onClick={() => {
              let updatedMovie = {
                poster: poster,
                alt_name: alt_name,
                year: year,
                name: name,
                rating: rating,
                summary: summary,
                trailer: trailer
              };
  
              fetch("https://620e80fd585fbc3359e511d8.mockapi.io/movies/"+editCurrentMovie.id, {
                method: "PUT",
                body: JSON.stringify(updatedMovie),
                headers: { "Content-type": "application/json" },
              }).then(() => history.push("/movies"));
            }}>Update</Button>
  
          <Button variant="outlined"
            onClick={() => { history.push("/movies"); }}>Cancel</Button>
        </div>
      </div>
    );
}