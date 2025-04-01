// This is the main entry point for the application.
"use client";
import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import AboutSection from '@/components/sections/AboutSection';
import ServicesOverview from '@/components/sections/ServicesOverview';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import Sidebar from '@/components/layout/Sidebar';
// import GSTIN from '@/components/ui/GSTIN';
export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* <GSTIN/> */}
      <Hero />
      {/* <FeaturedProducts /> */}
      <AboutSection />
      <ServicesOverview />
      <TestimonialsSection />
    </div>
  );
}