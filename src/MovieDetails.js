import { useParams } from "react-router-dom";

export function MovieDetails({ mlist }) {
  let { id } = useParams();
  let currentMovie = mlist[id];
  

  let name = currentMovie.name, summary = currentMovie.summary, trailer = currentMovie.trailer;

  return (
    <div className="movie-details-container">
      <iframe width="100%" height="550px" src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-details-specs">
        <h2>{name}</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
}
