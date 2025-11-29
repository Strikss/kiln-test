import { apiFetch } from '@/api';
import { QUERY_KEYS } from '@/api/queries';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

type NFT = {
  chainId: number;
  id: string;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: {
      trait_type: string;
      value: string;
    }[];
  };
  tokenAddress: string;
  tokenURI: string;
  type: string;
};

export function useGetNfts() {
  return useQuery({
    queryKey: QUERY_KEYS.NFTS,
    queryFn: () => apiFetch<NFT[]>('/nfts'),
    placeholderData: keepPreviousData,
  });
}
