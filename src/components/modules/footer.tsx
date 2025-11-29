import { UiText } from '@/components/common/UiText';

export function Footer() {
  return (
    <footer className="grid place-items-center bg-black w-full py-8 mt-auto">
      <UiText variant="callout" color="white">
        All rights reserved.
      </UiText>
      <UiText variant="callout" color="white">
        Kiln Fullstack Team, Inc. 2025
      </UiText>
    </footer>
  );
}
