\# 🌟 Papadimitriou.dev - Personal Portfolio



A modern, minimalist portfolio website showcasing my projects, skills, and professional experience. Built with pure HTML, CSS, and JavaScript featuring a dynamic starfield background and smooth animations.



🌐 \*\*Live Site:\*\* \[papadimitrioudev.netlify.app](https://papadimitrioudev.netlify.app)



---



\## ✨ Features



\### 🎨 \*\*Design \& UI\*\*

\- \*\*Starfield Animation\*\* - Dynamic gradient background with twinkling stars

\- \*\*Liquid Glass\*\* - Modern frosted glass card designs with backdrop blur

\- \*\*Golden Accent Theme\*\* - Elegant gold (#FFD700) color scheme

\- \*\*Smooth Animations\*\* - CSS-powered transitions and hover effects

\- \*\*Responsive Design\*\* - Seamless experience from mobile to ultrawide displays

\- \*\*Dark Theme\*\* - Eye-friendly dark interface for comfortable viewing



\### 📱 \*\*Mobile Optimization\*\*

\- \*\*Touch-Friendly\*\* - Large buttons and tap targets optimized for mobile

\- \*\*Mobile-First Layout\*\* - Designed primarily for mobile, enhanced for desktop

\- \*\*Tap Animations\*\* - Visual feedback with ripple effects on touch devices

\- \*\*Responsive Typography\*\* - Fluid text sizing using clamp() for all screen sizes

\- \*\*Optimized Performance\*\* - Fast loading and smooth scrolling on mobile devices



\### 🚀 \*\*User Experience\*\*

\- \*\*Single-Page Navigation\*\* - Fast transitions between sections

\- \*\*Interactive Elements\*\* - Hover effects and active states on all clickable items

\- \*\*Accessibility\*\* - Semantic HTML and keyboard navigation support

\- \*\*Print-Friendly CV\*\* - Clean, professional resume layout optimized for printing

\- \*\*Fast Loading\*\* - Minimal dependencies, optimized assets



\### 📄 \*\*Content Sections\*\*

\- \*\*Home\*\* - Introduction and quick navigation

\- \*\*About\*\* - Professional background and education

\- \*\*Projects\*\* - Showcase of key projects with descriptions

\- \*\*CV/Resume\*\* - Detailed professional experience and skills (English)



---



\## 🏗️ Project Structure



```

papadimitrioudev/

├── index.html          # Home page with introduction

├── about.html          # About me and education

├── projects.html       # Portfolio projects showcase

├── cv.html             # Professional resume (Harvard-style)

├── style.css           # Main stylesheet with animations

├── script.js           # JavaScript for interactions

└── README.md           # Project documentation

```



\### Page Breakdown



\- \*\*index.html\*\* - Landing page with name, title, and social links

\- \*\*about.html\*\* - Educational background and link to full CV

\- \*\*projects.html\*\* - Gallery of completed projects with live links

\- \*\*cv.html\*\* - Comprehensive resume with education, experience, projects, and skills

\- \*\*style.css\*\* - 500+ lines of optimized, commented CSS

\- \*\*script.js\*\* - Minimal JavaScript for future enhancements



---



\## 🎯 Featured Projects



\### 1. \*\*Galactic Run\*\*

\- \*\*Tech Stack:\*\* Unity, C#, WebGL

\- \*\*Description:\*\* 3D endless runner with procedural generation

\- \*\*Link:\*\* \[Unity Play](https://play.unity.com/en/games/d9b66d7a-0bc1-49bf-b8d9-fb322080a892/buildweb)



\### 2. \*\*Storm Haven\*\*

\- \*\*Tech Stack:\*\* HTML, CSS, JavaScript, Weather API

\- \*\*Description:\*\* Real-time weather app with bilingual support (Greek/English)

\- \*\*Link:\*\* \[stormhaven.netlify.app](https://stormhaven.netlify.app)



\### 3. \*\*Reading Marathon\*\*

\- \*\*Tech Stack:\*\* Node.js, Express, Socket.IO

\- \*\*Description:\*\* Real-time leaderboard for school reading events

\- \*\*Link:\*\* \[reading-marathon.onrender.com](https://reading-marathon.onrender.com)



---



\## 🎨 Design System



\### Color Palette



```css

/\* Primary Colors \*/

--text-bright: rgba(255, 255, 255, 0.95)   /\* Primary text \*/

--text-normal: rgba(255, 255, 255, 0.85)   /\* Body text \*/

--text-muted: rgba(255, 255, 255, 0.6)     /\* Secondary text \*/

--gold: #FFD700                             /\* Accent color \*/

--gold-light: rgba(255, 215, 0, 0.2)       /\* Light accent \*/



/\* Background \*/

--bg-gradient: linear-gradient(-45deg, #000000, #0a0a2a, #1a1a3a, #000000)

```



\### Typography



\- \*\*Font Family:\*\* SF Pro Display, Segoe UI, system-ui (Apple-inspired)

\- \*\*Headings:\*\* 700 weight, fluid sizing with clamp()

\- \*\*Body:\*\* 400 weight, 1.5 line height

\- \*\*Responsive:\*\* Scales from 0.9em (mobile) to 1.2em (desktop)



\### Components



\- \*\*Glass Cards\*\* - `backdrop-filter: blur(10px)` with semi-transparent backgrounds

\- \*\*Buttons\*\* - 16px border-radius, smooth hover transitions

\- \*\*Navigation\*\* - Sticky header with blur effect

\- \*\*Projects\*\* - Hover-lift cards with golden border on active state



---



\## 🛠️ Technologies Used



\### Core Technologies

\- \*\*HTML5\*\* - Semantic markup, accessibility features

\- \*\*CSS3\*\* - Custom properties, animations, flexbox, grid

\- \*\*JavaScript (ES6+)\*\* - Minimal, modern syntax



\### CSS Features

\- \*\*CSS Variables\*\* - Consistent theming across all pages

\- \*\*CSS Grid \& Flexbox\*\* - Responsive layouts

\- \*\*CSS Animations\*\* - Smooth transitions and keyframes

\- \*\*Media Queries\*\* - Breakpoints for all device sizes

\- \*\*Backdrop Filter\*\* - Glassmorphism effects



\### Design Patterns

\- \*\*Mobile-First\*\* - Base styles for mobile, enhanced for desktop

\- \*\*BEM-like Naming\*\* - Clear, maintainable class names

\- \*\*Progressive Enhancement\*\* - Works without JavaScript

\- \*\*Semantic HTML\*\* - Proper heading hierarchy, landmarks



---



\## 📱 Responsive Breakpoints



```css

/\* Mobile First (Base) \*/

Default: 320px - 479px



/\* Small Mobile \*/

@media (max-width: 360px)



/\* Mobile \*/

@media (max-width: 480px)



/\* Tablets \*/

@media (max-width: 768px)



/\* Desktop \*/

@media (min-width: 769px)



/\* Large Desktop \*/

@media (min-width: 1600px)

```



---



\## 🚀 Quick Start



\### Local Development



1\. \*\*Clone the repository\*\*

&nbsp;  ```bash

&nbsp;  git clone https://github.com/papadimitrioudev/papadimitrioudev.git

&nbsp;  cd papadimitrioudev

&nbsp;  ```



2\. \*\*Open with a local server\*\*



&nbsp;  \*\*Option A: Python\*\*

&nbsp;  ```bash

&nbsp;  python -m http.server 8000

&nbsp;  # or

&nbsp;  python3 -m http.server 8000

&nbsp;  ```



&nbsp;  \*\*Option B: Node.js\*\*

&nbsp;  ```bash

&nbsp;  npm install -g live-server

&nbsp;  live-server

&nbsp;  ```



&nbsp;  \*\*Option C: VS Code\*\*

&nbsp;  - Install "Live Server" extension

&nbsp;  - Right-click `index.html` → "Open with Live Server"



3\. \*\*Open in browser\*\*

&nbsp;  - Navigate to `http://localhost:8000`



\### Direct Deployment



No build process needed! Just upload files to any static hosting:

\- \*\*Netlify\*\* (current)

\- \*\*Vercel\*\*

\- \*\*GitHub Pages\*\*

\- \*\*Cloudflare Pages\*\*



---



\## 📊 Performance



\- \*\*Lighthouse Score:\*\* 95+ Performance

\- \*\*First Contentful Paint:\*\* < 1.0s

\- \*\*Time to Interactive:\*\* < 1.5s

\- \*\*Bundle Size:\*\* ~25KB (HTML + CSS + JS)

\- \*\*Zero Dependencies:\*\* No external libraries or frameworks



\### Optimization Techniques

\- Minimal CSS and JavaScript

\- Efficient CSS animations (GPU-accelerated)

\- Semantic HTML for better parsing

\- Optimized asset loading

\- Mobile-first responsive design



---



\## 🎓 CV Highlights



\### Education

\- \*\*BSc Computer Science\*\* - Mediterranean College / University of Derby (July 2024)

\- \*\*Postgraduate Studies\*\* - Big Data (In Progress)



\### Experience

\- \*\*IT Soldier\*\* - 80ADTE Kos (Sep 2024 - May 2025)

\- \*\*Web Frontend Developer\*\* - Personal Projects



\### Skills

\- \*\*Programming:\*\* Python, JavaScript, C#

\- \*\*Web Development:\*\* HTML, CSS, Responsive Design, Node.js

\- \*\*Tools:\*\* Unity, Git, Linux, Socket.IO



\### Languages

\- \*\*Greek\*\* (Native)

\- \*\*English\*\* (B2)

\- \*\*Italian\*\* (B1)



---



\## 🎨 Customization Guide



\### Change Colors



Edit CSS variables in `style.css`:



```css

:root {

&nbsp;   --text-bright: rgba(255, 255, 255, 0.95);

&nbsp;   --gold: #FFD700;  /\* Change accent color here \*/

&nbsp;   --container-max-width: 800px;

}

```



\### Modify Starfield



Adjust animation in `style.css`:



```css

.starfield {

&nbsp;   background: linear-gradient(-45deg, #000000, #0a0a2a, #1a1a3a, #000000);

&nbsp;   animation: gradientShift 20s ease infinite;  /\* Change duration \*/

}

```



\### Update Content



\- \*\*Home:\*\* Edit `index.html`

\- \*\*Projects:\*\* Edit `projects.html` (add/remove project items)

\- \*\*CV:\*\* Edit `cv.html` (update experience, skills, etc.)



---



\## 🔧 Browser Support



| Browser | Supported Versions |

|---------|-------------------|

| Chrome  | ✅ Last 2 versions |

| Firefox | ✅ Last 2 versions |

| Safari  | ✅ Last 2 versions |

| Edge    | ✅ Last 2 versions |

| Opera   | ✅ Last 2 versions |



\### Required Features

\- CSS Grid \& Flexbox

\- CSS Custom Properties

\- CSS Backdrop Filter

\- ES6 JavaScript

\- Media Queries



---



\## 📝 Code Quality



\### HTML

\- ✅ Semantic markup

\- ✅ Valid HTML5

\- ✅ Accessibility attributes

\- ✅ SEO-friendly meta tags



\### CSS

\- ✅ 500+ lines, fully commented

\- ✅ Consistent naming convention

\- ✅ Mobile-first approach

\- ✅ Organized by sections

\- ✅ No vendor prefixes needed (modern browsers)



\### JavaScript

\- ✅ Minimal usage

\- ✅ No external dependencies

\- ✅ Progressive enhancement

\- ✅ Clean, commented code



---



\## 👨‍💻 Author



\*\*Panagiotis Papadimitriou\*\*



\- \*\*Website:\*\* \[papadimitrioudev.netlify.app](https://papadimitrioudev.netlify.app)

\- \*\*GitHub:\*\* \[@papadimitrioudev](https://github.com/papadimitrioudev)

\- \*\*Email:\*\* panospdm24@icloud.com



---



\## 🙏 Acknowledgments



\- \*\*Design Inspiration:\*\* Apple's design language and minimalism

\- \*\*Icons:\*\* Unicode emoji for lightweight icons

\- \*\*Font Stack:\*\* System fonts for optimal performance

\- \*\*Hosting:\*\* Netlify for seamless deployment

\- \*\*Community:\*\* Open source projects that inspired this design



\## 📞 Support



If you have questions or suggestions:



\- \*\*Email:\*\* panospdm24@icloud.com



---



\## ⭐ Show Your Support



Give a ⭐️ if you like this portfolio design!



\*\*Feel free to fork and customize for your own portfolio!\*\*



---



\## 📚 Related Projects



Check out my other work:



\- \*\*\[Storm Haven](https://github.com/papadimitrioudev/StormHaven)\*\* - Weather app with bilingual support

\- \*\*\[Reading Marathon](https://github.com/papadimitrioudev/Reading-Marathon)\*\* - Real-time leaderboard system

\- \*\*Galactic Run\*\* - Unity endless runner game (coming to GitHub soon)



---



<div align="center">



\*\*Made with ❤️ by Panagiotis Papadimitriou\*\*



\*Simple, Fast, Beautiful\*



\[Live Site](https://papadimitrioudev.netlify.app) • \[Report Bug](https://github.com/papadimitrioudev/papadimitrioudev/issues) • \[Request Feature](https://github.com/papadimitrioudev/papadimitrioudev/issues)



</div>

