export default function CloseButton({ onClose }: { onClose: () => void }) {
  return (
    <span
      className="absolute cursor-pointer duration-300 text-black hover:text-white border-black dark:text-white dark:hover:text-black dark:border-white border-2 w-12 h-full sm:h-12 top-0 right-2 sm:right-12 text-xl hover:text-3xl hover:border-[24px] flex items-center justify-center"
      onClick={onClose}
    >
      &times;
    </span>
  );
}
