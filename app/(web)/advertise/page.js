import AdvertiseForm from "@/components/ui/advertiseForm/advertiseForm";
import AdvertiseHero from "@/components/ui/advertiseHero/advertiseHero";
import AdvertiseQuestion from "@/components/ui/advertiseQuestion/advertiseQuestion";
import AdvertiseStatus from "@/components/ui/advertiseStatus/advertiseStatus";

const title = "Advertise with Geopolitical Summary";
const description =
  "Promote your brand through Geopolitical Summary newsletter. Reach an informed, international audience with targeted advertising.";
export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/advertise",
  },
  openGraph: {
    title,
    description,
  },
};

export default function Advertise() {
  return (
    <main>
      <AdvertiseHero />
      <AdvertiseStatus />
      <AdvertiseForm />
      <AdvertiseQuestion />
    </main>
  );
}
