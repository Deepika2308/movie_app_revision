import {useState} from "react";
import "./style.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function App() {
  return (
    <div className="App"> 
     <AddMovie />  
    </div>
  );
}


function DisplayMovie({name,poster,alt_name,year,rating,summary}){
  // conditional styling

  let styles = {color: rating>7 ? "green" : "red"};
  let [checked,setChecked] = useState("");

  //show or not show summary on toggle
  let summaryStyle = {display: checked ? "block" : "none"};
  
  return(
    <div className="movie-container">
       <h3 className="movie-name">{name}</h3>
       <img className="movie-poster" src={poster} alt={alt_name}></img>
       <div className="movie-details">
         <p className="release-year">{year}</p>
         <p style={styles} className="movie-rating">⭐ {rating}</p>
       </div>  
       <FormGroup className="summary-switch">
         <FormControlLabel control={<Switch  size="small" onChange={(event) => setChecked(event.target.checked)}/>} label="Summary" />
       </FormGroup>
       <p style={summaryStyle} className="movie-summary">{summary}</p>
       <Counter />
    </div>
  );
}


function Counter(){
  let [like,setLike] = useState(0);
  let [dislike,setDislike] = useState(0);
  return(
     <div className="like-button">
       <Button variant="outlined" onClick={() => setLike(like+1)}>👍   {like}</Button>
       <Button variant="outlined" onClick={() => setDislike(dislike+1)}>👎   {dislike}</Button>
     </div>
  );
}

function AddMovie(){
  let [name,setName] = useState();
  let [poster, setPoster] = useState();
  let [year, setYear] = useState();
  let [rating, setRating] = useState();
  let [summary,setSummary] = useState();
  let [alt_name,setAltname] = useState();
  let[movielist,setMovielist] = useState([
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_FMjpg_UX1000_.jpg",
      name: "Frozen 2",
      alt_name: "image of frozen casts",
      year: "2019",
      rating: "6.8",
      summary:
        "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom."
    },
    {
      poster: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/titanic-double-poster-andrea-gatti.jpg",
      year: "1997",
      alt_name: "image of sinking titanic",
      name: "Titanic",
      rating: "7.8",
      summary:
        "James Cameron's 'Titanic' is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the 'ship of dreams' -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BYmRhNzZlOTMtOTczMi00NzZhLWFiZWItMTc1NjI3NTY5NTIzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      year: "2022",
      alt_name: "image of holtel transylvania",
      name: "Hotel Transylvania 4",
      rating: "6.1",
      summary:
        "Van Helsing's mysterious new invention transforms Drac and his pals into humans, and Johnny into a monster. With their new mismatched bodies, Drac and the pack must find a way to switch themselves back before their transformations become permanent."
    },
    {
      poster:
        "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810",
      year: "2003",
      alt_name: "image of nemo and his father",
      name: "Finding Nemo",
      rating: "8.1",
      summary:
        "Marlin (Albert Brooks), a clown fish, is overly cautious with his son, Nemo (Alexander Gould), who has a foreshortened fin. When Nemo swims too close to the surface to prove himself, he is caught by a diver, and horrified Marlin must set out to find him. A blue reef fish named Dory (Ellen DeGeneres) -- who has a really short memory -- joins Marlin and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, Nemo plots his escape from a dentist's fish tank."
    },
    {
      poster:
        "https://i.pinimg.com/originals/8e/3f/97/8e3f975072a0c3fbc3c7aa91598218a3.jpg",
      alt_name: "image of elephant and other animals on an iceberg",
      year: "2006",
      name: "Ice age 2",
      rating: "6.8",
      summary:
        "With global warming threatening their once-icy domain with widespread flooding, Manny (Ray Romano), Sid (John Alberto Leguizamo) and Diego (Denis Leary) set out to find a safe haven. Along the way, another mammoth (Queen Latifah), who thinks she is an opossum, joins the travelers on their perilous quest."
    },
    {
      poster:"https://m.media-amazon.com/images/I/A1tyD0nKdhL._AC_SY679_.jpg",
      alt_name: "coco poster",
      year:"2017",
      name:"Coco",
      rating: "8.4",
      summary:"Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history."
    }
  ]);
  return(
  <div> 
    <div className="Addmovie-form">
       <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)}/>
       <TextField id="outlined-basic" label="Poster Url" variant="outlined" onChange={(event) => setPoster(event.target.value)}/>
       <TextField id="outlined-basic" label="Year" variant="outlined" onChange={(event) => setYear(event.target.value)}/>
       <TextField id="outlined-basic" label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)}/>
       <TextField id="outlined-basic" label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)}/>
       <TextField id="outlined-basic" label="Alt Name" variant="outlined" onChange={(event) => setAltname(event.target.value)}/>

      <Button variant="outlined" onClick={() => setMovielist([{poster:poster,
       alt_name:alt_name, year:year, name:name, rating:rating, summary:summary},...movielist]
      )}>Add</Button>
    </div>

     <section className="movie-section">
       {movielist.map(({name,poster,alt_name,year,rating,summary}) => <DisplayMovie name={name} poster={poster} alt_name={alt_name} year={year} rating={rating} summary={summary}/>)}
     </section>
  </div>

  );
}