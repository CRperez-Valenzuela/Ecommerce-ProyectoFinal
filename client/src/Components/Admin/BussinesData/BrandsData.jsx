import React from 'react';
import { Chart } from 'primereact/chart';
import orders from "../../../mockDB/mockOrders"


const BrandsData = () => {
    const brandSales = {};

    orders.forEach(order => {
        order.shoes.forEach(item => {
            const brand = item.shoe.brand;
            brandSales[brand] = (brandSales[brand] || 0) + item.quantity;
        });
    });

    const data = {
        labels: Object.keys(brandSales),
        datasets: [
            {
                label: 'Cantidad Vendida',
                data: Object.values(brandSales),
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
        }
    };

    return (
        <div className="card">
            <h5>Marcas Más Vendidas</h5>
            <Chart type="bar" data={data} options={options} />
        </div>
    );
};

export default BrandsData;