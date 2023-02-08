import Image from "next/image";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'home'])),
      },
    }
  }

const HomePage: NextPageWithLayout = () => {
    const { t } = useTranslation('home')

    return (
        <>
            <section className="h-[70vh] relative">
                <div className="absolute top-0 right-0 left-0 bottom-0">
                    <div className="w-[55%] ml-auto h-full relative">
                        <Image src="/img1.jpg" width={800} height={600} alt="" className="w-full h-full object-cover" />
                        <div className="w-full h-1/3 bg-gradient-to-t from-transparent to-slate-900 absolute top-0 right-0 left-0 opacity-60"></div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <div className="container mx-auto px-4 h-full flex flex-row items-center pt-16">
                        <div className="w-[40%]">
                            <h1 className="text-5xl font-bold">{t("title")}</h1>
                            <p className="mt-8 text-lg">Die Energiewende ist eine Chance für unsere Zukunft.</p>
                            <p className="text-lg">Wir wollen Verständnis fördern und Begeisterung wecken - technologieoffen und projektunabhängig.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-2 relative h-60">
                <div className="col-span-1 relative">
                    <Image src="/img2.jpg" fill alt="" className="object-cover" />
                </div>
                <div className="col-span-1 relative">
                    <Image src="/img3.jpg" fill alt="" className="object-cover" />
                </div>
            </section>
            <section className="py-8">
                <div className="container mx-auto px-4 py-16 max-w-5xl">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">
                            <h2 className="text-4xl font-bold text-green-600">Etwas über uns</h2>
                        </div>
                        <div className="col-span-2">
                            <p className="text-lg">Die kommenden Jahrzehnte werden weitreichende Änderungen in das Leben aller Menschen bringen. Der Klimawandel gefährdet die Grundlagen unserer Kultur. Doch auch der Kampf gegen den Klimawandel gelingt nur, wenn wir vieles ändern – wie die Energieversorgung, die Mobilität, das Bauen, die Produktionsweisen, unsere Ernährungsgewohnheiten und unsere Lebenseinstellung. Nur dann wird bis 2050 eine klimaneutrale Welt erreicht werden. Und nur dann wird diese Welt eine lebenswerte sein.</p>
                            <p className="text-lg mt-4">Die Energiewende betrifft alle Menschen und sie wird nur gelingen, wenn alle sie mitgestalten. Deshalb brauchen wir eine neue Art der Kommunikation.</p>
                            <p className="text-lg text-green-600 font-bold mt-4">„Akzeptanz“ reicht nicht aus</p>
                            <p className="text-lg mt-4">
                                Es gibt viele Versuche, über die Energiewende zu informieren. Die meisten Angebote setzen darauf, durch Vermittlung von Fakten Akzeptanz zu schaffen. Akzeptieren muss ich Dinge, die nicht zu ändern sind.
                            </p>
                            <p className="text-lg font-bold mt-4">Wir gehen anders vor.</p>
                            <p className="text-lg mt-4">Wir wollen alle Menschen zu aktiven Unterstützern der Energiewende machen – gut informierte Menschen, die wissen, was möglich und nötig ist im Kampf gegen den Klimawandel.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

HomePage.getLayout = (page) => <Layout>{page}</Layout>

export default HomePage;