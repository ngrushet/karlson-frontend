'use client'
// use effect try mazafaka
import React, { useState, FormEvent } from 'react'
import axios from 'axios'


export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [customerId, setCustomerId] = useState('')
    const [departureAddress, setDepartureAddress] = useState('')
    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [departureDateTime, setDepartureDateTime] = useState('')
    const [deliveryDateTime, setDeliveryDateTime] = useState('')
    const [orderCost, setOrderCost] = useState('')
    const [items, setItems] = useState('')


    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts

        try {
            const formData = new FormData(event.currentTarget)
            console.log(JSON.stringify(formData))
            const createOrderData: CreateOrderDto {
                customerId: formData,

            }
            const response = await axios.post(
                String(process.env.REACT_APP_BACKEND_URL),
                createOrderData
            )
            if (!response.) {
                throw new Error('Failed to submit the data. Please try again.')
            }

            // Handle response if necessary
            const data = await response.json()
            // ...
        } catch (error: any) {
            // Capture the error message to display to the user
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form className="createOrderForm" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="customerId">Customer ID:</label>
                    <input type="number" name="customerId" id="customerId" required />
                </div>
                <div>
                    <label htmlFor="departureAddress">Departure Address:</label>
                    <input type="text" name="departureAddress" id="departureAddress" required />
                </div>
                <div>
                    <label htmlFor="deliveryAddress">Delivery Address:</label>
                    <input type="text" name="deliveryAddress" id="deliveryAddress" required />
                </div>
                <div>
                    <label htmlFor="departureDateTime">Departure Date and Time:</label>
                    <input type="datetime-local" name="departureDateTime" id="departureDateTime" required />
                </div>
                <div>
                    <label htmlFor="deliveryDateTime">Delivery Date and Time:</label>
                    <input type="datetime-local" name="deliveryDateTime" id="deliveryDateTime" required />
                </div>
                <div>
                    <label htmlFor="orderCost">Order Cost:</label>
                    <input type="number" name="orderCost" id="orderCost" step="0.01" required />
                </div>
                <div>
                    <label htmlFor="items">Items:</label>
                    <input type="text" name="items" id="items" required />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Оформить заказ3'}
                </button>
            </form>
        </div>
    )
}