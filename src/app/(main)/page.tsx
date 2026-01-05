import { Hero } from "@/components/landing/hero";
import { Modules } from "@/components/landing/modules";
import { Clients } from "@/components/landing/clients";
import { Stats } from "@/components/landing/stats";
import { Advantages } from "@/components/landing/advantages";
import { Differentials } from "@/components/landing/differentials";
import { Faq } from "@/components/landing/faq";
import { BlogPreview } from "@/components/landing/blog-preview";
import { DemoForm } from "@/components/landing/demo-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Modules />
      <Clients />
      <Stats />
      <Advantages />
      <Differentials />
      <Faq />
      <BlogPreview />
      <DemoForm />
    </>
  );
}
