import Image from 'next/image'

export default function EmployeeCard(props){
    return(
        <div className='flex  w-[15.6rem] mt-[1rem] 
                        md:w-[26.4rem]'>
          <div>
            <img className='w-[13.8rem]
                              md:w-[23.8rem]' 
                  src={`/images/photo${props.photo}.png`} alt='photo of employee'/>

            <p className='font-Poppins font-semibold leading-[2.1rem] text-[1.4rem] mt-[1rem] '>{props.name}</p>
          </div>
            <p className='vertical-rl font-PTSerif text-1 uppercase leading-[1.325rem] ml-[.628rem]'>{props.job}</p>
        </div>
    )
}

