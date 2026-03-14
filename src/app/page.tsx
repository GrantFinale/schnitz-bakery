import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import OurStory from '@/components/sections/OurStory';
import Delivery from '@/components/sections/Delivery';
import NeighborhoodPatrons from '@/components/sections/NeighborhoodPatrons';
import ProductsShowcase from '@/components/sections/ProductsShowcase';
import CallToAction from '@/components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <OurStory />
      <Delivery />
      <NeighborhoodPatrons />
      <ProductsShowcase />
      <CallToAction />
    </>
  );
}
