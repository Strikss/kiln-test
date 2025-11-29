import { useGetNfts } from '@/api/queries/useGetNfts';
import { UiImage } from '@/components/common/UiImage';
import { UiText } from '@/components/common/UiText';

export function MoreSection() {
  const { data, isLoading } = useGetNfts();

  return (
    <section className="flex flex-col gap-4">
      <UiText variant="title-s">More from this collection</UiText>
      <ul className="flex gap-4 overflow-x-auto">
        {!isLoading && data
          ? data.map(nft => (
              <li className="flex flex-col gap-2" key={nft.id}>
                <UiImage src={nft.metadata.image} alt={nft.metadata.name} />
                <div>
                  <UiText as="h4" variant="body-bold">
                    {nft.metadata.name}
                  </UiText>
                  <UiText as="p" variant="callout" color="gray">
                    0.0 ETH
                  </UiText>
                </div>
              </li>
            ))
          : Array.from({ length: 4 }).map((_, index) => <NftSkeleton key={index} />)}
      </ul>
    </section>
  );
}

function NftSkeleton() {
  return <li className="size-[300px] animate-pulse bg-gray-300" />;
}
