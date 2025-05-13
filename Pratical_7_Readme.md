# Practical 7 – Sales Analytics Dashboard

This project is a React-based Sales Analytics Dashboard with multiple charts.

---

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm start
```

---

## Project Setup

### Initial Setup
Created using:
```bash
npx create-react-app .
```

### Folder Structure
```
src/
├── App.jsx
├── App.css
└── components/
    ├── MonthlySalesChart.jsx
    ├── ProductCategoryChart.jsx
    ├── CustomerAcquisitionChart.jsx
    └── WeeklyVisitorsChart.jsx
```
---

## Layout and Components

### Main Layout
- `App.jsx` contains the dashboard layout and chart containers.
- Uses a grid layout for responsive display of charts.

### Charts
- `MonthlySalesChart.jsx`: Monthly sales performance chart
- `ProductCategoryChart.jsx`: Product category distribution chart
- `CustomerAcquisitionChart.jsx`: Customer acquisition chart
- `WeeklyVisitorsChart.jsx`: Weekly visitors chart

---

## Notes

- Make sure all chart components exist in the `src/components` folder.
- If you add new charts, import and use them in `App.jsx`.
- For any issues, check the browser console for errors.

