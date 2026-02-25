"use client";

import React from "react";
import {
  EyeOff,
  ArrowRightLeft,
  BarChart3,
  Puzzle,
  DollarSign,
  Split,
} from "lucide-react";

import { HeroNew } from "../components/heroes";
import { Benefits, DifferentiatorPods, ComparisonChart, FreeTextPods } from "../components/content";
import { LogoBlock } from "../components/logos";
import { StatPodStatic } from "../components/stats";
import { Quote } from "../components/testimonials";
import { TextCtaBand } from "../components/ctas";

export default function HuckberryPage() {
  return (
    <main>
      {/* Brand Header */}
      <div className="flex flex-col items-center gap-2 px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display, 'Outfit', sans-serif)" }}>
          Huckberry
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>+</span>
          <span className="font-semibold text-[#009b00]">Gladly</span>
        </div>
      </div>

      {/* Section 1: Hero / CX Profile */}
      <HeroNew
        heading="Huckberry Today"
        text="Huckberry built a rare brand where editorial and commerce align. Over a million customers trust the curation across emerging brands and gear. The CX operation handles everything from product questions to peak-season surges with a lean team — but after nearly a decade on Zendesk, the infrastructure hasn't kept pace. The fragmented stack lacks visibility into whether AI conversations generate revenue, and scaling from 25 to 45 agents during peaks makes handoffs unnecessarily difficult."
        primaryCTA={{
          text: "See the Gladly Difference",
          link: "#comparison",
          variant: "newBlack",
        }}
        secondaryCTA={{
          text: "Contact Mike Galindo",
          link: "mailto:michael.galindo@gladly.com",
          variant: "linkArrowBlack",
        }}
        image={{
          src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format",
          alt: "Huckberry CX platform overview",
        }}
        colorSchemeNew="white"
      />

      {/* Active Channels */}
      <Benefits
        heading="Active Channels"
        description="Huckberry's current CX footprint across five channels — each managed by a different tool or workflow."
        benefits={[
          { title: "Chat", description: "Primary channel — Alhina AI handles first-touch with Zendesk widget integration." },
          { title: "Email", description: "High volume, fully managed through Zendesk ticketing." },
          { title: "Phone", description: "Deprioritized and removed from the site to focus agent capacity." },
          { title: "Help Center", description: "Zendesk Guide powers both internal knowledge base and customer-facing articles." },
          { title: "Social", description: "Instagram and Facebook DMs handled through Zendesk social integrations." },
        ]}
        primaryCTA={{ children: "See unified channels", href: "#comparison" }}
        colorSchemeNew="lightgrey"
      />

      {/* Section 2: The Challenge */}
      <DifferentiatorPods
        heading="The Challenge"
        description="Six structural gaps in Huckberry's current CX stack that compound over time."
        columns={2}
        colorSchemeNew="lightgrey"
        pods={[
          { icon: <EyeOff size={24} />, title: "Revenue Attribution Blindness", description: "You're flying blind on whether AI-driven conversations actually generate revenue — no visibility into incremental sales or conversion lift. An expensive unknown for a brand built on curation." },
          { icon: <ArrowRightLeft size={24} />, title: "Agent Handoffs Without Context", description: "When Alhina hands off conversations, agents see only raw transcripts. With 20-25 agents handling complex product questions across 200+ brands, reading full logs costs time and erodes the premium experience." },
          { icon: <BarChart3 size={24} />, title: "Reporting Stitched Across Three Tools", description: "CX data lives in Alhina dashboard, Zendesk Explore, and Google Looker. Stitching these together manually to answer basic questions doesn't scale, especially during 30-45 agent peak surges." },
          { icon: <Puzzle size={24} />, title: "Custom Storefront Limits Integration Depth", description: "Huckberry's custom Solidus storefront creates friction for CX tooling. Zendesk integration provides only surface-level data; agents need external links for actions like processing refunds." },
          { icon: <DollarSign size={24} />, title: "Legacy Pricing Creates Comfortable Inertia", description: "Grandfathered Zendesk pricing locks the company out of newer capabilities. The real cost isn't the invoice — it's compounding CX debt from tools that can't keep pace." },
          { icon: <Split size={24} />, title: "Fragmented Customer Journey Visibility", description: "No single view of complete customer journeys across channels and purchases. Each channel exists in silos, preventing personalization agents and AI could deliver." },
        ]}
      />

      {/* Section 3: Comparison Table */}
      <div id="comparison">
        <ComparisonChart
          heading="Side-by-Side: Current Stack vs. Gladly"
          description="How Huckberry's existing Zendesk + Alhina setup compares to what Gladly delivers out of the box."
          gladlyLabel="With Gladly"
          competitorLabel="Zendesk + Alhina Today"
          colorSchemeNew="white"
          rows={[
            { feature: "Revenue Attribution", competitor: "No visibility into AI-driven revenue or conversion lift", gladly: "Built-in revenue attribution tracking every dollar influenced by AI via Liveboards" },
            { feature: "AI Handoff Quality", competitor: "Raw transcript dumped to agent — no summary or next steps", gladly: "AI-generated handoff summaries with recommended actions and full context" },
            { feature: "Reporting & Analytics", competitor: "Three separate reporting tools stitched manually", gladly: "Unified Looker-powered analytics for AI, agent, and business metrics" },
            { feature: "Storefront Integration", competitor: "Surface-level order data; agents use external links for actions", gladly: "Deep API integrations via App Actions for refunds, order modifications, inventory checks" },
            { feature: "Categorization", competitor: "Ticket-based system with 130 flat categories", gladly: "People-centered model with nested Topics and auto-applied categorization" },
            { feature: "Customer History", competitor: "Chat and email siloed — no unified history", gladly: "Customer Graph: single lifelong timeline across every channel" },
            { feature: "AI Capabilities", competitor: "AI limited to FAQ deflection", gladly: "Guides in plain English configured for clarifying questions and contextual cross-selling" },
            { feature: "Knowledge Management", competitor: "Knowledge sync requires manual uploads", gladly: "Continuous knowledge ingestion from URLs, help centers, and catalogs" },
          ]}
        />
      </div>

      {/* Section 4: Social Proof */}
      <LogoBlock
        heading="Trusted by Brands Like Huckberry"
        logos={[
          { name: "Bombas", src: "https://cdn.sanity.io/images/ny21dgz6/production/6e62fad9548c1522d9ca3841a0d63ecd14346cc6-500x75.svg", alt: "Bombas logo" },
          { name: "Crate & Barrel", src: "https://cdn.sanity.io/images/ny21dgz6/production/f79a47ca0cc709e18b9d39a7f21142532751796d-1000x145.svg", alt: "Crate & Barrel logo" },
          { name: "TUMI", src: "https://cdn.sanity.io/images/ny21dgz6/production/20c1016cf4735cbe7c0867bd019a963e5fc1ba87-500x132.svg", alt: "TUMI logo" },
          { name: "Nordstrom", src: "https://cdn.sanity.io/images/ny21dgz6/production/8130fbbc99727b85078e127f4aa1a17a40b60812-1000x126.svg", alt: "Nordstrom logo" },
          { name: "Allbirds", src: "https://cdn.sanity.io/images/ny21dgz6/production/ca39521212a8e8cfa65d41739fcfd7eb71e4c301-1000x322.svg", alt: "Allbirds logo" },
          { name: "UGG", src: "https://cdn.sanity.io/images/ny21dgz6/production/6a7a56a321e8b90ebd545668faed0834f2156ec5-1000x462.svg", alt: "UGG logo" },
        ]}
        columns={6}
        colorSchemeNew="black"
      />

      <StatPodStatic
        stats={[
          { value: "300M+", label: "Conversations Powered" },
          { value: "$510M+", label: "Cumulative Cost Savings" },
          { value: "65%", label: "CSAT Score Increase" },
        ]}
        columns={3}
        colorSchemeNew="black"
      />

      {/* Section 5: Cost of Staying Put */}
      <FreeTextPods
        heading="The Cost of Staying Put"
        columns={2}
        colorSchemeNew="lightgrey"
        pods={[
          { title: "Revenue You Can't See", description: "Every conversation Alhina handles might drive purchases but remains an invisible data point. Without attribution, optimization and ROI justification become impossible." },
          { title: "Agent Time Lost to Manual Context", description: "At 20-25 agents reading full transcripts per AI handoff, even 2-3 extra minutes adds hundreds of hours monthly. Peak season with 45 agents absorbs a team's productivity." },
          { title: "Brand Experience at Risk", description: "Customers expect editorial thoughtfulness in support matching product curation. Fragmented handoffs where customers repeat themselves erode brand trust." },
          { title: "Platform Gap Widens", description: "CX moves toward agentic AI taking actions. Zendesk and Alhina weren't built for this. Every quarter of delay increases the distance between current capabilities and market direction." },
        ]}
      />

      <Quote
        quote="The question isn't whether Huckberry's CX needs to evolve — it's whether your current stack can evolve with it."
        colorSchemeNew="white"
      />

      {/* Section 6: CTA / Next Steps */}
      <TextCtaBand
        heading="Let's Build This Together"
        text="Three exploration areas: a revenue attribution deep dive showing how Gladly AI tracks incremental sales, a Huckberry-tailored AI guide demo configured with your products and 130 categories, and 90-day free trial scoping with success metrics around attribution and handoff quality."
        primaryCTA={{
          text: "Schedule a Conversation",
          href: "mailto:michael.galindo@gladly.com",
          variant: "newWhite",
        }}
        secondaryCTA={{
          text: "Learn More About Gladly",
          href: "https://gladly.com",
          variant: "linkArrowWhite",
        }}
        colorSchemeNew="green"
      />
    </main>
  );
}
