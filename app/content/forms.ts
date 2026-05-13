import type { FormsContent } from "./types";

export const formsContent: FormsContent = {
  hero: {
    title: "Forms and Resources",
    subtitle: "Practical downloads and encouragement for this season.",
  },
  intro:
    "These resources are meant to be a small gift of encouragement. They are not a substitute for counseling, but we hope they bring comfort and hope.",
  downloads: {
    title: "Free Downloads",
    subtitle: "Download and share these printable PDF guides.",
    items: [
      {
        name: "Scripture for Anxious Moments",
        description: "A collection of verses to read when you feel overwhelmed",
        filename: "scripture-for-anxiety.pdf",
      },
      {
        name: "Prayer Guide for Hard Days",
        description: "Simple prayers for when words are hard to find",
        filename: "prayer-guide.pdf",
      },
      {
        name: "Journaling Prompts for Healing",
        description: "Reflective questions to help process your thoughts",
        filename: "journaling-prompts.pdf",
      },
      {
        name: "Daily Encouragement Cards",
        description: "Printable cards with Scripture and affirmations",
        filename: "encouragement-cards.pdf",
      },
    ],
    comingSoon: "More resources coming soon. If there's something specific that would help you, let us know.",
  },
  needHelp: {
    title: "Help us keep these resources free",
    subtitle: "Every guide on this page is offered at no cost. Your gift helps us add new ones and continue providing pastoral counseling for women in need.",
  },
};
