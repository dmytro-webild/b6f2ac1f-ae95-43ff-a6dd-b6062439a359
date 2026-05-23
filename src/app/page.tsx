"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { CheckCircle, Clock, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Collection",
          id: "#products",
        },
        {
          name: "Heritage",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Royal Wrist"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Royal Wrist"
      description="Exquisite craftsmanship meets timeless elegance."
      buttons={[
        {
          text: "Discover Collection",
          href: "#products",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-old-vintage-clock_1232-1720.jpg",
          imageAlt: "luxury watch dark background",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-looking-his-watch-closeup_53876-176905.jpg",
          imageAlt: "modern luxury watch gold",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-old-vintage-clock_1232-1717.jpg",
          imageAlt: "classic gold watch marble",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-man-wearing-suit-more-precisely-his-hands-ring-wristwatch_181624-23031.jpg",
          imageAlt: "luxury wrist watch close up",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-military-protection-item_23-2149341299.jpg",
          imageAlt: "watch crown macro luxury",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-time-machine_23-2151599339.jpg",
          imageAlt: "luxury watch internal mechanism",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "The Royal Legacy of Precision",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/making-clothes-tailor-sitting-table-working-sewing-machine-sewing-workshop_613910-5281.jpg",
          alt: "watchmaker crafting luxury",
        },
      ]}
      buttons={[
        {
          text: "Explore History",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Swiss Heritage",
          description: "Authentic Swiss movements.",
          buttonIcon: "Shield",
          imageSrc: "http://img.b2bpic.net/free-photo/tired-beautiful-girl-after-shopping-day-brunette-model-with-long-hair-posing-camera-with-purchases-from-famous-stores-pretty-sad-lady-white-tshirt-jeans-holding-bags-with-logo-brands_132075-12427.jpg",
          imageAlt: "brand logo minimal",
        },
        {
          title: "Gold Craftsmanship",
          description: "18k gold detailing.",
          buttonIcon: "Sparkles",
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-old-vintage-clock_1232-1720.jpg",
          imageAlt: "brand logo minimal",
        },
        {
          title: "Global Warranty",
          description: "Peace of mind included.",
          buttonIcon: "Award",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-looking-his-watch-closeup_53876-176905.jpg",
          imageAlt: "brand logo minimal",
        },
        {
          title: "Limited Edition",
          description: "Exclusive designs only.",
          buttonIcon: "Zap",
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-old-vintage-clock_1232-1717.jpg",
          imageAlt: "brand logo minimal",
        },
      ]}
      title="Why Choose Royal Wrist"
      description="Setting the standard for luxury timepieces."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Golden Classic",
          price: "$12,000",
          variant: "18k Gold",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-equipment-manual-tool-surface_1303-374.jpg",
        },
        {
          id: "p2",
          name: "Skeleton Majesty",
          price: "$18,500",
          variant: "Limited",
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-old-vintage-clock_1232-1719.jpg",
        },
        {
          id: "p3",
          name: "Rose Horizon",
          price: "$15,200",
          variant: "Rose Gold",
          imageSrc: "http://img.b2bpic.net/free-photo/eid-smart-watch-with-chocolate-front-view-white-background_187299-39159.jpg",
        },
        {
          id: "p4",
          name: "Royal Dress",
          price: "$9,800",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-clock-with-time-change_23-2149241144.jpg",
        },
        {
          id: "p5",
          name: "Diamond Aura",
          price: "$25,000",
          variant: "Exquisite",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-gold-chain-bowl_23-2149836414.jpg",
        },
        {
          id: "p6",
          name: "Sport Gold",
          price: "$14,000",
          variant: "Dynamic",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-checking-time-hand-watch_53876-20483.jpg",
        },
      ]}
      title="Our Signature Collection"
      description="Discover our most coveted pieces."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "50+",
          title: "Unique Models",
          description: "Bespoke creations.",
          icon: Clock,
        },
        {
          id: "m2",
          value: "100%",
          title: "Swiss Precision",
          description: "Engineered perfection.",
          icon: CheckCircle,
        },
        {
          id: "m3",
          value: "10k+",
          title: "Collectors",
          description: "Global patronage.",
          icon: Users,
        },
      ]}
      title="Royal Wrist in Numbers"
      description="Evidence of timeless excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Elena Vance",
          date: "Jan 2024",
          title: "Collector",
          quote: "Simply the finest timepiece I own.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-posing-against-large-window_1153-3823.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-old-vintage-clock_1232-1720.jpg",
          imageAlt: "professional woman portrait luxury",
        },
        {
          id: "t2",
          name: "Julian Thorne",
          date: "Feb 2024",
          title: "Investor",
          quote: "Pure craftsmanship and status.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-serious-bearded-male-wearing-elegant-suit-dark-background_613910-11332.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-looking-his-watch-closeup_53876-176905.jpg",
          imageAlt: "professional woman portrait luxury",
        },
        {
          id: "t3",
          name: "Sophia Lee",
          date: "Mar 2024",
          title: "Fashion Editor",
          quote: "Elegant, bold, and precise.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5356.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/grunge-old-vintage-clock_1232-1717.jpg",
          imageAlt: "professional woman portrait luxury",
        },
        {
          id: "t4",
          name: "Marcus Reid",
          date: "Apr 2024",
          title: "Architect",
          quote: "Design that transcends time.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/model-suit-posing-studio_1303-12436.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-man-wearing-suit-more-precisely-his-hands-ring-wristwatch_181624-23031.jpg",
          imageAlt: "professional woman portrait luxury",
        },
        {
          id: "t5",
          name: "Sarah Jenkins",
          date: "May 2024",
          title: "Entrepreneur",
          quote: "A true heirloom piece.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-calling-with-her-smartphone_23-2149405912.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-military-protection-item_23-2149341299.jpg",
          imageAlt: "professional woman portrait luxury",
        },
      ]}
      title="Client Reflections"
      description="What our collectors say about their timepieces."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Luxe Weekly",
        "Vogue Horology",
        "Elite Watchers",
        "Time Trend",
        "Gold Standard",
        "The Chronologist",
        "Prestige",
      ]}
      title="Featured In"
      description="Acclaimed by the world's most prestigious publications."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Is shipping insured?",
          content: "Yes, all shipments are fully insured.",
        },
        {
          id: "f2",
          title: "Can I return a watch?",
          content: "Within 30 days of purchase.",
        },
        {
          id: "f3",
          title: "Maintenance services?",
          content: "We offer life-long maintenance.",
        },
      ]}
      title="Questions & Answers"
      description="Essential information about Royal Wrist."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Inquire About Excellence"
      description="Begin your journey with a consultation."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/elegant-women-with-shopping-bags-city_1157-26774.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/futuristic-time-machine_23-2151599402.jpg"
      logoText="Royal Wrist"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Ethics",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Warranty",
              href: "#",
            },
            {
              label: "Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
