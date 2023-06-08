import Heading from "../heading";
import Section from "../section";

function HeroSection() {
  return (
    <Section>
      <div className="custom-hero my-4 flex h-[244px] flex-col items-start justify-center space-y-4 rounded-md pl-20 ">
        <Heading style={{ color: "#F0BD2D" }} size="h1">
          Flash Sale
        </Heading>
        <p className="max-w-[400px] text-sm font-light text-white">
          Take this oppurtunity to get amazing discounts on the prices of your
          favorite items.
        </p>
      </div>
    </Section>
  );
}

export default HeroSection;
