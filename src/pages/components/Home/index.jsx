import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Container, Pagination, Movie, MovieList } from "./HomeStyles.styled"
const API_KEY = process.env.REACT_APP_API_KEY

function Home() {
  const [movies, setMovies] = useState([])
  const imagePath = "https://image.tmdb.org/t/p/w500/"
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [page])

  return (
    <Container>
      <h1>Filmes Populares</h1>
      <Pagination>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1 ? true : false}
        >
          Página Anterior
        </button>
        <span>{`Página atual: ${page}`}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === 500 ? true : false}
        >
          Próxima Página
        </button>
      </Pagination>
      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>
    </Container>
  )
}

export default Home
