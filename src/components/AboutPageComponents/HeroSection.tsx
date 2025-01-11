import { Integrations } from "@/components/ui/integrations";

const HeroSection = () => {
  return (
    <div className="h-[400px] w-full overflow-hidden transition-all duration-1000 md:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Integrations />
    </div>
  );
};

export default HeroSection;
