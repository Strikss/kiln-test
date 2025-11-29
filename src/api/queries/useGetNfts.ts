import { apiFetch } from '@/api';
import { QUERY_KEYS } from '@/api/queries';
import type { NFT } from '@/api/queries/sharedTypes';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export function useGetNfts() {
  return useQuery({
    queryKey: QUERY_KEYS.NFTS,
    queryFn: () => apiFetch<NFT[]>('/nfts'),
    placeholderData: keepPreviousData,
  });
}
