// SecondaryFeatures.tsx
import React, { useState } from "react";
import clsx from "clsx";
import { Mic, Users, FileText } from "lucide-react";

import screenshotContacts from "../../assets/contacts.png"
import screenshotInventory from "../../assets/inventory.png"
import screenshotProfitLoss from "../../assets/contacts.png"

interface Feature {
  name: string;
  summary: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: "Voice Collection",
    summary: "Manage voice conversion collections for projects.",
    description:
      "Transform one voice into another using voice cloning. Encode the target voice and generate the same message in the target speaker’s identity while preserving the original intonation.",
    image: screenshotProfitLoss,
    icon: Mic,
  },
  {
    name: "Artist Management",
    summary: "Manage artist profiles and their voice collections for each project.",
    description:
      "Manage the artists and their voice collection. Set up a team, assign roles, and manage the voice collection for each project.",
    image: screenshotInventory,
    icon: Users,
  },
  {
    name: "Contracts & Invoices",
    summary: "Keep track of all of your contracts, service providers, and invoices in one place.",
    description:
      "Send contracts and receive signatures. Keep track of all your contracts and invoices effortlessly.",
    image: screenshotContacts,
    icon: FileText,
  },
];

interface FeatureProps {
  feature: Feature;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureProps> = ({ feature, isActive, className, onClick }) => {
  const Icon = feature.icon;
  return (
    <div
      onClick={onClick}
      className={clsx(
        "cursor-pointer transition-opacity duration-200",
        className,
        !isActive && "opacity-70 hover:opacity-100"
      )}
    >
      <div
        className={clsx(
          "w-9 h-9 flex items-center justify-center rounded-lg mb-4",
          isActive ? "bg-neutral-800" : "bg-neutral-800"
        )}
      >
        <Icon className="h-6 w-6 text-lime-400" />
      </div>
      <h3 className="text-white text-sm font-medium">{feature.name}</h3>
      <p className="mt-2 text-xl text-zinc-400 font-display">{feature.summary}</p>
      <p className="mt-3 text-sm text-zinc-500">{feature.description}</p>
    </div>
  );
};

// ---------- Mobile Version ----------
const FeaturesMobile: React.FC = () => {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <FeatureCard feature={feature} isActive={true} className="mx-auto max-w-2xl" />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-neutral-900 sm:-inset-x-6" />
            <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-slate-500/10">
              <img className="w-full" src={feature.image} alt={feature.name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ---------- Desktop Version ----------
const FeaturesDesktop: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="hidden lg:mt-20 lg:block">
      <div className="grid grid-cols-3 gap-x-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.summary}
            feature={feature}
            isActive={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
            className="relative"
          />
        ))}
      </div>

      {/* <div className="relative mt-20 overflow-hidden rounded-4xl bg-neutral-900 px-10 py-14">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}>
          {features.map((feature, index) => (
            <div
              key={feature.summary}
              className={clsx(
                "w-full flex-shrink-0 px-5 transition-opacity duration-500",
                selectedIndex === index ? "opacity-100" : "opacity-60"
              )}
            >
              <div className="overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-slate-500/10">
                <img className="w-full" src={feature.image} alt={feature.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
      </div> */}
    </div>
  );
};

// ---------- Main Component ----------
const Secondaryfeatures: React.FC = () => {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-sm pb-4 tracking-widest text-lime-400 uppercase font-display">
            Audio Realities for Business
          </h3>
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Grow your business with ease
          </h2>
          <p className="mt-4 text-lg tracking-tight text-zinc-400">
            Build and manage a team around artist Voice Collection for every project.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </div>
    </section>
  );
};

export default Secondaryfeatures;
