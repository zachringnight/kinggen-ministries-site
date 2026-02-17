import { Button, Section, CrossIcon, InnerPageHero } from "./components";

export default function NotFound() {
  return (
    <>
      <InnerPageHero
        title="Page Not Found"
        subtitle="The page may have moved or no longer exists."
        background="inner"
        ariaLabel="Page Not Found"
        minHeightClassName="min-h-[32vh] md:min-h-[40vh]"
      />

      <Section variant="cross-light" padding="xl" watermark="none">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <CrossIcon className="w-6 h-6 text-brand-primary/50" />
          </div>
          <p className="text-sm uppercase tracking-wide text-text-muted mb-2">404</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
            We couldn&apos;t find that page
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            The link may have changed or no longer exists. You can return home or jump to a key page below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Go to Home
            </Button>
            <Button href="/for-referrers" variant="outline">
              For Referrers
            </Button>
            <Button href="/contact" variant="outline">
              Contact
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
