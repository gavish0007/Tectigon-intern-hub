function setActiveButton(buttonText) {

    let buttons =
        document.querySelectorAll(".filter-btn");

    buttons.forEach(function (btn) {

        btn.classList.remove("active-filter");

        if (btn.innerText.trim() === buttonText) {

            btn.classList.add("active-filter");

        }

    });

}

function showAll() {

    setActiveButton("All");

    let cards =
        document.querySelectorAll(".task-card");

    cards.forEach(function (card) {

        card.style.display = "block";

    });

}

function showPending() {

    setActiveButton("Pending");

    let cards =
        document.querySelectorAll(".task-card");

    cards.forEach(function (card) {

        card.style.display = "none";

    });

    let pendingCards =
        document.querySelectorAll(".pending-task");

    pendingCards.forEach(function (card) {

        card.style.display = "block";

    });

}

function showCompleted() {

    setActiveButton("Completed");

    let cards =
        document.querySelectorAll(".task-card");

    cards.forEach(function (card) {

        card.style.display = "none";

    });

    let completedCards =
        document.querySelectorAll(".completed-task");

    completedCards.forEach(function (card) {

        card.style.display = "block";

    });

}

function addTask() {

    let taskTitle = prompt("Enter Task Title");

    if (taskTitle === null || taskTitle === "") {
        return;
    }

    let taskDescription =
        prompt("Enter Task Description");

    if (taskDescription === null) {
        return;
    }

    let taskGrid =
        document.querySelector(".task-grid");

    let newTask =
        document.createElement("div");

    newTask.classList.add(
        "task-card",
        "pending-task"
    );

    newTask.innerHTML = `

        <h3>${taskTitle}</h3>

        <p>${taskDescription}</p>

        <span class="pending">
            Pending
        </span>

    `;

    taskGrid.appendChild(newTask);

}
function searchResources() {

    let input =
        document.getElementById("resourceSearch")
            .value
            .toLowerCase();

    let cards =
        document.querySelectorAll(".resource-card");

    cards.forEach(card => {

        let text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}