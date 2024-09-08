document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const profilePicInput = document.getElementById('profile-pic-input') as HTMLInputElement;
    const profilePicDropzone = document.getElementById('profile-pic-dropzone') as HTMLDivElement;

    const educationInput = document.getElementById('education') as HTMLTextAreaElement;
    const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
    const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;

    const resumeName = document.getElementById('resume-name') as HTMLHeadingElement;
    const resumeEmail = document.getElementById('resume-email') as HTMLParagraphElement;
    const resumePhone = document.getElementById('resume-phone') as HTMLParagraphElement;
    const resumeProfilePic = document.getElementById('resume-profile-pic') as HTMLImageElement;
    const resumeEducation = document.getElementById('resume-education') as HTMLParagraphElement;
    const resumeSkills = document.getElementById('resume-skills') as HTMLParagraphElement;
    const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLParagraphElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        resumeName.textContent = nameInput.value;
        resumeEmail.textContent = `Email: ${emailInput.value}`;
        resumePhone.textContent = `Phone: ${phoneInput.value}`;
        
        if (profilePicInput.files && profilePicInput.files.length > 0) {
            resumeProfilePic.src = URL.createObjectURL(profilePicInput.files[0]);
        } else {
            resumeProfilePic.src = ''; // Clear the image if no file is selected
        }

        resumeEducation.textContent = educationInput.value;
        resumeSkills.textContent = skillsInput.value;
        resumeWorkExperience.textContent = workExperienceInput.value;

        resumeOutput.classList.remove('hidden');
        form.reset();
    });

    // Handle drag and drop
    profilePicDropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
        profilePicDropzone.classList.add('dragging');
    });

    profilePicDropzone.addEventListener('dragleave', () => {
        profilePicDropzone.classList.remove('dragging');
    });

    profilePicDropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        profilePicDropzone.classList.remove('dragging');
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            profilePicInput.files = files;
            const file = files[0];
            if (file) {
                resumeProfilePic.src = URL.createObjectURL(file);
            }
        }
    });

    // Open file dialog on dropzone click
    profilePicDropzone.addEventListener('click', () => {
        profilePicInput.click();
    });

    // Handle file input change
    profilePicInput.addEventListener('change', () => {
        const file = profilePicInput.files?.[0];
        if (file) {
            resumeProfilePic.src = URL.createObjectURL(file);
        }
    });
});
