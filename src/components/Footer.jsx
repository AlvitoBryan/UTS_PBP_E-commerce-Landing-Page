import React from 'react'

const Footer = () => {
  return (
    <footer className='flex w-full p-[20px] md:p-[60px_120px] flex-col items-center gap-[20px] border-t border-[var(--Other-Border,rgba(58,53,65,0.12))] bg-[var(--Other-Primary-Background,#FFF)]'>
        <div className='hidden lg:flex justify-between items-start self-stretch'>
            <div className='flex flex-col items-start gap-[16px] self-stretch'>
                <div className='flex w-[204px] h-[56px] p-[13px_5.97px_12.92px_5px] justify-center items-center'>
                    <img className='' src='/images/Logo.png'/>
                </div>

                <div className='flex flex-col items-start gap-[12px]'>
                    <h4 className='w-[352px] text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-[1.125rem] font-bold leading-[140%] tracking-[0.2px]'>Discover your greatness through the best products on the market!</h4>
                    <p className='w-[352px] text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-base leading-[140%] tracking-[0.2px]'>Jl. Ketintang, Ketintang, Kec. Gayungan, Surabaya</p>
                    <p className='w-[352px] text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-base leading-[140%] tracking-[0.2px]'>+62-877-7123-1234</p>
                </div> 
            </div>

            <div className='flex items-start gap-[48px]'>
                <div className='flex flex-col items-start gap-[15px]'>
                    <h4 className='text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.2px]'>Resources</h4>
                    <nav className='flex flex-col items-start gap-[13px]'>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Find A Store</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Become A member</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Education Discounts</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Send Us Feedback</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Design</a>
                    </nav>
                </div>

                <div className='flex flex-col items-start gap-[15px]'>
                    <h4 className='text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.2px]'>Help</h4>
                    <nav className='flex flex-col items-start gap-[13px]'>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Get Help</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Order Status</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Delivery</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Returns</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Contact Us</a>
                    </nav>
                </div>

                <div className='flex flex-col items-start gap-[15px]'>
                    <h4 className='text-[var(--text-dark-primary,#222325)] font-[DM_Sans] text-base font-bold leading-[140%] tracking-[0.2px]'>Company</h4>
                    <nav className='flex flex-col items-start gap-[13px]'>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>About Alvito</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>News</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Careers</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Investors</a>
                        <a className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px] decoration-0 hover:underline'>Sustainability</a>
                    </nav>
                </div>
            </div>
        </div>

        <div className='hidden lg:flex pt-[32px] flex-col items-start gap-[10px] w-full'>
            <hr className='w-full h-[1px]'/>
        </div>

        <div className='hidden lg:flex justify-between items-center self-stretch'>
            <h3 className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px]'>@2025 Alvito All Rights Reserved.</h3> 

            <div className='flex items-start gap-[15px]'>
                <img className='w-[35px] h-[35px]' src='images/social_linkin.svg'/>
                <img className='w-[35px] h-[35px]' src='images/social_facebook.svg'/>
                <img className='w-[35px] h-[35px]' src='images/social_instagram.svg'/>
                <img className='w-[35px] h-[35px]' src='images/social_x.svg'/>
            </div>
        </div>

        {/* MOBILE FOOTER ===================================================================================================================================================================================================== */}

        <div className='flex lg:hidden flex-col items-start gap-[16px] self-stretch'>
            <div className='flex flex-col items-start gap-[16px] self-stretch'>
                <div className='flex w-[170px] h-[36px] p-[5.442px_4.603px_5.375px_3.79px] justify-center items-center'>
                    <img className='' src='images/Logo.png'/>
                </div>

                <div className='flex flex-col items-start gap-[8px] self-stretch'>
                    <h4 className='text-[var(--text-dark-primary,#222325)] font-[Open_Sans] text-[0.875rem] font-bold leading-[140%] tracking-[0.2px]'>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</h4>
                    <p className='text-[var(--text-dark-primary,#222325)] font-[Open_Sans] text-[0.875rem] leading-[140%] tracking-[0.2px]'>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p className='text-[var(--text-dark-primary,#222325)] font-[Open_Sans] text-[0.875rem] leading-[140%] tracking-[0.2px]'>+62-877-7123-1234</p>
                </div>
            </div>

            <div className='flex flex-col items-start gap-[12px] self-stretch'>
                <div className='flex flex-col items-start gap-[12px] self-stretch'>
                    <div className='flex justify-between items-start self-stretch'>
                        <h4 className='text-[var(--text-dark-primary,#222325)] font-[Open_Sans] text-base font-bold leading-[140%] tracking-[0.2px]'>Perusahaan</h4>
                        <img className='flex items-start w-[24px] h-[24px]' src='images/KeyboardArrowRight.svg'/>
                    </div>
                </div>
                
                <div className='flex flex-col items-start gap-[12px] self-stretch'>
                    <div className='flex justify-between items-start self-stretch'>
                        <h4 className='text-[var(--text-dark-primary,#222325)] font-[Open_Sans] text-base font-bold leading-[140%] tracking-[0.2px]'>Perusahaan</h4>
                        <img className='flex items-start w-[24px] h-[24px]' src='images/KeyboardArrowRight.svg'/>
                    </div>
                </div>
                
                <div className='flex flex-col items-start gap-[12px] self-stretch'>
                    <div className='flex justify-between items-start self-stretch'>
                        <h4 className='text-[var(--text-dark-primary,#222325)] font-[Open_Sans] text-base font-bold leading-[140%] tracking-[0.2px]'>Komunitas</h4>
                        <img className='flex items-start w-[24px] h-[24px]' src='images/KeyboardArrowRight.svg'/>
                    </div>
                </div>
            </div>
            <hr className='w-full h-[1px]'/>

            <div className='flex flex-col items-start gap-[12px] self-stretch'>
                <div className='flex items-start gap-[15px]'>
                    <img className='w-[35px] h-[35px]' src='images/social_linkin.svg'/>
                    <img className='w-[35px] h-[35px]' src='images/social_facebook.svg'/>
                    <img className='w-[35px] h-[35px]' src='images/social_instagram.svg'/>
                    <img className='w-[35px] h-[35px]' src='images/social_x.svg'/>
                </div>

                <h3 className='text-[var(--text-dark-secondary,rgba(51,51,51,0.68))] font-[DM_Sans] text-base font-medium leading-[140%] tracking-[0.2px]'>@2023 Gerobak Sayur All Rights Reserved.</h3>
            </div>
        </div>
    </footer>
  )
}

export default Footer
