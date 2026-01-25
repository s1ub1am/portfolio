# Professional React Portfolio

A high-performance, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features
- ⚛️ **Modern Stack**: React + Vite for lightning-fast performance.
- 🎨 **Tailwind CSS**: Utility-first styling for a custom, premium design.
- ✨ **Animations**: Smooth scroll assists and transitions using Framer Motion.
- 📱 **Fully Responsive**: Mobile-first design.
- 🖼️ **Professional Imagery**: Enhanced profile section.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`.

## Customization
- **Content**: Edit the components in `src/components/` to update text and links.
- **Images**: Replace `src/assets/profile.png` with your own image if needed.
- **Colors**: Update `tailwind.config.js` or `src/index.css` variables.

## Deployment to GitHub Pages

1. **Update `vite.config.js`**:
   Ensure base path is set correctly if deploying to a subdirectory:
   ```js
   // vite.config.js
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```

2. **Build**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   Push the `dist` folder or use a GitHub Action.
