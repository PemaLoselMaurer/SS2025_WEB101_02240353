# Practical 7 – Reflection

## a) Documentation

### Main Concepts Applied

- **React Components:** The dashboard is structured using reusable React components for each chart, promoting modularity and maintainability.
- **Component Composition:** The main `App.jsx` composes multiple chart components into a grid layout, demonstrating effective component composition.
- **Styling:** CSS Grid and custom styles in `App.css` were used to create a responsive and visually appealing dashboard.
- **Data Visualization:** Placeholder components are set up for integrating chart libraries (e.g., Chart.js, Recharts) to visualize sales, product categories, customer acquisition, and visitors data.

## b) Reflection

### What I Learned

- I learned how to structure a React dashboard using reusable components and organize them in a responsive grid layout.
- I practiced integrating and styling multiple components within a single page application.
- I gained experience in preparing a project for data visualization, including planning for future integration of chart libraries.

### Challenges Faced

- **Blank Page/Error:** Initially, the dashboard did not render due to incorrect CSS import (`import styles from './App.css'`).  
  **Solution:** I corrected the import to `import './App.css'` and used string class names instead of `styles.<class>`.
- **Component Import Issues:** There were issues with component file names and imports (e.g., case sensitivity in `CustomerAcquisitionChart`).  
  **Solution:** I ensured all component imports matched their filenames exactly.
- **Styling Adjustments:** Achieving a modern and compact look for the dashboard required several iterations of CSS adjustments, especially for container sizing and spacing between elements.

> _Screenshots of errors and the final dashboard can be found in the project folder (add your screenshots here)._

### How I Overcame Challenges

- I used the browser console and error messages to quickly identify and fix import and rendering issues.
- I referred to React and CSS documentation to resolve styling and layout problems.
- Iterative testing and feedback helped refine the dashboard's appearance and usability.

---
