import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQwMTAzYWFkMTIwMmE3NjJiZjE3NjFkNGEzNWU0MSIsIm5iZiI6MTcyMzk5MTczNi4wOTEwNywic3ViIjoiNjZjMWQxZjhmYzU5YzJmMzIwZDJlZjA3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.8eiueCGOiYTFqzDqW6Fze3MMOk3WTfh5tqcw7xtjsSs",
  },
};

export const getTrendingMovies = async () => {
  const { data } = await instance.get("/trending/movie/day", options);
  return data;
};

export const getMovieById = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}`, options);
  console.log(data);

  return data;
};
