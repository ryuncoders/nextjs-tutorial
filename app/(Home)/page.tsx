import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getMovie() {
  // return await fetch(URL).then((response) => response.json());
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

interface IMovie {
  poster_path: string;
  title: string;
  id: string;
}

export default async function HomePage() {
  const movies = await getMovie();
  return (
    <div className={styles.container}>
      {movies.map((movie: IMovie) => (
        <Movie
          poster_path={movie.poster_path}
          title={movie.title}
          id={movie.id}
        />
      ))}
    </div>
  );
}
