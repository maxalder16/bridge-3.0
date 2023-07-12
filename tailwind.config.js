/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "sans": ["Inter", "sans-serif"]
            },
            colors: {
                "primary": "#5F259F",
                "primary-light": "#C7B3DD",
                "secondary": "#DB2F20",
                "grey": "#979797"
            },
            container: {
                screens: {
                    sm: "600px",
                    md: "728px",
                    lg: "1000px",
                    xl: "1200px"
                },
            },
            spacing: {
                "ixs": "-8px",
                "xs": "8px",
                "sm": "32px",
                "md": "50px",
                "lg": "100px",
                "xl": "150px",
                "2xl": "200px"
            },
            backgroundImage: {
                "main-bg": "url('/src/assets/images/bg-image.png')",
                "check": "url('/src/assets/images/check.svg')",
                "chevron": "url('/src/assets/images/chevron.svg')",
                "arrow": "url('/src/assets/images/arrow.svg')"
            },
        }
    },
    plugins: [],
}

