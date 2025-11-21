import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "config", "categoryConfig.js");

const correctConfig = `const CATEGORY_CONFIG = {
  investieren: {
    slug: "investieren",
    label: "Investieren",
    heroSubtitle: "Investieren lernen – klar und ohne BlaBla."
  },
  versicherungen: {
    slug: "versicherungen",
    label: "Versicherungen",
    heroSubtitle: "Versicherungen einfach erklärt."
  },
  sparen: {
    slug: "sparen",
    label: "Sparen",
    heroSubtitle: "Sparen leicht gemacht."
  }
};

export default CATEGORY_CONFIG;
`;

fs.writeFileSync(filePath, correctConfig);

console.log("categoryConfig.js wurde AUTOMATISCH repariert ✔️");
