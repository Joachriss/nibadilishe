import { StaffNavbar } from '../components/StaffNavbar.tsx'
import { Outlet } from 'react-router-dom'

export const  StaffLayout= () => {
  return (
    <div>
        <StaffNavbar/>
        <Outlet/>
    </div>
  )
}
