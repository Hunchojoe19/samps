import "@/styles/globals.css";
import "@/styles/addCompanyPageStyle/addCompanyModal.css";
import "@/styles/addCompanyPageStyle/addCompanyDetails.css";
import { Nunito_Sans } from "next/font/google";
import type { AppProps } from "next/app";

const nunito_sans = Nunito_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito_sans.className}>
      <Component {...pageProps} />
    </main>
  );
}
