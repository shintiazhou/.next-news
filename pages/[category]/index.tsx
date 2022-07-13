import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { INews } from "../../models/INews";
import HeadingNews from "../../components/HeadingNews";
import { ParsedUrlQuery } from "querystring";
import newsCategories from "../../data/newsCategories";
import { baseURL } from "../../services/config";
import NewsCard from "../../components/NewsCard";
import { useRouter } from "next/router";

type Props = {
  newsData: INews[];
};

const Home = ({ newsData }: Props) => {
  const router = useRouter();
  const queryParam = router.query.category;
  const filteredNews =
    newsData &&
    newsData.filter(
      (news) => news.urlToImage !== null && news.urlToImage.includes("https")
    );
  return (
    <div>
      <Head>
        <title>Next News</title>
        <meta name="description" content="Browse any news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-primary container mx-auto p-4 ">
        {newsData && (
          <>
            <HeadingNews headingNews={newsData[0]} />
            <br />
            <div className="flex justify-between">
              <strong className="capitalize">{queryParam}</strong>
              <span className="text-blue-500 font-bold">See More</span>
            </div>
            {filteredNews.map(
              (news, index) =>
                index > 0 && <NewsCard key={index} newsData={news} />
            )}
          </>
        )}
      </main>
    </div>
  );
};

interface IParams extends ParsedUrlQuery {
  category: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = newsCategories.map((category) => ({
    params: { category: category },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { category } = context.params as IParams;
  const res = await fetch(`${baseURL}&category=${category}&pageSize=10`);
  const newsData = await res.json();

  return {
    props: {
      newsData: newsData.articles || null,
    },
  };
};

export default Home;
