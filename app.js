const slides = [
  {
    title: "หน่วยที่ 4: ตัวแปรและชนิดของข้อมูล",
    summary: "เปิดภาพรวมว่าบทนี้จะเรียนการจัดการและประกอบร่างข้อมูลในโลกของ Python",
    bullets: ["ตัวแปรคือชื่อที่ใช้เรียกข้อมูล", "ชนิดข้อมูลช่วยให้คอมพิวเตอร์เลือกวิธีประมวลผล", "ท้ายบทจะเขียนโปรแกรมคำนวณจากโจทย์จริง"],
  },
  {
    title: "ตัวแปร (Variable) คืออะไร?",
    summary: "เปรียบความจำมนุษย์ที่กระจัดกระจายกับความจำคอมพิวเตอร์ที่จัดเก็บเป็นกล่องมีป้ายชื่อ",
    bullets: ["ตัวแปรคือชื่อที่กำหนดขึ้นเพื่อเก็บค่าข้อมูล", "ช่วยให้เรียกใช้หรือเปลี่ยนค่าได้ภายหลัง", "ควรใช้ชื่อที่สื่อความหมายกับข้อมูลที่เก็บ"],
  },
  {
    title: "กฎการสร้างป้ายชื่อให้กล่องข้อมูล",
    summary: "สรุปกฎการตั้งชื่อตัวแปรที่ใช้ได้ ใช้แล้วควรระวัง และห้ามใช้",
    bullets: ["ใช้ตัวอักษร ตัวเลข และ underscore ได้", "ห้ามมีช่องว่างและห้ามขึ้นต้นด้วยตัวเลข", "Python แยกตัวพิมพ์เล็ก-ใหญ่และควรเลี่ยงคำสงวน"],
  },
  {
    title: "การบรรจุข้อมูลลงกล่อง",
    summary: "อธิบายรูปแบบคำสั่งกำหนดค่า: ชื่อตัวแปร = ค่าของข้อมูล",
    bullets: ["เครื่องหมาย = คือการนำค่าด้านขวาไปเก็บในชื่อตัวแปรด้านซ้าย", "ตัวแปรเก็บได้ทั้งข้อความ จำนวนเต็ม และทศนิยม", "ชื่อที่ดีทำให้โค้ดอ่านเข้าใจง่าย"],
  },
  {
    title: "วัสดุพื้นฐานในโลกโปรแกรมมิ่ง",
    summary: "แนะนำชนิดข้อมูลพื้นฐานที่ใช้บ่อย ได้แก่ int, float และ str",
    bullets: ["int คือจำนวนเต็ม เช่น 30, 120, -5", "float คือเลขทศนิยม เช่น 0.07, 14.3", "str คือข้อความ เช่น 'Good morning' และ 'Python'"],
  },
  {
    title: "กล่องจัดระเบียบขั้นสูง",
    summary: "แนะนำชนิดข้อมูลประกอบสำหรับจัดเก็บข้อมูลหลายชิ้น เช่น list, tuple, set และ dictionary",
    bullets: ["list เรียงลำดับและแก้ไขได้", "tuple เรียงลำดับแต่แก้ไขไม่ได้", "set เก็บข้อมูลไม่ซ้ำ", "dictionary เก็บข้อมูลแบบ key-value"],
  },
  {
    title: "เครื่องสแกนตรวจสอบข้อมูล type()",
    summary: "ใช้ type() ตรวจสอบว่าข้อมูลหรือตัวแปรเป็นชนิดใด เพื่อป้องกันการคำนวณผิดชนิด",
    bullets: ["type(15) ได้ int", "type(14.3) ได้ float", "type('Good morning') ได้ str"],
  },
  {
    title: "เวทมนตร์ของตัวอักษร String Math",
    summary: "แสดงว่าเครื่องหมาย + และ * ใช้กับข้อความได้ แต่ความหมายต่างจากเลข",
    bullets: ["ข้อความ + ข้อความ คือการต่อข้อความ", "ข้อความ * จำนวนเต็ม คือการทำซ้ำข้อความ", "เป็นจุดชวนเด็กเห็นความยืดหยุ่นของ Python"],
  },
  {
    title: "การแปลงสภาพวัสดุ Type Conversion",
    summary: "เมื่อข้อมูลคนละชนิดทำงานร่วมกันไม่ได้ ต้องแปลงชนิดข้อมูลก่อน",
    bullets: ["str() แปลงเป็นข้อความ", "int() แปลงเป็นจำนวนเต็ม", "float() แปลงเป็นทศนิยม", "ใช้แก้ปัญหาการรวมข้อความกับตัวเลข"],
  },
  {
    title: "ภารกิจประยุกต์ใช้: เงินทอนของนายวัฒนา",
    summary: "โจทย์ใบงาน 4.2 ให้นำเงินสด 5,000 บาท ซื้อโทรศัพท์ 4,500 บาท แล้วคำนวณเงินคงเหลือ",
    bullets: ["เงินสดเริ่มต้น = 5,000", "ราคาโทรศัพท์ = 4,500", "เงินทอน = เงินสด - ราคาโทรศัพท์"],
  },
  {
    title: "วางแผนก่อนลงมือ Algorithm Design",
    summary: "แยกโปรแกรมเป็น 3 ขั้นตอน Input/Assign, Process และ Output",
    bullets: ["Input/Assign: สร้างตัวแปรเก็บข้อมูล", "Process: คำนวณด้วยตัวแปร", "Output: แสดงผลด้วย print()"],
  },
  {
    title: "การจำลองสภาพแวดล้อม Python Execution",
    summary: "เปลี่ยนแผนให้เป็นโค้ด Python และดูผลลัพธ์จากการรัน",
    bullets: ["wallet = 5000", "phone = 4500", "change = wallet - phone", "print() แสดงผลเงินสดคงเหลือ"],
  },
  {
    title: "สรุปคลังเครื่องมือ",
    summary: "ทบทวนเครื่องมือหลักของหน่วย ได้แก่ assignment, data types, type checking, conversion และ output",
    bullets: ["กำหนดตัวแปรด้วย =", "ชนิดพื้นฐาน int, float, str", "ตรวจชนิดด้วย type()", "แปลงชนิดด้วย str(), int(), float()", "แสดงผลด้วย print()"],
  },
];

