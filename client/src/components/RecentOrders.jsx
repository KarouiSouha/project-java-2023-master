import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2023-09-13T01:24:00',
		order_total: '$59.97',
		current_order_status: 'PLACED',
		shipment_address: 'Manitoba Street, CA 90017'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2023-08-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2023-08-17T07:14:00',
		order_total: '$36.44',
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2023-08-16T12:40:00',
		order_total: '$34.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2023-08-14T03:24:00',
		order_total: '$76.00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2023-08-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
	id: '9',
	product_id: '9876',
	customer_id: '5432',
	customer_name: 'John Smith',
	order_date: '2023-09-13T10:15:00',
	order_total: '$29.99',
	current_order_status: 'SHIPPED',
	shipment_address: 'New York, NY'
	},
	{
	id: '10',
	product_id: '6543',
	customer_id: '8765',
	customer_name: 'Sarah Johnson',
	order_date: '2023-09-13T12:45:00',
	order_total: '$79.99',
	current_order_status: 'DELIVERED',
	shipment_address: 'Los Angeles, CA'
	},
	{
	id: '11',
	product_id: '2345',
	customer_id: '7890',
	customer_name: 'Michael Davis',
	order_date: '2023-09-13T15:20:00',
	order_total: '$19.99',
	current_order_status: 'OUT_FOR_DELIVERY',
	shipment_address: 'Chicago, IL'
	},
	{
	id: '12',
	product_id: '8765',
	customer_id: '5432',
	customer_name: 'John Smith',
	order_date: '2023-09-13T18:10:00',
	order_total: '$39.99',
	current_order_status: 'PLACED',
	shipment_address: 'San Francisco, CA'
	},
	{
	id: '13',
	product_id: '3456',
	customer_id: '9876',
	customer_name: 'Emily Wilson',
	order_date: '2023-09-13T20:55:00',
	order_total: '$59.99',
	current_order_status: 'SHIPPED',
	shipment_address: 'Seattle, WA'
	},
	{
	id: '14',
	product_id: '5678',
	customer_id: '2345',
	customer_name: 'David Brown',
	order_date: '2023-09-13T23:30:00',
	order_total: '$49.99',
	current_order_status: 'DELIVERED',
	shipment_address: 'Miami, FL'
	},
	{
	id: '15',
	product_id: '7890',
	customer_id: '8765',
	customer_name: 'Sarah Johnson',
	order_date: '2023-09-14T02:15:00',
	order_total: '$69.99',
	current_order_status: 'OUT_FOR_DELIVERY',
	shipment_address: 'Dallas, TX'
	},
	{
	id: '16',
	product_id: '6543',
	customer_id: '5432',
	customer_name: 'John Smith',
	order_date: '2023-09-14T05:00:00',
	order_total: '$89.99',
	current_order_status: 'PLACED',
	shipment_address: 'Atlanta, GA'
	},
	{
	id: '17',
	product_id: '2345',
	customer_id: '7890',
	customer_name: 'Michael Davis',
	order_date: '2023-09-14T07:45:00',
	order_total: '$39.99',
	current_order_status: 'SHIPPED',
	shipment_address: 'Houston, TX'
	},
	{
	id: '18',
	product_id: '8765',
	customer_id: '5432',
	customer_name: 'John Smith',
	order_date: '2023-09-14T10:30:00',
	order_total: '$59.99',
	current_order_status: 'DELIVERED',
	shipment_address: 'Denver, CO'
	},
	{
	id: '19',
	product_id: '3456',
	customer_id: '9876',
	customer_name: 'Emily Wilson',
	order_date: '2023-09-14T13:15:00',
	order_total: '$29.99',
	current_order_status: 'OUT_FOR_DELIVERY',
	shipment_address: 'Phoenix, AZ'
	},
	{
	id: '20',
	product_id: '5678',
	customer_id: '2345',
	customer_name: 'David Brown',
	order_date: '2023-09-14T16:00:00',
	order_total: '$49.99',
	current_order_status: 'PLACED',
	shipment_address: 'Las Vegas, NV'
	},
	{
	id: '21',
	product_id: '7890',
	customer_id: '8765',
	customer_name: 'Sarah Johnson',
	order_date: '2023-09-14T18:45:00',
	order_total: '$79.99',
	current_order_status: 'SHIPPED',
	shipment_address: 'Orlando, FL'
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700 text-center">
					<thead>
						<tr>
							<th>ID</th>
							<th>Product ID</th>
							<th>Customer Name</th>
							<th>Order Date</th>
							<th>Order Total</th>
							<th>Shipping Address</th>
							<th>Order Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
