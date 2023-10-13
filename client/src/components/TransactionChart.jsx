import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Expense: 400,
		Income: 240
	},
	{
		name: 'Feb',
		Expense: 300,
		Income: 139
	},
	{
		name: 'Mar',
		Expense: 200,
		Income: 980
	},
	{
		name: 'Apr',
		Expense: 278,
		Income: 398
	},
	{
		name: 'May',
		Expense: 189,
		Income: 480
	},
	{
		name: 'Jun',
		Expense: 239,
		Income: 380
	},
	{
		name: 'July',
		Expense: 349,
		Income: 430
	},
	{
		name: 'Aug',
		Expense: 200,
		Income: 980
	},
	{
		name: 'Sep',
		Expense: 278,
		Income: 398
	},
	{
		name: 'Oct',
		Expense: 189,
		Income: 480
	},
	{
		name: 'Nov',
		Expense: 239,
		Income: 380
	},
	{
		name: 'Dec',
		Expense: 349,
		Income: 430
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#0ea5e9" />
						<Bar dataKey="Expense" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
