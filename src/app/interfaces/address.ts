export interface Address {
  id: number;
  name: string;
  cep: string;
  street: string; //logradouro
  complement: string; //complemento
  neighborhood: string; //bairro
  city: string; //localidade
  usps: string; //uf
}
