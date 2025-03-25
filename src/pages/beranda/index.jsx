import { useEffect } from "react";
import { ButtonTab } from "../../components/Button";
import Footer from "../../components/Footer";
import HomepageMain from "../../components/HomepageMain";
import MainBanner from "../../components/MainBanner";
import MainCard from "../../components/MainCard";
import MainCardWrapper from "../../components/MainCardWrapper";
import MainHeading from "../../components/MainHeading";
import MainSection from "../../components/MainSection";
import MainTab from "../../components/MainTab";
import MainTabs from "../../components/MainTabs";
import Navigation from "../../components/NavigationBar";
import { SecondBanner, ThirdBanner } from "../../components/SecondBanner";

const Homepage = () => {
    useEffect(() => {
        document.title = "Homepage | Alvito E-commerce"
    })

    return(
        <>
            <Navigation/>
            
            <HomepageMain>
                <MainBanner
                    heroHeading="GREATNESS HAS NO PEAK."
                    heroDesc="Somehow we’ve come to believe that greatness is only for the chosen few, for the superstars. The truth is, greatness is for us all. This is not about lowering expectations, it’s about raising them for every last one of us."
                />

                <MainSection>
                    <MainHeading
                       mainHeadingText="WHAT’S YOUR THING?"
                       mainDescText="Explore The World With Our Picks" 
                    />

                    <MainTabs>

                        <MainTab>
                            <ButtonTab/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Latest"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Shoes"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Clothing"/>
                        </MainTab>

                        <MainTab>
                            <ButtonTab text="Accessories"/>
                        </MainTab>

                    </MainTabs>

                    <MainCardWrapper>
                        <MainCard poster="/images/NikeVomero18_1.png" textHeading="Nike Vomero 18" textDesc="Men's Road Running Shoes" price="Rp 2.249.000"/>
                        <MainCard poster="/images/NikeZoomFly6_2.png" textHeading="Nike Zoom Fly 6" textDesc="Men's Road Racing Shoes" price="Rp 2.669.000"/>
                        <MainCard poster="/images/NikeStreakfly2_3.png" textHeading="Nike Streak Fly 2" textDesc="Men's Road Racing Shoes" price="Rp 2.849.000"/>
            
                        <MainCard poster="/images/NikeZoomFly6Premium_4.png" textHeading="Nike Zoom Fly 6 Premium" textDesc="Men's Road Running Shoes" price="Rp 2.849.000"/>
                        <MainCard poster="/images/NikeClub_5.png" textHeading="Nike Club" textDesc="Men's Oversized Woven Tracksuit Jacket" price="Rp 1.249.000"/>
                        <MainCard poster="/images/JordanCMFTEra_6.png" textHeading="Jordan CMFT Era" textDesc="Men's Shoes" price="Rp 1.909.000"/>
                
                        <MainCard poster="/images/NikeAirMaxDn8_7.png" textHeading="Nike Air Max Dn8" textDesc="Women's Shoes" price="Rp 3.049.000"/>
                        <MainCard poster="/images/JordanSpizikeLow_8.png" textHeading="Jordan Spizike Low" textDesc="Men's Shoes" price="Rp 2.489.000"/>
                        <MainCard poster="/images/KD17EP_9.jpeg" textHeading="KD17 EP" textDesc="Basketball Shoes" price="Rp 2.379.000"/>
                    </MainCardWrapper>


                </MainSection>

                <SecondBanner/>

                <MainCardWrapper>
                        <MainCard poster="/images/JordanBrooklyn_11.png" textHeading="Jordan Brooklyn" textDesc="Men's Hooded Draft Jacket" price="Rp 1.249.000"/>
                        <MainCard poster="/images/AirJordan4RM_12.png" textHeading="Air Jordan 4 RM" textDesc="Men's Shoes" price="Rp 2.199.000"/>
                        <MainCard poster="/images/Jordan_13.png" textHeading="Jordan" textDesc="Men's T-Shirt" price="Rp 399.000"/>
            
                        <MainCard poster="/images/JordanFlightFleece_14.png" textHeading="Jordan Flight Fleece" textDesc="Women's Cropped Satin-Lined Hoodie" price="Rp 1.299.000"/>
                        <MainCard poster="/images/JordanHeirSeriesPFBloodline'_15.png" textHeading="Jordan Heir Series PF Bloodline'" textDesc="Basketball Shoes" price="Rp 1.729.000"/>
                        <MainCard poster="/images/JordanFlightFleece_16.png" textHeading="Jordan Flight Fleece" textDesc="Men's Graphic Pullover Hoodie" price="Rp 1.199.000"/>
                
                        <MainCard poster="/images/AirJordan1RetroHighOG'BlackToe'_17.png" textHeading="Air Jordan 1 Retro High OG 'Black Toe'" textDesc="Men's Shoes" price="Rp 2.849.000"/>
                        <MainCard poster="/images/JordanMVP_18.png" textHeading="Jordan MVP" textDesc="Men's Mesh Shorts" price="Rp 569.000"/>
                        <MainCard poster="/images/JordanFlightEssentials_19.png" textHeading="Jordan Flight Essentials" textDesc="Men's T-Shirt" price="Rp 399.000"/>
                    </MainCardWrapper>

                <ThirdBanner
                    heroTitle="NEWSLETTER"
                    heroHeading="Want to Know More?"
                    heroDesc="Register yourself to get the latest information and special offers from the best Alvito.id products."
                />

            </HomepageMain>
            
            <Footer/>
        </>
    )
}

export default Homepage;