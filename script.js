// JavaScript function to scroll to the About Us section
function scrollToAboutUs() {
    var aboutUsSection = document.getElementById("about-us");
    aboutUsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTeam() {
    var teamSection = document.getElementById("team-section");
    teamSection.scrollIntoView({ behavior: 'smooth' });
}

// Sample team members data
var teamMembers = [
    {
        image: "https://ik.imagekit.io/hackenvision/AYS%20Website/196dc56b-d806-4354-87ad-cf6ccef8e6f6.jpg?updatedAt=1709199399177",
        name: "Mohammed Hussain Abid Khan, Founder of AceYourStudies: O.U(B.E)",
        role: "IT Undergraduate, NSAKCET",
        cgpa: "CGPA: 8.0%"
    },
    // Add other team members here...
];

// Function to dynamically create team member boxes
function createTeamMemberBoxes() {
    var teamMembersContainer = document.getElementById("team-members-container");

    teamMembers.forEach(function (member) {
        var memberBox = document.createElement("div");
        memberBox.classList.add("team-member-box");

        var memberImage = document.createElement("img");
        memberImage.src = member.image;
        memberImage.alt = "Founder Image";

        var memberName = document.createElement("div");
        memberName.classList.add("team-member-name");
        memberName.textContent = member.name;

        var memberRole = document.createElement("div");
        memberRole.classList.add("team-member-role");
        memberRole.textContent = member.role;

        var memberCgpa = document.createElement("div");
        memberCgpa.classList.add("team-member-cgpa");
        memberCgpa.textContent = member.cgpa;

        memberBox.appendChild(memberImage);
        memberBox.appendChild(memberName);
        memberBox.appendChild(memberRole);
        memberBox.appendChild(memberCgpa);

        teamMembersContainer.appendChild(memberBox);
    });
}

// Call the function to create team member boxes when the page loads
document.addEventListener("DOMContentLoaded", function () {
    createTeamMemberBoxes();
});
