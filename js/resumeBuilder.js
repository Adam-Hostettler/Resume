var bio = {
    name: "Adam Hostettler",
    role: "Front-End Web Developer",
    contacts: {
        email: "Adam.Hostettler@gmail.com",
        mobile: "872-207-0610",
        github: "Codexace",
        location: "Freedom, Wisconsin",
    },
    biopic: "images/fry.jpg",
    welcomemessage: "Welcome to my online resume.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
    display: function displayBio() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedwelcomeMessage);
        $("#header").append(formattedbioPic);
        $("#topContacts, #footerContacts").append(formattedMobile);
        $("#topContacts, #footerContacts").append(formattedEmail);
        $("#topContacts, #footerContacts").append(formattedgitHub);
        $("#topContacts, #footerContacts").append(formattedLocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) { // Loops through all the contact object. Sets the helper.js var to formatted var. Then displays them on the page.
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

var education = {
    schools: [{
            name: "Fox Valley Technical College",
            degree: "Associate's Degree",
            year: "2002 - 2005",
            majors: ["Networking", "Help Desk"],
            location: "Appleton, WI, USA",
            url: "https://www.fvtc.edu/"
        } //comma then new schools go here inside {}.
    ],
    onlineCourses: [{
            title: "Front-End Web Developer",
            school: "Udacity",
            dates: "May 1, 2017 - Present",
            url: "http://www.udacity.com",
            nanourl: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        } //comma then new online courses go here inside {}.
    ],
    display: function displayEducation() {
        $("#education").append(HTMLschoolStart);

        for (var y = 0; y < education.schools.length; y++) { // Loops through all the school array. Sets the helper.js var to formatted var. Then displays them on the page.
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[y].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[y].degree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[y].year);
            var schoolMajors = "";
            for (var u = 0; u < education.schools[y].majors.length; u++) {
              if (u === education.schools[y].majors.length - 1) {
                schoolMajors += education.schools[y].majors[u];
              } else {
                schoolMajors += education.schools[y].majors[u] + ", ";
              }
            }
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", schoolMajors);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[y].location);
            var formattedNameDegree = formattedschoolName + formattedschoolDegree;
            formattedNameDegree = formattedNameDegree.replace("#", education.schools[y].url);

            $(".education-entry:last").append(formattedNameDegree);
            $(".education-entry:last").append(formattedschoolDates);
            $(".education-entry:last").append(formattedschoolMajor);
            $(".education-entry:last").append(formattedschoolLocation);
        }

        $(".education-entry:last").append(HTMLonlineClasses);

        for (var z = 0; z < education.onlineCourses.length; z++) { // Loops through all the online array. Sets the helper.js var to formatted var. Then displays them on the page.
            var onlineCourse = education.onlineCourses[z];
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            formattedonlineURL = formattedonlineURL.replace("#", onlineCourse.url);
            var formattedTitleSchool = formattedonlineTitle + formattedonlineSchool;
            formattedTitleSchool = formattedTitleSchool.replace("#", onlineCourse.nanourl);

            $(".education-entry:last").append(formattedTitleSchool);
            $(".education-entry:last").append(formattedonlineDates);
            $(".education-entry:last").append(formattedonlineURL);
        }
    }
};

var work = {
    jobs: [{
            employer: "Group O",
            title: "Kronos and Metrics Manager",
            dates: "2008 - 2015",
            location: "Joliet, IL and Aurora, IL",
            url: "https://www.groupo.com/",
            description: "Manage employee records and time cards within Kronos. Provide metrics analysis for each building Manager. Work with Managers and Supervisors to improve supply chain efficiency. Assist IT department with miscellaneous support issues. Provide data to Accounting department and assist with budgeting and forecasting. Managed $250k in Nextel phones for our communication network."
        } //comma then new jobs go here inside {}.
    ],
    display: function displayWork() {
        $("#workExperience").append(HTMLworkStart);

        for (var x = 0; x < work.jobs.length; x++) { // Loops through all the jobs array. Sets the helper.js var to formatted var. Then displays them on the page.
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            formattedEmployerTitle = formattedEmployerTitle.replace("#", work.jobs[x].url);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    project: [{
            title: "Article Mockup",
            dates: "May 1, 2017",
            description: "Practice HTML syntax by converting a mockup of a blog article into a real website.",
            images: ["images/project1.jpg"],
            url: "projects/1/index.html"
        },
        {
            title: "Portfolio",
            dates: "May 5, 2017",
            description: "Build a portfolio website. You will be provided a design mockup as a PDF-file, and you must replicate that design in HTML and CSS.",
            images: ["images/project2.jpg"],
            url: "projects/2/index.html"
        }
    ],
    display: function displayProjects() {
        $("#projects").append(HTMLprojectStart);

        for (var w = 0; w < projects.project.length; w++) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.project[w].title);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.project[w].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.project[w].description);
            var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.project[w].images);
            formattedprojectTitle = formattedprojectTitle.replace("#", projects.project[w].url);

            $(".project-entry").append(formattedprojectTitle);
            $(".project-entry").append(formattedprojectDates);
            $(".project-entry").append(formattedprojectDescription);
            $(".project-entry").append(formattedprojectImage);
        }
    }
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
