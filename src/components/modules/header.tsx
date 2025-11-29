import { UiButton } from '@/components/common/UiButton';
import { ICONS } from '@/constants/icons';

export function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-6">
      <ICONS.LogoIcon />
      <UiButton className="bg-black-1">Connect Wallet</UiButton>
    </header>
  );
}
