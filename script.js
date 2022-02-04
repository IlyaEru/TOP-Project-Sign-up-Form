const signUpForm = (function signUpValidation() {
	const email = document.querySelector('#email');
	const password = document.querySelector('#password');
	const confirmPassword = document.querySelector('#confirm-password');
	const emailErrorPara = document.querySelector('.email-error');
	const confirmPasswordErrorPara = document.querySelector('.password-confirm-error');
	const passwordValidation = document.querySelector('.password-error');

	email.addEventListener('focusout', () => {
		if (email.value.trim() !== '') {
			if (email.checkValidity() === false) {
				email.classList.add('invalid-input');
				emailErrorPara.textContent = '⚠ Please enter a valid email address';
			}
		}
	})
	email.addEventListener('focusin', () => {
		if (email.classList.contains('invalid-input')) {
			email.classList.remove('invalid-input');
		}
		emailErrorPara.textContent = '';
	})
	password.addEventListener('focusin', () => {
			if (password.classList.contains('invalid-input')) {
			password.classList.remove('invalid-input');
			}
		passwordValidation.classList.add('pass-focus');
	})
	password.addEventListener('input', () => {
		const minEightcharCheck = document.querySelector('.pass-at-least-eight');
		const minOneNumCheck = document.querySelector('.pass-at-least-num');
		const minOneCharCheck = document.querySelector('.pass-at-least-char');

		if (password.value.trim().length >= 8) {
			minEightcharCheck.textContent = '✓';
			minEightcharCheck.classList.add('pass');
		} else {
			minEightcharCheck.textContent = '🗴';
			minEightcharCheck.classList.remove('pass');
		}

		const hasNum = /\d/.test(password.value);
		if (hasNum) {
			minOneNumCheck.textContent = '✓';
			minOneNumCheck.classList.add('pass');
		} else {
			minOneNumCheck.textContent = '🗴';
			minOneNumCheck.classList.remove('pass');

		}

		const hasChar = /[a-zA-Z]/.test(password.value);
		if (hasChar) {
			minOneCharCheck.textContent = '✓';
			minOneCharCheck.classList.add('pass');

		} else {
			minOneCharCheck.textContent = '🗴';
			minOneCharCheck.classList.remove('pass');

		}
	})
	password.addEventListener('focusout', () => {
		passwordValidation.classList.remove('pass-focus');
		if (/\d/.test(password.value) && password.value.trim().length >= 8 &&
				/[a-zA-Z]/.test(password.value)) {
			password.classList.remove('invalid-input');
		} else {
			if (password.value.trim() !== '') {
				password.classList.add('invalid-input');
			}
			
		}
		
	})
	confirmPassword.addEventListener('focusout', () => {
		if (confirmPassword.value.trim() !== '') {
			if (confirmPassword.value !== password.value) {
				confirmPassword.classList.add('invalid-input');
				confirmPasswordErrorPara.textContent = '⚠ Password mismatch';
			}}
	})
	confirmPassword.addEventListener('focusin', () => {
		if (confirmPassword.classList.contains('invalid-input')) {
			confirmPassword.classList.remove('invalid-input');
		}
		confirmPasswordErrorPara.textContent = '';
	})

	const createAccountBtn = document.querySelector('.create-acc-btn');
	const signInForm = document.querySelector('form');
	createAccountBtn.addEventListener('click', () => {
		if (email.checkValidity() === true && password.value.trim() !== '' &&
			confirmPassword.value === password.value &&
			(/\d/.test(password.value) && password.value.trim().length >= 8 &&
			/[a-zA-Z]/.test(password.value))) {
			signInForm.submit()
		}
	})
}())