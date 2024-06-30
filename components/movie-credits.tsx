import styles from "../styles/movie-credits.module.css";
import { API_URL } from "../app/constants";
import Link from "next/link";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  const json = await response.json();
  return json;
}

interface ICredits {
  name: string;
  profile_path: string;
  character: string;
  credit_id: string;
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      <h1>Credits</h1>
      <div className={styles.grid}>
        {credits.map((item: ICredits) => (
          <Link
            href={`/movies/${id}/credits/${item.credit_id}`}
            className={styles.link}
          >
            <img src={item.profile_path} alt={item.name} />
            <h6>{item.character}</h6>
          </Link>
        ))}
      </div>
    </div>
  );
}
