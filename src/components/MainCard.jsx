import React from 'react'

export const MainCard = ({
    poster,
    textHeading,
    textDesc,
    price,
    starRatingFull = "/images/Star.svg",
    starRatingHalf = "/images/Star_half.svg",
    starRatingEmpty = "/images/Star_empty.svg",
}) => {
  return (
    <div className='flex h-auto max-h-[426px] shadow-lg w-full max-w-[384px] p-[20px] flex-col items-start gap-[16px] shrink-0 rounded-[10px] border border-[var(--Other-Border,rgba(58,_53,_65,_0.12))] bg-[var(--Other-Primary-Background,#FFF)]'>
        <img className='w-full h-[273px] object-cover rounded-[10px]' src={poster}/>

        <div className='flex flex-col items-start gap-[8px] self-stretch'>
            <h3 className='text-[var(--text-dark-primary,#222325)] font-[Poppins] text-[1.125rem] font-semibold leading-[120%]'>
                {textHeading}
            </h3>
            <p className='self-stretch overflow-hidden text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] text-ellipsis font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.02px]'>
                {textDesc}
            </p>
        </div>

        <div className='flex justify-between items-center self-stretch'>
            <div className='flex items-center gap-[8px]'>
                <div className='flex items-center'>
                    <img className='w-[18px] h-[18px]' src={starRatingFull}/>
                    <img className='w-[18px] h-[18px]' src={starRatingFull}/>
                    <img className='w-[18px] h-[18px]' src={starRatingHalf}/>
                    <img className='w-[18px] h-[18px]' src={starRatingEmpty}/>
                    <img className='w-[18px] h-[18px]' src={starRatingEmpty}/>
                </div>

                <p className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-[0.875rem] font-medium leading-[140%] tracking-[0.2px] underline decoration-solid underline-offset-auto decoration-[auto] skip-ink '>3.5 (86)</p>
            </div>

            <h3 className='text-[#222325] font-[Poppins] text-2xl font-semibold leading-[120%]'>{price}</h3>
        </div>

    </div>
  )
}

export default MainCard
