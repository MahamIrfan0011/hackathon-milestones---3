// Type declaration for form input elements
var resumeForm1 = document.getElementById('resume-form');
resumeForm1.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent form from submitting
    // Get form data with correct types
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var profilePic = (_a = document.getElementById('profile-pic').files) === null || _a === void 0 ? void 0 : _a[0];
    // Save data to localStorage with proper type checking
    localStorage.setItem('name', name);
    localStorage.setItem('contact', contact);
    localStorage.setItem('email', email);
    localStorage.setItem('education', education);
    localStorage.setItem('skills', skills);
    localStorage.setItem('experience', experience);
    // Save profile picture as Data URL if provided
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                localStorage.setItem('profilePic', e.target.result);
            }
        };
        reader.readAsDataURL(profilePic);
    }
    // Redirect to resume page
    window.location.href = 'resume.html';
});
