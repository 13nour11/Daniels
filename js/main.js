
document.addEventListener("DOMContentLoaded",function(){
    let navbar = document.querySelector("nav.navbar");
    let navlinks = document.querySelectorAll(".nav-link");
    // let navbarHeight = navbar.offsetHeight;
    
    // Function to handle scroll event
    function handleScroll() {
        let scrollPosition = document.documentElement.scrollTop;
        if (scrollPosition > 400) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("click", function(event) {
        navlinks.forEach(link => {
            if (event.target === link) {
                // Remove active class from other links
                navlinks.forEach(link => {
                    link.classList.remove("active");
                });
                // Add active class to clicked link
                link.classList.add("active");
            }
        });
    });

// Catch the section which when reached, it'll start counting until the wanted number
let nums = document.querySelectorAll(".statics .container .num");
let section = document.querySelector(".statics .container");
let started = false; // Function Started? No

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to start counting for each number
function startCount(el, goal) {
    let count = 0;
    let interval = setInterval(() => {
        el.textContent = count;
        count += Math.ceil(goal / 50); // Adjust the division number to change the speed of counting
        if (count >= goal) {
            el.textContent = goal;
            clearInterval(interval);
        }
    }, 20); // Adjust the interval to change the speed of counting
}

// Function to handle scroll event
window.addEventListener("scroll", function() {
    if (isInViewport(section)) {
        if (!started) {
            nums.forEach(num => startCount(num, parseInt(num.getAttribute("data-goal"))));
        }
        started = true;
    }
});

});