import { useGetNftById } from '@/api/queries/useGetNftById';
import { UiImage } from '@/components/common/UiImage';
import { UiSkeleton } from '@/components/common/UiSkeleton';
import { usePathname } from '@/hooks/usePathname';
import { KilnSocials } from '@/pages/root/modules/KilnSocials';
import { NftAssetInfo } from '@/pages/root/modules/NftAssetInfo';

export function NftDetailSection() {
  const [pathname] = usePathname();
  const splittedPathname = pathname.split('/').pop();
  const { data, isLoading } = useGetNftById(splittedPathname || '0');

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      {data ? (
        <>
          <UiImage src={data.metadata.image} alt="nft" className="w-full h-[600px]" />
          <NftAssetInfo nft={data} />
        </>
      ) : isLoading ? (
        <UiSkeleton className="h-[600px] w-full col-span-2" />
      ) : null}
      <KilnSocials />
    </section>
  );
}
