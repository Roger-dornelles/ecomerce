export type ProductType = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  isInstallments: true;
  quantity: number;
  updatedAt: string;
  userID: number;
  value: string;
  photosID: number[] | number;
  disabled?: boolean;
};

export type ProductProps = {
  name: string;
  image: string;
  quantity: number;
  id: number;
  availableQuantity?: number;
  disabled?: boolean;
};

export type AddProductType = {
  id: number;

  form: any;
};
