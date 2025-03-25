import React from 'react'

export const MainCardWrapper = ({children}) => {
  return (
    <div className='flex max-w-[1200px] w-full items-start gap-[24px] flex-wrap'>
        {children}
    </div>
  )
}

export default MainCardWrapper
