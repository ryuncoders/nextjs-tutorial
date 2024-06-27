import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>movie detail</h3>
      <Suspense fallback={<h6>movie info Loading ...</h6>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h6>movie videos Loading ...</h6>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
