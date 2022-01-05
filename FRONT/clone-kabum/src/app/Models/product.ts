export interface Product {
    id: number;
    name: string;
    oldPrice: number;
    price: number;
    quantity: number;
    imageUrl: string;
    description?: string;
    onPromotion: boolean;
    discount: number;
}
