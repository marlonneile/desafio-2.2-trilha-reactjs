import { FoodData } from './FoodData';

export type FoodInput = Omit<FoodData, 'id' | 'available'>;
