
export interface Product {
  nombre: string;
  descripcion: string;
  categoria: string;
  precioCompra: string;
  precio: string;
  cantidad: string;
  imagen: File;
}

export const productos: Product[] = [
  {
    nombre: "Nike",
    descripcion: "Rojas y blancas",
    categoria: "zapatillas",
    precioCompra: "12,45",
    precio: "25",
    cantidad: "20",
    imagen: null
  },
  {
    nombre: "string",
    descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al origina",
    categoria: "string",
    precioCompra: "string",
    precio: "string",
    cantidad: "string",
    imagen: null
  },
  {
    nombre: "string",
    descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al origina",
    categoria: "string",
    precioCompra: "string",
    precio: "string",
    cantidad: "string",
    imagen: null
  }
]

