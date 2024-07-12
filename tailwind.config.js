/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "darkGrey": "#151515",
            "grey": "#716F6F",
            "lightGrey": "#F0F0F0",
            "line": "#DCDCDC",
            "purple": "#854DFF",
            "red": "#FF5959",
            "white": "#FFFFFF"
        },
        extend: {
            backgroundImage: {

            },
        },
    },
    plugins: [],
};
