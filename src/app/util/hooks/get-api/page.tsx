import { GET } from '@/app/api/route';
import { useSuspenseQuery } from '@tanstack/react-query';

//TODO: 次のcommitで使用
export const getYoutubeAPI = () => {
  const { data, error } = useSuspenseQuery<GetYoutubeType>({
    queryKey: ['get'],
    queryFn: GET,
  });

  if (error) {
    throw error;
  }

  return [data, error];
};
