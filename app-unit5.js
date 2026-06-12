const slideBase = "assets/slides-unit5";

const slides = [
  { title: "หน่วยที่ 5: นิพจน์ ตัวดำเนินการ และตัวถูกดำเนินการ", summary: "ทำความเข้าใจองค์ประกอบของโค้ดและพื้นฐานตรรกะในภาษา Python", bullets: ["นิพจน์คือชุดคำสั่งที่คำนวณหรือให้ค่า", "ตัวดำเนินการคือสัญลักษณ์ที่ใช้ประมวลผล", "ตัวถูกดำเนินการคือข้อมูลหรือตัวแปรที่ถูกนำมาคำนวณ"] },
  { title: "กายวิภาคของโค้ด", summary: "แยกนิพจน์ออกเป็น operand, operator และ expression", bullets: ["Operand อาจเป็นตัวแปร ค่าคงที่ หรือฟังก์ชัน", "Operator เช่น +, *, **", "Expression รวม operand และ operator เข้าด้วยกัน"] },
  { title: "กล่องเครื่องมือ Operator 6 ประเภท", summary: "ภาพรวมตัวดำเนินการหลักใน Python", bullets: ["Arithmetic", "Comparison", "Bitwise", "Logical", "Assignment", "Membership"] },
  { title: "Arithmetic Operators", summary: "ตัวดำเนินการทางคณิตศาสตร์สำหรับคำนวณพื้นฐาน", bullets: ["+, -, *, /", "% คือหารเอาเศษ", "// คือหารแบบจำนวนเต็ม", "** คือยกกำลัง"] },
  { title: "Comparison Operators", summary: "ใช้เปรียบเทียบค่าและให้ผลลัพธ์เป็น True/False", bullets: ["== เท่ากับ", "!= ไม่เท่ากับ", ">, <, >=, <="] },
  { title: "Bitwise Operators", summary: "ตัวดำเนินการระดับบิตสำหรับข้อมูลฐานสอง", bullets: ["& AND", "| OR", "^ XOR", "<< และ >> เลื่อนบิต", "~ complement"] },
  { title: "Logical Operators", summary: "ใช้เชื่อมเงื่อนไขและตัดสินใจทางตรรกะ", bullets: ["and เป็นจริงเมื่อทุกเงื่อนไขจริง", "or เป็นจริงเมื่อมีอย่างน้อยหนึ่งเงื่อนไขจริง", "not กลับค่าความจริง"] },
  { title: "Assignment Operators", summary: "กำหนดค่าและอัปเดตค่าตัวแปร", bullets: ["= กำหนดค่า", "+= บวกแล้วเก็บกลับ", "-=, *=, /=, %=, **= ใช้หลักเดียวกัน"] },
  { title: "Membership Operators", summary: "ใช้ตรวจว่าข้อมูลอยู่ในข้อความ ลิสต์ หรือทูเพิลหรือไม่", bullets: ["in คืน True เมื่อพบข้อมูล", "not in คืน True เมื่อไม่พบข้อมูล", "ใช้ได้กับ strings, lists, tuples"] },
  { title: "Operator Cheat Sheet", summary: "สรุปประเภท สัญลักษณ์ และชนิดผลลัพธ์ของ operator", bullets: ["Arithmetic ให้ตัวเลข", "Comparison/Logical/Membership ให้ Boolean", "Assignment อัปเดตตัวแปร", "Bitwise ทำงานกับระดับบิต"] },
  { title: "Operator Precedence", summary: "ลำดับความสำคัญของตัวดำเนินการ", bullets: ["วงเล็บสำคัญที่สุด", "** มาก่อน * / % //", "+ - อยู่ระดับพื้นฐาน", "and or not อยู่ระดับตรรกะ"] },
  { title: "Precedence in Action", summary: "ตัวอย่าง x = 7 + 3 * 2 ได้ 13 เพราะ * ทำก่อน +", bullets: ["Python ไม่ได้คำนวณซ้ายไปขวาทุกกรณี", "เข้าใจ precedence ช่วยลด bug", "ใช้วงเล็บเพื่อทำให้โค้ดอ่านง่ายขึ้น"] },
];

