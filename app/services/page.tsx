"use client";

import {
  PageHero,
  Section,
  SectionHeader,
  ServiceCard,
  Button,
  HeartIcon,
  BookOpenIcon,
  SparklesIcon,
  ShieldIcon,
  SunIcon,
  UsersIcon,
  CalendarIcon,
  PhoneIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "../components";
import { siteConfig } from "../config/site";

const services = [
  {
    id: "counseling",
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Clinical Pastoral Counseling",
    description:
      "Our core service integrates professional clinical counseling techniques with pastoral care, addressing emotional, spiritual, and relational needs.",
    features: [
      "Licensed clinical pastoral counselors",
      "Individual one-on-one sessions",
      "Faith-integrated approach",
      "Confidential and safe environment",
      "Flexible scheduling options",
    ],
  },
  {
    id: "crisis",
    icon: <ShieldIcon className="w-6 h-6" />,
    title: "Crisis Intervention",
    description:
      "Immediate support for women facing urgent emotional or spiritual crises. We're here when you need help the most.",
    features: [
      "Rapid response support",
      "Emotional stabilization",
      "Safety planning",
      "Resource connection",
      "Follow-up care coordination",
    ],
  },
  {
    id: "grief",
    icon: <BookOpenIcon className="w-6 h-6" />,
    title: "Grief & Loss Counseling",
    description:
      "Compassionate support for those navigating the difficult journey of loss, whether through death, divorce, or other life transitions.",
    features: [
      "Processing grief emotions",
      "Understanding stages of grief",
      "Building coping strategies",
      "Finding meaning and hope",
      "Support through transitions",
    ],
  },
  {
    id: "anxiety",
    icon: <SunIcon className="w-6 h-6" />,
    title: "Anxiety & Depression Support",
    description:
      "Help managing the weight of anxiety and depression through faith-based counseling and practical coping strategies.",
    features: [
      "Cognitive and spiritual approaches",
      "Stress management techniques",
      "Identifying triggers and patterns",
      "Building resilience",
      "Developing healthy habits",
    ],
  },
  {
    id: "spiritual",
    icon: <SparklesIcon className="w-6 h-6" />,
    title: "Spiritual Direction",
    description:
      "Guidance for your faith journey, helping you deepen your relationship with God and find clarity in your spiritual walk.",
    features: [
      "Exploring your faith journey",
      "Prayer and devotional guidance",
      "Discernment support",
      "Scripture-based reflection",
      "Spiritual growth planning",
    ],
  },
  {
    id: "relationships",
    icon: <UsersIcon className="w-6 h-6" />,
    title: "Relationship Counseling",
    description:
      "Support for navigating difficult relationships, setting healthy boundaries, and building stronger connections.",
    features: [
      "Communication skills",
      "Boundary setting",
      "Conflict resolution",
      "Healing from relational wounds",
      "Building healthy patterns",
    ],
  },
];

const steps = [
  { num: 1, title: "Reach Out", description: "Contact us by phone, email, or through our online form. We'll respond within 24-48 hours.", color: "bg-brand-accent" },
  { num: 2, title: "Initial Consultation", description: "We'll schedule a free initial consultation to understand your needs and how we can best support you.", color: "bg-brand-primary" },
  { num: 3, title: "Begin Sessions", description: "Start your counseling journey with regular sessions tailored to your specific needs and goals.", color: "bg-brand-secondary" },
  { num: 4, title: "Grow & Heal", description: "Experience growth, healing, and hope as you work through your journey with our support.", color: "bg-gradient-to-br from-brand-accent to-brand-primary" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Compassionate, professional, and completely free counseling services designed to support women through life's challenges."
      />

      {/* Services Overview */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <SectionHeader
            title="How We Can Help"
            subtitle="Every woman's journey is unique. Our services are designed to meet you where you are and provide the support you need."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <TiltCard className="h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  className="scroll-mt-24 h-full"
                />
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Process Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <SectionHeader
            title="What to Expect"
            subtitle="We want you to feel comfortable and supported from the very first contact."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg`}>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* FAQ Section */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="We want to address any questions or concerns you might have about our services."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "Are your services really free?",
              answer: "Yes, all of our counseling services are provided completely free of charge. We are a 501(c)(3) nonprofit organization supported by generous donors who believe in our mission.",
            },
            {
              question: "Do I need to be religious to receive counseling?",
              answer: "While our counseling is rooted in Christian faith, we welcome all women regardless of their spiritual background. We meet you where you are and respect your individual beliefs.",
            },
            {
              question: "How long does each session last?",
              answer: "Typical counseling sessions are 50-60 minutes. The number of sessions varies based on individual needs—some may benefit from short-term support while others may need longer-term care.",
            },
            {
              question: "Is everything confidential?",
              answer: "Yes, we maintain strict confidentiality. Everything discussed in counseling sessions is private and protected, with limited exceptions required by law (such as imminent danger to self or others).",
            },
            {
              question: "How do I get started?",
              answer: "Simply reach out to us by phone, email, or through our contact form. We'll schedule an initial consultation to discuss your needs and begin your journey toward healing.",
            },
          ].map((faq, i) => (
            <StaggerItem key={i}>
              <TiltCard tiltAmount={3}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold font-heading text-text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* CTA Section */}
      <Section variant="primary" padding="xl">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Take the first step toward hope and healing today. Our compassionate counselors are ready to walk alongside you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="white"
                size="lg"
                icon={<CalendarIcon className="w-5 h-5" />}
              >
                Schedule Consultation
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="accent"
                size="lg"
                icon={<PhoneIcon className="w-5 h-5" />}
              >
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
