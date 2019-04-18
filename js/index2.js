//clicking logo refreshes page
const logoRefresh = document.querySelector('.nav-logo');
logoRefresh.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});



$(document).on('scroll', function (e) {
    if ($(window).width() > 992) {
		var rgba = $(document).scrollTop() / 500;
   $('.main-navigation').css('background-color', 'rgba(73, 101, 123,' + rgba + ')');
	}
})

// const imageContent = document.querySelectorAll('.card');
// imageContent.forEach(function (element) {
//     element.tabIndex = 1;
//     element.addEventListener('focus', function (event) {
//         event.target.style.border = '12px solid gold';
//     });
//     element.addEventListener('blur', function(event) {
//         event.target.style.border = '';
//       });
// });




//step 3: define the class that will create a new object
class TabCard{
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.card-body[data-tab='${this.element.dataset.tab}']`);
    // Add a click event listener on this instance, calling the myMethod method on click
        this.element.addEventListener('click', () => this.myMethod());
    };

    myMethod(){
        // Get all of the elements with the cards class
        const links = document.querySelectorAll('.card-img-top');
        // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
        
        Array.from(links).forEach(function (element) {
        element.classList.add('gnome');
        });
    }
}

//  step 1 and 2: Get DOM elements and turn into a node list, then 
//  iterate over Nodelist and create a new object
const cards = document.querySelectorAll('.card-img-top').forEach(card => 
    new TabCard(card));