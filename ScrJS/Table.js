function calculateRow(button) {
    let row = button.closest("tr");

    let quantity = parseFloat(row.querySelector(".quantity").value) || 0;
    let pricePer10 = parseFloat(row.querySelector(".price-per-10").value) || 0;

    let totalBeforeTax = (quantity / 10) * pricePer10;
    let taxAmount = totalBeforeTax * 0.18;
    let totalWithTax = totalBeforeTax + taxAmount;

    row.querySelector(".total-before-tax").textContent = totalBeforeTax.toFixed(2);
    row.querySelector(".tax-amount").textContent = taxAmount.toFixed(2);
    row.querySelector(".total-with-tax").textContent = totalWithTax.toFixed(2);
}

// הוספת אפשרות להפוך את הטבלה לרשימה במסכים קטנים
function makeTableResponsive() {
    if (window.innerWidth <= 480) {
        document.querySelectorAll(".pricing-table tr").forEach(row => {
            row.classList.add("mobile-row");
        });
    } else {
        document.querySelectorAll(".pricing-table tr").forEach(row => {
            row.classList.remove("mobile-row");
        });
    }
}

window.addEventListener("resize", makeTableResponsive);
window.addEventListener("load", makeTableResponsive);

// התאמת חישוב סה"כ גם לנייד
function calculateGrandTotal() {
    let totalBeforeTax = 0, totalTax = 0, totalWithTax = 0;

    document.querySelectorAll("tbody tr").forEach(row => {
        totalBeforeTax += parseFloat(row.querySelector(".total-before-tax").textContent) || 0;
        totalTax += parseFloat(row.querySelector(".tax-amount").textContent) || 0;
        totalWithTax += parseFloat(row.querySelector(".total-with-tax").textContent) || 0;
    });

    document.getElementById("grand-total-before-tax").textContent = totalBeforeTax.toFixed(2);
    document.getElementById("grand-tax-amount").textContent = totalTax.toFixed(2);
    document.getElementById("grand-total-with-tax").textContent = totalWithTax.toFixed(2);
}
