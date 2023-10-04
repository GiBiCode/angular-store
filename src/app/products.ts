export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo : string
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Un teléfono grande con una de las mejores pantallas',
    photo : 'assets/images/ima1.jpg'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Un gran teléfono con una de las mejores cámaras',
    photo : 'assets/images/ima2.jpg'
  },
  {
    id: 3,
    name: 'Pixel 4a',
    price: 500,
    description: '',
    photo : 'assets/images/ima3.jpg'
  },
  {
    id: 4,
    name: 'Pixel 5',
    price: 700,
    description: 'Flafship de Google a un precio asequible',
    photo : 'assets/images/ima4.jpg'
  },
  {
    id: 5,
    name: 'Pixel 5 XL',
    price: 800,
    description: 'Flafship de Google a un precio asequible' ,
    photo : 'assets/images/ima5.jpg'
  },
  {
    id : 6,
    name: 'Pixel 6',
    price: 900,
    description: 'La mejor expereincia de Android',
    photo : 'assets/images/ima6.jpg'
  },
  {
    id: 7,
    name: 'Pixel 6 XL',
    price: 1000,
    description: 'La mejor expereincia de Android en un teléfono grande',
    photo : 'assets/images/ima7.jpg'
  }
  
];


