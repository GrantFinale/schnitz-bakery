import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-8xl font-bold tracking-widest text-[#ED1C24] sm:text-9xl">
          404
        </p>
        <h1 className="mt-6 text-2xl font-bold tracking-widest text-white sm:text-3xl">
          Looks Like This Loaf Got Lost
        </h1>
        <p className="mt-4 text-base text-[#E5E5E5]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block rounded bg-[#ED1C24] px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors hover:bg-[#d4181f]"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
