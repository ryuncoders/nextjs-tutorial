import Link from "next/link";
import { API_URL } from "../app/constants";
import styles from "../styles/movie_info.module.css";
import MovieCredits from "./movie-credits";
import MovieProviders from "./movie-providers";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.poster}
          src={movie.poster_path}
          alt={movie.title}
        />
        <div>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
          <p className={styles.info}>{movie.overview}</p>

          <a
            className={styles.homepage}
            href={movie.homepage}
            target={"_blank"}
          >
            Homepage &rarr;
          </a>
          <br />
          <Link href={`/movies/${id}/similar`}>Similar Movie &rarr;</Link>
          <MovieProviders id={id} />
        </div>
      </div>
      <MovieCredits id={id} />
    </div>
  );
}
