# 🚀 Unixcer Technologies - Official Website

A high-performance, fully responsive, and modern agency website built for Unixcer Technologies. This platform is designed to showcase our core capabilities, business solutions, engineering portfolio, and leadership team with a premium, intelligent enterprise aesthetic.

## 🛠 Tech Stack

*   **Frontend Framework:** React (via Vite for lightning-fast HMR and building)
*   **Styling:** Tailwind CSS (v4)
*   **Routing:** React Router DOM
*   **Icons:** Lucide React
*   **Hosting:** Vercel

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your local machine:
*   [Node.js](https://nodejs.org/en/) (v16.0 or higher recommended)
*   npm or yarn package manager
*   Git

---

## 🚀 Local Development Setup

To get this project running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/unixcer-website.git](https://github.com/your-username/unixcer-website.git)
    cd unixcer-website
    ```

2. **Install dependencies:**

    ```bash
    npm install


    ```


3. **Start the development server:**
    ```bash
    npm run dev


    ```


4.  **Open in Browser:**
    Vite will provide a local host URL in your terminal (usually `http://localhost:5173`). Click it to view the site.

---

## 📁 Project Structure

The project is built with a highly modular and easily maintainable architecture. 

```text
unixcer-website/
├── public/                 # Static public assets (favicons, etc.)
├── src/
│   ├── assets/             # Centralized image assets
│   │   ├── assets.js       # Exports all images for easy importing
│   │   └── *.png/*.jpg     # Actual image files
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Responsive navigation with mobile menu
│   │   └── Footer.jsx      # Global footer
│   ├── data/               # Centralized Data Store
│   │   └── data.js         # Contains ALL text, projects, and job listings
│   ├── pages/              # Page views corresponding to routes
│   │   ├── Home.jsx        # Landing page with animations
│   │   ├── Projects.jsx    # Engineering Portfolio
│   │   ├── Founders.jsx    # Leadership team profiles
│   │   └── Careers.jsx     # Job openings
│   ├── App.jsx             # Main router configuration
│   ├── index.css           # Tailwind imports and global styles
│   └── main.jsx            # React entry point
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.js          # Vite configuration

```

---

## 📝 How to Update the Website (For Team Members)

We have decoupled the UI components from the website data. **You rarely need to touch the JSX code to update the website's content.**

### 1. Updating Text, Projects, or Careers

All website data is stored in a single JSON-like object located at `src/data/data.js`.

* **To add a new Project:** Open `data.js` and add a new object to the `projects` array. The `Projects.jsx` page will automatically map over it and render a new card.
* **To post a Job Opening:** Add a new object to the `careers` array in `data.js`.
* *Note on Empty States:* If the `careers` or `projects` arrays are empty (`[]`), the website is programmed to gracefully display a professional "Check back later" placeholder rather than breaking the layout.


* **To update Contact Info:** Edit the `contact` object in `data.js`. This will universally update the WhatsApp links in the Navbar, Home Page hero button, and Footer.

### 2. Updating Images & Graphics

All images are centrally managed in `src/assets/`.

1. Drop your new `.png` or `.jpg` into the `src/assets/` folder.
2. Open `src/assets/assets.js`, import the new image, and add it to the exported `assets` object.
3. Reference it in `data.js` or directly in a component using `assets.yourNewImageName`.

---

## ✨ Features & UI Details

* **Responsive Navbar:** Custom-built mobile hamburger menu that collapses cleanly on smaller screens.
* **CSS Animations:** Utilizes Tailwind's native animation utilities (`animate-bounce`, `animate-pulse`, and custom hover translations) to create a dynamic, premium feel.
* **Conditional Rendering:** Safe fallbacks are coded into the Projects and Careers pages to handle empty data arrays professionally.

---

## 👨‍💻 Leadership & Engineering Team

* **Murlikrishna Naral** - Founder & Full Stack Developer (Java SpringBoot, React, MERN, AI/ML)
* **Saiprasad** - Co-Founder & Full Stack Developer (Python Backend, React, MERN, AI/ML)

---

## 🚢 Deployment

This project is optimized for deployment on Vercel.

1. Push your latest changes to the `main` branch on GitHub.
2. Vercel will automatically trigger a new build using the command `npm run build`.
3. The live site will be updated in under 2 minutes.
