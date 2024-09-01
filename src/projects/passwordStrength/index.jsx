import { usePasswordStrength } from './usePasswordStrength';
import { useState } from 'react';

const PasswordStrength = () => {
    const [password, passwordStrength, passwordScore, passwordIndicators, handlePasswordChange] = usePasswordStrength();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        if (password.length) {
            setShowPassword(prev => !prev);
        }
    }

    const progressBarWidth = `${passwordScore * 10}%`;

    const progressBarColor = passwordScore > 8 ? 'bg-green-500' : passwordScore > 5 ? 'bg-orange-500' : 'bg-red-500';

    const passwordStrengthColor = passwordScore > 8 ? 'text-green-500' : passwordScore > 5 ? 'text-orange-500' : 'text-red-500';

    return (
        <div className="h-screen bg-black text-center flex flex-col justify-center items-center text-white">
            <div className="flex gap-3">
                <input
                    className="w-80 text-2xl p-2 border border-white bg-gray-700 rounded"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoFocus
                    autoComplete="off"
                    placeholder="Enter the password"
                    value={password}
                    onChange={handlePasswordChange}
                    aria-describedby="password-requirements"
                />
                <button
                    type="button"
                    className="border text-white hover:text-black hover:bg-gray-100 font-medium rounded text-base px-6 me-2"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>

            <div
                id="password-requirements"
                className="flex justify-between w-80 mx-auto mt-2 text-sm text-lightgrey"
            >
                {Object.entries({
                    lc: 'Lowercase',
                    uc: 'Uppercase',
                    num: 'Number',
                    sym: 'Symbols',
                }).map(([key, label]) => (

                    <span key={key} className={passwordIndicators[key] ? 'text-green-500' : ''}>
                        {label}
                    </span>
                ))}
            </div>

            <div className="relative w-80 h-2 mx-auto mt-2 rounded-xl border border-gray-300">
                <div
                    className={`h-full ${progressBarColor} transition-all duration-250 ease-in-out`}
                    style={{ width: progressBarWidth }}
                />
            </div>
            <p className="mt-2">
                Your password is <strong className={`${passwordStrengthColor}`}>{passwordStrength}</strong>
            </p>

            <p >
                Password has <strong className={`${passwordStrengthColor}`}>{password.length}</strong> chars
            </p>
        </div>
    );
};

export default PasswordStrength;

