import React from 'react'
import 
{ BsHouseDoor, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill,BsPersonFill,BsFillHouseGearFill,BsFillHouseAddFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import ProgressBar from './ProgressBar';
 import CircleProgressBar from './CircleProgressBar';
 import BasicTable from './User';
 import DataTable from './Adduser';
 import Location from './Location';
 import ReactSpeedometerComponent from './Speedometer';
import Barchart from './BarChart';
import ItemTable from './Adduser';
import FileUpload from './FileUpload';

 
function Home() {
    const progress = 0.6;



    const data = [
        {
          name: 'Cement Bags',
          Issue: 4640,
          Rec: 3440,
          amt: 1200,
        },
        {
          name: 'crush',
          Issue: 3000,
          Rec: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          Issue: 2000,
          Rec: 2800,
          amt: 2290,
        },
        {
          name: 'Page D',
          Issue: 2780,
          Rec: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          Issue: 1890,
          Rec: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          Issue: 2390,
          Rec: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          Issue: 3490,
          Rec: 4300,
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
        <div className="App">
      <h1>Speedometer Progress Bar</h1>
      <div className="App">
      <ReactSpeedometerComponent/>
    </div>
    </div>


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
      
    </div>
      




        <div className='charts'>
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
                <Bar dataKey="Rec" fill="#f68ca0" />
                <Bar dataKey="Issue" fill="#bba0ec" />
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
                <Line type="monotone" dataKey="Rec" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Issue" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

            <div>
            </div>
            <div>
              
            </div>
            {/* <div>
              <BasicTable/>
            </div> */}
            
            <div>
              <Location/>
            </div>
            <br>
            </br>
            <div>
              <DataTable/>
            </div>
            <div>
              {/* <ItemTable/> */}
            </div>
          
          <div>
            File Upload
            <button>
            <FileUpload/>
              </button>
          </div>


        </div>
    </main>
  )
}

export default Home