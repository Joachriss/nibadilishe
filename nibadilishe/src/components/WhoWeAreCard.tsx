import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useEffect } from 'react'
// import dummy from '../assets/images/dummy.jpg'
import AOS from 'aos';

export const WhoWeAreCard = (props: {
    color: any; objective: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined 
}) => {
    const styles = props.color + " col-span-2 md:col-span-1 shadow-lg bg-white px-0 rounded-lg ${props.color} border-b-4 ";
    useEffect(()=>{
        AOS.init({duration:1000});
    })
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className={styles}>
            <div className="mx-auto flex flex-col p-5">
                {/* <img src={dummy} className="mx-auto rounded-lg aspect-[]" alt="Event picture" /> */}
                <div className="text-2xl md:text-xl text-start my-3 font-['quicksand-bold']">{props.objective}</div>
                <hr />
                <div className="text-sm md:text-lg text-start mb-5">
                    {props.description}
                </div>
            </div>
        </div>
    )
}
