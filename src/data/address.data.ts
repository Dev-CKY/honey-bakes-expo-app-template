export interface Address {
  id: number;
  title: string;
  address: string;
  phoneNumber: string;
}

export const ADDRESS_DATA: Address[] = [
  {
    id: 1,
    title: "Home",
    address: "Mr John Smith, 132, My Street. US California",
    phoneNumber: "+97624 09727",
  },
  {
    id: 2,
    title: "Office",
    address: "Mr John Smith, 132, My Street. US California",
    phoneNumber: "+76472 85211",
  },
  {
    id: 3,
    title: "Friend's house",
    address: "Mr John Smith, 132, My Street. US California",
    phoneNumber: "+82063 08629",
  },
];
