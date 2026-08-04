const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("growacrop/quiz.html", "utf8");
const start = source.indexOf("const RECS =");
const end = source.indexOf("\n\nconst A =", start);
if (start < 0 || end < 0) throw new Error("Quiz data block not found");

const block = source.slice(start, end)
  .replace(/^const /gm, "var ");
const context = {};
vm.createContext(context);
vm.runInContext(block, context);

const questions = {
  step1: {
    prompt: "Which setup appeals to you?",
    options: [
      ["microgreens", "Microgreen Station", "Microgreens"],
      ["mini_garden", "Bench Mini Garden", "Herbs, leafy greens"],
      ["dwc_bucket", "Bucket & Tote Garden", "Herbs, leafy greens, small fruiting crops"],
      ["tower", "Tower Garden", "Herbs, leafy greens, fruiting crops"],
      ["salad_table", "Salad Table", "Leafy greens, herbs, small fruiting crops"],
      ["grow_shelf", "Grow Shelf", "Herbs, leafy greens, small fruiting crops, in serious volume"],
    ],
  },
  step2: {
    microgreens: [["small", "Windowsill or bench"], ["medium", "Small table area"], ["large", "Floor space"]],
    tower: [["small", "Windowsill or bench"], ["medium", "Small table area"], ["large", "Floor space"]],
    mini_garden: [["small", "Budget-friendly / Under $200"], ["medium", "Mid-range / $200-$400"], ["large", "Premium / $400+"]],
    dwc_bucket: [["small", "One plant / Single bucket setup"], ["medium", "Two plants / Two bucket setup"], ["large", "Four plants / Four bucket setup"]],
    salad_table: [["small", "Small / Compact table setup"], ["large", "Large / Full-size table system"], ["vertical", "Vertical / Wall-mounted or upright"]],
    grow_shelf: [["small", "Small crop / A modest home setup"], ["large", "Big crop / Serious year-round output"]],
  },
  step3: {
    prompt: "Why do you want to grow at home?",
    options: [
      ["save_money", "Save money on food"],
      ["fresher_food", "Fresher, healthier food"],
      ["sustainability", "Sustainability & less waste"],
      ["hobby", "A relaxing hobby"],
      ["always_wanted", "I've always wanted to"],
    ],
  },
  step4: {
    prompt: "Would you like your recommendation by email?",
    note: "Email is optional. Leave it blank to view your result now.",
  },
};

process.stdout.write(JSON.stringify({
  source_file: "growacrop/quiz.html",
  questions,
  recommendations: context.RECS,
  system_names: context.SYSTEM_NAMES,
  labels: {
    standard: context.SIZE_LABELS,
    budget: context.BUDGET_LABELS,
    shelf: context.SHELF_LABELS,
    dwc_bucket: context.DWC_BUCKET_LABELS,
    salad_table: context.SALAD_TABLE_LABELS,
  },
}, null, 2));
