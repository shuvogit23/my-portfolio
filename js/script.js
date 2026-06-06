

// Education 

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        // Remove active class from all buttons
        tabs.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button
        tab.classList.add('active');
        contents[index].classList.add('active');

    });
});

// End Education



// Projects

const button1 = document.querySelector(".project-btn");
const hide1 = document.querySelector(".portfolio-hide-sec-1");
const button2 = document.querySelector(".portfolio-hide-btn");
const hide2 = document.querySelector(".portfolio-hide-sec-2");


button1.addEventListener('click', () => {
    hide1.classList.add("active");
    button1.classList.toggle("active");
});

button2.addEventListener('click', () => {
    hide2.classList.add("active");
    button2.classList.toggle("active");
});



// End Projects




// Side-Bar





// End Side-Bar 





