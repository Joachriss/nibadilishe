import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import dummy from '../assets/images/dummy.jpg'


export const WhoWeAreCard = (props: {
    color: any; objective: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined 
}) => {
    const styles = props.color + " col-span-2 md:col-span-1 shadow-lg bg-white px-0 rounded-lg ${props.color} border-b-4 ";
    return (
        <div className={styles}>
            <div className="mx-auto flex flex-col">
                <img src={dummy} className="mx-auto rounded-lg aspect-[]" alt="Event picture" />
                <div className="text-2xl md:text-3xl text-center my-3 font-['quicksand-bold']">{props.objective}</div>
                <div className="text-sm md:text-lg text-center mb-5 px-6">
                    {props.description}
                </div>
            </div>
        </div>
    )
}
