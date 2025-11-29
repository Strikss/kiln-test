import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia } from 'viem/chains';
import { WagmiProvider as WagmiClientProvider } from 'wagmi';

const config = getDefaultConfig({
  appName: 'Kiln-test',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains: [baseSepolia],
});

export function WagmiProvider({ children }: { children: React.ReactNode }) {
  return <WagmiClientProvider config={config}>{children}</WagmiClientProvider>;
}
