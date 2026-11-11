
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const selectedPlan = document.getElementById("membershipPlan").value;

    formStatus.textContent =
        "Thank you, " + customerName +
        "! Your " + selectedPlan +
        " membership enquiry has been recorded in this demo.";

    formStatus.style.color = "#25D366";

    contactForm.reset();
});
