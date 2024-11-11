function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

loco();

function toggleBodyType(type) {
    const container = document.querySelector('.body-type-container');
    const budget_container = document.querySelector('.budget-container');
    if (type === 'budget') {
        container.style.display = "none";
        budget_container.style.display = "flex";
    } else if (type === 'body-type') {
        container.style.display = "flex";
        budget_container.style.display = "none";
    } else {

    }
}

function toggleActiveClass(element) {
    // Remove 'car-type-link-select' class from all links
    const links = document.querySelectorAll('.car-type-link');
    links.forEach(link => link.classList.remove('car-type-link-select'));

    // Add 'car-type-link-select' class to the clicked link
    element.classList.add('car-type-link-select');
}

function toggleFeatureCarActiveClass(element,car) {
    // Remove 'car-type-link-select' class from all links
    const links = document.querySelectorAll('.car-type-link');
    links.forEach(link => link.classList.remove('featured-car-link-select'));

    // Add 'car-type-link-select' class to the clicked link
    element.classList.add('featured-car-link-select');
    const show_pop = document.querySelector('.show-pop');
    const show_just = document.querySelector('.show-just');

    if(car === 'POPULAR'){
        show_pop.style.display = "flex";
        show_just.style.display = "none";
    }else if(car === 'JUST'){
        show_pop.style.display = "none";
        show_just.style.display = "flex";
    }else {
        show_pop.style.display = "flex";
        show_just.style.display = "none";
    }
}

function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    
    // Toggle the active class to open/close the FAQ item
    faqItem.classList.toggle('active');
    
    // Change icon between "+" and "-" on toggle
    const icon = faqItem.querySelector('.faq-icon');
    if (faqItem.classList.contains('active')) {
      icon.textContent = '+';
    } else {
      icon.textContent = '+';
    }
  }
  
  // Default open the first FAQ
  document.addEventListener('DOMContentLoaded', () => {
    const firstFAQ = document.querySelector('.faq-item');
    firstFAQ.classList.add('active');
    firstFAQ.querySelector('.faq-icon').textContent = '+';
  });

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }

document.getElementById("year").textContent = new Date().getFullYear();
