import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchDetailCredits = ({ id }) => {
  return api.get(`/movie/${id}/credits`);
};

export const useDetailCreditsQuery = ({ id }) => {
  return useQuery({
    queryKey: ["detail_credits", { id }],
    queryFn: () => fetchDetailCredits({ id }),
    select: (result) => result.data,
  });
};
