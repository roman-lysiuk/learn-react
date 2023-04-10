export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface Character {
  _id: string;
  height: '';
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}
export interface DataCharacterApi {
  docs: Character[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
