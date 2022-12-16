import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import EmployeeCard from './Components/EmployeeCard'
import Footer from './Components/Footer'
import Header from './Components/Header'

export default function Home() {
  const employees = [
    {photo: '1',name: "Bill Mahoney", job:"Product owner"},
    {photo: '2',name: "Saba Cabrera", job:"Art director"},
    {photo: '3',name: "Art director", job:"Tech Lead"},
    {photo: '4',name: "Skylah Lu", job:"UX Designer"},
    {photo: '5',name: "Griff Richards", job:"Developer"},
    {photo: '6',name: "Stan John", job:"Developer"}
  ];
   
  
  return (
      <div className='flex items-center flex-col justify-center'>
        <Header />
        <div className='grid grid-cols-2 pl-[2rem] pr-[2rem] gap-x-[2rem] justify-items-center [&>div:nth-child(2)]:mt-[6rem] [&>div:nth-child(4)]:mt-[6rem]
                        [&>div:nth-child(6)]:mt-[6rem]

                        md:grid-cols-3 md:grid-rows-2 md:gap-x-[20rem] md:w-[960px] 
                        md:[&>div:nth-child(4)]:mt-0 md:[&>div:nth-child(6)]:mt-0 md:[&>div:nth-child(2)]:mt-[9rem] 
                        md:[&>div:nth-child(5)]:mt-[9rem]'>
                          
          {employees.map(element => {return(   <EmployeeCard key={employees.indexOf(element)} photo={element.photo} job={element.job} name={element.name}/>   )})}
        </div>
        <div className='justify-center'>
          <Footer />
        </div>
      </div>

    
  )
}
