// Load data from localStorage and display on the resume page
window.addEventListener('load', function() {
    const name = localStorage.getItem('name');
    const contact = localStorage.getItem('contact');
    const email = localStorage.getItem('email');
    const education = localStorage.getItem('education');
    const skills = localStorage.getItem('skills');
    const experience = localStorage.getItem('experience');
    const profilePic = localStorage.getItem('profilePic');

    // Display the data in the respective fields, using optional chaining to avoid null errors
    const displayNameElement = document.getElementById('display-name') as HTMLElement;
    const displayContactElement = document.getElementById('display-contact') as HTMLElement;
    const displayEmailElement = document.getElementById('display-email') as HTMLElement;
    const displayEducationElement = document.getElementById('display-education') as HTMLElement;
    const displaySkillsElement = document.getElementById('display-skills') as HTMLElement;
    const displayExperienceElement = document.getElementById('display-experience') as HTMLElement;

    displayNameElement.textContent = name || '';
    displayContactElement.textContent = contact || '';
    displayEmailElement.textContent = email || '';
    displayEducationElement.textContent = education || '';
    displaySkillsElement.textContent = skills || '';
    displayExperienceElement.textContent = experience || '';

    // Display the profile picture if available
    const profilePicElement = document.getElementById('display-profile-pic') as HTMLImageElement;
    if (profilePic) {
        profilePicElement.src = profilePic;
        profilePicElement.style.display = 'block';
    }
});

