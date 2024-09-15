// Type declaration for form input elements
 const resumeForm = document.getElementById('resume-form') as HTMLFormElement;

resumeForm.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data with correct types
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];

    // Save data to localStorage with proper type checking
    localStorage.setItem('name', name);
    localStorage.setItem('contact', contact);
    localStorage.setItem('email', email);
    localStorage.setItem('education', education);
    localStorage.setItem('skills', skills);
    localStorage.setItem('experience', experience);

    // Save profile picture as Data URL if provided
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function(e: ProgressEvent<FileReader>) {
            if (e.target?.result) {
                localStorage.setItem('profilePic', e.target.result as string);
            }
        };
        reader.readAsDataURL(profilePic);
    }

    // Redirect to resume page
    window.location.href = 'resume.html';
});

