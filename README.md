# Atharva Tayade – Personal Portfolio Website

Production-ready, responsive personal portfolio website engineered for **Atharva Tayade**, Computer Engineering Undergraduate at Vidyalankar Institute of Technology, Mumbai. 

Hosted publicly via **GitHub Pages** at:  
👉 **[https://AtharvaTayade2005.github.io](https://AtharvaTayade2005.github.io)**

---

## 🚀 Overview & Key Highlights

- **Developer:** Atharva Tayade (Mumbai, India)
- **Role:** Computer Engineering Undergraduate | Full Stack Developer | Cloud & Cyber Security Enthusiast
- **Theme:** Modern developer dark theme (`#0b0f19` / `#0f172a`) with vibrant cyan/purple accents, glassmorphic navigation, micro-interactions, and custom vector aesthetics.
- **Performance & Standards:** Zero framework overhead, semantic HTML5, Vanilla CSS Grid & Flexbox, vanilla JavaScript, SEO optimized, 100% responsive across mobile, tablet, and desktop viewports.

---

## 📁 Repository Structure

```
Portfolio/
├── index.html          # Semantic HTML5 document containing all sections, SEO meta tags, and structured data
├── style.css           # Clean modern CSS (Dark developer theme, CSS Grid, Flexbox, transitions & responsive queries)
├── script.js           # Client-side logic (dynamic copyright year, smooth scrolling, scrollspy, clipboard & mobile nav)
├── assets/
│   ├── avatar.svg      # Built-in SVG developer avatar fallback
│   ├── README.md       # Guidance on placing resume.pdf and profile.jpg
│   ├── resume.pdf      # (Add your resume PDF here)
│   └── profile.jpg     # (Add your headshot photo here)
└── README.md           # Documentation, local testing instructions, and GitHub Pages deployment steps
```

---

## 💻 Included Sections

1. **Header & Sticky Glassmorphism Navbar:** Brand logo (`<Atharva.dev />`), quick navigation links (About, Education, Skills, Projects, Certifications, Leadership, Contact), responsive mobile drawer, and quick "Download Resume" CTA.
2. **Hero Section:** Live status pulse badge ("Available for Software Engineering Opportunities"), headline with gradient typography, academic metric pills (CGPA 9.19, Sem 4 SGPA 9.33), bio, CTA buttons ("View Work", "Get in Touch", "Download CV"), social links, and an interactive code terminal card.
3. **About Section:** Narrative on technical problem-solving, engineering rigor, and four key pillar metric cards (CGPA, SGPA, IIT Ropar Cyber Defense, Student Council Finance Core).
4. **Education Section:** Vidyalankar Institute of Technology (B.Tech Computer Engineering 2024–2028), GPA breakdown, and core coursework badges (OOP, DSA, DBMS, OS, Computer Networks, Software Engineering).
5. **Technical Skills Section:** Responsive 4-column card grid categorizing:
   - **Languages:** C, C++, Python, HTML5, CSS3, JavaScript (ES6+), SQL
   - **Databases:** MongoDB, MySQL, Schema Design, Query Optimization
   - **Cloud Platforms:** AWS, Microsoft Azure, Google Cloud (GCP)
   - **Tools & Frameworks:** React, Node.js, Express.js, REST APIs, Git, GitHub, JWT Authentication
6. **Featured Projects:** Deep dive into **Wanderlust – Airbnb Clone**:
   - Technical summary and architecture overview
   - Detailed bullet points covering CRUD workflows, dynamic review engine, JWT security, Mapbox geocoding, Cloudinary media pipeline, and RESTful MVC endpoints.
   - Interactive simulated browser mockup with property card and Mapbox radar.
   - Direct button to GitHub repository: `https://github.com/AtharvaTayade2005/Wanderlust`.
7. **Certifications & Leadership:**
   - **IIT Ropar:** Cyber Security Essentials Certificate (Network security, cryptography, defensive models).
   - **CDAC:** Cloud Computing Course (Cloud architectures, virtualization, distributed systems).
   - **Student Council (VIT Mumbai):** Finance Council Core Member (Festival budget allocation, financial auditing, zero-deficit ledger tracking, corporate sponsorship).
8. **Contact Section:**
   - Direct interactive cards with one-click copy-to-clipboard for Email (`atharvatayade9@gmail.com`) and Phone (`+91 9326344458`) with live toast notifications.
   - Direct link buttons for LinkedIn and GitHub.
   - Quick message form triggering a pre-filled `mailto:` client draft.
9. **Footer:** Dynamic copyright year, quick site navigation, social icons, and GitHub Pages attribution.

---

## 🛠️ Local Testing Instructions

You can preview and test the portfolio locally on your machine using any of the following methods:

### Option A: Using Python (Recommended & Built-in)
Open your terminal in the `Portfolio` directory and run:

```bash
# Python 3
python -m http.server 3000
```
Then open your browser at: `http://localhost:3000`

### Option B: Using Node.js `npx serve`
```bash
npx -y serve . -l 3000
```
Then open your browser at: `http://localhost:3000`

### Option C: VS Code Live Server Extension
1. Open the `Portfolio` folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 GitHub Pages Deployment Guide

Follow these exact steps to publish this portfolio to your custom GitHub Pages URL at `https://AtharvaTayade2005.github.io`:

### Step 1: Initialize Git and Commit
Open PowerShell or your terminal inside the `Portfolio` folder:

```bash
# Initialize git repository
git init

# Stage all files
git add .

# Create the initial commit
git commit -m "feat: initial release of personal portfolio website"

# Ensure the default branch is named 'main'
git branch -M main
```

### Step 2: Create the GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Set the **Repository name** to:
   ```text
   AtharvaTayade2005.github.io
   ```
   *(Note: Naming the repository `<username>.github.io` makes it your user site, served directly from the root domain).*
3. Set visibility to **Public**.
4. Leave "Add a README file", ".gitignore", and license **unchecked** (we already created them).
5. Click **Create repository**.

### Step 3: Link Remote and Push to GitHub
Run the following commands in your terminal:

```bash
# Add the remote repository URL
git remote add origin https://github.com/AtharvaTayade2005/AtharvaTayade2005.github.io.git

# Push your files to the main branch
git push -u origin main
```

### Step 4: Verify GitHub Pages Activation
1. Navigate to your repository on GitHub: `https://github.com/AtharvaTayade2005/AtharvaTayade2005.github.io`
2. Go to **Settings** > **Pages** (under the "Code and automation" left sidebar).
3. Under **Build and deployment** > **Source**, ensure:
   - Source is set to: **Deploy from a branch**
   - Branch is set to: **`main`** / **`/ (root)`**
4. Click **Save** if not already enabled.
5. Within 1–2 minutes, GitHub Pages will deploy your site at:  
   👉 **`https://AtharvaTayade2005.github.io/`**

---

## 🎨 Personalization & Assets Setup

1. **Resume:**
   - Copy your actual resume PDF to `assets/resume.pdf`.
   - The navigation bar and hero CTAs will automatically allow visitors to view and download it.
2. **Profile Headshot:**
   - Add your square professional headshot to `assets/profile.jpg`.
   - The site is configured to automatically use `assets/profile.jpg`, with `assets/avatar.svg` as a graceful fallback.

---

## 📄 License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
