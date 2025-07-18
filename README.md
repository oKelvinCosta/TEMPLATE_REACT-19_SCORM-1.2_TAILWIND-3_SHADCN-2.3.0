# SCORM Course Template with React 19, Tailwind CSS 3, and shadcn/ui

A modern, production-ready template for creating SCORM-compliant e-learning courses using React 19, TypeScript, Vite, Tailwind CSS 3, and shadcn/ui components.

## ✨ Features

- **SCORM 1.2 & 2004 Ready**: Full SCORM API integration with automatic initialization
- **Modern Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- **Beautiful UI**: Styled with Tailwind CSS 3 and shadcn/ui components
- **Responsive Design**: Works on all device sizes
- **Development Server**: Hot Module Replacement (HMR) for faster development
- **Production Build**: Optimized builds with Vite
- **SCORM Package Generation**: Automated SCORM package creation with gulp and SCO Packager

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+
- Git (for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/scorm-course-template.git
   cd scorm-course-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠 Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run scorm` - Build and package the SCORM course
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## 🎯 SCORM Integration

The template includes a robust SCORM context that handles all SCORM API interactions:

- Automatic SCORM API detection and initialization
- Loading state management
- Error handling for SCORM API availability
- Helper methods for common SCORM operations

### Using the SCORM Context

```tsx
import { useScorm } from './contexts/ScormContext';

function MyComponent() {
  const { isScormInitialized, scormGet, scormSet, scormSave } = useScorm();

  // Set a SCORM value
  const updateScore = (score: number) => {
    scormSet('cmi.core.score.raw', score.toString());
    scormSave();
  };

  // Get a SCORM value
  const currentScore = scormGet('cmi.core.score.raw');

  if (!isScormInitialized) {
    return <div>Loading SCORM...</div>;
  }

  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <button onClick={() => updateScore(100)}>Set Perfect Score</button>
    </div>
  );
}
```

## 🎨 Styling

This template uses:

- **Tailwind CSS 3** for utility-first styling
- **shadcn/ui** for beautiful, accessible components
- **Tailwind Merge** for conditional class names
- **Tailwind Animate** for animations

## 📦 SCORM Package Generation

The template includes a script to automatically generate a SCORM-compliant package:

```bash
npm run scorm
```

This will:
1. Run pre-build tasks
2. Build the application
3. Package it as a SCORM 1.2 compliant zip file
4. Save it in the `dist-scorm` directory

## 🧩 Dependencies

### Core
- React 19.1.0
- TypeScript 5.8.3
- Vite 7.0.0
- React Router DOM 7.6.3

### Styling
- Tailwind CSS 3.4.17
- shadcn/ui components
- Tailwind Merge 3.3.1
- Tailwind Animate 1.0.7
- Lucide React 0.525.0

### SCORM
- pipwerks-scorm-api-wrapper 0.1.2
- simple-scorm-packager 0.2.7

### Development
- ESLint 9.29.0
- Prettier 3.6.2
- Gulp 5.0.0

## 📝 License

MIT

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Pipwerks SCORM API Wrapper](https://github.com/pipwerks/scorm-api-wrapper)
