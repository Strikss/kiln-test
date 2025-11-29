import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { CLAIM_NFT_ABI } from '@/web3/claimNftAbi';
import type { Address } from 'viem';

type UseClaimNftParams = {
  contractAddress: Address;
  tokenId: string;
};

export function useClaimNft({ contractAddress, tokenId }: UseClaimNftParams) {
  const { address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const {
    data: hash,
    writeContract,
    isPending,
    error,
  } = useWriteContract({
    mutation: {
      onSuccess: () => {
        successToastShown.current = false;
      },
      onError: () => {
        toast.error('Failed to claim NFT');
      },
    },
  });
  const successToastShown = useRef(false);

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: receiptError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    if (isConfirmed && !successToastShown.current) {
      toast.success('NFT claimed successfully!');
      successToastShown.current = true;
    }
  }, [isConfirmed]);

  useEffect(() => {
    if (receiptError) {
      toast.error('Transaction failed');
    }
  }, [receiptError]);

  function claim() {
    if (!isConnected || !address) {
      openConnectModal?.();
      return;
    }

    if (!contractAddress) {
      toast.error('Contract address is missing');
      return;
    }

    writeContract({
      address: contractAddress,
      abi: CLAIM_NFT_ABI,
      functionName: 'claim',

      args: [
        address,
        BigInt(tokenId),
        1n,
        '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        0n,
        {
          proof: [],
          quantityLimitPerWallet: 0n,
          pricePerToken: 0n,
          currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
        },
        '0x',
      ],
    });
  }

  return {
    claim,
    isPending: isPending || isConfirming,
    isConfirmed,
    hash,
    error: error || receiptError,
    isConnected,
  };
}
