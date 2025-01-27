"use client";

import SubscriberForm from "@/components/ui/subscriberForm/subscriberForm";
import { useAppContext } from "@/context/appContext";
import Image from "next/image";

import libre from "@/components/libre-font";
import content from "@/content/content";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { isSubscribed, email, setEmail } = useAppContext();
  return (
    <div className="bg-nl_sec_background">
       <div className="flex px-4 md:px-16 pt-40 pb-24 lg:pt-44 bg-nl_sec_background max-w-7xl mx-auto lg:min-h-[650px]">
        <div className="flex-1">
          <h1
            className={`${cn(
              `text-nl_background text-4xl sm:text-5xl ${libre.className} leading-tight sm:leading-tight`
            )}`}
          >
            {content.homePage.hero.title}
          </h1>
          <p className="py-4">{content.homePage.hero.subTitle}</p>
          {isSubscribed ? (
            <>
              <p className="text-nl_background font-bold mt-10 text-2xl">
                Thank you for subscribing
              </p>
              <p className="mt-4 text-sm w-3/4 md:w-1/2 text-black/70">
                We sent you a welcome email to <strong>{email}</strong>. If you
                don't see it, please check your spam or junk folders.
              </p>
              <button
                onClick={() => setEmail("")}
                className="mt-4 text-sm w-full md:w-3/4 text-black/70 underline text-left"
              >
                Subscribe with different email
              </button>
            </>
          ) : (
            // <form
            //   className="mt-4 pb-2 flex w-3/4 md:w-2/3 flex-col gap-2"
            //   onSubmit={handleSubmit}
            // >
            //   <div className="flex w-full gap-2">
            //     <Input
            //       className="focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
            //       type="email"
            //       placeholder="Enter your email"
            //       value={inputEmail}
            //       onChange={(e) => setInputEmail(e.target.value)}
            //     />
            //     <Button className="rounded-none">Join Free</Button>
            //   </div>
            //   <p className="text-[12px]">
            //     100% free. No spam. Unsubscribe anytime.
            //   </p>
            // </form>
            <SubscriberForm formClasses="mt-4 pb-2 flex w-full sm:w-3/4  flex-col gap-2" />
          )}
        </div>
        <div className="hidden flex-1 lg:block relative">
          <Image
            src={"/home-hero.jpg"}
            layout="fill"
            objectFit="cover"
            alt="Home screen banner image"
          />
        </div>
      </div>
    </div>
  );
}
