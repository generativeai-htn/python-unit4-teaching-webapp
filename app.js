const demos = {
  multiply: {
    code: `# สาธิตการคูณข้อความ
name = 'Manoch'
print(name * 3)

# ผลลัพธ์จะออกมาเป็น: ManochManochManoch`,
    output: `ManochManochManoch`,
  },
  types: {
    code: `# สาธิตการใช้ type() ตรวจสอบชนิดข้อมูล
print(type(15))             # จำนวนเต็ม
print(type(14.3))           # ทศนิยม
print(type("Good morning")) # ข้อความ`,
    output: `<class 'int'>
<class 'float'>
<class 'str'>`,
  },
  worksheet: {
    code: `# สาธิตใบงานที่ 4.2 แบบใช้งานตัวแปร
cash = 5000
phone_price = 4500
balance = cash - phone_price

print("นายวัฒนามีเงินสด", cash, "บาท")
print("นำเงินไปซื้อโทรศัพท์มือถือ", phone_price, "บาท")
print("นายวัฒนาเหลือเงินสด =", balance, "บาท")`,
    output: `นายวัฒนามีเงินสด 5000 บาท
นำเงินไปซื้อโทรศัพท์มือถือ 4500 บาท
นายวัฒนาเหลือเงินสด = 500 บาท`,
  },
};

const typeExplanations = {
  int: "int คือข้อมูลจำนวนเต็ม เช่น 15, 120, -5 เหมาะกับการนับจำนวนหรือจำนวนเงินที่ไม่มีทศนิยม",
  float: "float คือข้อมูลตัวเลขที่มีทศนิยม เช่น 14.3, 0.075 เหมาะกับคะแนนเฉลี่ย อัตราภาษี หรือค่าที่ต้องการความละเอียด",
  str: "str คือข้อมูลข้อความ ต้องอยู่ในเครื่องหมาย quote เช่น 'Python' หรือ \"Good morning\"",
};

const quizItems = [
  {
    name: "student 1",
    hint: "มีช่องว่าง",
    valid: false,
    reason: "ไม่ได้ เพราะชื่อตัวแปรห้ามมีช่องว่าง",
  },
  {
    name: "student_1",
    hint: "ใช้ขีดล่าง Underscore",
    valid: true,
    reason: "ได้ เพราะ Python อนุญาตให้ใช้เครื่องหมาย _ ในชื่อตัวแปร",
  },
  {
    name: "1student",
    hint: "เอาตัวเลขขึ้นต้น",
    valid: false,
    reason: "ไม่ได้ เพราะชื่อตัวแปรห้ามขึ้นต้นด้วยตัวเลข",
  },
  {
    name: "MyName",
    hint: "ตัวพิมพ์เล็กสลับใหญ่",
    valid: true,
    reason: "ได้ แต่ Python แยกตัวพิมพ์เล็ก-ใหญ่ ดังนั้น MyName กับ myname เป็นคนละตัวแปร",
  },
  {
    name: "print",
    hint: "ชื่อเดียวกับคำสั่งแสดงผล",
    valid: false,
    reason: "ไม่ได้ในบริบทการสอนนี้ เพราะ print เป็นชื่อคำสั่งที่ Python ใช้แสดงผล ควรหลีกเลี่ยง",
  },
];

const codeBlock = document.querySelector("#codeBlock");
const consoleOutput = document.querySelector("#consoleOutput");
const runDemoButton = document.querySelector("#runDemo");
const tabButtons = document.querySelectorAll(".tab-button");
let activeDemo = "multiply";

function renderDemo() {
  codeBlock.textContent = demos[activeDemo].code;
  consoleOutput.textContent = "กด Run เพื่อดูผลลัพธ์";
}

function runDemo() {
  consoleOutput.textContent = "...";
  window.setTimeout(() => {
    consoleOutput.textContent = demos[activeDemo].output;
  }, 180);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeDemo = button.dataset.demo;
    tabButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    renderDemo();
  });
});

runDemoButton.addEventListener("click", runDemo);

const wordInput = document.querySelector("#wordInput");
const repeatInput = document.querySelector("#repeatInput");
const stringFormula = document.querySelector("#stringFormula");
const stringResult = document.querySelector("#stringResult");

function updateStringLab() {
  const word = wordInput.value || "";
  const repeat = Math.max(0, Math.min(12, Number(repeatInput.value || 0)));
  repeatInput.value = repeat;
  stringFormula.textContent = `'${word}' * ${repeat}`;
  stringResult.textContent = word.repeat(repeat) || "(ไม่มีผลลัพธ์)";
}

wordInput.addEventListener("input", updateStringLab);
repeatInput.addEventListener("input", updateStringLab);

document.querySelectorAll("[data-type-card]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#typeExplain").textContent = typeExplanations[button.dataset.typeCard];
  });
});

const cashInput = document.querySelector("#cashInput");
const phoneInput = document.querySelector("#phoneInput");
const balanceResult = document.querySelector("#balanceResult");
const worksheetCode = document.querySelector("#worksheetCode");

function formatBaht(value) {
  return new Intl.NumberFormat("th-TH").format(value);
}

function updateWorksheet() {
  const cash = Number(cashInput.value || 0);
  const phone = Number(phoneInput.value || 0);
  const balance = cash - phone;

  balanceResult.textContent = `${formatBaht(balance)} บาท`;
  worksheetCode.textContent = `cash = ${cash}
phone_price = ${phone}
balance = cash - phone

print("นายวัฒนามีเงินสด", cash, "บาท")
print("นำเงินไปซื้อโทรศัพท์มือถือ", phone_price, "บาท")
print("นายวัฒนาเหลือเงินสด =", balance, "บาท")`;
}

cashInput.addEventListener("input", updateWorksheet);
phoneInput.addEventListener("input", updateWorksheet);

const quizList = document.querySelector("#quizList");
const scoreText = document.querySelector("#scoreText");
const answers = new Map();

function updateScore() {
  const correct = [...answers.entries()].filter(([index, answer]) => quizItems[index].valid === answer).length;
  scoreText.textContent = `ตอบถูก ${correct} จาก ${quizItems.length} ข้อ`;
}

function renderQuiz() {
  quizList.innerHTML = quizItems
    .map(
      (item, index) => `
        <article class="quiz-item" data-quiz-index="${index}">
          <div>
            <strong>ตั้งชื่อตัวแปรว่า <code>${item.name}</code></strong>
            <p>(${item.hint})</p>
          </div>
          <div class="quiz-actions" aria-label="ตัวเลือกคำตอบข้อ ${index + 1}">
            <button class="answer-button" type="button" data-answer="true">ได้</button>
            <button class="answer-button" type="button" data-answer="false">ไม่ได้</button>
          </div>
          <p class="quiz-feedback" aria-live="polite"></p>
        </article>
      `,
    )
    .join("");

  quizList.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => {
      const itemElement = button.closest(".quiz-item");
      const index = Number(itemElement.dataset.quizIndex);
      const answer = button.dataset.answer === "true";
      const correct = quizItems[index].valid === answer;

      answers.set(index, answer);
      itemElement.querySelectorAll(".answer-button").forEach((choice) => {
        choice.classList.remove("correct", "wrong");
      });
      button.classList.add(correct ? "correct" : "wrong");
      itemElement.querySelector(".quiz-feedback").textContent = `${correct ? "ถูกต้อง" : "ลองดูเฉลย"}: ${quizItems[index].reason}`;
      updateScore();
    });
  });
}

renderDemo();
updateStringLab();
updateWorksheet();
renderQuiz();

if (window.lucide) {
  window.lucide.createIcons();
}
