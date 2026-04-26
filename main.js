// Sidebar active state
const navItems = document.querySelectorAll(".nav li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

// Example dynamic data
document.addEventListener("DOMContentLoaded", () => {
    const students = 0;
    const regions = 14;
    const cities = 92;
    const files = 0;

    document.getElementById("studentsCount").innerText = students;
    document.getElementById("regionsCount").innerText = regions;
    document.getElementById("citiesCount").innerText = cities;
    document.getElementById("filesCount").innerText = files;
});
