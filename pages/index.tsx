import Head from "next/head";
import { GetStaticProps } from "next";
import { getProductsByCategory } from "../services/products";
import { IProduct } from "../models/IProduct";
import Card from "../components/Card";
import CustomCarousel from "../components/Carousel";

type Props = {
  productByCategory: IProduct[];
};

const Home = ({ productByCategory }: Props) => {
  return (
    <div className="bg-tertiary">
      <Head>
        <title>Makeup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-primary">
        {productByCategory.map((product) => (
          <div className="pt-4 px-4" key={product.categoryId}>
            <h2 className="px-2 container mx-auto">{product.displayName}</h2>
            <CustomCarousel>
              {product.products.map((item) => (
                <div
                  key={item.productId}
                  className="py-6 px-2 h-full select-none cursor-pointer"
                >
                  <Card item={item} />
                </div>
              ))}
            </CustomCarousel>
          </div>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const productByCategory = await getProductsByCategory();

  return {
    props: {
      productByCategory,
    },
  };
};

export default Home;
