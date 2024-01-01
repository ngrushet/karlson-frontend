import axios, { AxiosResponse } from 'axios'

interface CreateOrderDto {
  customerId: number;
  departureAddress: string;
  deliveryAddress: string;
  departureDateTime: Date;
  deliveryDateTime: Date;
  orderCost: number;
  status: string;
  courierId?: number;
  items: string;
}

const $backend = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
})

export async function createNewOrder(createOrderForm: CreateOrderDto) {
  const {data} = await $backend.post('/order-workflow/createOrder', createNewOrder);
  return data;
}