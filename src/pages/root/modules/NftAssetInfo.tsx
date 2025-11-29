import { UiButton } from '@/components/common/UiButton';
import { UiText } from '@/components/common/UiText';
import { ICONS } from '@/constants/icons';

export function NftAssetInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <UiText color="black" variant="title" as="h3">
            Kiln #2
          </UiText>
          <UiText color="gray" variant="callout">
            You own 0
          </UiText>
        </div>
      </div>
      <UiText color="gray">
        A cheerful character with a rainbow puff afro and big glasses, wearing Kiln gear with pastel
        vibes.
      </UiText>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-1 p-4 border border-border-main">
          <UiText variant="caption" color="gray">
            HAIR
          </UiText>
          <UiText variant="callout" color="black">
            Rainbow Afro
          </UiText>
        </div>
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
