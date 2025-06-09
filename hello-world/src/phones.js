export const phones = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Телефон ${i + 1}`,
  price: 20000 + i * 500,
  image: `https://source.unsplash.com/featured/300x200?phone&sig=${i}`,
}))