const modules = [
  { icon: "braces", title: "นิพจน์คืออะไร", text: "นิพจน์คือส่วนของโค้ดที่ Python ประเมินค่าได้ เช่น 7 + 3 * 2 หรือ x > y", slides: ["Slide 1", "Slide 2"] },
  { icon: "calculator", title: "Arithmetic", text: "ใช้คำนวณตัวเลข รวมถึง modulo, floor division และ exponent", slides: ["Slide 4"] },
  { icon: "scale", title: "Comparison", text: "ใช้เปรียบเทียบค่าและส่งผลลัพธ์เป็น Boolean True/False", slides: ["Slide 5"] },
  { icon: "split", title: "Logical", text: "ใช้รวมเงื่อนไขหลายข้อด้วย and, or, not", slides: ["Slide 7"] },
  { icon: "package-check", title: "Assignment", text: "ใช้กำหนดและอัปเดตค่าตัวแปร เช่น x += y", slides: ["Slide 8"] },
  { icon: "search-check", title: "Membership & Precedence", text: "ตรวจสมาชิกด้วย in/not in และจัดลำดับการคำนวณให้ถูกต้อง", slides: ["Slide 9", "Slide 11", "Slide 12"] },
];

const examples = [
  { title: "01 - Anatomy of Code", slide: "Slide 2", description: "แยกนิพจน์เป็น operand และ operator", code: `x = 5\ny = x ** 2 + 2 * x + 1\nprint(y)`, output: "36" },
  { title: "02 - Arithmetic Operators", slide: "Slide 4", description: "ทดลองหารเอาเศษและยกกำลัง", code: `a = 10\nb = 3\nprint(a + b)\nprint(a % b)\nprint(a // b)\nprint(a ** b)`, output: "13\n1\n3\n1000" },
  { title: "03 - Comparison Operators", slide: "Slide 5", description: "ผลลัพธ์ของการเปรียบเทียบคือ True หรือ False", code: `x = 20\ny = 10\nprint(x == y)\nprint(x != y)\nprint(x > y)`, output: "False\nTrue\nTrue" },
  { title: "04 - Bitwise Operators", slide: "Slide 6", description: "ตัวดำเนินการระดับบิต", code: `a = 60\nb = 13\nc = a & b\nprint(c)\nprint(a | b)\nprint(a ^ b)`, output: "12\n61\n49" },
  { title: "05 - Logical Operators", slide: "Slide 7", description: "ใช้ and, or, not กับ Boolean", code: `x = False\ny = True\nprint(not x)\nprint(x and y)\nprint(x or y)`, output: "True\nFalse\nTrue" },
  { title: "06 - Assignment Operators", slide: "Slide 8", description: "อัปเดตค่าตัวแปรด้วย += และ *=", code: `x = 20\ny = 10\nx += y\nprint(x)\nx *= 2\nprint(x)`, output: "30\n60" },
  { title: "07 - Membership Operators", slide: "Slide 9", description: "ใช้ in และ not in ตรวจข้อมูลในข้อความ", code: `x = "วิทยาลัย"\nprint("ลัย" in x)\nprint("การ" in x)\nprint("การ" not in x)`, output: "True\nFalse\nTrue" },
  { title: "08 - Operator Precedence", slide: "Slides 11-12", description: "Python คูณก่อนบวกตาม precedence", code: `x = 7 + 3 * 2\nprint(x)\ny = (7 + 3) * 2\nprint(y)`, output: "13\n20" },
  { title: "09 - Boolean Conditions", slide: "Slides 5, 7", description: "รวม comparison กับ logical operator", code: `score = 75\npassed = score >= 50\nexcellent = score >= 80\nprint(passed and not excellent)`, output: "True" },
  { title: "10 - Real Expression Practice", slide: "Slides 10-12", description: "ฝึกอ่านนิพจน์หลาย operator", code: `a = 8\nb = 3\nresult = a ** 2 + b * 4 - 5\nprint(result)\nprint(result > 60)`, output: "71\nTrue" },
];

const quizItems = [
  { name: "10 % 3", hint: "หารเอาเศษ", valid: true, reason: "ได้ผลลัพธ์เป็น 1 เพราะ 10 หาร 3 เหลือเศษ 1" },
  { name: "x == y", hint: "เปรียบเทียบว่าเท่ากันหรือไม่", valid: true, reason: "ใช้ได้ เป็น comparison operator" },
  { name: "x =+ 5", hint: "ต้องการเพิ่มค่าแบบ assignment", valid: false, reason: "ควรใช้ x += 5 ไม่ใช่ x =+ 5" },
  { name: "'ลัย' in 'วิทยาลัย'", hint: "ตรวจสมาชิกใน string", valid: true, reason: "ใช้ได้ และให้ผลลัพธ์ True" },
  { name: "7 + 3 * 2 ได้ 20", hint: "ลำดับความสำคัญของ operator", valid: false, reason: "ไม่ได้ เพราะ * ทำก่อน + ผลลัพธ์คือ 13" },
];

