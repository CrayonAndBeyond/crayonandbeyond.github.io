// Language translations
const translations = {
  en: {
    projects: [
      {
        id: "alphabet",
        title: "Learning letters",
        description:
          "Combine learning and creativity with this colorful alphabet activity book! Each page features a large letter surrounded by illustrations of words beginning with that letter, ready for your child to color. A fun, interactive way to master the alphabet while developing fine motor skills and building vocabulary.",
        cover: "img/alphabet-cover.jpg",
        previewTitle: "Learning letters - Preview",
        images: ["img/alphabet-1.jpg", "img/alphabet-2.jpg"],
        previewDescription: `
            <p>Discover an engaging way to introduce your child to the alphabet. This interactive coloring activity book combines creative fun with early literacy learning. Each page features a bold letter in the center, surrounded by colorful illustrations of words that start with that letter. Perfect for children to color, learn, and explore new vocabulary all at once.</p>
            <p>Why kids love it:</p>
            <ul>
              <li>Helps reinforce letter recognition and phonics</li>
              <li>Encourages fine motor skill development through coloring</li>
              <li>Makes learning the alphabet fun and interactive</li>
              <li>Ideal for preschool and early elementary ages</li>
            </ul>
          `,
      },
      {
        id: "math",
        title: "Learning numbers",
        description:
          "Explore numbers in a fun, interactive way with this engaging coloring activity book. Each page is packed with multiple learning activities designed to build number recognition and counting skills. Each page offers a variety of engaging activities, all designed for coloring and making learning numbers an adventure!",
        cover: "img/numbers-cover.jpg",
        previewTitle: "Learning numbers - Preview",
        images: ["img/numbers-1.jpg", "img/numbers-2.jpg"],
        previewDescription: `
            <p>Children will:</p>
            <ul>
              <li>Spot & Circle - Find the correct number hidden among other numbers on the page</li>
              <li>Trace & Learn - Practice writing numbers with guided tracing exercises, seeing both the numeral and its written word form</li>
              <li>Count & Color - Complete fun counting challenges like "How many butterflies?" and matching activities where they identify objects that match each number</li>
              <li>Color & Create - Bring every page to life with colors</li>
            </ul>
          `,
      },
      {
        id: "roadFun",
        title: "Busy Book On-The-Go!",
        description:
          "Keep your kids entertained anywhere with this compact, printable activity book, perfect for travel, waiting rooms, or car rides. Packed with engaging brain-teasing activities in a small format that's easy to carry and print.",
        cover: "img/roadFun-cover.jpg",
        previewTitle: "Busy Book On-The-Go! - Preview",
        images: ["img/roadFun-1.jpg", "img/roadFun-2.jpg"],
        previewDescription: `
            <p>Lightweight, portable, and endlessly entertaining, your secret weapon for keeping kids busy on the go!</p>
            <p>Activities include:</p>
            <ul>
              <li>Matching - Associate and match colors to objects and patterns</li>
              <li>Concept Pairing - Connect related concepts and ideas together</li>
              <li>Shadow Matching - Find and match objects to their correct shadows</li>
              <li>Spot the Odd One Out - Identify the intruder (the object that doesn't belong in the group)</li>
              <li>Habitat Matching - Place animals in their natural environments</li>
            </ul>
            <p>Why parents love it:</p>
            <ul>
              <li>Compact size perfect for travel, restaurants, and waiting areas</li>
              <li>Easy to print at home, no special materials needed</li>
              <li>Keeps kids focused and engaged for hours</li>
              <li>Develops critical thinking and observation skills</li>
              <li>Screen-free entertainment</li>
            </ul>
          `,
      },
      {
        id: "backpackFun",
        title: "Trace & Learn Activity Book",
        description:
          "Develop essential pre-writing skills with this engaging tracing activity book. Perfect for building fine motor control, hand-eye coordination, and confidence before kids begin writing. Each page offers a variety of tracing challenges to keep learning fun and varied.",
        cover: "img/backpackFun-cover.jpg",
        previewTitle: "Trace & Learn Activity Book - Preview",
        images: ["img/backpackFun-1.jpg", "img/backpackFun-2.jpg"],
        previewDescription: `
            <p>Every page is thoughtfully designed to make tracing an adventure, not a chore. Watch your child's confidence and skills grow with every completed page!</p>
            <p>Activities include:</p>
            <ul>
              <li>Tracing - Follow different types of lines (straight, wavy, zigzag, curved) to build pen control</li>
              <li>Shape & Pattern Tracing - Trace basic shapes and decorative patterns to develop precision</li>
              <li>Dot-to-Dot Connections - Connect numbered and non-numbered dots to reveal fun pictures</li>
              <li>Number Tracing - Practice writing numbers with guided dotted lines and visual guides</li>
              <li>Letter Tracing - Master letter formation with step-by-step tracing exercises</li>
            </ul>
            <p>Why kids love it:</p>
            <ul>
              <li>Builds confidence and independence in pre-writing skills</li>
              <li>Makes learning fun and interactive through varied activities</li>
              <li>Develops hand strength and control needed for writing</li>
              <li>Perfect for preschool and early elementary ages</li>
            </ul>
          `,
      },
      {
        id: "routine",
        title: "Routine board",
        description:
          "Make mornings and bedtimes easier with this interactive routine board designed to help children build healthy habits and independence. Each board features colorful illustrations paired with clear text for every daily task, creating a visual checklist that kids can follow on their own.",
        cover: "img/routine-cover.jpg",
        previewTitle: "Routine board - Preview",
        images: ["img/routine-1.jpg", "img/routine-2.jpg"],
        previewDescription: `
            <p>Transform chaotic mornings and bedtimes into smooth, stress-free routines—one checkmark at a time!</p>
            <p>How it works:</p>
            <ul>
              <li>Visual & Text Cues - Each activity is represented with an engaging image and simple text (brush teeth, get dressed, eat etc.)</li>
              <li>Track Progress - Kids mark off each task as they complete it, building a sense of accomplishment</li>
              <li>Morning & Night Versions - Separate boards for different routines throughout the day</li>
              <li>Reusable Design - Perfect for laminating or placing in a frame with dry-erase markers</li>
            </ul>
            <p>Why parents love it:</p>
            <ul>
              <li>Reduces morning and bedtime struggles by giving kids clear expectations</li>
              <li>Builds independence and responsibility in young children</li>
              <li>Visual format is perfect for pre-readers and early readers</li>
              <li>Creates consistent routines that help kids feel secure and confident</li>
              <li>Makes daily tasks fun instead of frustrating</li>
            </ul>
            <p>Perfect for:</p>
            <ul>
              <li>Toddlers and preschoolers learning self-care routines</li>
              <li>Reducing daily power struggles</li>
              <li>Building time management skills early</li>
              <li>Creating structure in busy family mornings and evenings</li>
            </ul>
          `,
      },
      {
        id: "cards",
        title: "Activity Cards - 56 Fun Challenges!",
        description:
          "Activity cards with the theme: Holiday and Travel. Transform travel time and vacations into exciting learning adventures with this set of 56 engaging activity cards. Perfect for road trips, flights, hotel rooms, or exploring new destinations, these cards keep kids entertained while learning through play.",
        cover: "img/cards.jpg",
        previewTitle: "Activity cards - Preview",
        images: ["img/cards-1.jpg", "img/cards-2.jpg"],
        previewDescription: `
            <p>There are 6 Activity Categories:</p>
            <ul>
              <li>🔍 Observation & Discovery Activitie</li>
              <li>🎨 Creative Paper Activitie</li>
              <li>🎵 Musical & Rhythm Activitie</li>
              <li>📚 Simple Educational Activities</li>
              <li>🎭 Role-Play Activities</li>
              <li>👐 Sensory Activities</li>
            </ul>
            <p>Why families love these cards:</p>
            <ul>
              <li>56 different activities mean endless entertainment</li>
              <li>Compact and portable—perfect for travel</li>
              <li>No screens required—encourage active engagement</li>
              <li>Builds observation skills, creativity, and imagination</li>
              <li>Works in multiple settings: car, plane, hotel, outdoors</li>
            </ul>
            <p>Perfect for:</p>
            <ul>
              <li>Road trips and long car ridess</li>
              <li>Airplane travel and airport waiting</li>
              <li>Hotel room entertainment</li>
              <li>Beach and outdoor adventures</li>
              <li>Keeping kids engaged while exploring new places</li>
            </ul>
          `,
      },
    ],
  },
  ro: {
    projects: [
      {
        id: "alphabet",
        title: "Colorăm și învățăm alfabetul",
        description:
          "Combină învățarea și creativitatea prin această carte de colorat alfabetul! Fiecare pagină conține o literă mare înconjurată de ilustrații care încep cu acea literă, pentru ca micuțul tău să le coloreze. O modalitate distractivă și interactivă de a stăpâni alfabetul dezvoltând abilitățile motrice fine și vocabularul.",
        cover: "img/alphabet-cover.jpg",
        previewTitle: "Colorăm și învățăm alfabetul - Previzualizare",
        images: ["img/alphabet-1.jpg", "img/alphabet-2.jpg"],
        previewDescription: `
            <p>Descoperă o modalitate captivantă de a-l introduce pe copilul tău în lumea literelor. Această carte de colorat combină distracția cu învățarea timpurie a literelor. Perfectă pentru copii să coloreze și să învețe cuvinte noi.</p>
            <p>De ce îi atrage pe copii:</p>
            <ul>
              <li>Ajută la consolidarea recunoașterii literelor și a fonicii</li>
              <li>Încurajează dezvoltarea abilităților motrice fine prin colorare</li>
              <li>Face învățarea alfabetului distractivă și interactivă</li>
              <li>Ideal pentru preșcolari și clasele primare</li>
            </ul>
          `,
      },
      {
        id: "math",
        title: "Colorăm și învățăm numerele",
        description:
          "Explorează lumea numerelelor într-un mod distractiv și interactiv cu această carte de colorat captivantă. Fiecare pagină este plină cu multiple activități de învățare concepute pentru a dezvolta recunoașterea numerelor și abilitățile de numărare. Fiecare pagină oferă o varietate de activități captivante, toate concepute pentru colorat și pentru a face învățarea numerelor o aventură!",
        cover: "img/numbers-cover.jpg",
        previewTitle: "Colorăm și învățăm numerele - Previzualizare",
        images: ["img/numbers-1.jpg", "img/numbers-2.jpg"],
        previewDescription: `
            <p>Activități:</p>
            <ul>
              <li>Găsește și Încercuiește - Găsește numărul corect ascuns printre alte numere pe pagină</li>
              <li>Trasează și Învață - Exersează scrierea numerelor cu exerciții de trasare, vizualizând atât cifra cât și forma sa scrisă</li>
              <li>Numără și Colorează - Completează provocări distractive de numărare precum "Câți fluturi sunt?" și activități de potrivire unde identifică obiecte care se potrivesc cu fiecare număr</li>
              <li>Colorează și Creează - Dă viață fiecărei pagini prin culori</li>
            </ul>
          `,
      },
      {
        id: "roadFun",
        title: "Pe drum cu distracția",
        description:
          "Ține copiii ocupați oriunde cu această carte compactă de activități, perfectă pentru călătorii, săli de așteptare sau călătorii cu mașina. Plină cu activități captivante de antrenament al minții într-un format mic, ușor de transportat și de printat.",
        cover: "img/roadFun-cover.jpg",
        previewTitle: "Pe drum cu distracția - Previzualizare",
        images: ["img/roadFun-1.jpg", "img/roadFun-2.jpg"],
        previewDescription: `
            <p>Ușoară, portabilă și distractivă, arma ta secretă pentru a ține copiii ocupați în deplasare!</p>
            <p>Activitățile includ:</p>
            <ul>
              <li>Potrivire - Asociază și potrivește culorile cu obiecte</li>
              <li>Asociază conceptele - Conectează concepte și idei înrudite</li>
              <li>Potrivire de umbre - Găsește și potrivește obiectele cu umbrele lor</li>
              <li>Găsește intrusul - Identifică intrusul (obiectul care nu aparține grupului)</li>
              <li>Potrivește habitatul - Plasează animalele în mediile lor naturale</li>
            </ul>
            <p>Potrivită pentru:</p>
            <ul>
              <li>Dimensiune compactă perfectă pentru călătorii, restaurante și săli de așteptare</li>
              <li>Ușor de printat acasă, fără materiale speciale necesare</li>
              <li>Ține copiii concentrați și implicați ore întregi</li>
              <li>Dezvoltă gândirea critică și abilitățile de observare</li>
              <li>Divertisment fără ecrane</li>
            </ul>
          `,
      },
      {
        id: "backpackFun",
        title: "Distracție în rucsac",
        description:
          "Dezvoltă abilități esențiale pentru a învăța scrisul cu această carte captivantă de trasare. Perfectă pentru dezvoltarea controlului, motricității fine și coordonarea mână-ochi. Fiecare pagină oferă o varietate de provocări de trasare pentru o învățare distractivă și variată.",
        cover: "img/backpackFun-cover.jpg",
        previewTitle: "Distracție în rucsac - Previzualizare",
        images: ["img/backpackFun-1.jpg", "img/backpackFun-2.jpg"],
        previewDescription: `
            <p>Fiecare pagină este concepută cu grijă pentru a face trasarea o aventură, nu o corvoadă. Urmărește cum încrederea și abilitățile copilului tău cresc cu fiecare pagină completată!</p>
            <p>Activitățile includ:</p>
            <ul>
              <li>Trasare - Urmărește diferite tipuri de linii (drepte, ondulate, în zigzag, curbe) pentru a dezvolta controlul stiloului</li>
              <li>Trasare Forme și Modele - Trasează forme de bază și modele decorative pentru a dezvolta precizia</li>
              <li>Conexiuni Punct-la-Punct - Conectează puncte numerotate pentru a dezvălui imagini distractive</li>
              <li>Trasare Numere și Litere - Exersează scrierea numerelor și literelor pe linii punctate</li>
            </ul>
            <p>De ce iubesc copiii:</p>
            <ul>
              <li>Construiește încrederea și independența în abilitățile de pre-scriere</li>
              <li>Face învățarea distractivă și interactivă prin activități variate</li>
              <li>Dezvoltă forța și controlul mâinii necesare pentru scriere</li>
              <li>Perfect pentru preșcolari și clasele primare</li>
            </ul>
          `,
      },
      {
        id: "routine",
        title: "Panou rutină",
        description:
          "Fă rutina de dimineață și seară mai ușoare cu acest panou interactiv de rutină conceput pentru a ajuta copiii să dezvolte obiceiuri sănătoase și independență. Fiecare panou prezintă ilustrații colorate cu text clar pentru fiecare sarcină zilnică, creând o listă de verificare vizuală pe care copiii o pot urma singuri.",
        cover: "img/routine-cover.jpg",
        previewTitle: "Panou rutină - Previzualizare",
        images: ["img/routine-1.jpg", "img/routine-2.jpg"],
        previewDescription: `
            <p>Transformă diminețile și serile haotice în rutine liniștite și fără stres!</p>
            <p>Cum funcționează:</p>
            <ul>
              <li>Indicii Vizuale și Textuale - Fiecare activitate este reprezentată cu o imagine captivantă și text simplu (spală dinții, îmbracă-te, mănâncă etc.)</li>
              <li>Urmărește Progresul - Copiii bifează fiecare sarcină pe măsură ce o completează, construind un sentiment de realizare</li>
              <li>Versiuni Dimineață și Seară - Tablouri separate pentru diferitele rutine din zi</li>
              <li>Design Reutilizabil - Perfect pentru folosit în format digital sau pentru laminat și folosit cu markere sau îndoit și prins cu scai</li>
            </ul>
            <p>Perfect pentru:</p>
            <ul>
              <li>Copii mici și preșcolari care învață rutine de îngrijire personală</li>
              <li>A transforma sarcinile zilnice din frustrante în a fi distractive</li>
              <li>Construirea abilităților de management al timpului</li>
              <li>Crearea unei structuri în diminețile și serile aglomerate în familie</li>
              <li>Construirea independenței și responsabilităților</li>
            </ul>
          `,
      },
      {
        id: "cards",
        title: "Carduri de Activități - 56 Provocări Distractive!",
        description:
          "Carduri de activități cu tema: Vacanță și Călătorie. Transformă timpul de deplasare și vacanțele în aventuri de învățare captivante cu acest set de 56 de carduri de activități. Perfecte pentru drumuri lungi cu mașina, zboruri, camere de hotel sau explorarea unor destinații noi, aceste carduri țin copiii ocupați în timp ce învață prin joc.",
        cover: "img/cards.jpg",
        previewTitle: "Carduri de activități - Previzualizare",
        images: ["img/cards-1.jpg", "img/cards-2.jpg"],
        previewDescription: `
            <p>Există 6 Categorii de Activități:</p>
            <ul>
              <li>🔍 Activități de Observaree și Descoperire</li>
              <li>🎨 Activități Creative pe Hârtie</li>
              <li>🎵 Activități Muzicale și Ritmice</li>
              <li>📚 Activități Educaționale Simple</li>
              <li>🎭 Activități de Joc de Rol</li>
              <li>👐 Activități Senzoriale</li>
            </ul>
            <p>De ce familiile adoră aceste carduri:</p>
            <ul>
              <li>56 de activități diferite înseamnă divertisment nesfârșit</li>
              <li>Compacte și portabile, perfecte pentru călătorie</li>
              <li>Fără ecrane</li>
              <li>Dezvoltă abilitățile de observare, creativitate și imaginație</li>
              <li>Funcționează oriunde: mașină, avion, hotel, în aer liber</li>
            </ul>
            <p>Perfect pentru:</p>
            <ul>
              <li>Drumuri lungi cu mașina și deplasări</li>
              <li>Călătorii cu avionul și așteptare în aeroport</li>
              <li>Divertisment în camerele de hotel</li>
              <li>Aventuri la plajă și în aer liber</li>
              <li>A ține copiii implicați în timp ce explorează locuri noi</li>
            </ul>
          `,
      },
    ],
  },
};

