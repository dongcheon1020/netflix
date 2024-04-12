import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecommendationsdMovies = ({ id }) => {
  return api.get(`/movie/${id}/recommendations`);
};

export const useRecommendationsMoviesQuery = ({ id }) => {
  return useQuery({
    queryKey: ["recommendations_movie", { id }],
    queryFn: () => fetchRecommendationsdMovies({ id }),
    select: (result) => result.data,
  });
};
