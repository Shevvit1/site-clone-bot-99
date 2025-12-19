import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

export const TestimonialsSection = () => {
  return (
    <section className="py-6 md:py-10 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12 space-y-4">
          <h2 className="text-4xl font-bold">Witness the Transformation!</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Don't just take our word for it–see the undeniable difference! These authentic client photos are powerful proof of the outstanding, professional results our team consistently delivers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={beforeAfter1}
              alt="Before and after sofa deep cleaning results Mullingar"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={beforeAfter2}
              alt="Deep armchair cleaning before and after transformation"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={beforeAfter3}
              alt="Professional carpet cleaning results before and after"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
