var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
	autoAlpha: 0
}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	x:"100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	duration:1.5,
	y:"100%",
	stagger: 0.2,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.from('.social-links li', {
	duration:1,
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.5");

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});



// Select marquee content
const marqueeContent = document.querySelector('.marquee-content');

// Duplicate content to create a continuous scrolling effect
marqueeContent.innerHTML += marqueeContent.innerHTML;

// GSAP timeline for continuous scrolling
let marqueeTween = gsap.to(marqueeContent, {
    xPercent: -50,
    ease: "none",
    duration: 15,
    repeat: -1
});

// Adjust speed on scroll
let speed = 1;
window.addEventListener('scroll', function() {
    let scrollDirection = this.oldScroll > this.scrollY ? "up" : "down";
    speed = scrollDirection === "up" ? 0.5 : 1.5;
    marqueeTween.timeScale(speed);
    this.oldScroll = this.scrollY;
});
