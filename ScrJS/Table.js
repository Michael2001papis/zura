
// חישוב סה"כ לשורה בודדת בטבלה
function calculateRow(button) {
    let row = button.closest("tr"); // מוצא את השורה הרלוונטית בטבלה

    let quantity = parseFloat(row.querySelector(".quantity").value) || 0;
    let pricePer10 = parseFloat(row.querySelector(".price-per-10").value) || 0;

    let totalBeforeTax = (quantity / 10) * pricePer10; // חישוב סכום ללא מע"מ
    let taxAmount = totalBeforeTax * 0.18; // 18% מע"מ
    let totalWithTax = totalBeforeTax + taxAmount; // סכום כולל מע"מ

    // עדכון הנתונים בטבלה
    row.querySelector(".total-before-tax").textContent = totalBeforeTax.toFixed(2);
    row.querySelector(".tax-amount").textContent = taxAmount.toFixed(2);
    row.querySelector(".total-with-tax").textContent = totalWithTax.toFixed(2);
}

// חישוב סה"כ לכל הטבלה
function calculateGrandTotal() {
    let totalBeforeTax = 0, totalTax = 0, totalWithTax = 0;

    document.querySelectorAll("tbody tr").forEach(row => {
        totalBeforeTax += parseFloat(row.querySelector(".total-before-tax").textContent) || 0;
        totalTax += parseFloat(row.querySelector(".tax-amount").textContent) || 0;
        totalWithTax += parseFloat(row.querySelector(".total-with-tax").textContent) || 0;
    });

    // עדכון סיכום כללי
    document.getElementById("grand-total-before-tax").textContent = totalBeforeTax.toFixed(2);
    document.getElementById("grand-tax-amount").textContent = totalTax.toFixed(2);
    document.getElementById("grand-total-with-tax").textContent = totalWithTax.toFixed(2);
}