export interface IPerson {
  name: string;
  phone: string;
  email: string;
  title?: string;
  address?: string;
  phoneDisplay: () => string
}
