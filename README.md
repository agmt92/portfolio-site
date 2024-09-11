# Project Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The project is designed to be a portfolio website showcasing various projects and skills.

[Live Demo](https://portfolio-one-delta-49.vercel.app/)

## License

This project is licensed under specific terms. For detailed information, please refer to the [LICENSE.md](https://github.com/agmt92/portfolio-site/blob/main/LICENSE.md) file.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (20.x or later)
- pnpm (v6.x or later)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/agmt92/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

### Running the Development Server

To start the development server, run:



```bash
pnpm next dev --turbo
```

or

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.

### Building for Production

To build the project for production, run:

```bash
pnpm next build
```

This will create an optimized production build in the [`.next`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fmy-portfolio%2F.next%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/ag/GitHub/nextjs/my-portfolio/.next") directory.


### Linting

To run the linter, use:

```bash
pnpm next lint
```

## Project Structure

The project has the following structure:

```
.DS_Store
.env
.eslintrc.json
.gitignore
.next/
    ...
.nmprc
app/
    about/
        error.tsx
        page.tsx
    contact/
        error/
            page.tsx
        page.tsx
    layout.tsx
    page.tsx
components/
    Header.tsx
    Footer.tsx
    ContactForm.tsx
    MatrixRain.tsx
public/
    images/
        ...
    favicon.ico
styles/
    globals.css
    Home.module.css
next-env.d.ts
next-sitemap.config.js
next.config.js
package.json
pnpm-lock.yaml
postcss.config.js
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
```

- **app/**: Contains the main application code, including pages and components.
  - **about/**: Contains the About page and its error handling.
  - **contact/**: Contains the Contact page and its error handling.
- **components/**: Reusable components such as Header, Footer, ContactForm, and MatrixRain.
- **public/**: Static files such as images and favicon.
- **styles/**: Global and module-specific CSS files.
- **.next/**: Output directory for the build.
- **next.config.js**: Configuration file for Next.js.
- **tailwind.config.ts**: Configuration file for Tailwind CSS.
- **tsconfig.json**: TypeScript configuration file.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Steps to Deploy

1. **Push your code to GitHub**:

   Ensure your code is pushed to a GitHub repository.

2. **Create a Vercel account**:

   If you don't have one, create a Vercel account at [vercel.com](https://vercel.com).

3. **Import your project**:

   Import your project from GitHub into Vercel.

4. **Run Lint and Build**:

   Before deploying, run the following commands to check for any errors:

   ```bash
   pnpm next lint
   pnpm next build
   ```

5. **Configure your project**:

   During the import, Vercel will detect that you are using Next.js and will automatically configure the settings for you.

6. **Deploy**:

   Click the "Deploy" button to deploy your project.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - Your feedback and contributions on my portfolio are welcome!
