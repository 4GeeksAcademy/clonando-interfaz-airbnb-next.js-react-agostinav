import { HomeView } from "@/components/HomeView";
import { categories } from "@/data/categories";
import { listings } from "@/data/listings";

const HomePage = () => (
  <HomeView categories={categories} listings={listings} />
);

export default HomePage;