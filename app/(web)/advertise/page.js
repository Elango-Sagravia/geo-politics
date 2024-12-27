import AdvertiseForm from "@/components/ui/advertiseForm/advertiseForm";
import AdvertiseHero from "@/components/ui/advertiseHero/advertiseHero";
import AdvertiseQuestion from "@/components/ui/advertiseQuestion/advertiseQuestion";
import AdvertiseStatus from "@/components/ui/advertiseStatus/advertiseStatus";


export const metadata = {
  title: "Advertise with Geopolitics Summary - Reach Influencers",
  description:
    "Promote your brand with Geopolitics Summary newsletters. Connect with diplomats and informed readers for effective and impactful advertising.",
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/advertise",
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
