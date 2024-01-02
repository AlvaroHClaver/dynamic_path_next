import Image from "next/image";
import styles from "./page.module.css";
import { ProductCard } from "@/components/product_card/ProductCard";

async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const data = await getProducts();

  return (
    <main className={styles.main}>
      {data.map((element, index) => (
        <ProductCard
          img={element.imageUrl}
          price={element.price}
          title={element.name}
          description={element.description}
          key={index}
        />
      ))}
    </main>
  );
}
