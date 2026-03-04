import type { ContactContent } from "./types";

export const contactContent: ContactContent = {
  hero: {
    title: "Contact KingGen",
    subtitle: "Referral and partner inquiries are welcome.",
  },
  note: "We often coordinate intake through referrers and ministry partners. If you are seeking support personally, we encourage you to ask a pastor, counselor, or trusted professional to submit a referral with you.",
  formTitle: "Referral & Partner Contact",
  reasonOptions: [
    { value: "referring-someone", label: "Referring someone" },
    { value: "pastor-church-staff", label: "Pastor or church staff" },
    { value: "professional-partner", label: "Professional partner" },
    { value: "donor-partner", label: "Donor or partner" },
    { value: "other", label: "Other" },
  ],
  reasonNote: "For privacy and coordinated care, intake usually begins through a referrer.",
  directContactTitle: "Direct contact",
  whatHappensNext: {
    title: "What Happens Next",
    steps: [
      "We review your message and pray over your request.",
      "We respond with next-step guidance (usually within 1-2 business days).",
      "If needed, we help route you to the right support path.",
    ],
  },
  formNote: "Your information is safe with us. We typically reply within 1-2 business days.",
};
