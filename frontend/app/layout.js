import "./globals.css";



export const metadata = { 
  title: "Tour- An art of tour",
  description: "Work of art",
  icons: {
      icon: "./1.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F3E9D6]">
        {children}
      </body>
    </html>
  );
}
