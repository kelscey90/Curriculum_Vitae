const cv_btn = document.querySelector('.cv_btn');
const home_btn = document.querySelector('.home_btn');
const menu_btn = document.querySelector('.menu_btn');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const education = document.querySelector('.education');
const contact = document.querySelector('.contact');

const about_me = document.querySelector('#about_me');
const skills_me = document.querySelector('#skills');
const education_me = document.querySelector('#education');
const contact_me = document.querySelector('#contact');

const main_content = document.querySelector('.main-content')

const mobile = window.matchMedia("(max-width: 800px)")
const tablet = window.matchMedia("(max-width: 1000px)")

cv_btn.addEventListener("click", function(){
	cv_btn.style.display = "none";
	home_btn.style.animationName = "fadeIn";
	document.querySelector('.banner-content hr').style.width = "350px";
	setTimeout('main_content.style.opacity = "1";', 50)
	setTimeout('main_content.style.transform = "translateX(0px)";', 50)
	main_content.style.display = "block";
	document.querySelector('.menu').style.display = "block";
	if (about.classList.contains('active')) {
		about_me.style.display = "block";
		about_me.style.opacity = "1";
	}

	document.querySelector('.banner-content').classList.add('banner_bg');
	menu_btn.classList.add('appear');

});

home_btn.addEventListener("click", function(){
	cv_btn.style.display = "flex";
	home_btn.style.animationName = "fadeOut";
	document.querySelector('.banner-content hr').style.width = "";
	setTimeout('main_content.style.display = "";', 400)
	main_content.style.opacity = "";
	main_content.style.transform ="";
	document.querySelector('.menu').style.display = "";
	document.querySelector('.banner-content').style.background = "";
	main_content.style.filter = "";
	document.querySelector('.banner-content').classList.remove('banner_bg');
	menu_btn.classList.remove('appear');
});

function appear(){
	document.querySelector('.section_container').classList.toggle('blur');
	document.querySelector('.banner_bg').classList.toggle('move');
	menu_btn.classList.toggle('move_right');
}

menu_btn.addEventListener("click", function(){
	appear();
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
	appear();
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
	appear();
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
	appear();
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
	appear();
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
