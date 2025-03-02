
// הצגת שדה קלט נוסף אם נבחר "אחר" בסוג הדירה
function toggleOtherHousing() {
    let housingType = document.getElementById("housing-type").value;
    let otherHousingInput = document.getElementById("other-housing");

    otherHousingInput.style.display = (housingType === "other") ? "block" : "none";
}
// הדפסת הדף
function printPage() {
    window.print();
}

// איפוס טופס עם אישור מהמשתמש
function confirmReset() {
    if (confirm("האם אתה בטוח שברצונך לאפס את הטופס?")) {
        document.getElementById("contract-form").reset();
    }
}