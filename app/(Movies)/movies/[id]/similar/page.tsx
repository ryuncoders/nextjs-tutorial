import { IMovie } from "../../../../(Home)/page";
import Movie from "../../../../../components/movie";
import styles from "../../../../../styles/home.module.css";
import { API_URL } from "../../../../constants";

async function getSimilar(id: string) {
  const response = fetch(`${API_URL}/${id}/similar`);
  const json = (await response).json();
  return json;
}

export default async function Similar({
  params: { id },
}: {
  params: { id: string };
}) {
  const similar = await getSimilar(id);
  return (
    <div>
      <h1 className={styles.title}>Similar</h1>
      <div className={styles.container}>
        {similar.map((movie: IMovie) => (
          <Movie
            poster_path={movie.poster_path}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
