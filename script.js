/* ============================================================
   PERSONAL PORTFOLIO — script.js
   Sirf JavaScript yahan hai.

   ✏️  APNA DATA YAHAN BHARO:
   1. skillsData     → apni skills aur percentage
   2. projectsData   → apne projects
   3. edu1/edu2/edu3 → apni education
   4. rolesQueue     → hero mein typing text
   ============================================================ */


/* ═══════════════════════════════════════════════════
   DATA STRUCTURE 1: OBJECT (HashMap)
   Skills section ke liye — category: [skills array]
   
   👇 Apni skills aur % yahan change karo
   ═══════════════════════════════════════════════════ */
const skillsData = {
  "Frontend": [
    { name: "HTML5",        pct: 90 },
    { name: "CSS3",         pct: 85 },
    { name: "JavaScript",   pct: 75 },
    { name: "Bootstrap",    pct: 80 },
  ],
  "Backend": [
    { name: "Python",       pct: 70 },
    { name: "PHP",          pct: 60 },
    { name: "MySQL",        pct: 75 },
    { name: "Node.js",      pct: 50 },
  ],
  "Tools": [
    { name: "Git & GitHub",   pct: 80 },
    { name: "VS Code",        pct: 95 },
    { name: "Figma",          pct: 60 },
    { name: "Linux Terminal", pct: 55 },
  ]
  // Nayi category add karni ho toh:
  // "DSA": [
  //   { name: "Arrays", pct: 70 },
  //   { name: "Linked List", pct: 60 },
  // ]
};


/* ═══════════════════════════════════════════════════
   DATA STRUCTURE 2: ARRAY OF OBJECTS
   Projects section ke liye
   
   👇 Apne projects yahan add/edit karo
   ═══════════════════════════════════════════════════ */
const projectsData = [
  {
    title: "Personal Portfolio",
    desc: "A responsive personal portfolio website built with HTML, CSS, and JavaScript. Features smooth animations and dark theme.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",      // Web / App / API — filter mein use hota hai
    icon: "🌐",
    demo: "index.html",            // 👈 apna live link yahan
    code: "#"             // 👈 apna GitHub link yahan
  },
  {
    title: "Student Result System",
    desc: "A PHP & MySQL based web application to manage and display student exam results with admin panel.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    category: "Web",
    icon: "📊",
    demo: "studentrecord/stu.html",
    code: "#"
  },
  {
    title: "Calculator App",
    desc: "A fully functional calculator app with basic and scientific modes, built with vanilla JavaScript.",
    tech: ["JavaScript", "CSS"],
    category: "App",
    icon: "🔢",
    demo: "calculator/Calculator.html",
    code: "#"
  },
  {
    title: "Todo List App",
    desc: "A task management app using localStorage to save tasks between sessions. Includes priority levels.",
    tech: ["JavaScript", "HTML", "CSS"],
    category: "App",
    icon: "✅",
    demo: "todo/todo.html",
    code: "#"
  },
  {
    title: "Weather App",
    desc: "Fetches real-time weather data using OpenWeatherMap API. Shows temperature, humidity, conditions.",
    tech: ["JavaScript", "API", "CSS"],
    category: "API",
    icon: "🌤️",
    demo: "weather/weather.html",
    code: "#"
  },
  {
    title: "BCA Notes Website",
    desc: "A website to share BCA study notes and resources with fellow students. Built using Bootstrap.",
    tech: ["HTML", "Bootstrap", "CSS"],
    category: "Web",
    icon: "📚",
    demo: "#",
    code: "#"
  }
  // Naya project add karna ho toh:
  // {
  //   title: "Mera Naya Project",
  //   desc: "Description yahan",
  //   tech: ["HTML", "CSS"],
  //   category: "Web",
  //   icon: "🚀",
  //   demo: "#",
  //   code: "#"
  // }
];


