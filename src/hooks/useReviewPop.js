import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchReviewPop = ({ id }) => {
  return api.get(`movie/${id}/reviews`);
};

export const useReviewPopQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie_reviewPop", { id }],
    queryFn: () => fetchReviewPop({ id }),
    select: (result) => result.data,
  });
};
