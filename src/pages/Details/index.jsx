import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Container } from "./styles"
const API_KEY = process.env.REACT_APP_API_KEY

function Details() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const imagePath = "https://image.tmdb.org/t/p/w500/"

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`
    )
      .then(response => response.json())
      .then(data => {
        const { title, overview, poster_path, release_date } = data

        const movieInfo = {
          id,
          title,
          synopsis: overview,
          image: `${imagePath}${poster_path}`,
          releaseDate: release_date
        }

        setMovie(movieInfo)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>{movie.synopsis}</span>
          <span className="release-date">
            Data de Lançamento: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Details
