// script.js
// ================== CAMPUS TIME PRO – MAIN JS ==================

document.addEventListener("DOMContentLoaded", () => {
  // --------- ELEMENT REFERENCES ---------
  const body = document.body;

  // Top nav / side nav
  const themeToggleBtn = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const sideNav = document.getElementById("sideNav");
  const sideNavBackdrop = document.getElementById("sideNavBackdrop");
  const topNavLinks = document.querySelectorAll(".top-nav-links a");
  const sideNavLinks = document.querySelectorAll(".side-nav a");

  // Profile dropdown
  const profileBtn = document.getElementById("profileBtn");
  const profileDropdown = document.getElementById("profileDropdown");
  const logoutBtn = document.getElementById("logoutBtn");

  // Todo elements
  const todoForm = document.getElementById("todoForm");
  const todoTextInput = document.getElementById("todoText");
  const todoDateInput = document.getElementById("todoDate");
  const todoPrioritySelect = document.getElementById("todoPriority");
  const todoList = document.getElementById("todoList");
  const todoEmpty = document.getElementById("todoEmpty");
  const TODO_STORAGE_KEY = "ctp-todo-items";

  // Resources
  const notesList = document.getElementById("notesList");
  const pyqList = document.getElementById("pyqList");
  const assignList = document.getElementById("assignList");
  const paperList = document.getElementById("paperList");
  const notesTotal = document.getElementById("notesTotal");
  const notesCompleted = document.getElementById("notesCompleted");
  const pyqTotal = document.getElementById("pyqTotal");
  const pyqCompleted = document.getElementById("pyqCompleted");
  const assignTotal = document.getElementById("assignTotal");
  const assignCompleted = document.getElementById("assignCompleted");
  const paperTotal = document.getElementById("paperTotal");
  const paperCompleted = document.getElementById("paperCompleted");

  // Announcements
  const announcementFilter = document.getElementById("announcementFilter");
  const announcementSort = document.getElementById("announcementSort");
  const announcementContainer = document.getElementById("announcementContainer");
  const announcementBanners = announcementContainer
    ? Array.from(announcementContainer.querySelectorAll(".announcement-banner"))
    : [];

  // GPA
  const calcGpaBtn = document.getElementById("calcGpaBtn");
  const gpaResult = document.getElementById("gpaResult");

  // Timers
  const pomodoroDisplay = document.getElementById("pomodoroDisplay");
  const pomodoroStart = document.getElementById("pomodoroStart");
  const pomodoroPause = document.getElementById("pomodoroPause");
  const pomodoroReset = document.getElementById("pomodoroReset");

  const studyMinutesInput = document.getElementById("studyMinutes");
  const studyDisplay = document.getElementById("studyDisplay");
  const studyStart = document.getElementById("studyStart");
  const studyPause = document.getElementById("studyPause");
  const studyReset = document.getElementById("studyReset");

  // Quiz
  const quizSubject = document.getElementById("quizSubject");
  const startQuizBtn = document.getElementById("startQuizBtn");
  const quizContent = document.getElementById("quizContent");
  const checkQuizBtn = document.getElementById("checkQuizBtn");
  const quizScore = document.getElementById("quizScore");

  // Contact form
  const contactForm = document.getElementById("contactForm");
  const contactStatus = document.getElementById("contactStatus");

  // Sections for active nav
  const sections = document.querySelectorAll("main .section");

  // ================== THEME TOGGLE ==================
  const THEME_KEY = "ctp-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      body.classList.add("dark-theme");
      if (themeToggleBtn) {
        themeToggleBtn.textContent = "☀️";
        themeToggleBtn.setAttribute("aria-label", "Switch to light theme");
      }
    } else {
      body.classList.remove("dark-theme");
      if (themeToggleBtn) {
        themeToggleBtn.textContent = "🌙";
        themeToggleBtn.setAttribute("aria-label", "Switch to dark theme");
      }
    }
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    applyTheme(theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = body.classList.contains("dark-theme");
      const newTheme = isDark ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem(THEME_KEY, newTheme);
    });
  }

  initTheme();

  // ================== MOBILE NAV / SIDE NAV ==================
  function openSideNav() {
    if (!sideNav || !sideNavBackdrop) return;
    sideNav.classList.add("open");
    sideNavBackdrop.classList.add("open");
  }

  function closeSideNav() {
    if (!sideNav || !sideNavBackdrop) return;
    sideNav.classList.remove("open");
    sideNavBackdrop.classList.remove("open");
  }

  if (navToggle && sideNav && sideNavBackdrop) {
    navToggle.addEventListener("click", () => {
      if (sideNav.classList.contains("open")) {
        closeSideNav();
      } else {
        openSideNav();
      }
    });

    sideNavBackdrop.addEventListener("click", closeSideNav);

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        closeSideNav();
      }
    });
  }

  // Close side nav on clicking any side nav link (on mobile)
  sideNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        closeSideNav();
      }
    });
  });

  // ================== PROFILE DROPDOWN ==================
  function closeProfileDropdown() {
    if (profileDropdown) {
      profileDropdown.classList.remove("open");
    }
  }

  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (
        profileDropdown.classList.contains("open") &&
        !profileDropdown.contains(e.target) &&
        e.target !== profileBtn
      ) {
        closeProfileDropdown();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeProfileDropdown();
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("Logout successful (demo only – no real auth implemented).");
      closeProfileDropdown();
    });
  }

  // ================== ACTIVE NAV LINK ON SCROLL ==================
  const allNavLinks = [...topNavLinks, ...sideNavLinks];

  function setActiveNav(sectionId) {
    allNavLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${sectionId}`) {
        link.classList.add("nav-active");
      } else {
        link.classList.remove("nav-active");
      }
    });
  }

  function onScrollHighlightNav() {
    let currentSectionId = "home";
    const offset = 120;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      if (window.scrollY + offset >= top) {
        currentSectionId = section.id || currentSectionId;
      }
    });

    setActiveNav(currentSectionId);
  }

  window.addEventListener("scroll", onScrollHighlightNav);
  onScrollHighlightNav();

  // When clicking nav links, also highlight immediately
  allNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href")?.replace("#", "");
      if (targetId) {
        setActiveNav(targetId);
      }
    });
  });

//   // ================== 3D TILT HOVER (INNER CARDS ONLY) ==================
// const TILT_SELECTOR = [
//   ".card",
//   ".dashboard-card",
//   ".announcement-banner",
//   ".resource-stat",
//   ".todo-item",
//   ".analytics-card",
//   ".forum-post",
//   ".features-grid > div",
//   ".timer-display",
//   ".quiz-layout",
//   ".gpa-table",
//   ".contact-form"
// ].join(", ");

// function addTiltEffect(el) {
//   if (!el) return;

//   const MAX_ROTATE = 16;        // tilt angle
//   const MAX_TRANSLATE_Y = 10;   // lift
//   const SCALE = 1.04;           // zoom

//   el.addEventListener("pointermove", (e) => {
//     const rect = el.getBoundingClientRect();
//     const relX = (e.clientX - rect.left) / rect.width - 0.5;
//     const relY = (e.clientY - rect.top) / rect.height - 0.5;

//     const rotateX = relY * -MAX_ROTATE;
//     const rotateY = relX * MAX_ROTATE;

//     el.style.transform =
//       `perspective(850px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ` +
//       `translateY(-${MAX_TRANSLATE_Y}px) scale(${SCALE})`;

//     el.classList.add("hover-active");
//   });

//   el.addEventListener("pointerleave", () => {
//     el.style.transform =
//       "perspective(850px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
//     el.classList.remove("hover-active");
//   });
// }

// document.querySelectorAll(TILT_SELECTOR).forEach(addTiltEffect);

  // ================== TODO LIST ==================
  let todos = [];

  function loadTodos() {
    try {
      const stored = localStorage.getItem(TODO_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          todos = parsed;
        }
      }
    } catch (err) {
      console.error("Failed to load todos:", err);
    }
  }

  function saveTodos() {
    try {
      localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.error("Failed to save todos:", err);
    }
  }

  function formatDate(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return isoString;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function renderTodos() {
    if (!todoList) return;

    todoList.innerHTML = "";
    if (!todos.length) {
      if (todoEmpty) {
        todoEmpty.textContent = "No tasks yet. Add your first task above ✨";
      }
      return;
    }

    if (todoEmpty) {
      todoEmpty.textContent = "";
    }

    // Sort by due date (earliest first) then by priority
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    const sorted = [...todos].sort((a, b) => {
      if (a.date !== b.date) {
        return (a.date || "").localeCompare(b.date || "");
      }
      return (priorityOrder[a.priority] || 99) - (priorityOrder[b.priority] || 99);
    });

    sorted.forEach((todo) => {
      const li = document.createElement("li");
      li.className = "todo-item";
      if (todo.completed) {
        li.classList.add("todo-completed");
      }

      li.innerHTML = `
        <div class="todo-main">
          <input type="checkbox" ${todo.completed ? "checked" : ""} aria-label="Mark task as done">
          <span class="todo-text"></span>
        </div>
        <div class="todo-meta">
          <span class="todo-date">${todo.date ? "Due: " + formatDate(todo.date) : ""}</span>
          <span class="todo-priority ${todo.priority}">${todo.priority}</span>
        </div>
      `;

      const textSpan = li.querySelector(".todo-text");
      if (textSpan) textSpan.textContent = todo.text;

      const checkbox = li.querySelector('input[type="checkbox"]');
      if (checkbox) {
        checkbox.addEventListener("change", () => {
          todo.completed = checkbox.checked;
          if (todo.completed) {
            li.classList.add("todo-completed");
          } else {
            li.classList.remove("todo-completed");
          }
          saveTodos();
        });
      }

      todoList.appendChild(li);
      // Add tilt effect to new items
      addTiltEffect(li);
    });
  }

  if (todoForm && todoTextInput && todoDateInput && todoPrioritySelect) {
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const text = todoTextInput.value.trim();
      const date = todoDateInput.value;
      const priority = todoPrioritySelect.value;

      if (!text || !date || !priority) return;

      const newTodo = {
        id: Date.now(),
        text,
        date,
        priority,
        completed: false,
      };

      todos.push(newTodo);
      saveTodos();

      // Clear inputs
      todoTextInput.value = "";
      todoDateInput.value = "";
      todoPrioritySelect.value = "";

      renderTodos();
    });

    loadTodos();
    renderTodos();
  }

  // ================== RESOURCES DATA & COUNTERS ==================
  const resourcesData = {
    notes: [
      { subject: "Data Structures", detail: "Unit 1 – Arrays & Linked Lists", done: true },
      { subject: "Maths II", detail: "Integration & Differential Equations", done: false },
      { subject: "OS", detail: "Process Management Notes", done: true },
    ],
    pyq: [
      { subject: "DSA", detail: "Mid-Sem PYQ (2023)", done: true },
      { subject: "CN", detail: "End-Sem PYQ (2 sets)", done: false },
    ],
    assignments: [
      { subject: "CN", detail: "Routing Algorithms Sheet", done: false },
      { subject: "OS", detail: "Scheduling Algorithms Lab", done: true },
    ],
    papers: [
      { subject: "DSA", detail: "University Paper 2022", done: true },
      { subject: "Maths II", detail: "University Paper 2021", done: false },
    ],
  };

  function renderResourceList(listEl, items, totalEl, completedEl) {
    if (!listEl || !Array.isArray(items)) return;

    listEl.innerHTML = "";
    let completedCount = 0;

    items.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${item.subject} – ${item.detail}</span>
        <span class="resource-status">${item.done ? "Done ✅" : "Pending"}</span>
      `;
      listEl.appendChild(li);
      if (item.done) completedCount++;
    });

    if (totalEl) totalEl.textContent = items.length.toString();
    if (completedEl) completedEl.textContent = completedCount.toString();
  }

  if (notesList && pyqList && assignList && paperList) {
    renderResourceList(
      notesList,
      resourcesData.notes,
      notesTotal,
      notesCompleted
    );
    renderResourceList(
      pyqList,
      resourcesData.pyq,
      pyqTotal,
      pyqCompleted
    );
    renderResourceList(
      assignList,
      resourcesData.assignments,
      assignTotal,
      assignCompleted
    );
    renderResourceList(
      paperList,
      resourcesData.papers,
      paperTotal,
      paperCompleted
    );
  }

  // ================== ANNOUNCEMENTS FILTER & SORT ==================
  function updateAnnouncements() {
    if (!announcementContainer || !announcementFilter || !announcementSort) return;

    const filterVal = announcementFilter.value; // "all" | "tech" | "sports" | ...
    const sortVal = announcementSort.value; // "date" | "priority"

    const filtered = announcementBanners.filter((banner) => {
      if (filterVal === "all") return true;
      const type = banner.dataset.type || "";
      return type === filterVal;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortVal === "priority") {
        const pa = parseInt(a.dataset.priority || "99", 10);
        const pb = parseInt(b.dataset.priority || "99", 10);
        return pa - pb; // 1 = high, 3 = low
      } else {
        // date sort
        const da = a.dataset.date || "";
        const db = b.dataset.date || "";
        return da.localeCompare(db);
      }
    });

    // Clear container and re-append in correct order (including filtered only)
    announcementContainer.innerHTML = "";
    filtered.forEach((banner) => {
      announcementContainer.appendChild(banner);
    });
  }

  if (announcementFilter && announcementSort) {
    announcementFilter.addEventListener("change", updateAnnouncements);
    announcementSort.addEventListener("change", updateAnnouncements);
    updateAnnouncements();
  }

  // ================== GPA CALCULATOR ==================
  function gradeToPoints(gradeStr) {
    const g = (gradeStr || "").trim().toUpperCase();
    switch (g) {
      case "O":
        return 10;
      case "A":
        return 9;
      case "B":
        return 8;
      case "C":
        return 7;
      case "D":
        return 6;
      case "F":
        return 0;
      default:
        return null;
    }
  }

  if (calcGpaBtn && gpaResult) {
    calcGpaBtn.addEventListener("click", () => {
      const rows = document.querySelectorAll(".gpa-table tbody tr");
      let totalCredits = 0;
      let totalPoints = 0;

      rows.forEach((row) => {
        const inputs = row.querySelectorAll("input");
        if (inputs.length < 3) return;
        const credits = parseFloat(inputs[1].value);
        const grade = inputs[2].value;
        const points = gradeToPoints(grade);

        if (!isNaN(credits) && credits > 0 && points !== null) {
          totalCredits += credits;
          totalPoints += credits * points;
        }
      });

      if (!totalCredits) {
        gpaResult.textContent =
          "Estimated GPA: – (please enter valid credits & grades)";
        gpaResult.classList.remove("gpa-result-highlight");
        return;
      }

      const gpa = (totalPoints / totalCredits).toFixed(2);
      gpaResult.textContent = `Estimated GPA: ${gpa}`;
      gpaResult.classList.add("gpa-result-highlight");

      setTimeout(() => {
        gpaResult.classList.remove("gpa-result-highlight");
      }, 1000);
    });
  }

  // ================== POMODORO TIMER ==================
  let pomodoroSeconds = 25 * 60;
  let pomodoroInterval = null;

  function updatePomodoroDisplay() {
    if (!pomodoroDisplay) return;
    const m = Math.floor(pomodoroSeconds / 60);
    const s = pomodoroSeconds % 60;
    pomodoroDisplay.textContent = `${String(m).padStart(2, "0")}:${String(
      s
    ).padStart(2, "0")}`;
  }

  function startPomodoro() {
    if (!pomodoroDisplay || pomodoroInterval !== null) return;
    pomodoroInterval = setInterval(() => {
      pomodoroSeconds--;
      if (pomodoroSeconds <= 0) {
        pomodoroSeconds = 0;
        clearInterval(pomodoroInterval);
        pomodoroInterval = null;
        alert("Pomodoro session complete! Take a short break. 🎉");
      }
      updatePomodoroDisplay();
    }, 1000);
  }

  function pausePomodoro() {
    if (pomodoroInterval !== null) {
      clearInterval(pomodoroInterval);
      pomodoroInterval = null;
    }
  }

  function resetPomodoro() {
    pausePomodoro();
    pomodoroSeconds = 25 * 60;
    updatePomodoroDisplay();
  }

  if (pomodoroDisplay) updatePomodoroDisplay();
  if (pomodoroStart) pomodoroStart.addEventListener("click", startPomodoro);
  if (pomodoroPause) pomodoroPause.addEventListener("click", pausePomodoro);
  if (pomodoroReset) pomodoroReset.addEventListener("click", resetPomodoro);

  // ================== CUSTOM STUDY TIMER ==================
  let studySeconds =
    (parseInt(studyMinutesInput?.value || "45", 10) || 45) * 60;
  let studyInterval = null;

  function updateStudyDisplay() {
    if (!studyDisplay) return;
    const m = Math.floor(studySeconds / 60);
    const s = studySeconds % 60;
    studyDisplay.textContent = `${String(m).padStart(2, "0")}:${String(
      s
    ).padStart(2, "0")}`;
  }

  function syncStudySecondsFromInput() {
    const minutes = parseInt(studyMinutesInput?.value || "0", 10);
    if (!isNaN(minutes) && minutes > 0) {
      studySeconds = minutes * 60;
    } else {
      studySeconds = 0;
    }
    updateStudyDisplay();
  }

  function startStudy() {
    if (!studyDisplay || studyInterval !== null) return;
    if (studySeconds <= 0) {
      syncStudySecondsFromInput();
    }
    if (studySeconds <= 0) return; // nothing to run

    studyInterval = setInterval(() => {
      studySeconds--;
      if (studySeconds <= 0) {
        studySeconds = 0;
        clearInterval(studyInterval);
        studyInterval = null;
        alert("Study session complete! Great job. 📚");
      }
      updateStudyDisplay();
    }, 1000);
  }

  function pauseStudy() {
    if (studyInterval !== null) {
      clearInterval(studyInterval);
      studyInterval = null;
    }
  }

  function resetStudy() {
    pauseStudy();
    syncStudySecondsFromInput();
  }

  if (studyDisplay) updateStudyDisplay();
  if (studyMinutesInput) {
    studyMinutesInput.addEventListener("change", syncStudySecondsFromInput);
    studyMinutesInput.addEventListener("input", syncStudySecondsFromInput);
  }
  if (studyStart) studyStart.addEventListener("click", startStudy);
  if (studyPause) studyPause.addEventListener("click", pauseStudy);
  if (studyReset) studyReset.addEventListener("click", resetStudy);

  // ================== QUIZ SYSTEM ==================
  const quizBank = {
    DSA: {
      Beginner: [
        {
          q: "Which data structure uses LIFO (Last In First Out)?",
          options: ["Queue", "Stack", "Array", "Linked List"],
          correct: 1,
        },
        {
          q: "What is the worst-case time complexity of linear search?",
          options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
          correct: 2,
        },
      ],
      Intermediate: [
        {
          q: "Time complexity of merge sort in worst case?",
          options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
          correct: 1,
        },
        {
          q: "Which traversal gives sorted order for BST?",
          options: ["Preorder", "Postorder", "Inorder", "Level order"],
          correct: 2,
        },
      ],
      Advanced: [
        {
          q: "Which of the following is NOT a self-balancing BST?",
          options: ["AVL tree", "Red-Black tree", "Splay tree", "Binary Heap"],
          correct: 3,
        },
        {
          q: "Amortized time complexity of push/pop in stack implemented using dynamic array?",
          options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
          correct: 0,
        },
      ],
    },
    Maths: {
      Beginner: [
        {
          q: "Derivative of x² with respect to x is?",
          options: ["x", "2x", "x²", "2"],
          correct: 1,
        },
        {
          q: "Integral of 1/x dx is?",
          options: ["x", "x²/2", "ln|x| + C", "eˣ + C"],
          correct: 2,
        },
      ],
      Intermediate: [
        {
          q: "Laplace transform of 1 is?",
          options: ["1/s", "s", "1", "0"],
          correct: 0,
        },
        {
          q: "If A is an n×n matrix, rank(A) ≤ ?",
          options: ["0", "1", "n", "n²"],
          correct: 2,
        },
      ],
      Advanced: [
        {
          q: "If λ is eigenvalue of matrix A, eigenvalues of kA are:",
          options: ["λ", "kλ", "k²λ", "λ/k"],
          correct: 1,
        },
        {
          q: "Fourier series is used to represent:",
          options: [
            "Only polynomials",
            "Only exponentials",
            "Any periodic function",
            "Only trigonometric functions",
          ],
          correct: 2,
        },
      ],
    },
    CN: {
      Beginner: [
        {
          q: "Which layer does IP address belong to?",
          options: ["Physical", "Data Link", "Network", "Application"],
          correct: 2,
        },
        {
          q: "Full form of TCP?",
          options: [
            "Transmission Control Protocol",
            "Transfer Control Protocol",
            "Total Control Protocol",
            "Transport Central Protocol",
          ],
          correct: 0,
        },
      ],
      Intermediate: [
        {
          q: "Which protocol is used to find MAC address from IP address?",
          options: ["DNS", "ARP", "HTTP", "ICMP"],
          correct: 1,
        },
        {
          q: "Which topology has a single point of failure at central hub?",
          options: ["Bus", "Ring", "Star", "Mesh"],
          correct: 2,
        },
      ],
      Advanced: [
        {
          q: "In subnetting, number of hosts per subnet is given by:",
          options: ["2^n", "2^n - 1", "2^n - 2", "2^(n-1)"],
          correct: 2,
        },
        {
          q: "Which routing algorithm uses the Bellman-Ford algorithm?",
          options: [
            "Link state routing",
            "Distance vector routing",
            "Path vector routing",
            "Flooding",
          ],
          correct: 1,
        },
      ],
    },
    OS: {
      Beginner: [
        {
          q: "Which OS component manages CPU scheduling?",
          options: ["Shell", "Compiler", "Kernel", "File system"],
          correct: 2,
        },
        {
          q: "Which of these is NOT a scheduling algorithm?",
          options: ["FCFS", "SJF", "Round Robin", "RSA"],
          correct: 3,
        },
      ],
      Intermediate: [
        {
          q: "Which of the following is a deadlock avoidance algorithm?",
          options: ["Banker's Algorithm", "Round Robin", "FCFS", "FIFO"],
          correct: 0,
        },
        {
          q: "Thrashing is related to:",
          options: [
            "CPU scheduling",
            "Deadlock",
            "Paging / Memory",
            "File management",
          ],
          correct: 2,
        },
      ],
      Advanced: [
        {
          q: "In demand paging, 'page fault' occurs when:",
          options: [
            "Page is in memory",
            "Page is not in memory",
            "Page is swapped out",
            "TLB is full",
          ],
          correct: 1,
        },
        {
          q: "Which is NOT a page replacement algorithm?",
          options: ["LRU", "FIFO", "Optimal", "CRC"],
          correct: 3,
        },
      ],
    },
  };

  let currentQuizQuestions = [];

  function loadQuiz() {
    if (!quizSubject || !quizContent || !quizScore) return;

    const subject = quizSubject.value;
    const difficulty = (
      document.querySelector('input[name="difficulty"]:checked') || {
        value: "Beginner",
      }
    ).value;

    const subjectBank = quizBank[subject];
    if (!subjectBank || !subjectBank[difficulty]) {
      quizContent.innerHTML =
        '<p class="mini-tagline">No questions found for this combination.</p>';
      currentQuizQuestions = [];
      quizScore.textContent = "";
      return;
    }

    currentQuizQuestions = subjectBank[difficulty];
    quizScore.textContent = "";

    let html = "";
    currentQuizQuestions.forEach((qObj, index) => {
      html += `
        <div class="quiz-question">
          <p><strong>Q${index + 1}.</strong> ${qObj.q}</p>
          <ul class="quiz-options">
            ${qObj.options
              .map(
                (opt, optIndex) => `
              <li>
                <label>
                  <input type="radio" name="q${index}" value="${optIndex}">
                  ${opt}
                </label>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      `;
    });

    quizContent.innerHTML = html;
  }

  function checkQuizScore() {
    if (!quizScore) return;
    if (!currentQuizQuestions.length) {
      quizScore.textContent =
        "Load a quiz first before checking the score.";
      return;
    }

    let score = 0;

    currentQuizQuestions.forEach((qObj, index) => {
      const chosen = document.querySelector(
        `input[name="q${index}"]:checked`
      );
      if (!chosen) return;
      const chosenIndex = parseInt(chosen.value, 10);
      if (chosenIndex === qObj.correct) score++;
    });

    quizScore.textContent = `Your score: ${score} / ${currentQuizQuestions.length}`;
  }

  if (startQuizBtn) startQuizBtn.addEventListener("click", loadQuiz);
  if (checkQuizBtn) checkQuizBtn.addEventListener("click", checkQuizScore);

  // ================== CONTACT FORM (DEMO) ==================
  if (contactForm && contactStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName")?.value || "Student";

      contactStatus.textContent = `Thanks, ${name}! Your message has been recorded (demo).`;
      contactStatus.style.color = "#15803d";

      contactForm.reset();
    });
  }

  // ================== DOUBT FORMS (DEMO) ==================
  const doubtForms = document.querySelectorAll(".doubt-form");
  doubtForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your doubt has been submitted to the dashboard (demo).");
      form.reset();
    });
  });
});
