import styled from "styled-components"

export const Container = styled.div`
  margin: 2rem;
  h1 {
    text-align: center;
    margin: 3rem 0;
  }
`

export const Pagination = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  button {
    background-color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: #000;
    padding: 1rem 2rem;
    font-size: 1.25rem;
  }

  button:disabled {
    cursor: default;
    background-color: #808080;
  }

  span {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem 4rem;
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover span {
    border-bottom: 1px solid white;
  }

  img {
    width: 250px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
    border-bottom: 1px solid transparent;
    transition: all 0.3s;
  }

  a {
    transition: transform 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`
