import { useGetNfts } from '@/api/queries/useGetNfts';
import { UiImage } from '@/components/common/UiImage';
import { UiSkeleton } from '@/components/common/UiSkeleton';
import { UiText } from '@/components/common/UiText';
import { usePathname } from '@/hooks/usePathname';

export function MoreSection() {
  const { data, isLoading } = useGetNfts();
  const [, pushPath] = usePathname();

  return (
    <section className="flex flex-col gap-4">
      <UiText variant="title-s">More from this collection</UiText>
      <ul className="flex gap-4 overflow-x-auto">
        {!isLoading && data
          ? data.map(nft => (
              <li>
                <button
                  className="flex flex-col gap-2"
                  key={nft.id}
                  onClick={() => pushPath(nft.id)}
                >
                  <UiImage src={nft.metadata.image} alt={nft.metadata.name} />
                  <div className="text-left">
                    <UiText as="h4" variant="body-bold">
                      {nft.metadata.name}
                    </UiText>
                    <UiText as="p" variant="callout" color="gray">
                      0.0 ETH
                    </UiText>
                  </div>
                </button>
              </li>
            ))
          : Array.from({ length: 4 }).map((_, index) => <UiSkeleton as="li" key={index} />)}
      </ul>
    </section>
  );
}
