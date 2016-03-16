// $(document).ready(function() {

	// var header 			=  document.getElementById("header");
	// var topContacts 	=  document.getElementById("topContacts");
	// var workExperience 	=  document.getElementById("workExperience");
	// var projects 		=  document.getElementById("projects");
	// var education 		=  document.getElementById("education");
	// var mapDiv			=  document.getElementById("mapDiv");
	// var hookup 			=  document.getElementById("lets-connect");
	// var footerContacts 	=  document.getElementById("footerContacts");

	var bio = {
		"name": "Nick Marazzo",
		"role": "Web Developer",
		"contacts": "string",
		"mobile": "408.807.5583",
		"email": "nick@designmarz.com",
		"github": "https://github.com/designmarz",
		"twitter": "https://www.twitter.com/NickMarazzo",
		"location": "San Jose, CA",
		"welcomeMessage": "To live a creative life, we must lose our fear of being wrong.<br>- Joseph Chilton Pearc",
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
		var formattedPic 		= HTMLbioPic.replace("%data%", bio.biopic);
		var formattedSkills		= "";

		bio.skills.forEach(function(skill){
			formattedSkills += HTMLskills.replace("%data%", skill);
		});

		$('#header').prepend(formattedName, formattedRole);
		$('#header').append(formattedPic, formattedMessage, HTMLskillsStart);
		$('#skills').append(formattedSkills);
		$('#topContacts, #footerContacts').append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub);
		$('#footerContacts').append(formattedLocation);
		// $('#header').append(formattedName, formattedRole, formattedPic, formattedMessage, formattedSkills);

	};

	var work = { "jobs": [
		{ "employer": "De Mattei, Inc.", 	"title": "Visual Designer", "location": "San Jose, CA", "dates": "01/04/2010-12/15/2012", 	"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
		{ "employer": "designMarz", 		"title": "Visual Designer", "location": "San Jose, CA", "dates": "12/15/2012-08/15/2014", 	"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
		{ "employer": "Comrade", 			"title": "Web Developer", 	"location": "Oakland, CA", 	"dates": "07/13/2015-Present", 		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
			]};
	work.display = function() {
		var jobs = this.jobs;
		var $target = $('#workExperience');

		jobs.forEach(function(job){
			$( $target ).append(HTMLworkStart);
			var formattedEmployer 	= HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle 		= HTMLworkTitle.replace("%data%", job.title);
			var formattedDates 		= HTMLworkDates.replace("%data%", job.dates);
			var formattedLocation	= HTMLworkLocation.replace("%data%", job.location);
			var formattedDesc		= HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedEmployer,formattedTitle,formattedDates,formattedLocation,formattedDesc);
		});
	};

	var projects = { "projects": [
			{ "title": "Project Title", "dates": "02/15 - 03/15", "description": "Lorem Ipsum etc", "images": ["images/project1/lorem.png", "images/project1/lorem.png", "images/project1/lorem.png"] },
			{ "title": "Project Title", "dates": "02/15 - 03/15", "description": "Lorem Ipsum etc", "images": ["images/project2/lorem.png", "images/project2/lorem.png", "images/project2/lorem.png"] },
			{ "title": "Project Title", "dates": "02/15 - 03/15", "description": "Lorem Ipsum etc", "images": ["images/project3/lorem.png", "images/project3/lorem.png", "images/project3/lorem.png"] }
				]
			};
	projects.display = function() {
		var projects = this.projects;
		var $target = $('#projects');

		projects.forEach(function(project){
			$( $target ).append(HTMLprojectStart);
			var formattedTitle 		= HTMLprojectTitle.replace("%data%", project.title);
			var formattedDates		= HTMLprojectDates.replace("%data%", project.dates);
			var formattedDescription= HTMLprojectDescription.replace("%data%", project.description);
			var formattedImage	= "";

		project.images.forEach(function(image){
			formattedImage	+= HTMLprojectImage.replace("%data%", image);

			});

			$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
		});
	};

	var education = { "schools": [
			{ "name": "General Assembly", 	"location": "SF", 			"majors": " Web Development", 	"dates": "02/15 - 03/15", "url": "www.lorem.com" },
			{ "name": "SJSU", 				"location": "SF", 			"majors": " Graphic Arts", 		"dates": "02/15 - 03/15", "url": "www.lorem.com" },
			{ "name": "Foothill", 			"location": "Los Altos", 	"majors": " Computer Science", 	"dates": "02/15 - 03/15", "url": "www.lorem.com" }
				]
			};
	education.display = function() {
		var schools = this.schools;
		var $target = $('#education');

		schools.forEach(function(school){
			$( $target ).append(HTMLschoolStart);
			var formattedName 	= HTMLschoolName.replace("%data%", school.name);
			var formattedUrl		= HTMLschoolDegree.replace("%data%", school.url);
			var formattedLocation		= HTMLschoolLocation.replace("%data%", school.location);
			var formattedMajors 		= HTMLschoolMajor.replace("%data%", school.majors);
			var formattedDates		= HTMLschoolDates.replace("%data%", school.dates);

			$(".education-entry:last").append(formattedName,formattedUrl,formattedLocation,formattedMajors,formattedDates);
		});
	};

	var map = {};
		map.display = function () {
			$('#mapDiv').append(googleMap);
		}


bio.display()
work.display()
education.display()
projects.display()
map.display()
// });