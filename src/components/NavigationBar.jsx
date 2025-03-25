import { useLocation } from 'react-router-dom';
import LogoPlaceholder from "./LogoPlaceholder";
import Kategori from './Kategori';
import Profile from './Profile';

const Navigation = () => {

    const location = useLocation();
    const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

    return(
        <div className='flex justify-between items-center w-auto p-[16px_24px] sm:p-[12px_120px] shadow-md border-b border-[rgba(58,53,65,0.12)] gap-[36px] bg-[#FFF]'>
            <div className='flex justify-between items-center w-full'>
                <LogoPlaceholder/>

                {!isLoginPage && (
                    <div className="hidden sm:flex items-center gap-4">
                        <Kategori/>
                    </div>
                )}

                {!isLoginPage && (
                    <div className="hidden sm:flex items-center gap-4">
                        <img className='w-[33px] h-[33px] aspect-square' src='/images/favorite.png'/>
                        <img className='w-[33px] h-[33px] aspect-square' src='/images/cart.png'/>
                    </div>
                )}  
            </div>
            
            {!isLoginPage && (     
                <Profile/>
            )}

        </div>
    )
}

export default Navigation;