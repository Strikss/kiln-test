import { UiText } from '@/components/common/UiText';

export function MoreSection() {
  return (
    <section className="flex flex-col gap-4">
      <UiText variant="title-s">More from this collection</UiText>
      <ul className="flex gap-4">
        <li className="flex flex-col gap-2">
          <div className="size-[300px] bg-amber-200" />
          <div>
            <UiText as="h4" variant="body-bold">
              Kiln #2
            </UiText>
            <UiText as="p" variant="callout" color="gray">
              0.0 ETH
            </UiText>
          </div>
        </li>
      </ul>
    </section>
  );
}
