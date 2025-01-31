import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import "../web.css";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I'm a passionate computer science student with a strong interest in web and app development. Skilled in languages like Python, JavaScript, C, and Java, they enjoy building projects that bridge the gap between software and real-world applications. Adithya has worked on a variety of exciting projects, including a gaming supplies e-commerce website, a farmers' portal, and several mobile apps using React Native. Always eager to learn and tinker with new technologies, they enjoy tackling challenges and creating solutions that are both functional and innovative.",
      name: "Adithya P S",
      designation: "Computer Science Student",
      src: "/main.jpg",
    }
  ];
  return(
    <div className="h-screen bg-black">
      <AnimatedTestimonials testimonials={testimonials}/>
    </div>
  );
}
