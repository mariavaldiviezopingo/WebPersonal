/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
			  customPrincipal:'#FFFFFF',
			  customAzul:'#0F2F76',
			  customDorado:'#D9AA46',
			  customnav: '#000',
			  customPrincipal1: {
			    DEFAULT: '#E42229',
				50: 'rgba(228, 34, 41, 1)', // Para bg-opacity-50
				100: '#E42229', // Para bg-opacity-100
			  },
			},
			flexGrow:{
			  Grow2:'2',
			  Grow3:'3'
			},
			fontSize:{
			  vwUno:'1vw',
			  vwDos:'2vw',
			  vwTres:'3vw',
			  vwCuatro:'4vw',
			  vwCinco:'5vw'
	  
			},
			screens:{
			  sm2: '480px',
			  sm3: '0px'
			},
			fontSize:{
			  xs2:['0.5rem', { lineHeight: '0.75rem' }]
			},
	  
			gridTemplateColumns:{
			  autofit1:' repeat(auto-fit,minmax(250px,1fr))'
			}
		   
		  }
	},
	plugins: [],
}
