export default function AnnouncementBanner() {
  return (
    <div className="bg-black/80 border-b border-[#DF3131]/30 px-4 py-6 text-center">
      <div className="mx-auto max-w-4xl font-mono">
        <p className="text-2xl tracking-widest text-[#DF3131] sm:text-3xl">
          New Order Deadline
        </p>
        <p className="mt-3 text-xl text-[#DF3131] sm:text-2xl">
          Beginning 3/7/26 order cutoff will be 12PM for next day deliveries.
        </p>
        <p className="mt-4 text-sm text-[#DF3131]/80 sm:text-base">
          Thanks for understanding and your continued support.
        </p>
        <p className="mt-2 text-sm text-[#DF3131]/80 sm:text-base italic">
          Get ready for our new ordering page! Lots of exciting features are on the way!
        </p>
      </div>
    </div>
  );
}
