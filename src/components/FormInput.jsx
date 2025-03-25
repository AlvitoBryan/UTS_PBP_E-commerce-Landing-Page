import React from 'react'

export const FormInput = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    required = false,
}) => {
  return (
    <div className='flex flex-col items-start self-stretch h-[76px] w-full max-w-[518px]'>
        {label && (
            <label htmlFor={name} className='flex items-end gap-1 w-auto pr-[16px] pl-0 pb-1 text-[var(--text-dark-secondary,rgba(51,_51,_51,_0.68))] text-[0.875rem] sm:text-base font-normal leading-[1.4] tracking-[0.2px] font-[DM_Sans] '>
                {label}
                {required && <p className='text-[#D32E1F] font-[Poppins] text-[0.875rem] sm:text-base font-normal leading-6 tracking-[0.15px]'>*</p>} 
            </label>
        )}
        <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className='h-12 flex flex-col flex-1 items-start self-stretch rounded-md border border-[#F1F1F1] px-[10px] py-[12px] text-[0.875rem] sm:text-base font-normal leading-[1.4] tracking-[0.2px] font-[DM_Sans] outline-none transition-all duration-300 ease-in-out'
        ></input>

        {error && (
            <p className='text-sm text-red-500'>
                {error}
            </p>
        )}
    </div>
  )
}



export const InputPassword = ({
    label,
    name,
    type = 'password',
    value,
    onChange,
    required = true,

}) => {
  return (
    <div className='flex flex-col items-start self-stretch h-[76px]'>
      <label htmlFor={name} className='flex w-auto pr-[16px] pl-0 pb-1 items-end gap-1 text-[var(--text-dark-secondary,rgba(51,_51,_51,_0.68))] font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[1.4] tracking-[0.2px]'>
        {label}
        {required && <p className='text-[#D32E1F] font-[Poppins] text-base font-normal leading-6 tracking-[0.15px]'>*</p>}
      </label>

      <div className='h-12 p-[12px_10px] flex items-center self-stretch rounded-md border border-[#F1F1F1] gap-[8px] transition-all duration-300 ease-in-out"'>
        <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className='w-full font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.2px] text-[#4A505C] outline-none border-none'
        ></input>

        <button type='button' className='w-[24px] h-[24px] border-none outline-none bg-[#FFF] cursor-pointer'>
            <img src='/images/toggle-password.svg' className='max-w-none' />
        </button>
      </div>
    </div>
  )
}

export const InputDropdown = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = true,

}) => {
return (
  <div className='flex flex-col items-start self-stretch h-[76px]'>
    <label htmlFor={name} className='flex w-auto pr-[16px] pl-0 pb-1 items-end gap-1 text-[var(--text-dark-secondary,rgba(51,_51,_51,_0.68))] font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[1.4] tracking-[0.2px]'>
      {label}
      {required && <p className='text-[#D32E1F] font-[Poppins] text-[0.875rem] sm:text-base font-normal leading-6 tracking-[0.15px]'>*</p>}
    </label>

    <div className='h-12 p-[12px_10px] flex items-center self-stretch rounded-md border border-[#F1F1F1] gap-[8px] transition-all duration-300 ease-in-out"'>
      <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className='w-full font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.2px] text-[#4A505C] outline-none border-none'
      ></input>

      <button type='button' className='w-[24px] h-[24px] border-none outline-none bg-[#FFF] cursor-pointer'>
          <img src='/images/keyboard_arrow_down.svg' className='max-w-none' />
      </button>
    </div>
  </div>
)
}

export const InputNoHP = ({
  label = 'Phone Number',
  name = 'noHp',
  type = 'text',
  flagImg = '/images/Indonesia_(ID).svg',
  iconImg = '/images/keyboard_arrow_down.svg',
  kodeNegara = '+62',
  required = true,

}) => {
  return(
    <div className='flex justify-start items-end gap-[24px] self-stretch'>
      <div className='flex flex-col items-start'>
        <label htmlFor={name} className='flex w-auto pt-0 pr-4 pb-1 pl-0 items-end gap-1 text-[var(--text-dark-secondary,rgba(51,_51,_51,_0.68))] font-[DM_Sans] text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.02px]'>
          {label}
          {required && <p className='text-[#D32E1F] font-[Poppins] text-[0.875rem] sm:text-base font-normal leading-6 tracking-[0.15px]'>*</p>}    
        </label>
        <div className='flex self-stretch justify-center items-center rounded-[6px] h-[48px]'>
          <div className='flex h-[48px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] flex-col justify-center items-center self-stretch border border-[var(--Other-Border,rgba(58,_53,_65,_0.12))] rounded-l-[6px] bg-[var(--Other-Base-Background,#F4F5FA)]'>
            <img src={flagImg} className='w-[24px] h-[24px] cursor-pointer'/>
          </div>
          <div className='flex pt-[11.3px] pr-[10px] pb-[11.3px] pl-[10px] h-[48px] flex-row justify-center items-center flex-[1_0_0] gap-[8px] bg-[var(--Other-Primary-Background,#FFF)] border-t-[1px] border-r-[1px] border-b-[1px] rounded-r-[6px] border-[var(--Other-Border,rgba(58,_53,_65,_0.12))]'>
            <p className='flex h-[24px] pt-[1px] pr-0 sm:pr-[32.667px] pb-[1px] pl-[0px] items-center flex-[1_0_0] text-[var(--text-dark-primary,#222325)] font-[Roboto] text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.02px]'>
              {kodeNegara}
            </p>
            <button className='border-none bg-none w-[25px] h-[24px] cursor-pointer'>
              <img src={iconImg} />
            </button>
          </div>
        </div>
      </div>
      <input type={type} className='font-[DM_Sans] w-full text-[0.875rem] sm:text-base font-normal leading-[140%] tracking-[0.02px] h-[63.2%] flex rounded-md border border-[var(--Other-Border,rgba(58,_53,_65,_0.12))] pt-[12px] pr-[10px] pb-[12px] pl-[10px] flex-[1_0_0] transition-[border-color,box-shadow] duration-300 ease-in-out outline-none'></input>
    </div>
  )
}
