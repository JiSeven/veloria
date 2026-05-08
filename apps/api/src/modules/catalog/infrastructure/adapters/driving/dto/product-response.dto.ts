export interface ScentProfileDto {
  top: string[];
  heart: string[];
  base: string[];
}

export interface ProductResponseDto {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  description: string;
  scentProfile: ScentProfileDto;
}
