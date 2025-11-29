import type { NFT } from '@/api/queries/sharedTypes';
import { UiButton } from '@/components/common/UiButton';
import { UiText } from '@/components/common/UiText';
import { ICONS } from '@/constants/icons';

type NftAssetInfoProps = {
  nft: NFT;
};

export function NftAssetInfo({ nft }: NftAssetInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <UiText color="black" variant="title" as="h3">
            {nft.metadata.name}
          </UiText>
          <UiText color="gray" variant="callout">
            You own 0
          </UiText>
        </div>
      </div>
      <UiText color="gray">{nft.metadata.description}</UiText>
      <div className="grid grid-cols-3 gap-3">
        {nft.metadata.attributes.map(attribute => (
          <div
            className="flex flex-col gap-1 p-4 border border-border-main"
            key={attribute.trait_type}
          >
            <UiText variant="caption" color="gray">
              {attribute.trait_type}
            </UiText>
            <UiText variant="callout" color="black">
              {attribute.value}
            </UiText>
          </div>
        ))}
      </div>
      <hr className="border-border-main" />
      <div className="flex flex-col gap-2">
        <UiButton size="sm">Free Mint</UiButton>
        <div className="flex gap-2 items-center">
          <ICONS.ThreeLinesIcon className="size-4" />
          <UiText color="black" variant="title">
            0 ETH
          </UiText>
        </div>
      </div>
      <UiButton size="lg" fullWidth>
        Claim Now
      </UiButton>
    </div>
  );
}
