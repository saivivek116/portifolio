document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll("nav a");

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var targetSection = document.querySelector(hash);

                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    }
});

const breadButton = document.querySelector(".bread");
const nav = document.querySelector("nav");

// breadButton.addEventListener("click", function () {
//     nav.classList.toggle("collapsed");
// });

const navItems = document.querySelector(".nav-items");
let activeLink = null;

// navItems.addEventListener("click", function (event) {
//     if (event.target.tagName === "A") {
//         event.preventDefault();

//         const clickedLink = event.target;

//         if (activeLink) {
//             activeLink.classList.remove("active");
//         }

//         clickedLink.classList.add("active");
//         activeLink = clickedLink;
//     }
// });

// navbar scroll active logic //

// const container = document.querySelector(".container");
// container.addEventListener("click", () => {
//     container.classList.toggle("cancel");
// });

// window.addEventListener("scroll", function () {
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll("nav ul li a");

//     sections.forEach((section) => {
//         // Get the bounding rectangle of the section
//         const rect = section.getBoundingClientRect();

//         // Check if the section is at the top of the viewport
//         if (rect.bottom > 0 && rect.top < window.innerHeight) {
//             // Remove active class from all nav items
//             navLinks.forEach((link) => {
//                 link.classList.remove("active-nav-item");
//             });

//             // Find the nav link that corresponds to the section
//             const activeLink = document.querySelector(
//                 `nav ul li a[href="#${section.id}"]`
//             );
//             if (activeLink) {
//                 // Add active class to the corresponding nav link
//                 activeLink.classList.add("active-nav-item");
//             }
//         }
//     });
// });

// skills section code //

document
    .getElementById("skill-categories")
    .addEventListener("click", function (e) {
        if (e.target.tagName == "BUTTON") {
            const buttonId = e.target.id;
            const buttons = document.querySelectorAll(
                "#skill-categories button"
            );

            buttons.forEach((each) => {
                each.classList.remove("active");
            });
            e.target.classList.add("active");
            let containerId = "";
            switch (buttonId) {
                case "programming":
                    containerId = "programmingLangIcons";
                    break;
                case "webtech":
                    containerId = "webTechIcons";
                    break;
                case "database":
                    containerId = "dbTechIcons";
                    break;
                case "cloud":
                    containerId = "devOpsCloudIcons";
                    break;
                case "os":
                    containerId = "operatingSysIcons";
                    break;
            }

            toggleDisplay(containerId);
        }
    });

function toggleDisplay(containerId) {
    const iconContainers = document.querySelectorAll(".icon-container");
    let container = document.getElementById(containerId);
    iconContainers.forEach((each) => {
        each.classList.remove("show");
    });
    container.classList.add("show");
}
