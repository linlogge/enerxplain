import "../styles/globals.css";

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Lato } from "@next/font/google";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from '../next-i18next.config.js'

const font = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    const Layout = getLayout(<Component {...pageProps} />)

    return (
        <>
            <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
            {Layout}
        </>
    );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
