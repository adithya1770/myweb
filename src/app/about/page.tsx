import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import "../web.css";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "love tinkering around computers and currently interested in learning multi-threading and low level programming.",
      name: "adithya p s",
      designation: "computer science enthusiast",
      src: "/main.jpg",
    }
  ];
  return(
    <div className="h-screen bg-black">
      <AnimatedTestimonials testimonials={testimonials}/>
    </div>
  );
}
