import { UiButton } from '@/components/common/UiButton';
import { ICONS } from '@/constants/icons';
import { ConnectButton, useConnectModal } from '@rainbow-me/rainbowkit';

import { useAccount } from 'wagmi';

export function Header() {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  return (
    <header className="flex items-center justify-between py-5 px-6">
      <ICONS.LogoIcon />
      {isConnected ? (
        <ConnectButton />
      ) : (
        <UiButton className="bg-black-1" onClick={openConnectModal}>
          Connect Wallet
        </UiButton>
      )}
    </header>
  );
}
