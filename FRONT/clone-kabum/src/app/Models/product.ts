export interface Product {
    id: number;
    name: string;
    description?: string;
    manufacturer: string;
    oldPrice: number;
    price: number;
    quantity: number;
    onPromotion: boolean;
    discount: number;
    imageUrl: string;
} 