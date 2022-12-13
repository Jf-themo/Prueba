import {Entity, model, property} from '@loopback/repository';

@model()
export class Products extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Code: string;

  @property({
    type: 'string',
    required: true,
  })
  Descr: string;

  @property({
    type: 'string',
    required: true,
  })
  Label: string;

  @property({
    type: 'string',
    required: true,
  })
  Category: string;

  @property({
    type: 'number',
    required: true,
  })
  Quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  Price: number;

  @property({
    type: 'number',
    required: true,
  })
  IdCompany: number;


  constructor(data?: Partial<Products>) {
    super(data);
  }
}

export interface ProductsRelations {
  // describe navigational properties here
}

export type ProductsWithRelations = Products & ProductsRelations;