const workshopItems = slides.map((slide, index) => ({
  title: slide.title,
  goal: slide.summary,
  task: [
    "ระบุ operand, operator และ expression จากตัวอย่าง",
    "เขียนนิพจน์ง่าย ๆ 1 บรรทัดใน Python Lab",
    "จด operator 2 ประเภทที่ใช้บ่อย",
    "รันตัวอย่าง arithmetic แล้วสังเกต %, //, **",
    "ทายผล True/False ก่อนรัน comparison",
    "ลองรัน a & b และดูผลลัพธ์",
    "สร้างเงื่อนไขด้วย and/or/not",
    "ใช้ += อัปเดตค่าตัวแปร",
    "ตรวจคำในข้อความด้วย in",
    "สรุป operator ที่คืน Boolean",
    "จัดลำดับ precedence จากสูงไปต่ำ",
    "เปรียบเทียบ 7 + 3 * 2 กับ (7 + 3) * 2",
  ][index],
}));

const workshopChecks = [
  { question: "นิพจน์ภาษาอังกฤษคือคำว่าอะไร", answers: ["expression"] },
  { question: "ตัวถูกดำเนินการภาษาอังกฤษคืออะไร", answers: ["operand"] },
  { question: "operator กลุ่มใดใช้ + - * /", answers: ["arithmetic", "คณิตศาสตร์"] },
  { question: "10 % 3 ได้เท่าไร", answers: ["1"] },
  { question: "ผลลัพธ์ของ comparison เป็นชนิดใด", answers: ["boolean", "bool", "truefalse", "true/false"] },
  { question: "ตัวดำเนินการ AND ระดับบิตใช้สัญลักษณ์ใด", answers: ["&"] },
  { question: "not True ได้อะไร", answers: ["false"] },
  { question: "x += y หมายถึง x = x อะไร y", answers: ["+", "บวก"] },
  { question: "ตรวจว่าข้อมูลอยู่ใน string ใช้คำว่าอะไร", answers: ["in"] },
  { question: "operator ที่ให้ True/False เรียกว่าอะไร", answers: ["boolean", "บูลีน"] },
  { question: "อะไรมีลำดับสูงสุดใน precedence", answers: ["วงเล็บ", "parentheses", "()"] },
  { question: "7 + 3 * 2 ได้เท่าไร", answers: ["13"] },
];

const practiceItems = [
  { prompt: "10 % 3 ได้ผลลัพธ์เท่าไร", answer: ["1"], hint: "หารเอาเศษ" },
  { prompt: "10 // 3 ได้ผลลัพธ์เท่าไร", answer: ["3"], hint: "หารแบบจำนวนเต็ม" },
  { prompt: "2 ** 4 ได้ผลลัพธ์เท่าไร", answer: ["16"], hint: "ยกกำลัง" },
  { prompt: "20 == 10 ได้ True หรือ False", answer: ["false"], hint: "เท่ากันหรือไม่" },
  { prompt: "not False ได้ True หรือ False", answer: ["true"], hint: "not กลับค่าความจริง" },
  { prompt: "'ลัย' in 'วิทยาลัย' ได้ True หรือ False", answer: ["true"], hint: "ค้นหาข้อความย่อย" },
  { prompt: "x = 20; x += 10 แล้ว x มีค่าเท่าไร", answer: ["30"], hint: "x = x + 10" },
  { prompt: "7 + 3 * 2 ได้ผลลัพธ์เท่าไร", answer: ["13"], hint: "* ทำก่อน +" },
];

const assessmentItems = [
  { question: "นิพจน์ (Expression) คือข้อใด", choices: ["ส่วนของโค้ดที่ประเมินค่าได้", "ไฟล์รูปภาพ", "ชื่อโปรแกรม", "คำอธิบายเท่านั้น"], answer: 0, skill: "expression" },
  { question: "ตัวดำเนินการคณิตศาสตร์ข้อใดคือยกกำลัง", choices: ["%", "//", "**", "=="], answer: 2, skill: "arithmetic" },
  { question: "10 % 3 ได้เท่าไร", choices: ["0", "1", "3", "10"], answer: 1, skill: "arithmetic" },
  { question: "x = 20, y = 10 ผลของ x == y คืออะไร", choices: ["True", "False", "30", "Error"], answer: 1, skill: "comparison" },
  { question: "ผลลัพธ์ของ comparison operator เป็นชนิดใด", choices: ["Numeric", "String", "Boolean", "List"], answer: 2, skill: "comparison" },
  { question: "not False ได้อะไร", choices: ["False", "True", "0", "None"], answer: 1, skill: "logical" },
  { question: "x += y มีความหมายเหมือนข้อใด", choices: ["x = y", "x = x + y", "x == y", "x = x - y"], answer: 1, skill: "assignment" },
  { question: "ตัวดำเนินการใดใช้ตรวจสมาชิก", choices: ["and", "in", "**", "//"], answer: 1, skill: "membership" },
  { question: "7 + 3 * 2 ได้เท่าไร", choices: ["20", "13", "17", "10"], answer: 1, skill: "precedence" },
  { question: "ถ้าต้องการให้ 7 + 3 คำนวณก่อนคูณ 2 ควรเขียนอย่างไร", choices: ["7 + 3 * 2", "(7 + 3) * 2", "7 + (3 * 2)", "7 ** 3 * 2"], answer: 1, skill: "precedence" },
];

