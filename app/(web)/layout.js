import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";
import AppProvider from "@/context/appContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import PassendoAd from "@/components/ui/passendoAd/PassendoAd";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Geopolitics world",
//   description: "Understand the forces shaping the world.",
// };

const thumbnail = "/og.png";
const baseUrl = process.env.url;
export async function generateMetadata() {
  const title =
    "Geopolitical Summary - Understand the WHY behind current events";

  const description =
    "Get fact-checked news and analysis on global politics with Geopolitical Summary. Trusted by diplomats and readers worldwide.";

  return {
    metadataBase: new URL(process.env.url),
    title,
    description,
    themeColor: "#06276f",
    openGraph: {
      title,
      description,
      url: baseUrl,
      images: [
        {
          url: thumbnail,
          secureUrl: thumbnail,
          alt: "Geopolitical Summary",
        },
      ],
      type: "website",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Geopolitical Summary",
  alternateName: "geopoliticalsummary",
  url: "https://www.geopoliticalsummary.com/",
  logo: "https://www.geopoliticalsummary.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "(307) 429-0673",
    contactType: "customer service",
    contactOption: "TollFree",
    areaServed: "US",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/people/Geopolitical-Summary/61562847449514/",
    "https://www.instagram.com/geopoliticalsummary/",
    "https://www.linkedin.com/showcase/geopoliticalsummary/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning={true} lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          id="schema-name"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Geopolitical Summary",
              alternateName: "Geopolitical Summary",
              url: "https://www.geopoliticalsummary.com",
            }),
          }}
        />
        {/* Microsoft Clarity Script */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qd9zb94wyc");`}
        </Script>
        <Script id="gm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K72D66BW');`}
        </Script>
        <Script
          id="gtm-noscript"
          dangerouslySetInnerHTML={{
            __html: `
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K72D66BW"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    `,
          }}
        />
        <meta name="application-name" content="Geopolitical Summary" />
        <meta property="og:site_name" content="Geopolitical Summary" />
        <meta
          name="apple-mobile-web-app-title"
          content="Geopolitical Summary"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider>
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <PassendoAd />
            <Footer />
          </AppProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-0XQ9CYQXPG" />
    </html>
  );
}
