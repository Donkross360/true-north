# True North Communication

A modern e-commerce platform for mobile phones and accessories, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Product Catalog**: Browse phones, accessories, audio devices, and power solutions
- **Shopping Cart**: Add/remove items with persistent cart state
- **User Authentication**: Secure login/registration system
- **Search Functionality**: Find products quickly with intelligent search
- **Admin Dashboard**: Manage products and orders
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Context & Hooks
- **Build Tool**: Vite
- **Backend Integration**: Supabase (ready for integration)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:Donkross360/true-north.git
   cd true-north
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
   Navigate to `http://localhost:5173`

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Main navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── product/
│   │   └── ProductCard.tsx # Product display component
│   └── ui/                 # Reusable UI components
├── hooks/
│   ├── useAuth.ts         # Authentication logic
│   └── useCart.ts         # Shopping cart management
├── pages/
│   ├── HomePage.tsx       # Landing page
│   ├── ShopPage.tsx       # Product catalog
│   ├── CartPage.tsx       # Shopping cart
│   └── admin/             # Admin dashboard
├── data/
│   ├── products.ts        # Product data
│   └── states.ts          # Nigerian states data
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎨 Key Components

### Header
- Responsive navigation with logo and menu
- Search functionality
- User authentication status
- Shopping cart indicator
- Mobile-friendly hamburger menu

### Product Catalog
- Grid layout with product cards
- Category filtering
- Search integration
- Responsive design

### Shopping Cart
- Add/remove items
- Quantity management
- Persistent state
- Checkout flow ready

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary to True North Communication.

## 📞 Contact

- **Email**: mart2great@yahoo.com
- **Developer**: Mart Young
- **Company**: True North Communication
- **Location**: Dapson Street, Ikeja, Lagos

## 🔄 Recent Updates

- ✅ Fixed header spacing between logo and navigation menu
- ✅ Implemented responsive design
- ✅ Added shopping cart functionality
- ✅ Set up user authentication system
- ✅ Created admin dashboard

---

**Built with ❤️ for True North Communication**
