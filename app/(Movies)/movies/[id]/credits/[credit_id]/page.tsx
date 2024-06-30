import styles from "../../../../../../styles/movie_info.module.css";
import { getCredits } from "../../../../../../components/movie-credits";

interface ICredits {
  name: string;
  popularity: number;
  character: string;
  profile_path: string;
  credit_id: string;
}

async function getCreditsCharachter(id: string, credit_id: string) {
  const data = await getCredits(id);
  const credits = data.find((item: ICredits) => item.credit_id === credit_id);
  return [
    credits.name,
    credits.popularity,
    credits.character,
    credits.profile_path,
  ];
}

export default async function Credits({
  params: { credit_id, id },
}: {
  params: { credit_id: string; id: string };
}) {
  const [name, popularity, character, profile_path] =
    await getCreditsCharachter(id, credit_id);
  return (
    <div className={styles.creditsContainer}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.container}>
        <img src={profile_path} alt={name} />
        <div className={styles.info}>
          <span>popularity: {popularity}</span>
          <span>character: {character}</span>
        </div>
      </div>
    </div>
  );
}
