document.querySelectorAll('.clickable-skill').forEach(skill => {
    skill.addEventListener('click', () => {
        // Reset all other skills
        document.querySelectorAll('.clickable-skill').forEach(otherSkill => {
            if (otherSkill !== skill) {
                otherSkill.querySelector('.progress-bar span').style.width = '0';
                otherSkill.querySelector('.skill-percentage').style.display = 'none';
            }
        });

        // Show percentage and expand the clicked skill with the animation
        const percentage = skill.getAttribute('data-percentage');
        const progressBar = skill.querySelector('.progress-bar span');
        const skillPercentage = skill.querySelector('.skill-percentage');

        progressBar.style.width = percentage;
        skillPercentage.style.animation = 'none'; // Reset the animation
        skillPercentage.style.display = 'block';
        // Trigger the animation
        void skillPercentage.offsetWidth; // Trigger reflow to restart the animation
        skillPercentage.style.animation = 'pullUp 0.5s ease-out';
    });
});