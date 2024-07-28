import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const DonationDetails = () => {
    useEffect(() => {
        AOS.init({duration:1000});
    })
    return (
        <div className="p-2">
            <div data-aos="fade-up" className="h-full col-span-1 text-[#38466d] rounded-3xl bg-white p-3 md:p-10 flex flex-col space-y-4 shadow-lg">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="font-['quicksand-bold'] text-start">Card</th>
                            <th className="font-['quicksand-bold'] text-start">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>NBC BANK</td>
                            <td className="font-['quicksand-bold'] ">000000000000000000</td>
                        </tr>
                        <tr>
                            <td>TZS ACCOUNT NUMBER</td>
                            <td className="font-['quicksand-bold'] ">000000000000000000</td>
                        </tr>
                        <tr>
                            <td>USD ACCOUNT NUMBER</td>
                            <td className="font-['quicksand-bold'] ">000000000000000000</td>
                        </tr>
                        <tr>
                            <td>ACCOUNT NAME</td>
                            <td className="font-['quicksand-bold'] ">NIBADILISHE ORG TANZANIA</td>
                        </tr>
                        <tr>
                            <td>SWIFT CODE </td>
                            <td className="font-['quicksand-bold'] ">0000000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