let activeSlide = 0;
let activeExample = 0;
let currentWorkshop = 0;
let pyodide = null;
let pyodideReady = false;
const storagePrefix = "unit5";
const completedWorkshops = new Set(JSON.parse(localStorage.getItem(`${storagePrefix}CompletedWorkshops`) || "[]"));
const passedWorkshopChecks = new Set(JSON.parse(localStorage.getItem(`${storagePrefix}PassedWorkshopChecks`) || "[]"));
const solvedPractice = new Set(JSON.parse(localStorage.getItem(`${storagePrefix}SolvedPractice`) || "[]"));
let learner = JSON.parse(localStorage.getItem(`${storagePrefix}Learner`) || "null");
let classRecords = JSON.parse(localStorage.getItem(`${storagePrefix}ClassRecords`) || "[]");

const $ = (selector) => document.querySelector(selector);

function getSavedAssessment() {
  return JSON.parse(localStorage.getItem(`${storagePrefix}LastAssessment`) || "null");
}

function isAssessmentUnlocked() {
  return Boolean(learner) && completedWorkshops.size >= workshopItems.length && solvedPractice.size >= 6;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function renderSlideList() {
  $("#slideList").innerHTML = slides.map((slide, index) => `
    <button class="slide-button ${index === activeSlide ? "active" : ""}" type="button" data-slide="${index}">
      <span class="slide-index">${index + 1}</span>
      <span><strong>${slide.title}</strong><small>${slide.summary}</small></span>
    </button>`).join("");
  document.querySelectorAll(".slide-button").forEach((button) => button.addEventListener("click", () => {
    activeSlide = Number(button.dataset.slide);
    renderSlideList();
    renderActiveSlide();
  }));
}

function renderActiveSlide() {
  const slide = slides[activeSlide];
  const page = String(activeSlide + 1).padStart(2, "0");
  $("#activeSlideImage").src = `${slideBase}/page-${page}.png`;
  $("#activeSlideImage").alt = `สไลด์หน้า ${activeSlide + 1}: ${slide.title}`;
  $("#activeSlideNumber").textContent = `Slide ${activeSlide + 1} / ${slides.length}`;
  $("#activeSlideTitle").textContent = slide.title;
  $("#activeSlideSummary").textContent = slide.summary;
  $("#activeSlideBullets").innerHTML = slide.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
}

function renderModules() {
  $("#moduleGrid").innerHTML = modules.map((module) => `
    <article class="module-card">
      <i data-lucide="${module.icon}"></i>
      <h3>${module.title}</h3>
      <p>${module.text}</p>
      <div class="slide-tags">${module.slides.map((slide) => `<span>${slide}</span>`).join("")}</div>
    </article>`).join("");
}

function renderExampleList() {
  $("#exampleList").innerHTML = examples.map((example, index) => `
    <button class="example-button ${index === activeExample ? "active" : ""}" type="button" data-example="${index}">
      <span class="slide-index">${index + 1}</span>
      <span><strong>${example.title}</strong><small>${example.slide}</small></span>
    </button>`).join("");
  document.querySelectorAll(".example-button").forEach((button) => button.addEventListener("click", () => {
    activeExample = Number(button.dataset.example);
    renderExampleList();
    renderActiveExample();
  }));
}

function renderActiveExample() {
  const example = examples[activeExample];
  $("#exampleSlideRef").textContent = example.slide;
  $("#exampleTitle").textContent = example.title;
  $("#exampleDescription").textContent = example.description;
  $("#exampleCode").textContent = example.code;
  $("#exampleOutput").textContent = example.output;
}

function renderSampleSelect() {
  $("#sampleSelect").innerHTML = examples.map((example, index) => `<option value="${index}">${example.title}</option>`).join("");
}

function sendExampleToLab(index = activeExample) {
  $("#pythonEditor").value = examples[index].code;
  $("#sampleSelect").value = String(index);
  $("#pythonOutput").textContent = "พร้อมรันโค้ดตัวอย่างนี้";
}

async function setupPyodide() {
  const status = $("#pyStatus");
  try {
    pyodide = await window.loadPyodide({
      stdout: (text) => { $("#pythonOutput").textContent += `${text}\n`; },
      stderr: (text) => { $("#pythonOutput").textContent += `${text}\n`; },
    });
    pyodideReady = true;
    status.classList.add("ready");
    status.innerHTML = `<i data-lucide="check-circle-2"></i> Python runtime พร้อมใช้งาน`;
  } catch (error) {
    status.classList.add("error");
    status.innerHTML = `<i data-lucide="circle-alert"></i> โหลด Python runtime ไม่สำเร็จ แต่ยังดูตัวอย่างโค้ดได้`;
    $("#pythonOutput").textContent = error.message;
  }
  refreshIcons();
}

function bindLab() {
  $("#sendToLab").addEventListener("click", () => sendExampleToLab(activeExample));
  $("#resetLab").addEventListener("click", () => sendExampleToLab(Number($("#sampleSelect").value)));
  $("#sampleSelect").addEventListener("change", () => sendExampleToLab(Number($("#sampleSelect").value)));
  $("#clearOutput").addEventListener("click", () => { $("#pythonOutput").textContent = "ล้างผลลัพธ์แล้ว"; });
  $("#runPython").addEventListener("click", async () => {
    $("#pythonOutput").textContent = "";
    if (!pyodideReady) {
      $("#pythonOutput").textContent = "Python runtime ยังไม่พร้อม กรุณาตรวจอินเทอร์เน็ตแล้วลองใหม่";
      return;
    }
    try {
      await pyodide.runPythonAsync($("#pythonEditor").value);
      if (!$("#pythonOutput").textContent.trim()) $("#pythonOutput").textContent = "โค้ดรันสำเร็จ แต่ไม่มีคำสั่ง print()";
    } catch (error) {
      $("#pythonOutput").textContent = error.message;
    }
  });
}

function renderLearner() {
  const card = $("#learnerCard");
  if (!learner) {
    card.innerHTML = `<p class="pill">ยังไม่เริ่ม</p><h3>รอข้อมูลนักเรียน</h3><p>บันทึกข้อมูลก่อนทำแบบวัดผล</p>`;
    updateAssessmentGate();
    return;
  }
  card.innerHTML = `<p class="pill">พร้อมเรียน</p><h3>${learner.name}</h3><p>ชั้น/ห้อง ${learner.className} เลขที่ ${learner.no}</p><p>พื้นฐานก่อนเรียน: <strong>${learner.level}</strong></p>`;
  updateAssessmentGate();
}

function bindProfileForm() {
  if (learner) {
    $("#studentName").value = learner.name;
    $("#studentClass").value = learner.className;
    $("#studentNo").value = learner.no;
    $("#studentLevel").value = learner.level;
  }
  $("#profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    learner = {
      name: $("#studentName").value.trim(),
      className: $("#studentClass").value.trim(),
      no: $("#studentNo").value.trim(),
      level: $("#studentLevel").value,
      savedAt: new Date().toLocaleString("th-TH"),
    };
    localStorage.setItem(`${storagePrefix}Learner`, JSON.stringify(learner));
    renderLearner();
    updateProgress();
  });
}

