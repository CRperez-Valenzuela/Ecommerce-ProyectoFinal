import React from 'react';
import { Chart } from 'primereact/chart';
import orders from "../../../mockDB/mockOrders"


const MonthlySales = () => {
    const monthlySales = {};

    orders.forEach(order => {
        const month = new Date(order.fecha).toLocaleString('es-AR', { month: 'long' });
        monthlySales[month] = (monthlySales[month] || 0) + order.total;
    });

    const data = {
        labels: Object.keys(monthlySales),
        datasets: [
            {
                label: 'Ventas Mensuales',
                data: Object.values(monthlySales),
                fill: true,
                borderColor: '#42A5F5',
                backgroundColor: 'rgba(66,165,245,0.2)',
                tension: 0.4
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
            <h5>Evolución de Ventas por Mes</h5>
            <Chart type="line" data={data} options={options} />
        </div>
    );
};

export default MonthlySales;