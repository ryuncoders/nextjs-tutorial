import styles from "../styles/movie-providers.module.css";
import { API_URL } from "../app/constants";

async function getProviders(id: string) {
  const response = fetch(`${API_URL}/${id}/providers`);
  const json = (await response).json();
  return json;
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getProviders(id);
  return <div className={styles.container}>Providers ...</div>;
}
