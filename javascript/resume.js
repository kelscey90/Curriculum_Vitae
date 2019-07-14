const cv_btn = document.querySelector('.cv_btn');
const home_btn = document.querySelector('.home_btn');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const education = document.querySelector('.education');
const contact = document.querySelector('.contact');

const about_me = document.querySelector('#about_me');
const skills_me = document.querySelector('#skills');
const education_me = document.querySelector('#education');
const contact_me = document.querySelector('#contact');

var phone = window.matchMedia("(max-width: 700px)");

cv_btn.addEventListener("click", function(){
	cv_btn.style.display = "none";
	home_btn.style.opacity = "1";
	home_btn.style.visibility = "visible";
	home_btn.style.transform = "RotateY(0deg)";
	document.querySelector('.banner-content hr').style.width = "350px";
	document.querySelector('.main-content').style.opacity = "1";
	document.querySelector('.main-content').style.transform = "translateX(0px)";
	document.querySelector('.menu').style.display = "block";
	if (about.classList.contains('active')) {
		about_me.style.display = "block";
		about_me.style.opacity = "1";
	}
});

home_btn.addEventListener("click", function(){
	cv_btn.style.display = "flex";
	home_btn.style.opacity = "";
	home_btn.style.visibility = "";
	home_btn.style.transform = "";
	document.querySelector('.banner-content hr').style.width = "";
	document.querySelector('.main-content').style.opacity = "";
	document.querySelector('.main-content').style.transform = "";
	document.querySelector('.menu').style.display = "";
});



function bars_move(){
	document.querySelector('.html').style.width = "90%";
	document.querySelector('.css').style.width = "80%";
	document.querySelector('.javascript').style.width = "30%";
	document.querySelector('.php').style.width = "50%";
	document.querySelector('.microsoft').style.width = "75%";
};

function bars_reset(){
	document.querySelector('.html').style.width = "0%";
	document.querySelector('.css').style.width = "0%";
	document.querySelector('.javascript').style.width = "0%";
	document.querySelector('.php').style.width = "0%";
	document.querySelector('.microsoft').style.width = "0%";
};

about.addEventListener("click", function(){
	about_me.style.display = "block";
	setTimeout('about_me.style.opacity = "1";', 50)
	skills_me.style.opacity = "0";
	setTimeout('skills_me.style.display = "none";', 400)
	education_me.style.opacity = "0";
	setTimeout('education_me.style.display = "none";', 400)
	contact_me.style.opacity = "0";
	setTimeout('contact_me.style.display = "none";', 400)
	bars_reset();
});

skills.addEventListener("click", function(){
	skills_me.style.display = "block";
	setTimeout('skills_me.style.opacity = "1";', 50)
	about_me.style.opacity = "0";
	setTimeout('about_me.style.display = "none";', 400)
	education_me.style.opacity = "0";
	setTimeout('education_me.style.display = "none";', 400)
	contact_me.style.opacity = "0";
	setTimeout('contact_me.style.display = "none";', 400)
	setTimeout(bars_move, 300)
});

education.addEventListener("click", function(){
	education_me.style.display = "block";
	setTimeout('education_me.style.opacity = "1";', 50)
	about_me.style.opacity = "0";
	setTimeout('about_me.style.display = "none";', 400)
	skills_me.style.opacity = "0";
	setTimeout('skills_me.style.display = "none";', 400)
	contact_me.style.opacity = "0";
	setTimeout('contact_me.style.display = "none";', 400)
	bars_reset();
});

contact.addEventListener("click", function(){
	contact_me.style.display = "block";
	setTimeout('contact_me.style.opacity = "1";', 50)
	about_me.style.opacity = "0";
	setTimeout('about_me.style.display = "none";', 400)
	skills_me.style.opacity = "0";
	setTimeout('skills_me.style.display = "none";', 400)
	education_me.style.opacity = "0";
	setTimeout('education_me.style.display = "none";', 400)
	bars_reset();
});

const menu = document.querySelector(".menu");
const btns = menu.getElementsByClassName("btn");
	for (let i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	  const current = document.getElementsByClassName("active");
	  current[0].className = current[0].className.replace(" active", "");
	  this.className += " active";
	  });
	}

const resp_menu = document.querySelector(".resp_menu");
const resp_btns = resp_menu.getElementsByClassName("resp_btn");
	for (let i = 0; i < resp_btns.length; i++) {
	  resp_btns[i].addEventListener("click", function() {
	  const current = document.getElementsByClassName("active");
	  current[0].className = current[0].className.replace(" active", "");
	  this.className += " active";
	  });
	}
