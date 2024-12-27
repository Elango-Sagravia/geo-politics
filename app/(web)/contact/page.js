import ContactForm from "@/components/ui/contactForm/contactForm";
import Faq from "@/components/ui/faq/faq";
import Subscribe from "@/components/ui/subscribe/subscribe";
import libre from "@/components/libre-font";
import ContactHeader from "@/components/ui/contactHeader/contactHeader";



export const metadata = {
  title: "Contact Geopolitics Summary - Get in Touch",
  description:
    "Have a question or need assistance? Contact Geopolitics Summary for prompt support regarding our newsletters or services.",
  alternates: {
    canonical: "https://www.geopoliticalsummary.com/contact",
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
