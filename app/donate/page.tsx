import { siteConfig } from "../config/site";

export default function DonatePage() {
  return (
    <div>
      <section className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading text-center">
            Support Our Ministry
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">
              Keep Counseling Free
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Your generous support makes it possible for us to provide free,
              Gospel-centered clinical pastoral counseling to women in need. Every
              donation helps us continue offering professional, licensed counseling
              services at no cost to those we serve.
            </p>
          </div>

          {/* Donation Widget Container */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Donate Securely Online
              </h3>
              <p className="text-gray-600 mb-6">
                Choose your donation amount and give securely through our trusted
                partner.
              </p>
            </div>

            {/* Placeholder for Donorbox Widget */}
            {/* To use the Donorbox widget, uncomment and configure: */}
            {/* 
            <script
              src="https://donorbox.org/widget.js"
              paypalExpress="true"
            ></script>
            <iframe
              src={`https://donorbox.org/embed/${siteConfig.donorboxCampaignId}`}
              name="donorbox"
              allowpaymentrequest="allowpaymentrequest"
              seamless="seamless"
              frameBorder="0"
              scrolling="no"
              height="900px"
              width="100%"
              style={{
                maxWidth: "500px",
                minWidth: "250px",
                maxHeight: "none!important",
              }}
            ></iframe>
            */}

            {/* Temporary link until widget is configured */}
            <div className="text-center">
              <a
                href={siteConfig.donorboxPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
              >
                Donate Now via Donorbox
              </a>
              <p className="mt-4 text-sm text-gray-500">
                You&apos;ll be redirected to our secure donation page
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-heading text-center mb-8">
              Your Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  $50
                </div>
                <h3 className="font-semibold mb-2">One Counseling Session</h3>
                <p className="text-gray-600">
                  Provides one free counseling session for a woman in need
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  $100
                </div>
                <h3 className="font-semibold mb-2">Multiple Sessions</h3>
                <p className="text-gray-600">
                  Supports multiple counseling sessions and ongoing care
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  $250
                </div>
                <h3 className="font-semibold mb-2">Monthly Support</h3>
                <p className="text-gray-600">
                  Sustains ongoing free counseling services for women each month
                </p>
              </div>
            </div>
          </div>

          {/* Other Ways to Give */}
          <div className="mt-16 bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold font-heading mb-4">
              Other Ways to Give
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>By Mail:</strong> Send checks payable to {siteConfig.name}
              </p>
              <p>
                <strong>Monthly Giving:</strong> Set up recurring donations through
                our online platform
              </p>
              <p>
                <strong>In-Kind Donations:</strong> Contact us to discuss other ways
                to support our ministry
              </p>
              <p className="text-sm text-gray-600 mt-6">
                {siteConfig.name} is a registered non-profit organization. All
                donations are tax-deductible to the extent allowed by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
