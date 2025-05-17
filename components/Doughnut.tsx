"use client"
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps) =>{
const data ={
    datasets: [{
        label: 'Banks',
        data:[1256900, 2345607, 3709404],
        backgroundColor:['#0747b6','#2265d8','#']
    }],
    labels:['bank 1', 'bank 2', 'bank 3']
}
return <Doughnut data={data} options ={{
    cutout:'60%',
    plugins:{
        legend:{display:false}
    }
}} />

}
export default DoughnutChart;