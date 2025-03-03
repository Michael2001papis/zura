function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// בודק אם האתר במצב תחזוקה
const isMaintenanceMode = true; // שנה ל-true אם האתר במצב תחזוקה, אחרת השאר כ-false

if (isMaintenanceMode) {
  // אם האתר במצב תחזוקה, הפנה את המשתמש לדף תחזוקה
  window.location.href = "#/"; // שנה את ה-URL לדף התחזוקה שלך
}
