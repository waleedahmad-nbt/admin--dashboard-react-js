import MainLayout from "./_components/MainLayout/MainLayout";
import "./globals.css";

export const metadata = {
  title: "Admin Dashboard - Next.js",
  description:
    "Admin dashboard for managing e-commerce operations built with Next.js, featuring product management, order tracking, and user analytics.",
  keywords:
    "admin dashboard, Next.js, e-commerce management, product management, order tracking, user analytics",
  icons: ["/images/Logo Icon.svg"],
  author: "Muhammad Asad",
  robots: "index, follow",
  "og:title": "Admin Dashboard - Next.js",
  "og:description":
    "Efficiently manage your e-commerce site with this admin dashboard. Built with Next.js for fast, dynamic control over products, orders, and analytics.",
  "og:type": "website",
  // "og:url": "https://yourwebsite.com/admin-dashboard",
  "og:image": "/images/Mockup (1).png",
  "twitter:card": "summary_large_image",
  "twitter:title": "Admin Dashboard - Next.js",
  "twitter:description":
    "Manage products, orders, and analytics efficiently with this powerful admin dashboard built with Next.js.",
  "twitter:image": "/images/Mockup (1).png",
};

// Move the viewport settings to the proper export:
export const viewport = "width=device-width, initial-scale=1.0";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        spellCheck="false"
        cz-shortcut-listen="true"
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
