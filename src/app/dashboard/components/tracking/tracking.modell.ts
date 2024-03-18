export interface FoodItem {
    position: number;
    name: string;
    protein: number; 
    calories: number;
    fat: number; 
    carbohydrates: number; 
    fiber: number; 
  }
  
  export const ELEMENT_DATA: FoodItem[] = [
    { position: 1, name: 'Chicken Breast (skinless, boneless)', protein: 31, calories: 165, fat: 3.6, carbohydrates: 0, fiber: 0 },
    { position: 2, name: 'Broccoli (cooked)', protein: 2.8, calories: 55, fat: 0.6, carbohydrates: 11.2, fiber: 5.1 },
    { position: 3, name: 'Salmon (wild-caught)', protein: 25, calories: 208, fat: 13, carbohydrates: 0, fiber: 0 },
    { position: 4, name: 'Brown Rice (cooked)', protein: 4.5, calories: 112, fat: 0.9, carbohydrates: 23.5, fiber: 1.8 },
    { position: 5, name: 'Eggs', protein: 6, calories: 78, fat: 5, carbohydrates: 0.6, fiber: 0 },
    { position: 6, name: 'Banana', protein: 1.3, calories: 105, fat: 0.4, carbohydrates: 27, fiber: 3.1 },
    { position: 7, name: 'Spinach (cooked)', protein: 5.4, calories: 41, fat: 0.5, carbohydrates: 7, fiber: 4.3 },
    { position: 8, name: 'Sweet Potato (baked)', protein: 2, calories: 103, fat: 0.2, carbohydrates: 23.6, fiber: 3.8 },
    { position: 9, name: 'Quinoa (cooked)', protein: 8, calories: 222, fat: 3.6, carbohydrates: 39, fiber: 5.2 },
    { position: 10, name: 'Almonds', protein: 6, calories: 164, fat: 14, carbohydrates: 6, fiber: 3.5 },
    { position: 11, name: 'Greek Yogurt (plain, non-fat)', protein: 10, calories: 59, fat: 0, carbohydrates: 3.6, fiber: 0 },
    { position: 12, name: 'Apple', protein: 0.5, calories: 95, fat: 0.3, carbohydrates: 25, fiber: 4.4 },
    { position: 13, name: 'Oatmeal (cooked)', protein: 6, calories: 145, fat: 2.5, carbohydrates: 25, fiber: 4 },
    { position: 14, name: 'Cottage Cheese (low-fat)', protein: 11, calories: 81, fat: 1, carbohydrates: 3.4, fiber: 0 },
    { position: 15, name: 'Beef (lean ground)', protein: 18, calories: 250, fat: 18, carbohydrates: 0, fiber: 0 },
    { position: 16, name: 'Green Beans (cooked)', protein: 2, calories: 31, fat: 0.1, carbohydrates: 7, fiber: 3.4 },
    { position: 17, name: 'Lentils (cooked)', protein: 9, calories: 230, fat: 0.4, carbohydrates: 40, fiber: 15.6 },
    { position: 18, name: 'Avocado', protein: 2, calories: 160, fat: 15, carbohydrates: 9, fiber: 7 },
    { position: 19, name: 'Blueberries', protein: 0.7, calories: 84, fat: 0.3, carbohydrates: 21, fiber: 3.6 },
    { position: 20, name: 'Turkey Breast (cooked, skinless)', protein: 29, calories: 135, fat: 1, carbohydrates: 0, fiber: 0 },
  ];
  