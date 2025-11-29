import { KilnSocials } from '@/pages/root/modules/KilnSocials';
import { NftAssetInfo } from '@/pages/root/modules/NftAssetInfo';
import { NftAssetPreview } from '@/pages/root/modules/NftAssetPreview';

export function NftDetailSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <NftAssetPreview />
      <NftAssetInfo />
      <KilnSocials />
    </section>
  );
}
