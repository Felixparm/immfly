# Immfly Frontend Mobile Test

A React Native mobile application built with Expo for product browsing and payment processing.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app on your mobile device (for testing)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd immfly-frontend-mobile-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Expo CLI globally** (if not already installed)
   ```bash
   npm install -g @expo/cli
   ```

## Running the Project

1. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

2. **Run on different platforms**
   - **iOS Simulator**: Press `i` in the terminal or run `npm run ios`
   - **Android Emulator**: Press `a` in the terminal or run `npm run android`
   - **Web Browser**: Press `w` in the terminal or run `npm run web`
   - **Physical Device**: Scan the QR code with Expo Go app

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── atoms/          # Basic components (buttons, inputs)
│   ├── molecules/      # Composite components (cards, modals)
│   ├── organisms/      # Complex components (forms, lists)
│   └── templates/      # Layout components
├── screens/            # Screen components
│   ├── ProductList/    # Product listing screen
│   └── Payment/        # Payment processing screen
├── store/              # Redux store and slices
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── theme.ts           # App theme configuration
```

## Features

- **Product Catalog**: Browse products with images and pricing
- **Shopping Cart**: Add/remove items with quantity management
- **Currency Conversion**: Support for multiple currencies (USD, EUR, GBP)
- **Price Categories**: Different pricing tiers (Retail, Business, First Class)
- **Payment Processing**: Cash and card payment options with form validation
- **Responsive Design**: Optimized for mobile devices

## Technologies Used

- **React Native** with **Expo**
- **TypeScript** for type safety
- **Redux Toolkit** for state management
- **TanStack Query** for API calls
- **React Hook Form** for form validation
- **Styled Components** for styling
- **React Native Gesture Handler** for swipe interactions

## API

The app connects to a mock API at:
```
https://my-json-server.typicode.com/Felixparm/immfly-api
```

## Development Commands

- `npm start` - Start the development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint

## Technical Choices

### Architecture & Design Patterns

- **Atomic Design**: Components are organized in a hierarchical structure (atoms → molecules → organisms → templates) for better reusability and maintainability. This approach ensures consistent UI patterns and makes the codebase scalable.

- **Centralized Theme**: A unified theme system provides consistent colors, typography, and spacing across the entire application, making design updates easier and ensuring visual coherence.

- **Utility Functions**: Common logic is centralized in utility files (formatters, currency conversion, image mapping) to promote code reuse and maintain single sources of truth.

### Styling & Layout

- **Styled Components**: Provides component-scoped styling with TypeScript support, eliminating CSS conflicts and enabling dynamic styling based on props. Each component has its own styles file for better organization.

- **Flexbox Layout**: Leveraged extensively for responsive layouts that adapt to different screen sizes, ensuring consistent UI across devices while maintaining clean and readable code.

### State Management & Data Fetching

- **TanStack Query**: Handles API calls with built-in caching, loading states, and error handling. Provides better user experience with optimistic updates and background refetching.

- **Redux Toolkit**: Manages the shopping basket state globally, allowing seamless data sharing between screens. The toolkit reduces boilerplate code while maintaining predictable state updates.

### Form Handling & Performance

- **React Hook Form**: Provides efficient form validation with minimal re-renders. Particularly useful for the card payment form with complex validation rules (expiration date, CVV, card number format).

- **Performance Optimization**: Uses `useMemo` and `useCallback` hooks to prevent unnecessary recalculations and re-renders, especially important for price calculations and product grid rendering.

### Additional Technical Decisions

- **TypeScript**: Ensures type safety and better developer experience with IntelliSense and compile-time error detection.
- **Gesture Handler**: Enables smooth swipe-to-delete functionality for basket items with native performance.
- **Modular Structure**: Screens are organized in separate directories with their own styles and types, promoting maintainability and team collaboration.
