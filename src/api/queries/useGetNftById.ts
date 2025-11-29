import { apiFetch } from '@/api';
import { QUERY_KEYS } from '@/api/queries';
import type { NFT } from '@/api/queries/sharedTypes';
import { useQuery } from '@tanstack/react-query';

export function useGetNftById(id: string) {
  return useQuery({
    queryKey: [...QUERY_KEYS.NFT, id],
    queryFn: () => apiFetch<NFT>(`/nfts/${id}`),
  });
}
