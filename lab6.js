  // JavaScript to handle modal switching
    const continueButtons = document.querySelectorAll('.continue-btn');
    const mainModal = document.getElementById('mainModal');
    const challengeModal = document.getElementById('challengeModal');
    const confirmationModal = document.getElementById('confirmationModal');

    // Open the second modal when any "Continue" button is clicked
    continueButtons.forEach(button => {
        button.addEventListener('click', () => {
            mainModal.classList.remove('active');
            challengeModal.classList.add('active');
        });
    });

    // Function to open the confirmation modal
    function openConfirmationModal() {
        challengeModal.classList.remove('active');
        confirmationModal.classList.add('active');
    }

    // Function to close the confirmation modal and return to the main screen
    function closeConfirmationModal() {
        confirmationModal.classList.remove('active');
        mainModal.classList.add('active');
    }
