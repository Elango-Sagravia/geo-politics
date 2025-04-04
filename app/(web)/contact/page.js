import ContactForm from "@/components/ui/contactForm/contactForm";
import Faq from "@/components/ui/faq/faq";
import Subscribe from "@/components/ui/subscribe/subscribe";
import libre from "@/components/libre-font";
import ContactHeader from "@/components/ui/contactHeader/contactHeader";

const title = "Contact Geopolitical Summary - Reach Our Team";
const description =
  "Have questions or need assistance? Contact Geopolitical Summary for support, partnerships, or media inquiries.";
export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/contact",
  },
  openGraph: {
    title,
    description,
  },
};
export default function Contact() {
  return (
    <main>
      {/* <header className="px-4 lg:px-16 py-20 max-w-7xl mx-auto">
        <h1 className={`text-4xl text-nl_background ${libre.className}`}>
          Contact us
        </h1>
      </header> */}
      <ContactHeader />
      <ContactForm />
      <Faq />
      <Subscribe />
    </main>
  );
}
