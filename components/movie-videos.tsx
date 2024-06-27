import { API_URL } from "../app/(Home)/page";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div>
      {videos.map((video) => (
        <li>{video.name}</li>
      ))}
    </div>
  );
}
