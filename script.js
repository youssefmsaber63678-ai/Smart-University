// ================= SIDEBAR =================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

    sidebar.classList.toggle("active");

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️ Light Mode";

    } else {

        themeBtn.textContent = "🌙 Dark Mode";

    }

});


// ================= DATE =================

const currentDate =
    document.getElementById("currentDate");

const today = new Date();

currentDate.textContent =
    today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });


// ================= NAVIGATION =================

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        sidebar.classList.remove("active");

    });

});


// ================= SEARCH =================

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const value =
        searchInput.value.toLowerCase();

    const cards =
        document.querySelectorAll(
            ".course-card, .assignment"
        );

    cards.forEach(card => {

        const text =
            card.textContent.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


// ================= AI ASSISTANT =================

const chatForm =
    document.getElementById("chatForm");

const chatInput =
    document.getElementById("chatInput");

const chat =
    document.getElementById("chat");


// Fake AI responses for Front-End demo

function getAIResponse(question) {

    const text =
        question.toLowerCase();


    if (
        text.includes("study") ||
        text.includes("plan")
    ) {

        return `
            Here's a simple 5-day study plan:
            <br><br>
            <strong>Day 1:</strong> Database Basics<br>
            <strong>Day 2:</strong> SQL Queries<br>
            <strong>Day 3:</strong> Web Development<br>
            <strong>Day 4:</strong> AI Concepts<br>
            <strong>Day 5:</strong> Full Revision
        `;

    }


    if (
        text.includes("sql") ||
        text.includes("join")
    ) {

        return `
            SQL JOIN is used to combine data from
            multiple tables.
            <br><br>
            For example:
            <br>
            <strong>INNER JOIN</strong> returns records
            that have matching values in both tables.
        `;

    }


    if (
        text.includes("performance") ||
        text.includes("grade")
    ) {

        return `
            Your current performance is <strong>82%</strong>.
            <br><br>
            Your strongest area is Web Development.
            <br>
            You should focus more on Artificial Intelligence
            and improve your attendance from 78%.
        `;

    }


    return `
        I can help you with:
        <br><br>
        • Study plans<br>
        • SQL & Database<br>
        • Web Development<br>
        • AI concepts<br>
        • Performance analysis
    `;

}


function addUserMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "user-message";

    message.innerHTML = `
        <p>${text}</p>
    `;

    chat.appendChild(message);

}


function addAIMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "ai-message";

    message.innerHTML = `
        <div class="ai-avatar">
            AI
        </div>

        <div>

            <strong>
                SmartUni AI
            </strong>

            <p>
                ${text}
            </p>

        </div>
    `;

    chat.appendChild(message);

    chat.scrollTop =
        chat.scrollHeight;

}


chatForm.addEventListener("submit", event => {

    event.preventDefault();

    const question =
        chatInput.value.trim();

    if (!question) return;

    addUserMessage(question);

    chatInput.value = "";

    setTimeout(() => {

        const response =
            getAIResponse(question);

        addAIMessage(response);

    }, 500);

});


// ================= QUICK QUESTIONS =================

const quickQuestions =
    document.querySelectorAll(
        ".quick-questions button"
    );

quickQuestions.forEach(button => {

    button.addEventListener("click", () => {

        const question =
            button.dataset.question;

        chatInput.value = question;

        chatForm.dispatchEvent(
            new Event("submit")
        );

    });

});


// ================= LOGOUT =================

const logoutBtn =
    document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {

    alert(
        "Logout functionality will be connected to the backend later."
    );

});