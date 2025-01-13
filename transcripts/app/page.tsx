import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import PricingSection from "@/components/common/PricingSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features, faqItems } from "@/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CookieConsent from "@/components/common/CookieConsent";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MaxWidthWrapper>
        <div className="bg-gray-50">
          <FeaturesSection />
        </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
        <HowItWorksSection />
        </MaxWidthWrapper>
        <div className="bg-gray-100">
          <PricingSection />
        </div>
        <div className="bg-gray-200 text-gray-900">
          <FAQSection />
        </div>
        <MaxWidthWrapper>
          <CTASection />
        </MaxWidthWrapper>
      <Footer />
      <CookieConsent />
    </>
  );
}

function HeroSection() {
  return (
    <div className="py-20 md:py-32 text-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900">
      <h1 className="text-5xl font-semibold text-gray-900">
        Create Engaging Social Media Content in Seconds
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Elevate your social media presence with AI-generated content tailored to your brand and audience. Save time, boost engagement, and create content that resonates with your followers.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
        {/* Green primary button */}
        <Button size="lg" className="bg-green-600 text-white hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105" asChild>
          <Link href="/">
            Get Started For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        {/* Green outline button */}
        <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105" asChild>
          <Link href="/pricing">
            View Pricing
          </Link>
        </Button>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className="py-20 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
        Why Choose Our Social Media Content Creator?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-gray-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    { title: "Define Your Content Type", description: "Choose the type of content you want to create—posts, stories, videos, etc." },
    { title: "AI Creates Your Content", description: "Let our AI generate engaging content based on your preferences and style." },
    { title: "Publish & Engage", description: "Post your content and watch your social media engagement grow." },
  ];

  return (
    <div className="py-20 bg-white text-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-semibold mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQSection() {
  return (
    <div className="py-20 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-gray-900">{item.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function CTASection() {
  return (
    <div className="py-20 text-center bg-white text-gray-900">
      <h2 className="text-5xl font-extrabold mb-6">
        Ready to Take Your Social Media to the Next Level?
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
        Join hundreds of content creators already boosting their engagement with AI-driven posts.
      </p>
      <Button size="lg" asChild>
        <Link href="/pricing">
          Start Creating Content Now <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}

function Footer() {
  return (
    <div className="py-12 bg-gray-900 text-white text-center">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-lg">© 2025 SocialMediaContentPro. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/terms" className="text-gray-400 hover:text-white mx-4">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white mx-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