function updateAssessmentGate() {
  const lock = $("#assessmentLock");
  const panel = $("#assessmentPanel");
  const unlocked = isAssessmentUnlocked();
  lock.hidden = unlocked;
  panel.hidden = !unlocked;
  if (!unlocked) {
    const missing = [];
    if (!learner) missing.push("กรอกข้อมูลนักเรียน");
    if (completedWorkshops.size < workshopItems.length) missing.push(`ทำ Workshop ให้ครบ ${workshopItems.length} ขั้น`);
    if (solvedPractice.size < 6) missing.push("ทำโจทย์ฝึกอย่างน้อย 6 ข้อ");
    lock.innerHTML = `<i data-lucide="lock"></i><strong>ยังไม่ปลดล็อกแบบวัดผล</strong><span>${missing.join(" • ")}</span><a class="button small" href="#profile">ไปเริ่ม</a>`;
  }
  refreshIcons();
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function renderWorkshop() {
  $("#workshopSteps").innerHTML = workshopItems.map((item, index) => {
    const done = completedWorkshops.has(index);
    return `<button class="workshop-step ${index === currentWorkshop ? "active" : ""} ${done ? "done" : ""}" type="button" data-workshop="${index}"><span>${done ? "✓" : index + 1}</span><strong>${item.title}</strong></button>`;
  }).join("");
  document.querySelectorAll(".workshop-step").forEach((button) => button.addEventListener("click", () => {
    currentWorkshop = Number(button.dataset.workshop);
    renderWorkshop();
  }));
  const page = String(currentWorkshop + 1).padStart(2, "0");
  const item = workshopItems[currentWorkshop];
  const passed = passedWorkshopChecks.has(currentWorkshop);
  $("#workshopImage").src = `${slideBase}/page-${page}.png`;
  $("#workshopSlide").textContent = `Slide ${currentWorkshop + 1} / ${workshopItems.length}`;
  $("#workshopTitle").textContent = item.title;
  $("#workshopGoal").textContent = item.goal;
  $("#workshopTask").textContent = item.task;
  $("#workshopCheckpoint").value = "";
  $("#workshopCheckpoint").placeholder = workshopChecks[currentWorkshop].question;
  $("#workshopFeedback").textContent = passed ? "Checkpoint ผ่านแล้ว สามารถบันทึกขั้นนี้ได้" : `Checkpoint: ${workshopChecks[currentWorkshop].question}`;
  $("#completeWorkshop").disabled = !passed;
  updateProgress();
  refreshIcons();
}

function bindWorkshopControls() {
  $("#prevWorkshop").addEventListener("click", () => { currentWorkshop = Math.max(0, currentWorkshop - 1); renderWorkshop(); });
  $("#nextWorkshop").addEventListener("click", () => { currentWorkshop = Math.min(workshopItems.length - 1, currentWorkshop + 1); renderWorkshop(); });
  $("#checkWorkshop").addEventListener("click", () => {
    const check = workshopChecks[currentWorkshop];
    const ok = check.answers.map(normalizeAnswer).includes(normalizeAnswer($("#workshopCheckpoint").value));
    if (ok) {
      passedWorkshopChecks.add(currentWorkshop);
      localStorage.setItem(`${storagePrefix}PassedWorkshopChecks`, JSON.stringify([...passedWorkshopChecks]));
    }
    $("#workshopFeedback").textContent = ok ? "ถูกต้อง ปลดล็อกปุ่มทำขั้นนี้แล้ว" : "ยังไม่ถูก ลองอ่านสไลด์อีกครั้ง";
    renderWorkshop();
  });
  $("#completeWorkshop").addEventListener("click", () => {
    if (!passedWorkshopChecks.has(currentWorkshop)) return;
    completedWorkshops.add(currentWorkshop);
    localStorage.setItem(`${storagePrefix}CompletedWorkshops`, JSON.stringify([...completedWorkshops]));
    renderWorkshop();
    updateAssessmentGate();
  });
}

function renderPractice() {
  $("#practiceList").innerHTML = practiceItems.map((item, index) => `
    <article class="practice-card ${solvedPractice.has(index) ? "solved" : ""}" data-practice="${index}">
      <div><p class="pill">โจทย์ ${index + 1}</p><h3>${item.prompt}</h3><p class="muted">คำใบ้: ${item.hint}</p></div>
      <div class="practice-answer"><input type="text" aria-label="คำตอบโจทย์ ${index + 1}" placeholder="พิมพ์คำตอบ" /><button class="button small" type="button">ตรวจคำตอบ</button></div>
      <p class="practice-feedback" aria-live="polite"></p>
    </article>`).join("");
  document.querySelectorAll(".practice-card").forEach((card) => {
    const index = Number(card.dataset.practice);
    const input = card.querySelector("input");
    const feedback = card.querySelector(".practice-feedback");
    card.querySelector("button").addEventListener("click", () => {
      const ok = practiceItems[index].answer.map(normalizeAnswer).includes(normalizeAnswer(input.value));
      if (ok) {
        solvedPractice.add(index);
        localStorage.setItem(`${storagePrefix}SolvedPractice`, JSON.stringify([...solvedPractice]));
        card.classList.add("solved");
      }
      feedback.textContent = ok ? "ถูกต้อง เก็บคะแนนฝึกฝนแล้ว" : `ยังไม่ถูก ลองคิดจากคำใบ้: ${practiceItems[index].hint}`;
      updateProgress();
      updateAssessmentGate();
    });
  });
}

function renderQuiz() {
  $("#quizList").innerHTML = quizItems.map((item, index) => `
    <article class="quiz-item" data-quiz-index="${index}">
      <div><strong>ตรวจนิพจน์ <code>${item.name}</code></strong><p>(${item.hint})</p></div>
      <div class="quiz-actions"><button class="answer-button" type="button" data-answer="true">ถูก</button><button class="answer-button" type="button" data-answer="false">ไม่ถูก</button></div>
      <p class="quiz-feedback" aria-live="polite"></p>
    </article>`).join("");
  const answers = new Map();
  document.querySelectorAll(".answer-button").forEach((button) => button.addEventListener("click", () => {
    const itemElement = button.closest(".quiz-item");
    const index = Number(itemElement.dataset.quizIndex);
    const answer = button.dataset.answer === "true";
    const correct = quizItems[index].valid === answer;
    answers.set(index, answer);
    itemElement.querySelectorAll(".answer-button").forEach((choice) => choice.classList.remove("correct", "wrong"));
    button.classList.add(correct ? "correct" : "wrong");
    itemElement.querySelector(".quiz-feedback").textContent = `${correct ? "ถูกต้อง" : "ลองดูเฉลย"}: ${quizItems[index].reason}`;
    const score = [...answers.entries()].filter(([idx, val]) => quizItems[idx].valid === val).length;
    $("#scoreText").textContent = `ตอบถูก ${score} จาก ${quizItems.length} ข้อ`;
  }));
}

function renderAssessment() {
  $("#assessmentList").innerHTML = assessmentItems.map((item, index) => `
    <article class="assessment-item">
      <h3>${index + 1}. ${item.question}</h3>
      <div class="choice-list">${item.choices.map((choice, choiceIndex) => `<label><input type="radio" name="assessment-${index}" value="${choiceIndex}" /><span>${choice}</span></label>`).join("")}</div>
    </article>`).join("");
}

function getAssessmentScore() {
  let score = 0;
  const missed = [];
  assessmentItems.forEach((item, index) => {
    const selected = document.querySelector(`input[name="assessment-${index}"]:checked`);
    if (selected && Number(selected.value) === item.answer) score += 1;
    else missed.push(item.skill);
  });
  return { score, missed, checkedAt: new Date().toLocaleString("th-TH") };
}

function getSkillReport(score) {
  if (score >= 9) return { level: "เชี่ยวชาญ", text: "เข้าใจ operator และ precedence พร้อมต่อยอดเงื่อนไขซับซ้อน" };
  if (score >= 7) return { level: "ทำได้ดี", text: "เข้าใจแกนหลักแล้ว ควรฝึกโจทย์ precedence เพิ่ม" };
  if (score >= 5) return { level: "กำลังพัฒนา", text: "ควรทบทวน comparison, logical และ assignment operator" };
  return { level: "เริ่มต้น", text: "กลับไปทำ Workshop arithmetic และ comparison อีกครั้ง" };
}

function renderReport(scoreData = null) {
  if (!scoreData) {
    $("#reportCard").innerHTML = `<p class="muted">ทำแบบวัดผลเพื่อดูรายงานสรุปคะแนน ระดับทักษะ และคำแนะนำสำหรับฝึกต่อ</p>`;
    return;
  }
  const report = getSkillReport(scoreData.score);
  $("#reportCard").innerHTML = `
    <div class="report-head"><div><p class="pill">${learner ? learner.name : "นักเรียน"}</p><h3>ระดับทักษะ: ${report.level}</h3></div><strong>${scoreData.score}/${assessmentItems.length}</strong></div>
    <p>${report.text}</p>
    <div class="report-grid"><span>Workshop: ${completedWorkshops.size}/${workshopItems.length}</span><span>โจทย์ฝึก: ${solvedPractice.size}/${practiceItems.length}</span><span>แบบวัดผล: ${scoreData.score}/${assessmentItems.length}</span></div>
    <p class="muted">${scoreData.missed.length ? `หัวข้อที่ควรทบทวน: ${[...new Set(scoreData.missed)].join(", ")}` : "ทำได้ครบทุกหัวข้อในการประเมินนี้"}</p>`;
}

function getStarLevel(score) {
  if (score >= 9) return 5;
  if (score >= 7) return 4;
  if (score >= 5) return 3;
  if (score >= 3) return 2;
  if (score >= 1) return 1;
  return 0;
}

function buildStudentRecord() {
  const assessment = getSavedAssessment();
  const score = assessment?.score ?? 0;
  const report = getSkillReport(score);
  const stars = getStarLevel(score);
  return {
    student_name: learner?.name || "",
    class_room: learner?.className || "",
    student_no: learner?.no || "",
    assessment_score: `${score}/${assessmentItems.length}`,
    skill_level: report.level,
    star_level: stars,
    stars: "★".repeat(stars) + "☆".repeat(5 - stars),
    submitted_status: assessment ? "ส่งแล้ว" : "ยังไม่ส่ง",
  };
}

function saveCurrentStudentRecord() {
  if (!learner || !getSavedAssessment()) return;
  const record = buildStudentRecord();
  const key = `${record.student_name}-${record.class_room}-${record.student_no}`;
  classRecords = [...classRecords.filter((item) => `${item.student_name}-${item.class_room}-${item.student_no}` !== key), record];
  localStorage.setItem(`${storagePrefix}ClassRecords`, JSON.stringify(classRecords));
}

function normalizeRecord(row) {
  const scoreText = String(row.assessment_score || "0/10");
  const scoreNumber = Number(scoreText.split("/")[0]) || 0;
  const stars = Number(row.star_level || getStarLevel(scoreNumber));
  return { ...row, assessment_score: scoreText, stars: row.stars || "★".repeat(stars) + "☆".repeat(5 - stars), submitted_status: row.submitted_status || "ส่งแล้ว" };
}

function renderRecordsTable(records = classRecords) {
  const submitted = records.map(normalizeRecord).filter((record) => record.submitted_status === "ส่งแล้ว" || record.assessment_score !== "0/10");
  $("#recordsCount").textContent = `${submitted.length} คน`;
  if (!submitted.length) {
    $("#recordsTableBody").innerHTML = `<tr><td colspan="6">ยังไม่มีข้อมูล</td></tr>`;
    return;
  }
  $("#recordsTableBody").innerHTML = submitted.map((record) => `
    <tr><td>${record.student_name || "-"}</td><td>${record.class_room || "-"}</td><td>${record.student_no || "-"}</td><td>${record.assessment_score}</td><td><span class="stars">${record.stars}</span></td><td><span class="submitted-badge">ส่งแล้ว</span></td></tr>`).join("");
}

function bindAssessmentControls() {
  $("#submitAssessment").addEventListener("click", () => {
    if (!learner) {
      $("#profile").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const scoreData = getAssessmentScore();
    localStorage.setItem(`${storagePrefix}LastAssessment`, JSON.stringify(scoreData));
    saveCurrentStudentRecord();
    renderReport(scoreData);
    updateProgress(scoreData.score);
    renderRecordsTable();
    $("#report").scrollIntoView({ behavior: "smooth" });
  });
  $("#resetAssessment").addEventListener("click", () => {
    document.querySelectorAll("#assessmentList input").forEach((input) => { input.checked = false; });
    localStorage.removeItem(`${storagePrefix}LastAssessment`);
    renderReport();
    updateProgress(0);
  });
}

function updateWorksheet() {
  const a = Number($("#cashInput").value || 0);
  const b = Number($("#phoneInput").value || 0);
  const result = 7 + 3 * 2;
  $("#balanceResult").textContent = `${result}`;
  $("#worksheetCode").textContent = `x = 7 + 3 * 2\nprint(x)\n\n# ทดลองค่าของคุณ\na = ${a}\nb = ${b}\nprint(a + b)\nprint(a > b)`;
}

function bindWorksheet() {
  $("#worksheet-title").textContent = "ภารกิจประยุกต์: วิเคราะห์นิพจน์และลำดับความสำคัญ";
  $("#cashInput").previousElementSibling.textContent = "ค่า a";
  $("#phoneInput").previousElementSibling.textContent = "ค่า b";
  $("#cashInput").value = "7";
  $("#phoneInput").value = "3";
  document.querySelector(".balance-card span").textContent = "ผลของ 7 + 3 * 2";
  $("#cashInput").addEventListener("input", updateWorksheet);
  $("#phoneInput").addEventListener("input", updateWorksheet);
  updateWorksheet();
}

function updateProgress(assessmentScore = null) {
  const savedAssessment = getSavedAssessment();
  const score = assessmentScore ?? savedAssessment?.score ?? 0;
  let level = "Level 1: โปรไฟล์";
  if (learner) level = "Level 2: Workshop";
  if (completedWorkshops.size >= workshopItems.length) level = "Level 3: Practice";
  if (isAssessmentUnlocked()) level = "Level 4: Assessment";
  if (score) level = getSkillReport(score).level;
  $("#workshopProgress").textContent = `${completedWorkshops.size}/${workshopItems.length}`;
  $("#practiceProgress").textContent = `${solvedPractice.size}/${practiceItems.length}`;
  $("#assessmentProgress").textContent = `${score}/${assessmentItems.length}`;
  $("#skillLevelText").textContent = level;
}

renderSlideList();
renderActiveSlide();
renderModules();
renderExampleList();
renderActiveExample();
renderSampleSelect();
sendExampleToLab(0);
bindLab();
bindProfileForm();
renderLearner();
renderWorkshop();
bindWorkshopControls();
renderPractice();
renderQuiz();
renderAssessment();
bindAssessmentControls();
bindWorksheet();
updateProgress();
const savedAssessment = getSavedAssessment();
if (savedAssessment) renderReport(savedAssessment);
renderRecordsTable();
setupPyodide();
refreshIcons();
