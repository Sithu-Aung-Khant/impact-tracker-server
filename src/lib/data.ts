export type Distribution = {
  id: string;
  date: string;
  township: string;
  aidType: string;
  quantity: number;
  fieldWorker: string;
  notes?: string;
};

export type SummaryData = {
  township: string;
  foodKits: number;
  educationalMaterials: number;
  medicalSupplies: number;
  total: number;
};

export type AidTypeData = {
  name: string;
  value: number;
  color: string;
};

// This would typically come from an API or database
export const townships = [
  'Yangon',
  'Mandalay',
  'Naypyidaw',
  'Bago',
  'Mawlamyine',
  'Taunggyi',
  'Pathein',
  'Monywa',
  'Meiktila',
  'Myitkyina',
];

export const aidTypes = [
  'Food Kits',
  'Educational Materials',
  'Medical Supplies',
  'Hygiene Kits',
  'Shelter Materials',
  'Water Purification',
  'Clothing',
];

// Mock function to simulate fetching data with delay
export async function fetchWithDelay<T>(data: T, delay = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}
