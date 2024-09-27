import React from 'react';
import { Chart } from 'primereact/chart';
import orders from "../../../mockDB/mockOrders"

const SportsData = () => {
    const sportSales = {};

    orders.forEach(order => {
        order.shoes.forEach(item => {
            const sport = item.shoe.sport;
            sportSales[sport] = (sportSales[sport] || 0) + item.quantity;
        });
    });

    const data = {
        labels: Object.keys(sportSales),
        datasets: [
            {
                label: 'Cantidad Vendida',
                data: Object.values(sportSales),
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
            }
        ]
    };

    const options = {
        scales: {
            r: {
                pointLabels: {
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
            <h5>Comparación de Ventas por Deporte</h5>
            <Chart type="radar" data={data} options={options} />
        </div>
    );
};

export default SportsData;