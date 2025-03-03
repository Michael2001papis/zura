
function markAsRead() {
    const btn = document.querySelector('.read-btn');
    btn.innerText = " תודה, על זמן היקר שלך, על שקראת אותי ";
    btn.style.backgroundColor = "#00cc66";
    btn.disabled = true;  
}