// Current language
let currentLang = "en";

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProjects(); // Render projects first
  initLanguageSwitcher(); // Then init language switcher
  initSmoothScroll(); // Then init smooth scroll
  initIntersectionObserver();
  initBurgerMenu();
  initHeaderScroll();
});

// Language Switcher
function initLanguageSwitcher() {
  const attachLanguageListeners = () => {
    const langButtons = document.querySelectorAll(".lang-btn");

    langButtons.forEach((btn) => {
      // Remove old listeners by cloning
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
    });

    // Attach new listeners
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const lang = btn.dataset.lang;
        if (lang !== currentLang) {
          currentLang = lang;
          updateLanguage();

          // Update active state for all buttons
          document
            .querySelectorAll(".lang-btn")
            .forEach((b) => b.classList.remove("active"));
          document
            .querySelectorAll(`[data-lang="${lang}"]`)
            .forEach((b) => b.classList.add("active"));
        }
      });
    });
  };

  attachLanguageListeners();
}

function updateLanguage() {
  const activePreview = document.querySelector(".project-card.active");
  const activeProjectId = activePreview ? activePreview.dataset.project : null;

  document.querySelectorAll("[data-en]").forEach((el) => {
    const text = el.dataset[currentLang];
    if (text) {
      el.textContent = text;
    }
  });

  document.documentElement.lang = currentLang;

  renderProjects();

  if (activeProjectId) {
    showPreview(activeProjectId);
  }
}

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  const projects = translations[currentLang].projects;

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
      <div class="project-card" data-project="${
        project.id
      }" onclick="showPreview('${project.id}')">
        <div class="project-image">
          <img src="${project.cover}" alt="${project.title}" />
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        
        <div class="project-preview" id="preview-${project.id}">
          <div class="preview-header">
            <h3 class="preview-title">${project.previewTitle}</h3>
            <button class="close-preview" onclick="event.stopPropagation(); closePreview('${
              project.id
            }')">
              ${currentLang === "en" ? "Close" : "Închide"}
            </button>
          </div>
          <div class="preview-images">
            ${project.images
              .map(
                (img) => `
              <div class="preview-image">
                <img src="${img}" alt="${project.title}" />
              </div>
            `
              )
              .join("")}
          </div>
          <div class="preview-description">
            ${project.previewDescription}
          </div>
          <div class="preview-footer">
            <button class="close-preview-bottom" onclick="event.stopPropagation(); closePreview('${
              project.id
            }')">
              ${currentLang === "en" ? "Close" : "Închide"}
            </button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Project Preview Functions
