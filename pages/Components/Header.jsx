

export default function Header(){
    return(
        <div className="flex flex-col w-[350px]
                        md:w-[960px] sm:flex-row sm:justify-between md:items-start md:mt-[11rem] ">

            <h1 className="font-PTSerif font-bold text-[3.6rem] tracking-[-.2rem] leading-[4.77rem] ml-[1.2rem] mt-[7.1rem]
                           sm:mt-0 ">
                                The creative crew</h1>

            <div className="flex-col w-[33.3rem]">
                <h2 className="font-Poppins font-semibold text-[1.8rem] leading-[2.7rem] ml-[1.2rem] mt-[3.8rem]
                                sm:mt-0">
                                    Who we are</h2>
                <p className="font-Poppins font-normal text-[1.4rem] leading-[2.1rem] ml-[1.2rem] mt-1 mb-[6rem]">We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
            </div>
            
        </div>
    )
}