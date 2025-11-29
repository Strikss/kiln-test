import { UiButton } from '@/components/common/UiButton';
import { UiLink } from '@/components/common/UiLink';
import { UiText } from '@/components/common/UiText';
import { ICONS } from '@/constants/icons';
import { LINKS, SOCIALS } from '@/constants/links';

const SOCIAL_LINKS = [
  {
    icon: ICONS.InstagramIcon,
    href: LINKS.INSTAGRAM,
    label: SOCIALS.INSTAGRAM,
  },
  {
    icon: ICONS.XIcon,
    href: LINKS.X,
    label: SOCIALS.X,
  },
];

export function KilnSocials() {
  return (
    <div className="border border-border-main p-6 flex flex-col gap-6">
      <div className="flex gap-4 items-center">
        <ICONS.LogoCircledIcon className="size-14" />
        <div>
          <UiText as="p" variant="body-bold">
            KILN
          </UiText>
          <UiText as="p" color="gray" variant="callout">
            @Kiln
          </UiText>
        </div>
      </div>
      <UiText color="gray" variant="callout">
        Hundreds of companies use Kiln to earn rewards on their digital assets, or to whitelabel
        earning functionality into their products.
      </UiText>
      <div className="flex gap-4">
        {SOCIAL_LINKS.map(link => (
          <UiLink href={link.href} key={link.label} className="flex items-center gap-2 font-medium">
            <link.icon className="size-5" />
            <span>{link.label}</span>
          </UiLink>
        ))}
      </div>
      <div className="flex gap-2">
        <UiButton fullWidth href={LINKS.WEBSITE}>
          Website
        </UiButton>
        <UiButton variant="secondary" iconOnly href={LINKS.WEBSITE}>
          <ICONS.ArrowRightUpIcon className="size-4" />
        </UiButton>
      </div>
    </div>
  );
}