function showPreview(projectId) {
  const projectsGrid = document.getElementById("projectsGrid");
  const projectCard = document.querySelector(`[data-project="${projectId}"]`);
  const preview = document.getElementById(`preview-${projectId}`);

  // Hide all other cards and show only the selected one
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.remove("active");
  });

  projectCard.classList.add("active");
  projectsGrid.classList.add("preview-mode");

  // Show the preview
  document.querySelectorAll(".project-preview").forEach((p) => {
    p.classList.remove("active");
  });
  preview.classList.add("active");

  // Scroll to the project
  setTimeout(() => {
    // Get the dynamic height of the fixed header
    const headerHeight = document.querySelector("header").offsetHeight;

    // Calculate the correct top position
    const targetPosition =
      projectCard.getBoundingClientRect().top + // Element's top relative to viewport
      window.pageYOffset - // Current page scroll Y
      headerHeight - // Offset for the fixed header
      10; // A 10px top margin for spacing

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }, 100); // The 100ms delay is good, it lets the classes apply first
}

function closePreview(projectId) {
  const projectsGrid = document.getElementById("projectsGrid");
  const preview = document.getElementById(`preview-${projectId}`);

  // Hide preview and show all cards
  preview.classList.remove("active");
  projectsGrid.classList.remove("preview-mode");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.remove("active");
  });
}

