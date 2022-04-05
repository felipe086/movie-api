import styled from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  align-content: center;

  .movie {
    display: flex;
    align-self: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  h1 {
    margin: 3rem 0;
  }

  span {
    font-size: 1.25rem;
    line-height: 1.4rem;
    margin-bottom: 2rem;
  }

  .release-date {
    opacity: 0.8;
  }

  a {
    text-decoration: none;
    align-self: flex-end;
  }

  button {
    background-color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: #000;
    padding: 1rem 2rem;
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`
