
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });

        // Close sidebar when clicking outside of it
        document.addEventListener('click', function (event) {
            if (!sidebar.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                sidebar.classList.remove('collapsed');
            }
        });
    }

    // Staggered card loading animation
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.remove('hidden'); // Ensure hidden class is removed to start the animation
    });
});
$('#subscribe-form').on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "newsubscribe",
        data: {
            name: $("#subscriber-name").val(),
            email: $("#subscriber-email").val(),
            csrfmiddlewaretoken: csrfToken
        },
        success: function (k) {
            alert("Subscribed Successfully.");
            $("#subscriber-name").val("");
            $("#subscriber-email").val("");
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseJSON); // Log the entire response object
            if (xhr.responseJSON && xhr.responseJSON.error) {
                if (xhr.responseJSON.error = "Already subscribed.") {
                    alert("Already Subscribed.")
                }
                else {
                    console.log("An error occurred: " + error); // Log the status text
                } // Log the custom error message
            } else {
                console.log("An error occurred: " + error); // Log the status text
            }
        }
    });
})
