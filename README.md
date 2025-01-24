
# Advanced Product Reviews Application

A modern, responsive product reviews application built with Next.js 13+, featuring advanced search capabilities, filtering options, and a polished user interface.

![Product Reviews Application Screenshot](/public/images/image.png)

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## Features

- 🔍 Advanced search functionality with real-time updates
- 🎯 Comprehensive filtering system (price, category, brand, color, size)
- 📱 Fully responsive design optimized for all devices
- ⚡ Server-side rendering with Next.js 13+
- 🎨 Modern UI with smooth animations using Framer Motion
- 💫 Interactive product cards with hover effects
- 🖼️ Modal-based detailed product view
- 📊 Pagination for better data management
- ⚠️ Error boundary implementation for graceful error handling
- 🔄 Loading states and error feedback
- 🎭 Beautiful icons using Lucide React

---

## Technologies Used

- [Next.js 13+](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Axios](https://axios-http.com/)

---

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/PraiseTechzw/product_reviews_application.git
   cd product_reviews_application
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or, if using Yarn:
   ```
   yarn install
   ```



3. Start the development server:
   ```bash
   npm run dev
   ```
   or, with Yarn:
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.

---

## Project Structure

```
product_reviews_application/
├── components/       # Reusable React components
├── pages/            # Next.js pages
├── public/           # Static assets
├── styles/           # Global styles and Tailwind CSS configurations
├── utils/            # Utility functions and helpers
├── hooks/            # Custom React hooks
├── services/         # API service files
├── .env.local        # Environment variables (ignored in git)
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

---

## Usage

1. Navigate to the homepage to explore a list of products.
2. Use the search bar to find specific products in real-time.
3. Apply filters for price, category, brand, color, or size to refine results.
4. Click on a product card for a detailed view in a modal.
5. Navigate between pages using the pagination system.
6. Experience smooth animations and responsive design on any device.

---

## API Integration

The application integrates with a custom API to fetch product data. The following endpoints are used:

- **GET** `/products`: Retrieve a list of products with optional search and filters.
- **GET** `/products/:id`: Fetch detailed information about a specific product.
- **GET** `/categories`: Retrieve available product categories.
- **GET** `/filters`: Fetch dynamic filter options.


---

## Development

- Run the development server: 
  ```bash
  npm run dev
  ```
- Build the application for production:
  ```bash
  npm run build
  ```
- Start the production server:
  ```bash
  npm run start
  ```

---


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## Acknowledgments

- Thanks to the creators of Next.js, Tailwind CSS, and Framer Motion for their amazing tools.
- Shoutout to [Lucide Icons](https://lucide.dev/) for the beautiful icons.
- Special thanks to everyone who contributed to this project.

---

## Contact

For questions, feedback, or support, reach out via:

- Email: [praisetechzw@gmail.com](mailto:praise@example.com)
- GitHub: [PraiseTechzw](https://github.com/PraiseTechzw)
- LinkedIn: [Praise Masunga](https://linkedin.com/in/praise-masunga)

