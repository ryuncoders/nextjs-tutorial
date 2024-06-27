import { API_URL } from "../app/(Home)/page";

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <div>{movie.title}</div>;
}
