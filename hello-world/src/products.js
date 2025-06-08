export const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Телевизор ${i + 1}`,
  price: 30000 + i * 1000,
  image: `https://source.unsplash.com/featured/300x200?tv&sig=${i}`,
}))
