import React from 'react'
import 
{ BsHouseDoor, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill,BsPersonFill,BsFillHouseGearFill,BsFillHouseAddFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import ProgressBar from './ProgressBar';
 import CircleProgressBar from './CircleProgressBar';
 import SemiCircleProgress from './SemiCircleProgress';


 
function Home() {
    const progress = 0.6;



    const data = [
        {
          name: 'Cement Bags',
          uv: 4640,
          pv: 3440,
          amt: 1200,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>House Surveyed (2384)</h3>
                    <BsHouseDoor className='card_icon'/>
                </div>
                <p>Villages: 50</p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Master Plan (25)</h3>
                    <BsFillHouseGearFill className='card_icon'/>
                </div>
                <p>Construction Villages:24 </p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Under Construction (120) </h3>
                    <BsFillHouseAddFill className='card_icon'/>
                </div>
                <p>House Underconstruction : 30</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Training Sessions (26)</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <p>Attendance: 1095</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Chairman</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>3</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Members</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>11</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>Supervisor</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>0</p>
            </div>

            <div className='card'>
                <div className='card-inner'>
                    <h3>WareHouse Incharge</h3>
                    <BsPersonFill className='card_icon'/>
                </div>
                <p>0</p>
            </div>
        </div>
        <ProgressBar/>
        <div >

            <div>
            <div className="progress-bars">
        <CircleProgressBar
          progress={75}
          title="Layout"
        //   subtitle="64"
        />
        <CircleProgressBar
          progress={45}
          title="Excavation"
        //   subtitle="6"
        />
        <CircleProgressBar
          progress={90}
          title="Stone Blast"
        //   subtitle="Subtitle 3"
        />
        <CircleProgressBar
          progress={30}
          title="Lean"
        //   subtitle="Subtitle 4"
        />
      </div>
            </div>
      </div>


      <div className="App">
      <SemiCircleProgress progress={progress} />
    </div>
      




        {/* <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div> */}
    </main>
  )
}

export default Home