// Smooth Scrolling
function initSmoothScroll() {
  // Handle both desktop and mobile menu links
  const handleNavClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const href = e.currentTarget.getAttribute("href");

    // Only handle hash links
    if (href && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        // Close mobile menu if open
        const mobileMenu = document.querySelector(".mobile-menu");
        const burgerMenu = document.querySelector(".burger-menu");
        if (mobileMenu && mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active");
          burgerMenu.classList.remove("active");
        }

        // Scroll to target
        const headerHeight = document.querySelector("header").offsetHeight;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Add listeners to all navigation links INCLUDING cta-button
  document
    .querySelectorAll(".nav-links a, .mobile-menu a")
    .forEach((anchor) => {
      anchor.addEventListener("click", handleNavClick);
    });

  // Separate handler for CTA button
  document.querySelectorAll(".cta-button").forEach((btn) => {
    btn.addEventListener("click", handleNavClick);
  });
}

// Intersection Observer for Scroll Animations
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
}

// Burger Menu
function initBurgerMenu() {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (burgerMenu) {
    burgerMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      burgerMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // Close menu when clicking on a link (but NOT on document click)
  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
      });
    });
  }
}

// Header Scroll Effect
function initHeaderScroll() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(248, 250, 252, 0.98)";
    } else {
      header.style.background = "rgba(248, 250, 252, 0.95)";
    }
  });
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
