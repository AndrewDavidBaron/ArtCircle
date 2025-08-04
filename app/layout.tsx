// app/layout.tsx
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "ArtCircle",
  description: "Empowering Artists to Build Their Circle and Career",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
        {/* NavBar sticks to top */}
        <NavBar />

        {/* Main content area: grow to fill, center horizontally, with max width */}
        <div className="flex-grow flex items-start justify-center pt-8 px-4">
          <main className="w-full max-w-4xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
<}
