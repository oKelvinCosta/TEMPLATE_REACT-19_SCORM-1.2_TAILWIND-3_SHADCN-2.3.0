import { Button } from '@/components/ui/button'
import { Link, Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col">
    <div className="flex-1 flex flex-col container">
      <nav className='border rounded-lg m-2 h-[100px] flex items-start flex-col p-4'>
        <div>Nav</div>
        <ul className='flex gap-2'>
          <li>
            <Button asChild variant="ghost"><Link to="/">Example Home</Link></Button>
          </li>
          <li>
            <Button asChild variant="ghost"><Link to="/debug-scorm">Debug SCORM</Link></Button>
          </li>
          <li>
            <Button asChild variant="ghost"><Link to="/components">Components</Link></Button>
          </li>
        </ul>
      </nav>
      <main className='flex-1 border rounded-lg m-2 p-4'>
        Main
        <Outlet/>
      </main>
    </div>
    <div className="container">
    <footer className='border rounded-lg  p-4 mt-auto m-2'>
        Footer © {new Date().getFullYear()}
    </footer>
    </div>
  </div>
  )
}