import { ReactQueryProvider } from '@/libs/ReactQueryProvider';
import { WagmiProvider } from '@/libs/WagmiProvider';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider>
      <ReactQueryProvider>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  );
}
