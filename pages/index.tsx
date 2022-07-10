import Head from "next/head";
import { GetStaticProps } from "next";
import { getProductsByCategory } from "../services/products";
import { IProduct } from "../models/IProduct";
import Image from "next/image";

type Props = {
  productByCategory: IProduct[];
};

const Home = ({ productByCategory }: Props) => {
  return (
    <div>
      <Head>
        <title>Makeup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Browse by categories</h1>
        {productByCategory.map((product) => (
          <div className="my-10" key={product.categoryId}>
            <h2>{product.displayName}</h2>
            {product.products.map((item) => (
              <div key={item.productId}>
                <Image
                  src={item.image450}
                  alt={item.displayName}
                  width={300}
                  height={300}
                />
                <strong>{item.brandName}</strong>
                <p>{item.displayName}</p>
              </div>
            ))}
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
