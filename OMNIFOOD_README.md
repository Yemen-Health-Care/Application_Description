# Omnifood - AI-Powered Food Subscription Website

A modern, responsive website for Omnifood, an AI-powered food subscription service that delivers healthy, personalized meals to customers' doors. This project is built using HTML5, CSS3, and vanilla JavaScript, following modern web development best practices.

## 🚀 Features

### Design & UX
- **Modern, Clean Design**: Professional layout with careful attention to typography, spacing, and visual hierarchy
- **Fully Responsive**: Optimized for all device sizes (desktop, tablet, mobile)
- **Smooth Animations**: Hover effects, smooth scrolling, and interactive elements
- **Accessible**: Semantic HTML, proper ARIA labels, and keyboard navigation support

### Sections
1. **Hero Section**: Compelling headline with call-to-action and customer testimonials
2. **Featured In**: Logos of publications that featured Omnifood
3. **How It Works**: 3-step process explanation with app screenshots
4. **Meals**: Gallery of sample meals with nutritional information
5. **Testimonials**: Customer reviews with photo gallery
6. **Pricing**: Two subscription plans with feature comparison
7. **Call-to-Action**: Sign-up form with gradient background
8. **Footer**: Links, contact information, and social media

### Technical Features
- **Mobile Navigation**: Hamburger menu with smooth slide-in animation
- **Sticky Header**: Navigation becomes fixed when scrolling
- **Smooth Scrolling**: JavaScript-powered smooth scroll to sections
- **Form Handling**: Contact form with validation (ready for backend integration)
- **Modern CSS**: Grid, Flexbox, custom properties, and advanced selectors
- **Performance Optimized**: Efficient CSS structure and minimal JavaScript

## 📁 Project Structure

```
/workspace/
├── index.html              # Main HTML file
├── css/
│   ├── general.css         # Reset, typography, and reusable components
│   ├── style.css           # Main styles for all sections
│   └── queries.css         # Media queries for responsive design
├── js/
│   └── script.js           # JavaScript for interactivity
├── img/                    # Images directory
│   ├── logos/              # Company logos
│   ├── customers/          # Customer photos
│   ├── meals/              # Food images
│   ├── gallery/            # Gallery images
│   ├── app/                # App screenshots
│   └── omnifood-logo.png   # Main logo
└── README.md               # This file
```

## 🎨 Design System

### Typography
- **Font Family**: Rubik (Google Fonts)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Font Sizes**: 10px to 98px (responsive scale)

### Colors
- **Primary**: #e67e22 (Orange)
- **Primary Tint**: #fdf2e9 (Light orange background)
- **Primary Shade**: #cf711f (Darker orange)
- **Text**: #555 (Dark grey)
- **Headings**: #333 (Very dark grey)

### Spacing
- **System**: 2, 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px
- **Grid Gap**: 64px columns, 96px rows
- **Border Radius**: 9px (default), 11px (medium)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Grid, Flexbox, custom properties, animations
- **JavaScript (ES6+)**: Modern JavaScript for interactivity
- **Ionicons**: Icon library for UI elements
- **Google Fonts**: Typography (Rubik font family)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (default)
- **Landscape Tablets**: 1200px - 944px
- **Portrait Tablets**: 944px - 704px
- **Small Tablets**: 704px - 544px
- **Phones**: 544px and below

## 🚀 Getting Started

1. **Clone or Download**: Get the project files
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Live Server**: For development, use a live server extension in your code editor
4. **Customize**: Modify colors, content, and images as needed

### Development Setup
```bash
# If using Node.js and a live server
npx live-server
```

## 📋 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+

## 🔧 Customization

### Changing Colors
Edit the color values in `css/general.css`:
```css
/* Update these custom properties */
:root {
  --color-primary: #e67e22;
  --color-primary-tint: #fdf2e9;
  --color-primary-shade: #cf711f;
}
```

### Adding Content
- **Images**: Add to appropriate folders in `/img/`
- **Text**: Update content in `index.html`
- **Sections**: Follow the existing pattern for new sections

### Responsive Design
All responsive styles are in `css/queries.css`. Modify breakpoints as needed.

## 🎯 Performance Optimizations

- **Optimized Images**: Use WebP format with PNG fallbacks
- **Minified CSS**: Combine and minify for production
- **Efficient JavaScript**: Minimal JS for maximum performance
- **Font Loading**: Preconnect to Google Fonts for faster loading

## 📈 SEO Features

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Description, viewport, and other essential meta tags
- **Alt Text**: Descriptive alt text for all images
- **Structured Data**: Ready for implementation

## 🚀 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Host directly from repository

### Traditional Hosting
- Upload all files to web server
- Ensure index.html is in root directory
- Configure server for SPA routing if needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## 📄 License

This project is created for educational purposes. Feel free to use and modify for your own projects.

## 📞 Support

For questions or issues:
- Check the code comments for detailed explanations
- Ensure all files are in the correct directory structure
- Test in multiple browsers and devices
- Validate HTML and CSS for errors

---

**Note**: This is a frontend-only implementation. For a complete application, you'll need to integrate with a backend service for form submissions, user authentication, and order processing.

## 🎓 Learning Objectives

This project demonstrates:
- Modern CSS techniques (Grid, Flexbox, custom properties)
- Responsive web design principles
- JavaScript DOM manipulation
- Performance optimization
- Accessibility best practices
- Professional code organization
- Modern development workflow