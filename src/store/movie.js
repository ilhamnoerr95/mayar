import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: "5ec2caaaa0f98451a25d1429",
      name: "The Matrix",
      actor: {
        id: "5ec2ac72abe66a4b8a184f96",
        age: 56,
        name: "Keanu Reeves",
      },
    },
    {
      id: "5ec2cc76a0f98451a25d142c",
      name: "Inception",
      actor: {
        id: "5ec2ac60abe66a4b8a184f95",
        age: 45,
        name: "Leonardo DiCaprio",
      },
    },
    {
      id: "5ec2cd4ca0f98451a25d142d",
      name: "Inferno",
      actor: {
        id: "5ec2abab84395b4b4c71ed9d",
        age: 63,
        name: "Tom Hanks",
      },
    },
    {
      id: "5ec2cd51a0f98451a25d142e",
      name: "The Terminal",
      actor: {
        id: "5ec2abab84395b4b4c71ed9d",
        age: 63,
        name: "Tom Hanks",
      },
    },
    {
      id: "5ec2ce62a0f98451a25d142f",
      name: "John Wick",
      actor: {
        id: "5ec2ac72abe66a4b8a184f96",
        age: 56,
        name: "Keanu Reeves",
      },
    },
    {
      id: "5ec2ce95a0f98451a25d1430",
      name: "The Revenant",
      actor: {
        id: "5ec2ac60abe66a4b8a184f95",
        age: 45,
        name: "Leonardo DiCaprio",
      },
    },
    {
      id: "5ec4c1ff0cec6600504f91c0",
      name: "Speed",
      actor: {
        id: "5ec2ac72abe66a4b8a184f96",
        age: 56,
        name: "Keanu Reeves",
      },
    },
    {
      id: "5eedb9e30522d10053117394",
      name: "San Andreas",
      actor: {
        id: "5ec2de25b59fa9548d9b4f4f",
        age: 48,
        name: "Dwayne Johnson",
      },
    },
    {
      id: "5eee372cf9d9b7137feecdd0",
      name: "Baasha",
      actor: {
        id: "5eee36baf9d9b7137feecdcf",
        age: 69,
        name: "Rajinikanth",
      },
    },
    {
      id: "5f0cab9db58b1235dba4947b",
      name: "Darbar",
      actor: {
        id: "5eee36baf9d9b7137feecdcf",
        age: 69,
        name: "Rajinikanth",
      },
    },
    {
      id: "5f0cc81670951940aa0bf7f5",
      name: "Test '- +",
      actor: {
        id: "5eee36baf9d9b7137feecdcf",
        age: 69,
        name: "Rajinikanth",
      },
    },
  ],
  actors: [
    {
      id: "5ec2abab84395b4b4c71ed9d",
      name: "Tom Hanks",
      age: 63,
      movies: [
        {
          id: "5ec2cd4ca0f98451a25d142d",
          name: "Inferno",
          genre: "Thriller",
        },
        {
          id: "5ec2cd51a0f98451a25d142e",
          name: "The Terminal",
          genre: "Romantic",
        },
      ],
    },
    {
      id: "5ec2ac60abe66a4b8a184f95",
      name: "Leonardo DiCaprio",
      age: 45,
      movies: [
        {
          id: "5ec2cc76a0f98451a25d142c",
          name: "Inception",
          genre: "Sci-Fi",
        },
        {
          id: "5ec2ce95a0f98451a25d1430",
          name: "The Revenant",
          genre: "Action",
        },
      ],
    },
    {
      id: "5ec2ac72abe66a4b8a184f96",
      name: "Keanu Reeves",
      age: 56,
      movies: [
        {
          id: "5ec2caaaa0f98451a25d1429",
          name: "The Matrix",
          genre: "Sci-Fi",
        },
        {
          id: "5ec2ce62a0f98451a25d142f",
          name: "John Wick",
          genre: "Action",
        },
        {
          id: "5ec4c1ff0cec6600504f91c0",
          name: "Speed",
          genre: "Action",
        },
      ],
    },
    {
      id: "5ec2de25b59fa9548d9b4f4f",
      name: "Dwayne Johnson",
      age: 48,
      movies: [
        {
          id: "5eedb9e30522d10053117394",
          name: "San Andreas",
          genre: "Action",
        },
      ],
    },
    {
      id: "5eee36baf9d9b7137feecdcf",
      name: "Rajinikanth",
      age: 69,
      movies: [
        {
          id: "5eee372cf9d9b7137feecdd0",
          name: "Baasha",
          genre: "Action",
        },
        {
          id: "5f0cab9db58b1235dba4947b",
          name: "Darbar",
          genre: "Action",
        },
        {
          id: "5f0cc81670951940aa0bf7f5",
          name: "Test '- +",
          genre: "Action",
        },
      ],
    },
  ],
};

export const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const selectMovie = (state) => state.dataMovie.movies;
export const selectActors = (state) => state.dataMovie.actors;

export default movies.reducer;
