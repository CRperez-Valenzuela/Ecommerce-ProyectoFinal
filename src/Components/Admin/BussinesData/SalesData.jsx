import React from 'react';
import { Chart } from 'primereact/chart';
import orders from "../../../mockDB/mockOrders"

const SalesData = () => {
    const shoeSales = {};

    orders.forEach(order => {
        order.shoes.forEach(item => {
            const shoeName = item.shoe.name;
            shoeSales[shoeName] = (shoeSales[shoeName] || 0) + item.quantity;
        });
    });

    const data = {
        labels: Object.keys(shoeSales),
        datasets: [
            {
                label: 'Cantidad Vendida',
                data: Object.values(shoeSales),
                backgroundColor: '#42A5F5'
            }
        ]
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        <div className="card">
            <h5>Modelos de Zapatillas Más Vendidos</h5>
            <Chart type="bar" data={data} options={options} />
        </div>
    );
};

export default SalesData;