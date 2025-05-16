import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "class 65",
  description: "for note parpas",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex justify-center ">
          <ul className="w-[100%] h-16 flex bg-slate-900 text-yellow-50 pl-[40%] items-center">
            <li className="ml-">
              <Link
                className="p-4 hover:bg-white hover:rounded-3xl hover:text-slate-900 "
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="ml-">
              <Link
                className="p-4 hover:bg-white hover:rounded-3xl hover:text-slate-900 "
                href="/About"
              >
                About
              </Link>
            </li>
            <li className="ml-">
              <Link
                className="p-4 hover:bg-white hover:rounded-3xl hover:text-slate-900 "
                href="/Footer"
              >
                More
              </Link>
            </li>
          </ul>
        </div>

        {children}
        <footer>
          <nav>
            <h6 className="text-center text-black text-4xl">end</h6>
          </nav>
        </footer>
      </body>
    </html>
  );
}
