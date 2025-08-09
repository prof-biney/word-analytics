# WordAnalytics 📊

> A modern, real-time text analysis tool that helps you optimize your content for social media platforms.

![Word Analytics](public/w.png)

## 🌟 Overview

WordAnalytics is a sleek, responsive web application built with React and Vite that provides instant text analysis and social media optimization insights. Whether you're crafting the perfect tweet, writing an Instagram caption, or preparing Facebook content, WordAnalytics helps you stay within character limits while tracking essential metrics.

## ✨ Features

### 📈 Real-time Analytics
- **Word Count**: Instantly track the number of words in your text
- **Character Count**: Monitor total character usage
- **Live Updates**: Statistics update as you type with zero lag

### 📱 Social Media Optimization
- **Instagram Integration**: Shows remaining characters (280 character limit)
- **Facebook Integration**: Tracks remaining characters (2200 character limit)
- **Visual Indicators**: Color-coded warnings when approaching or exceeding limits

### 🛡️ Content Security
- **Script Tag Protection**: Automatically removes dangerous `<script>` tags
- **@ Symbol Filtering**: Prevents unwanted @ mentions
- **Real-time Warnings**: Instant feedback on prohibited content

### 🎨 User Experience
- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Intuitive Interface**: Easy-to-use textarea with clear statistics display
- **Custom Fonts**: Beautiful Inter font family for optimal readability

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/word-analytics.git
   cd word-analytics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application in action!

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Project Structure

```
word-analytics/
├── public/
│   ├── w.png                 # App icon/logo
│   └── vite.svg             # Vite logo
├── src/
│   ├── components/
│   │   ├── App.jsx          # Main app component
│   │   ├── BackgroundImage.jsx # Header background
│   │   ├── Container.jsx     # Main content container
│   │   ├── Footer.jsx       # Footer component
│   │   ├── H1.jsx           # Main heading component
│   │   ├── Header.jsx       # Header section
│   │   ├── Stats.jsx        # Statistics display
│   │   ├── Textarea.jsx     # Text input component
│   │   └── Warning.jsx      # Warning message component
│   ├── lib/
│   │   └── constants.js     # App constants (character limits)
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🔧 Technology Stack

### Frontend Framework
- **React 19.0.0** - Modern React with latest features
- **React DOM 19.0.0** - DOM manipulation library

### Build Tools
- **Vite 6.1.0** - Ultra-fast build tool and dev server
- **@vitejs/plugin-react** - Official React plugin for Vite

### Development Tools
- **ESLint 9.19.0** - Code linting and quality checks
- **eslint-plugin-react** - React-specific linting rules
- **eslint-plugin-react-hooks** - Hooks linting rules
- **eslint-plugin-react-refresh** - React Fast Refresh support

### Styling
- **CSS3** - Modern CSS with custom properties
- **Inter Font** - Beautiful, readable typography
- **Responsive Design** - Mobile-first approach

## 🎯 Core Components

### `Container.jsx`
The heart of the application that manages:
- Text state management
- Real-time statistics calculation
- Component orchestration

### `Textarea.jsx`
Handles user input with:
- Real-time validation
- Content filtering
- Warning system integration

### `Stats.jsx`
Displays analytics including:
- Word and character counts
- Social media character limits
- Visual limit indicators

### `Warning.jsx`
Provides user feedback for:
- Prohibited content detection
- Security warnings
- Input validation messages

## 📊 Character Limits

The app tracks content against these social media limits:

| Platform | Character Limit | Status Indicator |
|----------|----------------|------------------|
| Instagram | 280 characters | 🟢 Green (safe) / 🔴 Red (exceeded) |
| Facebook | 2,200 characters | 🟢 Green (safe) / 🔴 Red (exceeded) |

## 🛡️ Security Features

WordAnalytics includes built-in security measures:

- **XSS Prevention**: Automatically removes `<script>` tags
- **Input Sanitization**: Filters out potentially harmful characters
- **Real-time Validation**: Immediate feedback on security issues

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/word-analytics",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed
- Ensure ESLint passes: `npm run lint`

## 🐛 Known Issues & Roadmap

### Current Limitations
- Character limits are fixed (not dynamically configurable)
- Limited to Instagram and Facebook platforms
- Basic input validation only

### Future Enhancements
- [ ] Twitter/X character limit support
- [ ] LinkedIn character limits
- [ ] Custom platform configuration
- [ ] Text export functionality
- [ ] Reading time estimation
- [ ] Keyword density analysis
- [ ] Dark mode support
- [ ] Multiple language support
- [ ] Save/load text functionality
- [ ] Text formatting options

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- Powered by [React](https://reactjs.org/) for component-based architecture
- Styled with [Inter Font](https://fonts.google.com/specimen/Inter) for beautiful typography
- Icons and styling inspired by modern web design principles

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/word-analytics/issues) page
2. Create a new issue if your problem isn't already reported
3. Include as much detail as possible (browser, OS, steps to reproduce)

---

**Made with ❤️ by [Your Name]**

*WordAnalytics - Optimize your words, maximize your impact!*
