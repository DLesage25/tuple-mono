const path = require('path');

module.exports = {
    content: [
        path.join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
        path.join(__dirname, './components/**/*.{js,ts,jsx,tsx}'),
        path.join(__dirname, './views/**/*.{js,ts,jsx,tsx}'),
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
