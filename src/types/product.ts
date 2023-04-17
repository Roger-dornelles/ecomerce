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
};

export type AddProductType = {
  id: number;

  form: any;
};
