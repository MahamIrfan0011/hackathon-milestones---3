document.getElementById('resume-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Store form data in localStorage
    localStorage.setItem('resumeData', JSON.stringify({
        name,
        number,
        email,
        education,
        skills,
        experience
    }));

    // Redirect to resume page
    window.location.href = 'resume.html';
});

document.getElementById('toggle-skills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
