import AppGridLayout from "../components/container/AppGridLayout";
import AppGridCard from "../components/card/AppGridCard";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

import Icon from '@mdi/react';
import { mdiCash, mdiCashMultiple, mdiSwapHorizontal } from '@mdi/js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);


const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      type: 'bar',
      label: 'Leads Won',
      data: [10, 20, 15, 25],
      backgroundColor: '#6cdbde77',
      order: 2
    },
    {
      type: 'bar',
      label: 'Leads Lost',
      data: [30, 50, 40, 60],
      backgroundColor: '#ED460A77',
      order: 2
    },
    {
      type: 'line',
      label: 'Appointments',
      data: [40, 70, 55, 85],
      borderColor: '#fdc70077',
      backgroundColor: '#fdc70077',
      tension: 0.3,
      fill: false,
      yAxisID: 'y2', // <<< tell this dataset to use the second y-axis
      order: 1
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // hide legend
    },
  },
  scales: {
    x: {
      display: false, // <<< fully hide x-axis
    },
    y: {
      display: false, // <<< fully hide y-axis
    },
    y2: {
      display: false, // <<< fully hide secondary y-axis
    },
  },
};


function DashboardPage() {  
  return (
    <AppGridLayout>
      <AppGridCard className="bg-[#fdfaf4]" isLarge={true}>
        <h2 className="text-left text-2xl font-bold">Leads Overview</h2>
        <div className="col-span-3 flex w-full rounded-xl justify-around">
          <div className="w-2/5 text-left pt-8 text-md font-bold flex flex-col justify-around">
            <div>
              <p className="mb-4 text-md">Stats</p>
              <p className="font-normal text-sm mb-2 flex items-center"><Icon path={mdiSwapHorizontal} size={0.8} className="mr-1"/>Conversion rate: <strong className="font-bold ml-2"> 5% </strong></p>
              <p className="font-normal text-sm mb-2 flex items-center"><Icon path={mdiCash} size={0.8} className="mr-1"/>Expected income: <strong className="font-bold ml-2"> 7.425,- € </strong></p>
              <p className="font-normal text-sm flex items-center"><Icon path={mdiCashMultiple} size={0.8} className="mr-1"/>Total income: <strong className="font-bold ml-2"> 81.354,- € </strong></p>
            </div>

            <div className="mt-8 w-full">
              <p className="mb-2 text-md">Legend</p>

              <div className="flex items-center mb-2">
                <div className="w-8 h-2 rounded-xl bg-[#feeba5]"></div>
                <p className="ml-2 text-xs font-normal">Appointments</p>
              </div>

              <div className="flex items-center mb-2">
                <div className="w-8 h-2 rounded-xl bg-[#baeef0]"></div>
                <p className="ml-2 text-xs font-normal">Leads won</p>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-2 rounded-xl bg-[#ED460A77]"></div>
                <p className="ml-2 text-xs font-normal">Leads lost</p>
              </div>
            </div>
          </div>
         <div className="w-2/3 rounded-xl bg-white shadow-xl">
          <Chart className="min-h-[275px]" type="bar" data={data} options={options} />
         </div>
        </div>
      </AppGridCard>

      <AppGridCard bg="bg-gray-900">
        2
      </AppGridCard>

      <AppGridCard>
        <div className="flex flex-col items-center justify-center h-full">
          <div>
            1
          </div>
          <div>
            2
          </div>    
          <div>
            3
          </div>        
        </div>
      </AppGridCard>

      <AppGridCard isLarge={true}>
        4
      </AppGridCard>
    </AppGridLayout>
  );
}

export default DashboardPage