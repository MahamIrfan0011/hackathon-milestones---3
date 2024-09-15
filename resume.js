// Load data from localStorage and display on the resume page
window.addEventListener('load', function () {
    var name = localStorage.getItem('name');
    var contact = localStorage.getItem('contact');
    var email = localStorage.getItem('email');
    var education = localStorage.getItem('education');
    var skills = localStorage.getItem('skills');
    var experience = localStorage.getItem('experience');
    var profilePic = localStorage.getItem('profilePic');
    // Display the data in the respective fields, using optional chaining to avoid null errors
    var displayNameElement = document.getElementById('display-name');
    var displayContactElement = document.getElementById('display-contact');
    var displayEmailElement = document.getElementById('display-email');
    var displayEducationElement = document.getElementById('display-education');
    var displaySkillsElement = document.getElementById('display-skills');
    var displayExperienceElement = document.getElementById('display-experience');
    displayNameElement.textContent = name || '';
    displayContactElement.textContent = contact || '';
    displayEmailElement.textContent = email || '';
    displayEducationElement.textContent = education || '';
    displaySkillsElement.textContent = skills || '';
    displayExperienceElement.textContent = experience || '';
    // Display the profile picture if available
    var profilePicElement = document.getElementById('display-profile-pic');
    if (profilePic) {
        profilePicElement.src = profilePic;
        profilePicElement.style.display = 'block';
    }
});
