const loginBtn = document.getElementById('loginBtn');
        const passcodeInput = document.getElementById('passcode');
        const errorMessage = document.getElementById('errorMessage');
        const loginPage = document.getElementById('loginPage');
        const proposalPage = document.getElementById('proposalPage');

        const revealBtn = document.getElementById('revealBtn');
        const proposal = document.getElementById('proposal');
        
        const correctPasscode = "love"; // The secret word to unlock the page

        loginBtn.addEventListener('click', () => {
            if (passcodeInput.value.toLowerCase() === correctPasscode) {
                loginPage.classList.add('hidden');
                proposalPage.classList.remove('hidden');
            } else {
                errorMessage.classList.remove('hidden');
            }
        });

        revealBtn.addEventListener('click', () => {
            // Hide the button
            revealBtn.style.display = 'none';

            // Show the final proposal text
            proposal.classList.remove('hidden');

            // Optional: Scroll to the bottom to make sure the proposal is visible
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });