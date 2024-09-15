var _a, _b;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Store form data in localStorage
    localStorage.setItem('resumeData', JSON.stringify({
        name: name,
        number: number,
        email: email,
        education: education,
        skills: skills,
        experience: experience
    }));
    // Redirect to resume page
    window.location.href = 'resume.html';
});
(_b = document.getElementById('toggle-skills')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
