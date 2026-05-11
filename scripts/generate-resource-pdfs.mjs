import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "public", "resources");

const resources = [
  {
    filename: "scripture-for-anxiety.pdf",
    title: "Scripture for Anxious Moments",
    subtitle: "A calming set of verses for heavy days.",
    body: [
      "1. Psalm 56:3",
      '"When I am afraid, I put my trust in You."',
      "",
      "2. Philippians 4:6-7",
      '"Do not be anxious about anything... and the peace of God will guard your heart and mind in Christ Jesus."',
      "",
      "3. Isaiah 41:10",
      '"Do not fear, for I am with you... I will strengthen you and help you."',
      "",
      "4. Matthew 11:28",
      '"Come to Me, all who are weary and burdened, and I will give you rest."',
      "",
      "Simple practice:",
      "- Pause, breathe slowly for one minute.",
      "- Read one verse out loud twice.",
      "- Ask the Lord for peace and wisdom for your next step.",
      "",
      "KingGen Ministries",
      "This handout is encouragement and does not replace emergency services.",
      "If you are in immediate danger, call 911. In the U.S., call or text 988 for crisis support.",
    ],
  },
  {
    filename: "prayer-guide.pdf",
    title: "Prayer Guide for Hard Days",
    subtitle: "Short prayers when words are hard to find.",
    body: [
      "Morning prayer:",
      "Lord, give me daily bread for this day. Help me walk in truth, humility, and peace.",
      "",
      "When overwhelmed:",
      "Jesus, steady my mind and guard my heart. Show me what is mine to carry and what to release to You.",
      "",
      "For healing:",
      "Father, meet me in my pain. Bring comfort where I grieve and courage where I feel weak.",
      "",
      "For wisdom:",
      "Holy Spirit, guide my next step. Help me choose what is good, honest, and life-giving.",
      "",
      "Evening prayer:",
      "Thank You, Lord, for carrying me today. I place my worries in Your hands and rest in Your care.",
      "",
      "KingGen Ministries",
      "You are not alone. Reach out to a trusted pastor, counselor, or support person when needed.",
    ],
  },
  {
    filename: "journaling-prompts.pdf",
    title: "Journaling Prompts for Healing",
    subtitle: "Questions to help process thoughts and emotions.",
    body: [
      "1. What feels heaviest today, and why?",
      "2. Where did I notice even a small sign of grace this week?",
      "3. What story am I telling myself right now, and is it fully true?",
      "4. What boundaries would protect my peace this month?",
      "5. What do I need to grieve honestly before God?",
      "6. What would wise support look like for my next step?",
      "7. Which Scripture gives me hope today?",
      "",
      "Weekly reflection:",
      "- One thing I can release",
      "- One thing I can receive",
      "- One step I can take",
      "",
      "KingGen Ministries",
      "Use these prompts gently. You do not need perfect words to begin.",
    ],
  },
  {
    filename: "encouragement-cards.pdf",
    title: "Daily Encouragement Cards",
    subtitle: "Print, cut, and keep these reminders nearby.",
    body: [
      "Card 1: I am not alone. God is near to the brokenhearted.",
      "Card 2: My worth is not measured by my worst day.",
      "Card 3: Small faithful steps are still progress.",
      "Card 4: I can ask for help and still be strong.",
      "Card 5: Grace is available for today, not just tomorrow.",
      "Card 6: Christ offers rest for weary souls.",
      "Card 7: I can tell the truth and still be loved.",
      "Card 8: Hope can grow, even in hard seasons.",
      "",
      "How to use:",
      "- Read one card each morning.",
      "- Keep one in your journal or Bible.",
      "- Share one with someone who needs encouragement.",
      "",
      "KingGen Ministries",
      "Gospel-centered counseling support for women in need.",
    ],
  },
];

function escapePdfText(input) {
  return input.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapLine(text, maxLength = 86) {
  if (text.length <= maxLength) return [text];

  const words = text.split(/\s+/);
  const wrapped = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= maxLength) {
      line = candidate;
      continue;
    }
    if (line) wrapped.push(line);
    line = word;
  }

  if (line) wrapped.push(line);
  return wrapped;
}

function buildPdf({ title, subtitle, body }) {
  const stream = [];
  stream.push("BT");
  stream.push("1 0 0 1 72 740 Tm");
  stream.push("17 TL");
  stream.push("/F2 22 Tf");
  stream.push(`(${escapePdfText(title)}) Tj`);
  stream.push("T*");
  stream.push("/F1 12 Tf");
  stream.push(`(${escapePdfText(subtitle)}) Tj`);
  stream.push("T*");
  stream.push("T*");

  for (const paragraph of body) {
    if (!paragraph.trim()) {
      stream.push("T*");
      continue;
    }

    const lines = wrapLine(paragraph);
    for (const line of lines) {
      stream.push(`(${escapePdfText(line)}) Tj`);
      stream.push("T*");
    }
  }

  stream.push("ET");

  const contentStream = stream.join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefStart = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (const offset of offsets.slice(1)) {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  return Buffer.from(pdf, "utf8");
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  for (const resource of resources) {
    const pdfBuffer = buildPdf(resource);
    const outputPath = path.join(outputDir, resource.filename);
    await writeFile(outputPath, pdfBuffer);
    console.log(`Generated ${path.relative(projectRoot, outputPath)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
