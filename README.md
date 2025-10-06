# Flash App

A modern Next.js application built with TypeScript, Tailwind CSS, and Radix UI components.

## 🚀 Features

- **Next.js 15.1.0** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Modern UI Components** - Accordion, Dialog, Dropdown, and more
- **Responsive Design** - Mobile-first approach
- **Theme Support** - Dark/light mode with next-themes
- **Centralized Configuration** - All app settings, text, links, and menus in one place

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Package Manager**: Yarn
- **Configuration**: Centralized config system with custom hooks

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codegun2019/flash-app.git
   cd flash-app
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run development server**
   ```bash
   yarn dev
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

## 🔧 Configuration

### Centralized Configuration System
Flash App uses a centralized configuration system that consolidates all app settings, text content, external links, menu structures, and app metadata in a single file (`lib/config.ts`).

**Key Benefits:**
- 🎯 **Easy Management** - All configurations in one place
- 🔧 **Simple Updates** - Change text, links, or settings without touching components
- 🎣 **Custom Hooks** - Use specialized hooks for different configuration types
- 📱 **Type Safe** - Full TypeScript support with proper types
- ⚡ **Performance** - Memoized values prevent unnecessary re-renders

**Configuration Categories:**
- **APP_CONFIG** - App metadata, version, developer info
- **LINKS** - External URLs, social media, app stores
- **TEXT** - All text content, translations, UI labels
- **MENU** - Navigation structure, user menus, footer links
- **SETTINGS** - App behavior, gaming options, display preferences

### Quick Start with Configuration
```typescript
import { useConfig, useText, useLinks } from '@/hooks/useConfig'

function MyComponent() {
  const { getText, getLink } = useConfig()
  
  return (
    <button>
      {getText('actions.download')}
    </button>
  )
}
```

📖 **For detailed configuration guide, see [CONFIGURATION_GUIDE.md](./CONFIGURATION_GUIDE.md)**

### PostCSS Configuration
The project uses `@tailwindcss/postcss` for PostCSS integration with Tailwind CSS.

### Tailwind CSS
Tailwind CSS is configured with custom animations and responsive utilities.

## 🚀 Deployment

The app is configured for deployment on Vercel with proper build settings and PostCSS configuration.

### Build Status
- **Local Build**: ✅ Successful
- **Vercel Build**: ✅ Fixed and working
- **PostCSS Plugin**: ✅ Properly configured
- **Tailwind CSS**: ✅ Working correctly

### Deployment Commands
- `yarn build` - Creates production build
- `yarn start` - Starts production server
- `yarn lint` - Runs ESLint

📖 **For deployment guide, see [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)**

## 📁 Project Structure

```
flash-app/
├── app/                    # Next.js App Router
├── components/            # Reusable UI components
│   └── examples/         # Configuration usage examples
├── hooks/                # Custom React hooks
│   └── useConfig.ts      # Configuration hooks
├── lib/                  # Utility functions and configurations
│   ├── config.ts         # Centralized configuration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## 🐛 Troubleshooting

### Recent Build Fixes (December 2024)
The project was successfully fixed from multiple issues:

#### **PostCSS Plugin Error (v0.1.1)**
1. **Installing `@tailwindcss/postcss`** - Required for Tailwind CSS v4+ PostCSS integration
2. **Updating PostCSS config** - Changed from `tailwindcss: {}` to `'@tailwindcss/postcss': {}`
3. **Resolving dependency conflicts** - Removed duplicate packages and package-lock.json
4. **Using Yarn exclusively** - Prevents package manager conflicts

#### **Vercel Deployment Fix (v0.1.2)**
1. **Moving `@tailwindcss/postcss` to dependencies** - Required for production builds
2. **Fixing build configuration** - Ensures PostCSS plugin is available during Vercel build
3. **Production build success** - Successfully builds and deploys on Vercel

### Common Issues

1. **PostCSS Plugin Error**: Ensure `@tailwindcss/postcss` is installed in dependencies
2. **Dependency Conflicts**: Use only Yarn (remove package-lock.json if present)
3. **Build Failures**: Clear node_modules and reinstall dependencies
4. **Tailwind CSS v4 Compatibility**: Use proper PostCSS plugin configuration
5. **Configuration Issues**: Check `lib/config.ts` and use proper hooks
6. **Vercel Build Errors**: Ensure production dependencies are in correct section

### Solutions

```bash
# Clear dependencies and reinstall
rm -rf node_modules yarn.lock
yarn install

# Clear Next.js cache
rm -rf .next
yarn build

# Fix PostCSS configuration
# Ensure postcss.config.mjs uses '@tailwindcss/postcss': {}

# Fix Vercel deployment
# Ensure @tailwindcss/postcss is in dependencies, not devDependencies
```

## 📚 Documentation

- **[CONFIGURATION_GUIDE.md](./CONFIGURATION_GUIDE.md)** - Complete guide to the configuration system
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Vercel deployment guide and troubleshooting
- **[CHANGELOG.md](./CHANGELOG.md)** - Project changelog and version history
- **Component Examples** - See `components/examples/` for configuration usage examples

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the maintainers for contribution guidelines.

---

**Built with ❤️ using Next.js and modern web technologies**

**Last Updated**: December 2024 - Fixed PostCSS plugin compatibility issues, added centralized configuration system, and resolved Vercel deployment problems
