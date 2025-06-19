import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const TestimonialsSection = () => {
  const { themeColor: theme } = useContext(ThemeContext); // Access themeColor as theme from context

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sustainability Director",
      company: "Global Corp",
      content: "SustainIQ transformed how we track and reduce our carbon footprint. The AI insights are incredibly accurate and actionable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "ESG Manager",
      company: "EcoTech Solutions",
      content: "The real-time analytics and automated reporting have saved us countless hours while improving our sustainability performance.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      role: "Chief Operations Officer",
      company: "Green Industries",
      content: "Exceptional platform with intuitive design. The compliance features ensure we're always ahead of regulatory requirements.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section
      className={`py-20 px-6 ${
        theme === "light"
          ? "bg-gradient-to-br from-emerald-50 to-stone-50"
          : "bg-gradient-to-br from-stone-800 to-stone-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-light mb-6 ${
              theme === "light" ? "text-stone-800" : "text-stone-200"
            }`}
          >
            Trusted by{" "}
            <span
              className={`${
                theme === "light" ? "text-emerald-600" : "text-emerald-400"
              }`}
            >
              industry leaders
            </span>
          </h2>
          <p
            className={`text-xl font-light ${
              theme === "light" ? "text-stone-600" : "text-stone-400"
            }`}
          >
            Join thousands of organizations making a real impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                theme === "light"
                  ? "bg-white"
                  : "bg-stone-700"
              }`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      theme === "light"
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-yellow-300 text-yellow-300"
                    }`}
                  />
                ))}
              </div>

              <p
                className={`font-light leading-relaxed mb-6 ${
                  theme === "light" ? "text-stone-700" : "text-stone-300"
                }`}
              >
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div
                    className={`font-medium ${
                      theme === "light" ? "text-stone-800" : "text-stone-200"
                    }`}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "light" ? "text-stone-600" : "text-stone-400"
                    }`}
                  >
                    {testimonial.role}
                  </div>
                  <div
                    className={`text-sm ${
                      theme === "light" ? "text-emerald-600" : "text-emerald-400"
                    }`}
                  >
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
