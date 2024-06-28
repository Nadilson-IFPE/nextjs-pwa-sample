import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Nadilson's Next.js PWA Sample" />
        <meta name="description" content="Um exemplo de Progressive Web App com Next.js 14.x" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/icons/icon-192x192.png" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Main />
        <Footer />
        <NextScript />

        <Script id="service-worker" strategy="afterInteractive">
          {`if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
              navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
                console.log('Service Worker registrado com sucesso: ', registration.scope);
              }).catch(function (error) {
                console.log('Falha ao registrar o Service Worker: ', error);
              });
            });
          }`}
        </Script>
      </body>
    </Html>
  );
}
