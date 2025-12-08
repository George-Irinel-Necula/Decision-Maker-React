import { PieChart } from '@mui/x-charts/PieChart'
import './App.css'
import { border } from '@mui/system'
import { useEffect } from 'react'

export default function CustomPieChart({rotation,animation,still,alreadyPressed}) {

  return (
    <>
    <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(${rotation}deg); }
        }
        `}
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.375 6.22l-4.375 3.498l-4.375 -3.5a1 1 0 0 0 -1.625 .782v6a1 1 0 0 0 .375 .78l5 4a1 1 0 0 0 1.25 0l5 -4a1 1 0 0 0 .375 -.78v-6a1 1 0 0 0 -1.625 -.78z" /></svg>
      <PieChart  style={{animation: animation,transform:"rotate("+ still + 'deg)'}}
      series={[
        {
          data: [
            { id: 0, value: 50, label: 'Nu',color:"#09C84C" },
            { id: 1, value: 50, label: 'Da',color:"#F52C2C" },
            
          ],
          arcLabel: 'label',
          innerRadius:110,
        },
      ]}
      
      width={400}
      height={400}
      
      hideLegend={true}
      slotProps={{
       
        pieArcLabel: {
          sx: {
            fill: 'white',
            fontWeight: '600',
            fontSize: 14,
          },
        },
      
        pieArc: {
          stroke: 'none',
        },
      }}
      
    />
    </>
   
  )
}