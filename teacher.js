document.addEventListener("DOMContentLoaded", () => {
  const tables = document.querySelectorAll("table");

  tables.forEach(table => {
    table.addEventListener("click", (e) => {
      if (e.target.classList.contains("accept-btn")) {
        const row = e.target.closest("tr");
        let statusCell = row.querySelector(".status-cell");

        // If status cell doesn't exist, create one
        if (!statusCell) {
          statusCell = document.createElement("td");
          statusCell.classList.add("status-cell", "attendance-given");
          row.appendChild(statusCell);
        }

        statusCell.textContent = "Accepted ✅";
      }

      if (e.target.classList.contains("decline-btn")) {
        const row = e.target.closest("tr");
        let statusCell = row.querySelector(".status-cell");

        if (!statusCell) {
          statusCell = document.createElement("td");
          statusCell.classList.add("status-cell");
          row.appendChild(statusCell);
        }

        statusCell.textContent = "Declined ❌";
        statusCell.style.color = "red";
      }
    });
  });
});
