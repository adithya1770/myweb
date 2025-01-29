/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}" // Ensure pages directory files are included
  ],
  theme: {
  	extend: {
  		spacing: {
  			'120': '30rem',
  			'122': '31rem',
  			'128': '32rem',
  			'130': '34rem',
  			'160': '40rem',
  			'165': '43rem',
  			'168': '44rem',
  			'170': '45rem',
  			'192': '48rem',
  			'224': '56rem',
  			'256': '64rem'
  		},
  		width: {
  			'128': '32rem',
  			'160': '40rem',
  			'192': '48rem',
  			'224': '56rem',
  			'256': '64rem'
  		},
  		height: {
  			'128': '32rem',
  			'160': '40rem',
  			'170': '45rem',
  			'192': '48rem',
  			'224': '56rem',
  			'256': '64rem'
  		},
  		fontSize: {
  			'10xl': '10rem',
  			'11xl': '11rem',
  			'12xl': '20rem',
  			'15xl': '40rem',
  			'20xl': '56rem',
  			'22xl': '64rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
