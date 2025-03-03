import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";
import Certification1 from "../../image/Certification1.jpg"; // ✅ If the image exists at this path
import Certification2 from "../../image/Certification2.jpg"; // ✅ If the image exists at this path
import Certification3 from "../../image/Certification3.jpeg"; // ✅ If the image exists at this path
import Certification4 from "../../image/Certification4.jpg"; // ✅ If the image exists at this path
import Certification5 from "../../image/Certification5.jpg"; // ✅ If the image exists at this path
import Certification6 from "../../image/Certification6.jpg"; // ✅ If the image exists at this path

export function Certifications() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: Certification1,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: Certification2,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: Certification3,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: Certification4,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: Certification5,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: Certification6,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
