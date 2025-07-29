# 🚀 Portfolio Pro - MERN Stack Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring dynamic content management, authentication, and a sleek user interface.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-ISC-yellow)

## ✨ Features

### 🎨 Frontend Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for engaging user interactions
- **Modern UI Components** - Clean, professional design with Lucide React icons
- **GitHub Integration** - Live GitHub calendar and repository showcase
- **Contact Form** - EmailJS integration for direct communication
- **Performance Optimized** - Vite build tool for fast development and production builds

### 🔧 Backend Features
- **RESTful API** - Express.js server with organized route structure
- **Authentication** - JWT-based secure authentication system
- **Database Integration** - MongoDB with Mongoose ODM
- **File Upload** - Multer middleware for handling project assets
- **Email Service** - Nodemailer for contact form submissions
- **Security** - bcryptjs for password hashing and CORS protection

### 📱 Portfolio Sections
- **Hero Section** - Professional introduction with call-to-action
- **About** - Personal background and professional summary
- **Skills** - Technical skills with proficiency indicators
- **Experience** - Professional work experience timeline
- **Education** - Academic background and achievements
- **Projects** - Dynamic project showcase with live demos
- **Certifications** - Professional certifications and achievements
- **Internships** - Internship experiences and learnings
- **Contact** - Multiple ways to get in touch

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Router DOM** - Declarative routing for React
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **Axios** - Promise-based HTTP client
- **EmailJS** - Send emails directly from client-side

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing library
- **Multer** - Middleware for handling multipart/form-data
- **Nodemailer** - Send emails from Node.js applications
- **CORS** - Cross-Origin Resource Sharing middleware

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatter
- **Vitest** - Unit testing framework
- **Nodemon** - Development server auto-restart

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devendra-Pudi/Portfolio_MERN.git
   cd Portfolio_MERN
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

4. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Environment Configuration**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   ```

6. **Start Development Servers**
   
   Backend (from backend directory):
   ```bash
   npm run dev
   ```
   
   Frontend (from frontend directory):
   ```bash
   npm run dev
   ```

7. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 📁 Project Structure

```
Portfolio_MERN/
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── projects.js
│   │   └── contact.js
│   ├── scripts/
│   │   └── createProjects.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── projects/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Internships.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project (protected)
- `PUT /api/projects/:id` - Update project (protected)
- `DELETE /api/projects/:id` - Delete project (protected)

### Contact
- `POST /api/contact` - Send contact message

## 🎨 Customization

### Adding New Sections
1. Create a new component in `frontend/src/components/`
2. Import and add to `App.jsx`
3. Create corresponding backend routes if needed

### Styling
- Modify Tailwind classes in components
- Update `tailwind.config.js` for custom themes
- Add custom CSS in component files

### Content Management
- Update project data in `backend/scripts/createProjects.js`
- Modify component content directly in JSX files
- Add new API endpoints for dynamic content

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Heroku/Railway)
1. Set environment variables on your hosting platform
2. Deploy the backend directory
3. Update frontend API URLs to production backend URL

### Database (MongoDB Atlas)
1. Create a MongoDB Atlas cluster
2. Update `MONGODB_URI` in environment variables
3. Whitelist your deployment IP addresses

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Devendra Pudi**
- GitHub: [@Devendra-Pudi](https://github.com/Devendra-Pudi)
- Portfolio: [Live Demo](https://your-portfolio-url.com)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- MongoDB team for the flexible database
- All open-source contributors

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub
- Contact via the portfolio contact form
- Email: your-email@example.com

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ and lots of ☕