const modules = [
  {
    icon: "box",
    title: "ตัวแปรคือกล่องข้อมูล",
    text: "ใช้ชื่อตัวแปรเป็นป้ายบนกล่อง เพื่อเก็บข้อมูลไว้เรียกใช้หรือเปลี่ยนค่าในภายหลัง",
    slides: ["Slide 2", "Slide 4"],
  },
  {
    icon: "badge-check",
    title: "กฎการตั้งชื่อ",
    text: "ตั้งชื่อด้วยตัวอักษร ตัวเลข และ underscore ได้ แต่ห้ามเว้นวรรค ห้ามขึ้นต้นด้วยตัวเลข และควรเลี่ยงคำสงวน",
    slides: ["Slide 3"],
  },
  {
    icon: "layers-3",
    title: "ชนิดข้อมูลพื้นฐาน",
    text: "int, float และ str เป็นพื้นฐานที่ผู้เรียนต้องแยกให้ออกก่อนทำโจทย์จริง",
    slides: ["Slide 5"],
  },
  {
    icon: "archive",
    title: "ชนิดข้อมูลประกอบ",
    text: "list, tuple, set และ dictionary ช่วยจัดข้อมูลหลายชิ้นให้เป็นระบบมากขึ้น",
    slides: ["Slide 6"],
  },
  {
    icon: "scan-search",
    title: "ตรวจและแปลงชนิดข้อมูล",
    text: "type() ใช้ตรวจชนิด ส่วน str(), int(), float() ใช้เปลี่ยนชนิดเมื่อข้อมูลต้องทำงานร่วมกัน",
    slides: ["Slide 7", "Slide 9"],
  },
  {
    icon: "calculator",
    title: "ประยุกต์กับโจทย์จริง",
    text: "นำตัวแปรมาแปลงโจทย์นายวัฒนาซื้อโทรศัพท์ให้กลายเป็นโปรแกรมคำนวณเงินทอน",
    slides: ["Slide 10", "Slide 11", "Slide 12"],
  },
];

