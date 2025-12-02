import { Outlet } from 'react-router-dom';
import HeaderComponent from './header';

export default function OutletComponent() {
  return (
    <div className='flex flex-col gap-2 min-h-[90vh] w-screen'>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}
