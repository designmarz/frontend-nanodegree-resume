// $(document).ready(function() {

	var header 			=  document.getElementById("header");
	var topContacts 	=  document.getElementById("topContacts");
	var workExperience 	=  document.getElementById("workExperience");
	var projects 		=  document.getElementById("projects");
	var education 		=  document.getElementById("education");
	var mapDiv			=  document.getElementById("mapDiv");
	var hookup 			=  document.getElementById("lets-connect");
	var footerContacts 	=  document.getElementById("footerContacts");

	var bio = {
		"name": "Nick Marazzo",
		"role": "Web Developer",
		"contacts": "string",
		"mobile": "408.807.5583",
		"email": "nick@designmarz.com",
		"github": "https://github.com/designmarz",
		"twitter": "https://www.twitter.com/NickMarazzo",
		"location": "San Jose, CA",
		"welcomeMessage": "To live a creative life, we must lose our fear of being wrong. -Joseph Chilton Pearc",
		"skills": ["javascript", "ruby", "php"],
		"biopic": "images/42.jpg"
	};
	bio.display = function() {

		var formattedName 		= HTMLheaderName.replace("%data%", bio.name);
		var formattedRole 		= HTMLheaderRole.replace("%data%", bio.role);
		// var formattedContact 	= HTMLcontactGeneric.replace("%data%", bio.contact);
		var formattedMobile 	= HTMLmobile.replace("%data%", bio.mobile);
		var formattedEmail 		= HTMLemail.replace("%data%", bio.email);
		var formattedTwitter 	= HTMLtwitter.replace("%data%", bio.twitter);
		var formattedGithub 	= HTMLgithub.replace("%data%", bio.github);
		var formattedLocation 	= HTMLlocation.replace("%data%", bio.location);

		var formattedMessage 	= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedSkills 	= HTMLskills.replace("%data%", bio.skills);
		var formattedPic 		= HTMLbioPic.replace("%data%", bio.biopic);

		$('#header').prepend(formattedName, formattedRole);
		$('#header').append(formattedPic, formattedMessage, formattedSkills);
		$('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub);
		$('#topContacts').append(formattedLocation);
		// $('#header').append(formattedName, formattedRole, formattedPic, formattedMessage, formattedSkills);

	};

	var work = { "jobs": [
		{ "employer": "De Mattei, Inc.", 	"title": "Visual Designer", "location": "San Jose, CA", "dates": "01/04/2010-12/15/2012", 	"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
		{ "employer": "designMarz", 		"title": "Visual Designer", "location": "San Jose, CA", "dates": "12/15/2012-08/15/2014", 	"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
		{ "employer": "Comrade", 			"title": "Web Developer", 	"location": "Oakland, CA", 	"dates": "07/13/2015-Present", 		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
			]};
	work.display = function() {
		var formattedRole 		= HTMLheaderRole.replace("%data%", bio.role);
	};

	var education = { "schools": [
			{ "name": "General Assembly", 	"location": "SF", 			"majors": "Web Development", 	"dates": "string", "url": "string" },
			{ "name": "SJSU", 				"location": "SF", 			"majors": "Graphic Arts", 		"dates": "string", "url": "string" },
			{ "name": "Foothill", 			"location": "Los Altos", 	"majors": "Computer Science", 	"dates": "string", "url": "string" }
				]};
	education.display = function() {
		var formattedRole 		= HTMLheaderRole.replace("%data%", bio.role);
	};

	var projects = { "onlineCourses": [
			{ "title": "string", "dates": "string", "description": "string", "images": ["images/project1/lorem.jpg", "images/project1/lorem.jpg", "images/project1/lorem.jpg"] },
			{ "title": "string", "dates": "string", "description": "string", "images": ["images/project2/lorem.jpg", "images/project2/lorem.jpg", "images/project2/lorem.jpg"] },
			{ "title": "string", "dates": "string", "description": "string", "images": ["images/project3/lorem.jpg", "images/project3/lorem.jpg", "images/project3/lorem.jpg"] }
				]};
	projects.display = function() {
		var formattedRole 		= HTMLheaderRole.replace("%data%", bio.role);
	};

bio.display()
// work.display()
// education.display()
// projects.display()
// });