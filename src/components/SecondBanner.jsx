import React from 'react'

export const SecondBanner = (
) => {
  return (
    <>
      <section className='flex w-full object-cover bg-[length:100%] h-[600px] pr-[20px] pl-[20px] flex-col justify-center items-center rounded-[4px] bg-[url(/images/main_banner2.jpg)] secondBanner-boxShadow bg-no-repeat bg-center'>
          
      </section>

      <div className='flex flex-col gap-2 items-center'>
        <p className='text-[#222325] font-[Roboto] text-xl font-medium '>Jordan Draft Jacket</p>
        <h1 className='text-[#222325] font-[Anton] text-6xl font-bold '>FIRST PICK ENERGY</h1>
        <p className='text-[#222325] font-[DM_Sans] text-base '>The hooded zip-up at the top of its class.</p>
      </div>
    
    </>
  )
}

export const ThirdBanner = ({
  heroTitle,
  heroHeading,
  heroDesc,
}) => {
  return (
    <section className='flex  w-full h-[400px] pr-[20px] pl-[20px] flex-col justify-center items-center rounded-[4px] thirdBanner-1 secondBanner-boxShadow bg-no-repeat bg-center'>
        <div className='flex flex-col w-full justify-center items-center gap-[40px]'>
          <div className='flex w-full flex-col justify-center items-center gap-[4px]'>
              <h3 className='text-[var(--text-light-secondary,#C1C2C4)] text-center font-[DM_Sans] text-base sm:text-[1.125rem] font-medium leading-[140%] tracking-[0.2px]'>{heroTitle}</h3>
              <div className='flex w-full flex-col justify-center items-center gap-[10px]'>
                  <h2 className='text-[var(--text-light-primary,#FFF)] text-center font-[Poppins] text-2xl sm:text-[2.5rem] font-semibold leading-[110%]'>{heroHeading}</h2>
                  <p className='text-[var(--Other-Base-Background,#F4F5FA)] text-center w-full sm:w-[525px] font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.2px]'>{heroDesc}</p>
              </div>
          </div> 

          <div className='hidden sm:flex max-w-[525px] w-full p-[8px_8px_8px_32px] items-center gap-[20px] rounded-[10px] bg-[var(--Other-Primary-Background,#FFF)]'>
            <input className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base leading-[140%] tracking-[0.2px] border-none outline-none w-full' type='text' placeholder='Write your email'/>
            <button className='flex flex-col justify-center items-center p-[10px_26px] gap-[8px] border-none rounded-[10px] bg-[#F64920] text-[var(--text-light-primary,#FFF)] font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.2px] cursor-pointer'>Subscribe</button>
          </div>

          <div className='flex sm:hidden flex-col items-center gap-[16px]'>
            <div className='flex w-[280px] p-[10px_8px_10px_12px] justify-center items-center rounded-[10px] bg-[var(--Other-Primary-Background,#FFF)]'>
              <input className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.875rem] leading-[140%] tracking-[0.2px] border-none outline-none w-full text-center' type='text' placeholder='Masukkan Emailmu'/>
            </div>

            <button className='flex sm:hidden flex-col justify-center items-center w-full rounded-[10px] bg-[#F64920] p-[10px_26px] gap-[8px] text-[var(--text-light-primary,#FFF)] font-[DM_Sans] text-[0.875rem] font-bold leading-[140%] tracking-[0.2px]'>Subscribe</button>
          </div>

        </div>
    </section>
  )
}

export default SecondBanner
