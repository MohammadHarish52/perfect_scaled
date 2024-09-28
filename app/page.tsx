import { AvailableForComponent } from "@/components/available-for";
import { FeaturesPageComponent } from "@/components/features-page";
import { FooterComponent } from "@/components/footer";
import { LandingPage } from "@/components/landing-page";
import { PerfectscaleDifference } from "@/components/perfectscale-difference";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <FeaturesPageComponent />
      <PerfectscaleDifference />
      <AvailableForComponent />
      <FooterComponent />
    </div>
  );
}
