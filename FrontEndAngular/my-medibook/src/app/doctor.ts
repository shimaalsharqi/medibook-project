export interface Doctor {
    id: number;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  available: boolean;
  fee: number;
  availableDays: string[];
}
