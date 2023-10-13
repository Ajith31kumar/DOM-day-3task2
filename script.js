const form = document.getElementById("data-form");
const table = document.getElementById("data-table");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const food = [...document.getElementById("food").selectedOptions].map(option => option);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const newRow = table.insertRow(-1);
    newRow.insertCell().textContent = firstName;
    newRow.insertCell().textContent = lastName;
    newRow.insertCell().textContent = address;
    newRow.insertCell().textContent = pincode;
    newRow.insertCell().textContent = gender;
    newRow.insertCell().textContent = food.join(", ");
    newRow.insertCell().textContent = state;
    newRow.insertCell().textContent = country;

    form.reset();
});
