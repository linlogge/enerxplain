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

const WorkPage: NextPageWithLayout = () => {
    const { t } = useTranslation('home')

    return (
        <></>
    );
}

WorkPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default WorkPage;
