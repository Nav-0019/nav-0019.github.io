fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;

    const btn = document.getElementById('menu-btn');
    const menubtn = document.getElementById('mobile-menu');

    
    btn?.addEventListener('click', () => {
        if (menubtn.classList.contains("max-h-0")) {
            menubtn.classList.remove("max-h-0", "opacity-0");
            menubtn.classList.add("max-h-96", "opacity-100");
        } else {
            menubtn.classList.remove("max-h-96", "opacity-100");
            menubtn.classList.add("max-h-0", "opacity-0");
        }
    });
            

    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 50) {
        nav.classList.add("bg-black/80");
        } else {
        nav.classList.remove("bg-black/80");
        }
    });

    })
    .catch(error => console.error('Error loading navbar:', error)
);
