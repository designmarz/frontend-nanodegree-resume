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
		"biopic": "/images/something.png"
	};
	bio.display = function() {

		var formattedName 		= HTMLheaderName.replace("%data%", bio.name);
		var formattedRole 		= HTMLheaderRole.replace("%data%", bio.role);
		var formattedContact 	= HTMLcontactGeneric.replace("%data%", bio.contact);
		var formattedMobile 	= HTMLmobile.replace("%data%", bio.mobile);
		var formattedEmail 		= HTMLemail.replace("%data%", bio.email);
		var formattedTwitter 	= HTMLtwitter.replace("%data%", bio.twitter);
		var formattedGithub 	= HTMLgithub.replace("%data%", bio.github);
		var formattedBlog 		= HTMLblog.replace("%data%", bio.blog);
		var formattedLocation 	= HTMLlocation.replace("%data%", bio.location);

		console.log(

			);

   		// $(".work-entry:last").append(formattedLocation);

		// var keyList = Object.keys(this);
		// for (var i = 0; i < keyList.length; i++) {
		// 	var keyz = keyList[i];
		// 	if ( Array.isArray(this[keyz])  ) {
		// 		console.log( keyz );
		// 		for (var x = 0; x < this[keyz].length; x++) {
		// 			console.log( this[keyz][x] );
		// 		}
		// 	} if ( !Array.isArray(this[keyz])  ) {
		// 	console.log( this[keyz] );
		// 	}
		// }
	};

	var work = { "jobs": [
		{ "employer": "De Mattei, Inc.", 	"title": "Visual Designer", "location": "San Jose, CA", "dates": "01/04/2010-12/15/2012", 	"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
		{ "employer": "designMarz", 		"title": "Visual Designer", "location": "San Jose, CA", "dates": "12/15/2012-08/15/2014", 	"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
		{ "employer": "Comrade", 			"title": "Web Developer", 	"location": "Oakland, CA", 	"dates": "07/13/2015-Present", 		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
			]};
	work.display = function() {
		for (var i = 0; i < this.jobs.length; i++) {
			var keyList = Object.keys( this.jobs[i] );
			console.log("------------------------");
				for (var x = 0; x < keyList.length; x++) {
					console.log(this.jobs[i][keyList[x]]);
				}
		}
		return console.log(HTMLworkStart);
	};

	var education = { "schools": [
			{ "name": "General Assembly", 	"location": "SF", 			"majors": "Web Development", 	"dates": "string", "url": "string" },
			{ "name": "SJSU", 				"location": "SF", 			"majors": "Graphic Arts", 		"dates": "string", "url": "string" },
			{ "name": "Foothill", 			"location": "Los Altos", 	"majors": "Computer Science", 	"dates": "string", "url": "string" }
				]};
	education.display = function() {
		for (var i = 0; i < this.schools.length; i++) {
			var keyList = Object.keys( this.schools[i] );
			console.log("------------------------");
				for (var x = 0; x < keyList.length; x++) {
					console.log(this.schools[i][keyList[x]]);
				}
		}
		return console.log("------------------------");
	};

	var projects = { "onlineCourses": [
			{ "title": "string", "dates": "string", "description": "string", "images": ["images/project1/lorem.jpg", "images/project1/lorem.jpg", "images/project1/lorem.jpg"] },
			{ "title": "string", "dates": "string", "description": "string", "images": ["images/project2/lorem.jpg", "images/project2/lorem.jpg", "images/project2/lorem.jpg"] },
			{ "title": "string", "dates": "string", "description": "string", "images": ["images/project3/lorem.jpg", "images/project3/lorem.jpg", "images/project3/lorem.jpg"] }
				]};
	projects.display = function() {
		for (var i = 0; i < this.onlineCourses.length; i++) {
			var keyList = Object.keys( this.onlineCourses[i] );
			console.log("------------------------");
				for (var x = 0; x < keyList.length; x++) {
					console.log(this.onlineCourses[i][keyList[x]]);
				}
		}

		return console.log("------------------------");
	};