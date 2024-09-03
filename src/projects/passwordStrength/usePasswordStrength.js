import { useState } from 'react';

export const usePasswordStrength = () => {

    const [password, setPassword] = useState('');
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecial = /[^A-Za-z0-9]/;


    const getPasswordScore = (text) => {
        let score = 0;

        if (text.length > 3) {
            score = Math.min(6, Math.floor(text.length / 3));

            score += [hasNumber, hasUpperCase, hasLowerCase, hasSpecial]
                .filter(regex => (regex.test(text))).length;
        }

        return score;
    };

    const getPasswordStrength = (score) => {
        if (score > 8) return 'Strong';
        if (score > 5) return 'Medium';
        return 'Weak';
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const passwordScore = getPasswordScore(password);
    const passwordStrength = getPasswordStrength(passwordScore);

    const passwordIndicators = {
        lc: hasLowerCase.test(password),
        uc: hasUpperCase.test(password),
        num: hasNumber.test(password),
        sym: hasSpecial.test(password),
    };

    return [password, passwordStrength, passwordScore, passwordIndicators, handlePasswordChange];
};

