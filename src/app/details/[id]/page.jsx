export async function generateStaticParams() {
  const products = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  }).then((res) => res.json());

  return products.map((product) => ({
    id: product.id,
  }));
}

async function getData(id) {
  const products = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  }).then((res) => res.json());
  const product = products.find((product) => product.id == id);
  return product;
}

export default async function Page({ params }) {
  const data = await getData(params.id);
  return <h1>{data.name}</h1>;
}