/* ═══════════════════════════════════════════════════
   DATA STRUCTURE 3: LINKED LIST
   Education Timeline ke liye
   Har node mein .next property hai jo next node ko point karti hai
   
   👇 Apni education yahan change karo
   ═══════════════════════════════════════════════════ */

// Node banane ka function
function createNode(data) {
  return { data: data, next: null };
}

// 3 nodes banao — apni education ke hisaab se edit karo
const edu1 = createNode({
  date: "2025 — 2028 Present",
  title: "Bachelor of Computer Applications (BCA)",
  org: "The Bhopal School Of Social Science, Bhopal Madhyapradesh",         // 👈 change karo
  desc: "Currently in 2nd semester. Studying Data Structures, Web Development, DBMS, Operating Systems, and Programming in C & Python.",
  badge: "Current",
  current: true
});

const edu2 = createNode({
  date: "2024 — 2025",
  title: "Higher Secondary (12th)",
  org: "New Shanti Niketan School Vidisha M.P",                           // 👈 change karo
  desc: "Commerce stream, Completed with distinction, Scored 83.8%.",
  badge: "Completed",
  current: false
});

const edu3 = createNode({
  date: "2022 — 2023",
  title: "Secondary School (10th)",
  org: "Sankalp Public School Bhopal M.P",                           // 👈 change karo
  desc: "Developed early interest in computers and programming.",
  badge: "Completed",
  current: false
});

// Nodes ko link karo (Linked List banao)
edu1.next = edu2;   // edu1 → edu2
edu2.next = edu3;   // edu2 → edu3
edu3.next = null;   // edu3 → end (list khatam)


/* ═══════════════════════════════════════════════════
   DATA STRUCTURE 4: STACK
   Project filter history ke liye (undo feature)
   ═══════════════════════════════════════════════════ */
const filterStack = [];


/* ═══════════════════════════════════════════════════
   DATA STRUCTURE 5: QUEUE
   Hero typing animation ke liye
   
   👇 Jo text type hona chahiye woh yahan likho
   ═══════════════════════════════════════════════════ */
const rolesQueue = [
  "Web Developer",
  "BCA Student",
  "Problem Solver",
  "UI Enthusiast",
  "Artificial Intelligent",
  "Vibe Coder",
  "JavaScript Lover"
];


/* ═══════════════════════════════════════════════════
   SKILLS BUILD — skillsData Object se tabs + bars banao
   ═══════════════════════════════════════════════════ */
function buildSkills() {
  const tabsEl   = document.getElementById('skillsTabs');
  const panelsEl = document.getElementById('skillsPanels');
  const categories = Object.keys(skillsData); // Object ki saari keys lao

  categories.forEach((cat, i) => {
    // Tab button banao
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = cat;
    btn.onclick = () => switchTab(cat);
    tabsEl.appendChild(btn);

    // Panel banao
    const panel = document.createElement('div');
    panel.className = 'skills-panel' + (i === 0 ? ' active' : '');
    panel.id = 'panel-' + cat;

    const list = document.createElement('div');
    list.className = 'skills-list';

    // Har skill ke liye bar banao
    skillsData[cat].forEach(skill => {
      list.innerHTML += `
        <div class="skill-row">
          <div class="skill-info">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-pct">${skill.pct}%</span>
          </div>
          <div class="skill-bar-bg">
            <div class="skill-bar-fill" data-width="${skill.pct}"></div>
          </div>
        </div>`;
    });

    panel.appendChild(list);
    panelsEl.appendChild(panel);
  });

  animateBars();
}

function switchTab(cat) {
  document.querySelectorAll('.tab-btn').forEach(b =>
    b.classList.toggle('active', b.textContent === cat));
  document.querySelectorAll('.skills-panel').forEach(p =>
    p.classList.toggle('active', p.id === 'panel-' + cat));
  animateBars();
}