const examples = [
  {
    title: "01 - กำหนดค่าตัวแปรพื้นฐาน",
    slide: "Slides 2, 4",
    description: "เริ่มจากสร้างตัวแปรเพื่อเก็บชื่อ อายุ ราคา และอัตราภาษี ให้เห็นว่าตัวแปรเก็บข้อมูลได้หลายชนิด",
    code: `name = 'Malisa'
age = 30
price = 120
tax = 0.075

print('Name =', name)
print('Age =', age)
print('Price =', price)
print('Tax =', tax)`,
    output: `Name = Malisa
Age = 30
Price = 120
Tax = 0.075`,
  },
  {
    title: "02 - ตรวจชนิดข้อมูลด้วย type()",
    slide: "Slide 7",
    description: "ให้นักเรียนทายก่อนว่าคอมพิวเตอร์มองข้อมูลแต่ละแบบเป็นชนิดใด แล้วรันเพื่อเฉลย",
    code: `print(type(15))
print(type(14.3))
print(type("Good morning"))

score = 95.5
student_name = 'Somchai'
print(type(score))
print(type(student_name))`,
    output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'float'>
<class 'str'>`,
  },
  {
    title: "03 - String Multiplication",
    slide: "Slide 8",
    description: "โชว์ความยืดหยุ่นของ Python ที่เอาข้อความมาคูณจำนวนเต็มเพื่อทำซ้ำข้อความได้",
    code: `name = 'Manoch'
print(name * 3)

sound = 'Ha'
print(sound * 3)

line = '-' * 20
print(line)
print('Python')
print(line)`,
    output: `ManochManochManoch
HaHaHa
--------------------
Python
--------------------`,
  },
  {
    title: "04 - การต่อข้อความ",
    slide: "Slide 8",
    description: "สาธิตการใช้ + กับข้อมูลชนิด str เพื่อเชื่อมข้อความเข้าด้วยกัน",
    code: `first = 'Hello'
second = 'World'
message = first + second

print(message)
print(first + ' ' + second)
print('Good' + ' morning')`,
    output: `HelloWorld
Hello World
Good morning`,
  },
  {
    title: "05 - แปลงชนิดข้อมูลด้วย str(), int(), float()",
    slide: "Slide 9",
    description: "เมื่อข้อความและตัวเลขอยู่ร่วมกัน ต้องแปลงชนิดก่อนจึงจะรวมข้อความหรือคำนวณได้ถูกต้อง",
    code: `age = 18
print('อายุ: ' + str(age))

number_text = '25'
number = int(number_text)
print(number + 5)

price_text = '14.3'
price = float(price_text)
print(price * 2)`,
    output: `อายุ: 18
30
28.6`,
  },
  {
    title: "06 - ชนิดข้อมูลประกอบ",
    slide: "Slide 6",
    description: "แสดง list, tuple, set และ dictionary ให้เห็นรูปแบบการเก็บข้อมูลหลายชิ้น",
    code: `fruits = ['apple', 'orange']
locked_fruits = ('apple', 'orange')
unique_fruits = {'apple', 'orange', 'apple'}
student = {'name': 'Alice', 'age': 30}

print(fruits)
print(locked_fruits)
print(unique_fruits)
print(student)
print(student['name'])`,
    output: `['apple', 'orange']
('apple', 'orange')
{'apple', 'orange'}
{'name': 'Alice', 'age': 30}
Alice`,
  },
  {
    title: "07 - ใบงาน 4.2 นายวัฒนาซื้อโทรศัพท์",
    slide: "Slides 10-12",
    description: "โค้ดเฉลยใบงานโดยใช้ตัวแปร cash, phone_price และ balance ตามโจทย์",
    code: `cash = 5000
phone_price = 4500
balance = cash - phone_price

print("นายวัฒนามีเงินสด", cash, "บาท")
print("นำเงินไปซื้อโทรศัพท์มือถือ", phone_price, "บาท")
print("นายวัฒนาเหลือเงินสด =", balance, "บาท")`,
    output: `นายวัฒนามีเงินสด 5000 บาท
นำเงินไปซื้อโทรศัพท์มือถือ 4500 บาท
นายวัฒนาเหลือเงินสด = 500 บาท`,
  },
  {
    title: "08 - Input Process Output",
    slide: "Slide 11",
    description: "ทำให้เห็นโครงคิดก่อนเขียนโค้ด: รับ/กำหนดข้อมูล ประมวลผล และแสดงผล",
    code: `# 1. Input/Assign
wallet = 5000
phone = 4500

# 2. Process
change = wallet - phone

# 3. Output
print('นายวัฒนาจะมีเงินสดเหลือ:', change, 'บาท')`,
    output: `นายวัฒนาจะมีเงินสดเหลือ: 500 บาท`,
  },
  {
    title: "09 - ทดลองเปลี่ยนค่าโจทย์",
    slide: "Slides 10-12",
    description: "ให้ผู้เรียนลองเปลี่ยนราคาและเงินสด เพื่อดูว่าตัวแปรทำให้โปรแกรมยืดหยุ่นอย่างไร",
    code: `cash = 12000
phone_price = 8790
case_price = 250

total_price = phone_price + case_price
balance = cash - total_price

print('เงินสดเริ่มต้น =', cash, 'บาท')
print('ราคารวม =', total_price, 'บาท')
print('เงินสดคงเหลือ =', balance, 'บาท')`,
    output: `เงินสดเริ่มต้น = 12000 บาท
ราคารวม = 9040 บาท
เงินสดคงเหลือ = 2960 บาท`,
  },
  {
    title: "10 - Case Sensitive",
    slide: "Slide 3",
    description: "ย้ำว่า Python มองตัวพิมพ์เล็กและตัวพิมพ์ใหญ่เป็นคนละชื่อกัน",
    code: `MyName = 'Mali'
myname = 'Somchai'

print(MyName)
print(myname)
print(MyName == myname)`,
    output: `Mali
Somchai
False`,
  },
];

const quizItems = [
  { name: "student 1", hint: "มีช่องว่าง", valid: false, reason: "ไม่ได้ เพราะชื่อตัวแปรห้ามมีช่องว่าง" },
  { name: "student_1", hint: "ใช้ขีดล่าง Underscore", valid: true, reason: "ได้ เพราะ Python อนุญาตให้ใช้เครื่องหมาย _ ในชื่อตัวแปร" },
  { name: "1student", hint: "เอาตัวเลขขึ้นต้น", valid: false, reason: "ไม่ได้ เพราะชื่อตัวแปรห้ามขึ้นต้นด้วยตัวเลข" },
  {
    name: "MyName",
    hint: "ตัวพิมพ์เล็กสลับใหญ่",
    valid: true,
    reason: "ได้ แต่ต้องจำไว้ว่า MyName กับ myname เป็นคนละตัวแปร เพราะ Python แยกตัวพิมพ์เล็ก-ใหญ่",
  },
  { name: "print", hint: "ชื่อเดียวกับคำสั่งแสดงผล", valid: false, reason: "ไม่ได้ในบริบทการสอนนี้ เพราะ print เป็นชื่อคำสั่งของระบบ ควรหลีกเลี่ยง" },
];

let activeSlide = 0;
let activeExample = 0;
let pyodide = null;
let pyodideReady = false;

const slideList = document.querySelector("#slideList");
const activeSlideImage = document.querySelector("#activeSlideImage");
const activeSlideNumber = document.querySelector("#activeSlideNumber");
const activeSlideTitle = document.querySelector("#activeSlideTitle");
const activeSlideSummary = document.querySelector("#activeSlideSummary");
const activeSlideBullets = document.querySelector("#activeSlideBullets");

function renderSlideList() {
  slideList.innerHTML = slides
    .map(
      (slide, index) => `
        <button class="slide-button ${index === activeSlide ? "active" : ""}" type="button" data-slide="${index}">
          <span class="slide-index">${index + 1}</span>
          <span>
            <strong>${slide.title}</strong>
            <small>${slide.summary}</small>
          </span>
        </button>
      `,
    )
    .join("");

  slideList.querySelectorAll(".slide-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeSlide = Number(button.dataset.slide);
      renderSlideList();
      renderActiveSlide();
    });
  });
}

function renderActiveSlide() {
  const slide = slides[activeSlide];
  const page = String(activeSlide + 1).padStart(2, "0");
  activeSlideImage.src = `assets/slides/page-${page}.png`;
  activeSlideImage.alt = `สไลด์หน้า ${activeSlide + 1}: ${slide.title}`;
  activeSlideNumber.textContent = `Slide ${activeSlide + 1} / ${slides.length}`;
  activeSlideTitle.textContent = slide.title;
  activeSlideSummary.textContent = slide.summary;
  activeSlideBullets.innerHTML = slide.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
}

function renderModules() {
  document.querySelector("#moduleGrid").innerHTML = modules
    .map(
      (module) => `
        <article class="module-card">
          <i data-lucide="${module.icon}"></i>
          <h3>${module.title}</h3>
          <p>${module.text}</p>
          <div class="slide-tags">${module.slides.map((slide) => `<span>${slide}</span>`).join("")}</div>
        </article>
      `,
    )
    .join("");
}

const exampleList = document.querySelector("#exampleList");
const exampleSlideRef = document.querySelector("#exampleSlideRef");
const exampleTitle = document.querySelector("#exampleTitle");
const exampleDescription = document.querySelector("#exampleDescription");
const exampleCode = document.querySelector("#exampleCode");
const exampleOutput = document.querySelector("#exampleOutput");
const sampleSelect = document.querySelector("#sampleSelect");
const pythonEditor = document.querySelector("#pythonEditor");
const pythonOutput = document.querySelector("#pythonOutput");

function renderExampleList() {
  exampleList.innerHTML = examples
    .map(
      (example, index) => `
        <button class="example-button ${index === activeExample ? "active" : ""}" type="button" data-example="${index}">
          <span class="slide-index">${index + 1}</span>
          <span>
            <strong>${example.title}</strong>
            <small>${example.slide}</small>
          </span>
        </button>
      `,
    )
    .join("");

  exampleList.querySelectorAll(".example-button").forEach((button) => {
    button.addEventListener("click", () => {
      activeExample = Number(button.dataset.example);
      renderExampleList();
      renderActiveExample();
    });
  });
}

function renderActiveExample() {
  const example = examples[activeExample];
  exampleSlideRef.textContent = example.slide;
  exampleTitle.textContent = example.title;
  exampleDescription.textContent = example.description;
  exampleCode.textContent = example.code;
  exampleOutput.textContent = example.output;
}

function renderSampleSelect() {
  sampleSelect.innerHTML = examples
    .map((example, index) => `<option value="${index}">${example.title}</option>`)
    .join("");
  sampleSelect.value = String(activeExample);
}

function sendExampleToLab(index = activeExample) {
  const example = examples[index];
  pythonEditor.value = example.code;
  sampleSelect.value = String(index);
  pythonOutput.textContent = "พร้อมรันโค้ดตัวอย่างนี้";
}

document.querySelector("#sendToLab").addEventListener("click", () => sendExampleToLab(activeExample));
document.querySelector("#resetLab").addEventListener("click", () => sendExampleToLab(Number(sampleSelect.value)));
sampleSelect.addEventListener("change", () => sendExampleToLab(Number(sampleSelect.value)));
document.querySelector("#clearOutput").addEventListener("click", () => {
  pythonOutput.textContent = "ล้างผลลัพธ์แล้ว";
});

async function setupPyodide() {
  const status = document.querySelector("#pyStatus");
  try {
    if (!window.loadPyodide) {
      throw new Error("ไม่พบ Pyodide CDN");
    }
    pyodide = await window.loadPyodide({
      stdout: (text) => {
        pythonOutput.textContent += `${text}\n`;
      },
      stderr: (text) => {
        pythonOutput.textContent += `${text}\n`;
      },
    });
    pyodideReady = true;
    status.classList.add("ready");
    status.innerHTML = `<i data-lucide="check-circle-2"></i> Python runtime พร้อมใช้งาน`;
  } catch (error) {
    status.classList.add("error");
    status.innerHTML = `<i data-lucide="circle-alert"></i> โหลด Python runtime ไม่สำเร็จ แต่ยังดูตัวอย่างโค้ดได้`;
    pythonOutput.textContent = `ไม่สามารถโหลด Pyodide ได้\n${error.message}`;
  }
  if (window.lucide) window.lucide.createIcons();
}

document.querySelector("#runPython").addEventListener("click", async () => {
  pythonOutput.textContent = "";
  if (!pyodideReady) {
    pythonOutput.textContent = "Python runtime ยังไม่พร้อมหรือโหลดไม่สำเร็จ กรุณาตรวจอินเทอร์เน็ตแล้วลองใหม่";
    return;
  }
  try {
    await pyodide.runPythonAsync(pythonEditor.value);
    if (!pythonOutput.textContent.trim()) {
      pythonOutput.textContent = "โค้ดรันสำเร็จ แต่ไม่มีคำสั่ง print() จึงไม่มีผลลัพธ์แสดง";
    }
  } catch (error) {
    pythonOutput.textContent = error.message;
  }
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
balance = cash - phone_price

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

renderSlideList();
renderActiveSlide();
renderModules();
renderExampleList();
renderActiveExample();
renderSampleSelect();
sendExampleToLab(0);
updateWorksheet();
renderQuiz();
setupPyodide();

if (window.lucide) {
  window.lucide.createIcons();
}

const workshopItems = [
  { title: "เห็นภาพรวมหน่วย", goal: "รู้ว่าบทนี้เรียนตัวแปร ชนิดข้อมูล และการประยุกต์ใช้", task: "จดคำ 3 คำที่คิดว่าเกี่ยวกับข้อมูลในโปรแกรม" },
  { title: "เข้าใจตัวแปร", goal: "อธิบายได้ว่าตัวแปรเหมือนกล่องเก็บข้อมูลที่มีชื่อ", task: "ตั้งชื่อตัวแปร 2 ชื่อสำหรับเก็บชื่อนักเรียนและคะแนน" },
  { title: "ตั้งชื่อตัวแปรให้ถูกกฎ", goal: "แยกชื่อที่ใช้ได้และใช้ไม่ได้ใน Python", task: "ลองตอบควิซ student_1, 1student และ MyName" },
  { title: "กำหนดค่าด้วย =", goal: "เขียนรูปแบบ variable = value ได้", task: "เขียนตัวแปร name, price และ tax ใน Python Lab" },
  { title: "แยก int, float, str", goal: "ระบุชนิดข้อมูลพื้นฐานจากตัวอย่างได้", task: "ใช้ type() ตรวจ 15, 14.3 และ 'Python'" },
  { title: "รู้จักข้อมูลประกอบ", goal: "เห็นความต่างของ list, tuple, set และ dictionary", task: "รันตัวอย่างชนิดข้อมูลประกอบใน Python Lab" },
  { title: "ใช้ type() ตรวจสอบ", goal: "ตรวจชนิดข้อมูลของตัวแปรได้ก่อนนำไปคำนวณ", task: "สร้างตัวแปร score = 95.5 แล้ว print(type(score))" },
  { title: "ใช้ String Math", goal: "ใช้ + ต่อข้อความ และ * ทำซ้ำข้อความได้", task: "ลองให้คำว่า 'Ha' แสดงซ้ำ 5 ครั้ง" },
  { title: "แปลงชนิดข้อมูล", goal: "ใช้ str(), int(), float() แก้ปัญหาข้อมูลคนละชนิด", task: "แปลง '25' เป็น int แล้วบวก 10" },
  { title: "อ่านโจทย์เงินทอน", goal: "แยกข้อมูลเริ่มต้น ราคา และผลลัพธ์ที่ต้องการ", task: "เปลี่ยนเงินสดและราคาโทรศัพท์ในใบงาน แล้วสังเกตโค้ด" },
  { title: "วางแผน IPO", goal: "แยก Input/Assign, Process และ Output ได้", task: "บอกว่า balance = cash - phone_price อยู่ในขั้นใด" },
  { title: "รันโปรแกรมโจทย์จริง", goal: "เขียนโปรแกรมเงินทอนด้วยตัวแปรและ print()", task: "ส่งตัวอย่างใบงาน 4.2 เข้า Lab แล้วกด Run Python" },
  { title: "สรุปคลังเครื่องมือ", goal: "ทบทวน =, int, float, str, type(), str(), int(), float(), print()", task: "ทำโจทย์ฝึกและแบบวัดผลเพื่อรับรายงานทักษะ" },
];

const practiceItems = [
  { prompt: "เติมชนิดข้อมูล: type(15) ได้ class ของอะไร", answer: ["int"], hint: "จำนวนเต็ม" },
  { prompt: "เติมชนิดข้อมูล: type(14.3) ได้ class ของอะไร", answer: ["float"], hint: "เลขทศนิยม" },
  { prompt: "เติมชนิดข้อมูล: type('Good morning') ได้ class ของอะไร", answer: ["str"], hint: "ข้อความ" },
  { prompt: "ถ้าต้องการเก็บชื่อนักเรียน ควรใช้ชนิดข้อมูลใด", answer: ["str", "string"], hint: "ข้อความ" },
  { prompt: "เขียนผลลัพธ์ของ 'Ha' * 3", answer: ["HaHaHa"], hint: "ทำซ้ำข้อความ 3 ครั้ง" },
  { prompt: "เงินสด 5000 ซื้อของ 4500 เหลือเท่าไร", answer: ["500"], hint: "cash - price" },
  { prompt: "ชื่อตัวแปร student_1 ใช้ได้หรือไม่ได้", answer: ["ได้", "ใช้ได้"], hint: "underscore ใช้ได้" },
  { prompt: "ฟังก์ชันใดใช้ตรวจชนิดข้อมูล", answer: ["type", "type()"], hint: "อยู่ในสไลด์เครื่องสแกน" },
];

const assessmentItems = [
  { question: "ข้อใดคือความหมายของตัวแปรใน Python", choices: ["ชื่อสำหรับเก็บและเรียกใช้ข้อมูล", "คำสั่งลบไฟล์", "รูปภาพในสไลด์", "เครื่องหมายคูณ"], answer: 0, skill: "concept" },
  { question: "ชื่อตัวแปรข้อใดถูกต้องตามกฎ", choices: ["student 1", "1student", "student_1", "my-age"], answer: 2, skill: "naming" },
  { question: "คำสั่ง name = 'Malisa' หมายถึงอะไร", choices: ["เปรียบเทียบค่า", "เก็บข้อความ Malisa ในตัวแปร name", "ลบตัวแปร name", "แปลง name เป็นเลข"], answer: 1, skill: "assignment" },
  { question: "ข้อมูล 14.3 เป็นชนิดใด", choices: ["int", "float", "str", "dict"], answer: 1, skill: "types" },
  { question: "ข้อมูล 'Python' เป็นชนิดใด", choices: ["int", "float", "str", "set"], answer: 2, skill: "types" },
  { question: "คำสั่งใดใช้ตรวจชนิดข้อมูล", choices: ["print()", "input()", "type()", "float()"], answer: 2, skill: "type-check" },
  { question: "ผลลัพธ์ของ 'Ha' * 3 คือข้อใด", choices: ["Ha3", "HaHaHa", "Error เสมอ", "9"], answer: 1, skill: "string-math" },
  { question: "ถ้าจะรวมข้อความ 'อายุ: ' กับตัวแปร age = 18 ควรใช้ข้อใด", choices: ["'อายุ: ' + age", "'อายุ: ' + str(age)", "int('อายุ: ') + age", "type(age)"], answer: 1, skill: "conversion" },
  { question: "cash = 5000, phone_price = 4500, balance = cash - phone_price ได้ balance เท่าไร", choices: ["500", "4500", "5000", "9500"], answer: 0, skill: "calculation" },
  { question: "ใน IPO ขั้น Process ของโจทย์เงินทอนคือข้อใด", choices: ["cash = 5000", "phone_price = 4500", "balance = cash - phone_price", "print(balance)"], answer: 2, skill: "algorithm" },
];

let currentWorkshop = 0;
const completedWorkshops = new Set(JSON.parse(localStorage.getItem("unit4CompletedWorkshops") || "[]"));
const solvedPractice = new Set(JSON.parse(localStorage.getItem("unit4SolvedPractice") || "[]"));
let learner = JSON.parse(localStorage.getItem("unit4Learner") || "null");

function refreshPlatformIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function renderLearner() {
  const card = document.querySelector("#learnerCard");
  const lock = document.querySelector("#assessmentLock");
  const panel = document.querySelector("#assessmentPanel");
  if (!card) return;

  if (!learner) {
    card.innerHTML = `
      <p class="pill">ยังไม่เริ่ม</p>
      <h3>รอข้อมูลนักเรียน</h3>
      <p>เมื่อบันทึกข้อมูลแล้ว ระบบจะเปิดการทำแบบวัดผลและใช้ชื่อของนักเรียนในรายงานผล</p>
    `;
    if (lock) lock.hidden = false;
    if (panel) panel.hidden = true;
    return;
  }

  card.innerHTML = `
    <p class="pill">พร้อมเรียน</p>
    <h3>${learner.name}</h3>
    <p>ชั้น/ห้อง ${learner.className} เลขที่ ${learner.no}</p>
    <p>พื้นฐานก่อนเรียน: <strong>${learner.level}</strong></p>
  `;
  if (lock) lock.hidden = true;
  if (panel) panel.hidden = false;
}

function bindProfileForm() {
  const form = document.querySelector("#profileForm");
  if (!form) return;
  if (learner) {
    document.querySelector("#studentName").value = learner.name;
    document.querySelector("#studentClass").value = learner.className;
    document.querySelector("#studentNo").value = learner.no;
    document.querySelector("#studentLevel").value = learner.level;
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    learner = {
      name: document.querySelector("#studentName").value.trim(),
      className: document.querySelector("#studentClass").value.trim(),
      no: document.querySelector("#studentNo").value.trim(),
      level: document.querySelector("#studentLevel").value,
      savedAt: new Date().toLocaleString("th-TH"),
    };
    localStorage.setItem("unit4Learner", JSON.stringify(learner));
    renderLearner();
    renderReport();
    refreshPlatformIcons();
  });
}

function renderWorkshop() {
  const list = document.querySelector("#workshopSteps");
  if (!list) return;
  list.innerHTML = workshopItems
    .map((item, index) => {
      const done = completedWorkshops.has(index);
      return `
        <button class="workshop-step ${index === currentWorkshop ? "active" : ""} ${done ? "done" : ""}" type="button" data-workshop="${index}">
          <span>${done ? "✓" : index + 1}</span>
          <strong>${item.title}</strong>
        </button>
      `;
    })
    .join("");

  list.querySelectorAll(".workshop-step").forEach((button) => {
    button.addEventListener("click", () => {
      currentWorkshop = Number(button.dataset.workshop);
      renderWorkshop();
    });
  });

  const item = workshopItems[currentWorkshop];
  const page = String(currentWorkshop + 1).padStart(2, "0");
  document.querySelector("#workshopImage").src = `assets/slides/page-${page}.png`;
  document.querySelector("#workshopImage").alt = `Workshop slide ${currentWorkshop + 1}`;
  document.querySelector("#workshopSlide").textContent = `Slide ${currentWorkshop + 1} / ${workshopItems.length}`;
  document.querySelector("#workshopTitle").textContent = item.title;
  document.querySelector("#workshopGoal").textContent = item.goal;
  document.querySelector("#workshopTask").textContent = item.task;
  updateProgress();
  refreshPlatformIcons();
}

function bindWorkshopControls() {
  const prev = document.querySelector("#prevWorkshop");
  const next = document.querySelector("#nextWorkshop");
  const complete = document.querySelector("#completeWorkshop");
  if (!prev || !next || !complete) return;
  prev.addEventListener("click", () => {
    currentWorkshop = Math.max(0, currentWorkshop - 1);
    renderWorkshop();
  });
  next.addEventListener("click", () => {
    currentWorkshop = Math.min(workshopItems.length - 1, currentWorkshop + 1);
    renderWorkshop();
  });
  complete.addEventListener("click", () => {
    completedWorkshops.add(currentWorkshop);
    localStorage.setItem("unit4CompletedWorkshops", JSON.stringify([...completedWorkshops]));
    renderWorkshop();
  });
}

function normalizeAnswer(value) {
  return value.trim().toLowerCase().replace(/\s+/g, "");
}

function renderPractice() {
  const list = document.querySelector("#practiceList");
  if (!list) return;
  list.innerHTML = practiceItems
    .map(
      (item, index) => `
        <article class="practice-card ${solvedPractice.has(index) ? "solved" : ""}" data-practice="${index}">
          <div>
            <p class="pill">โจทย์ ${index + 1}</p>
            <h3>${item.prompt}</h3>
            <p class="muted">คำใบ้: ${item.hint}</p>
          </div>
          <div class="practice-answer">
            <input type="text" aria-label="คำตอบโจทย์ ${index + 1}" placeholder="พิมพ์คำตอบ" />
            <button class="button small" type="button">ตรวจคำตอบ</button>
          </div>
          <p class="practice-feedback" aria-live="polite"></p>
        </article>
      `,
    )
    .join("");

  list.querySelectorAll(".practice-card").forEach((card) => {
    const index = Number(card.dataset.practice);
    const input = card.querySelector("input");
    const button = card.querySelector("button");
    const feedback = card.querySelector(".practice-feedback");
    button.addEventListener("click", () => {
      const answer = normalizeAnswer(input.value);
      const accepted = practiceItems[index].answer.map(normalizeAnswer);
      if (accepted.includes(answer)) {
        solvedPractice.add(index);
        localStorage.setItem("unit4SolvedPractice", JSON.stringify([...solvedPractice]));
        card.classList.add("solved");
        feedback.textContent = "ถูกต้อง เก็บคะแนนฝึกฝนแล้ว";
      } else {
        feedback.textContent = `ยังไม่ถูก ลองคิดจากคำใบ้: ${practiceItems[index].hint}`;
      }
      updateProgress();
    });
  });
}

function renderAssessment() {
  const list = document.querySelector("#assessmentList");
  if (!list) return;
  list.innerHTML = assessmentItems
    .map(
      (item, index) => `
        <article class="assessment-item">
          <h3>${index + 1}. ${item.question}</h3>
          <div class="choice-list">
            ${item.choices
              .map(
                (choice, choiceIndex) => `
                  <label>
                    <input type="radio" name="assessment-${index}" value="${choiceIndex}" />
                    <span>${choice}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function getAssessmentScore() {
  let score = 0;
  const missed = [];
  assessmentItems.forEach((item, index) => {
    const selected = document.querySelector(`input[name="assessment-${index}"]:checked`);
    if (selected && Number(selected.value) === item.answer) {
      score += 1;
    } else {
      missed.push(item.skill);
    }
  });
  return { score, missed };
}

function getSkillReport(score) {
  if (score >= 9) return { level: "เชี่ยวชาญ", text: "พร้อมต่อยอดไปเรื่อง input(), เงื่อนไข และโจทย์ประยุกต์ที่ซับซ้อนขึ้น" };
  if (score >= 7) return { level: "ทำได้ดี", text: "เข้าใจแกนหลักแล้ว ควรฝึกเขียนโจทย์ประยุกต์เพิ่มอีก 2-3 ข้อ" };
  if (score >= 5) return { level: "กำลังพัฒนา", text: "เริ่มจับหลักได้แล้ว ควรทบทวน type(), การแปลงชนิด และโจทย์เงินทอน" };
  return { level: "เริ่มต้น", text: "ควรกลับไปทำ Workshop ขั้น 2-9 อีกครั้ง แล้วลองรันตัวอย่างใน Python Lab" };
}

function renderReport(scoreData = null) {
  const card = document.querySelector("#reportCard");
  if (!card) return;
  if (!scoreData) {
    card.innerHTML = `<p class="muted">ทำแบบวัดผลเพื่อดูรายงานสรุปคะแนน ระดับทักษะ และคำแนะนำสำหรับฝึกต่อ</p>`;
    return;
  }
  const report = getSkillReport(scoreData.score);
  const missed = [...new Set(scoreData.missed)];
  card.innerHTML = `
    <div class="report-head">
      <div>
        <p class="pill">${learner ? learner.name : "นักเรียน"}</p>
        <h3>ระดับทักษะ: ${report.level}</h3>
      </div>
      <strong>${scoreData.score}/${assessmentItems.length}</strong>
    </div>
    <p>${report.text}</p>
    <div class="report-grid">
      <span>Workshop: ${completedWorkshops.size}/${workshopItems.length}</span>
      <span>โจทย์ฝึก: ${solvedPractice.size}/${practiceItems.length}</span>
      <span>แบบวัดผล: ${scoreData.score}/${assessmentItems.length}</span>
    </div>
    <p class="muted">${missed.length ? `หัวข้อที่ควรทบทวน: ${missed.join(", ")}` : "ทำได้ครบทุกหัวข้อในการประเมินนี้"}</p>
  `;
}

function bindAssessmentControls() {
  const submit = document.querySelector("#submitAssessment");
  const reset = document.querySelector("#resetAssessment");
  if (!submit || !reset) return;
  submit.addEventListener("click", () => {
    if (!learner) {
      document.querySelector("#profile").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const scoreData = getAssessmentScore();
    localStorage.setItem("unit4LastAssessment", JSON.stringify(scoreData));
    renderReport(scoreData);
    updateProgress(scoreData.score);
    document.querySelector("#report").scrollIntoView({ behavior: "smooth" });
  });
  reset.addEventListener("click", () => {
    document.querySelectorAll("#assessmentList input").forEach((input) => {
      input.checked = false;
    });
    localStorage.removeItem("unit4LastAssessment");
    renderReport();
    updateProgress(0);
  });
}

function updateProgress(assessmentScore = null) {
  const savedAssessment = JSON.parse(localStorage.getItem("unit4LastAssessment") || "null");
  const score = assessmentScore ?? savedAssessment?.score ?? 0;
  const level = score ? getSkillReport(score).level : "ยังไม่ประเมิน";
  const setText = (id, text) => {
    const node = document.querySelector(id);
    if (node) node.textContent = text;
  };
  setText("#workshopProgress", `${completedWorkshops.size}/${workshopItems.length}`);
  setText("#practiceProgress", `${solvedPractice.size}/${practiceItems.length}`);
  setText("#assessmentProgress", `${score}/${assessmentItems.length}`);
  setText("#skillLevelText", level);
}

bindProfileForm();
renderLearner();
renderWorkshop();
bindWorkshopControls();
renderPractice();
renderAssessment();
bindAssessmentControls();
updateProgress();

const savedAssessment = JSON.parse(localStorage.getItem("unit4LastAssessment") || "null");
if (savedAssessment) renderReport(savedAssessment);
refreshPlatformIcons();