function animateBars() {
  setTimeout(() => {
    document.querySelectorAll('.skills-panel.active .skill-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 80);
}


/* ═══════════════════════════════════════════════════
   PROJECTS BUILD — projectsData Array se cards banao
   ═══════════════════════════════════════════════════ */
function buildProjects() {
  const grid   = document.getElementById('projectsGrid');
  const filter = document.getElementById('projectsFilter');

  // Set data structure — unique categories nikalo
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  // Filter buttons banao
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
    btn.textContent = cat;
    btn.onclick = () => filterProjects(cat);
    filter.appendChild(btn);
  });

  // Project cards banao
  projectsData.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.dataset.category = proj.category;
    card.innerHTML = `
      <span class="project-icon">${proj.icon}</span>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-tech">
        ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${proj.demo}" class="project-link">
          Live Demo <span class="arrow">↗</span>
        </a>
        <a href="${proj.code}" class="project-link">
          Source Code <span class="arrow">↗</span>
        </a>
      </div>`;
    grid.appendChild(card);
  });
}

function filterProjects(cat) {
  filterStack.push(cat); // Stack mein push karo

  document.querySelectorAll('.filter-btn').forEach(b =>
    b.classList.toggle('active', b.textContent === cat));

  document.querySelectorAll('.project-card').forEach(card => {
    const show = cat === 'All' || card.dataset.category === cat;
    card.classList.toggle('hidden', !show);
  });
}


/* ═══════════════════════════════════════════════════
   TIMELINE BUILD — Linked List traverse karke banao
   ═══════════════════════════════════════════════════ */
function buildTimeline() {
  const container = document.getElementById('timeline');
  let current = edu1; // head se shuru karo

  // Linked list traverse karo — null milne tak
  while (current !== null) {
    const d = current.data;
    const item = document.createElement('div');
    item.className = 'timeline-item' + (d.current ? ' current' : '');
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-date">${d.date}</div>
      <h3 class="timeline-title">${d.title}</h3>
      <div class="timeline-org">${d.org}</div>
      <p class="timeline-desc">${d.desc}</p>
      <span class="timeline-badge">${d.badge}</span>`;
    container.appendChild(item);
    current = current.next; // next node pe jao
  }
}


/* ═══════════════════════════════════════════════════
   TYPING ANIMATION — rolesQueue se text type karo
   ═══════════════════════════════════════════════════ */
let roleIndex  = 0;
let charIndex  = 0;
let isDeleting = false;
const typedEl  = document.getElementById('typed');

function type() {
  const current = rolesQueue[roleIndex % rolesQueue.length];
  const speed   = isDeleting ? 60 : 110;

  if (!isDeleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex++;
    }
  }
  setTimeout(type, speed);
}


/* ═══════════════════════════════════════════════════
   SCROLL REVEAL — IntersectionObserver
   ═══════════════════════════════════════════════════ */
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.closest('#skills')) animateBars();
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


/* ═══════════════════════════════════════════════════
   NAVBAR — scroll pe class add karo
   ═══════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});


/* ═══════════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════════ */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
});
document.addEventListener('mousedown', () =>
  cursor.style.transform = 'translate(-50%,-50%) scale(1.8)');
document.addEventListener('mouseup', () =>
  cursor.style.transform = 'translate(-50%,-50%) scale(1)');


/* ═══════════════════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════════════════ */
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () =>
    document.getElementById('navLinks').classList.remove('open')));


/* ═══════════════════════════════════════════════════
   CONTACT FORM
   ═══════════════════════════════════════════════════ */
function submitForm() {
  const name  = document.getElementById('formName').value.trim();
  const email = document.getElementById('formEmail').value.trim();
  const msg   = document.getElementById('formMsg').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in all fields!');
    return;
  }
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}


/* ═══════════════════════════════════════════════════
   INIT — page load hone par sab kuch chalao
   ═══════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  buildSkills();    // Skills banao
  buildProjects();  // Projects banao
  buildTimeline();  // Education timeline banao
  setupReveal();    // Scroll animations set karo
  type();           // Typing effect shuru karo
});
