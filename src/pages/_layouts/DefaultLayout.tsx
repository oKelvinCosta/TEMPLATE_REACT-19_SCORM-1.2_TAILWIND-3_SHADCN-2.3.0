import { Button } from '@/components/ui/button';
import { Link, Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex flex-1 flex-col">
        <nav className="m-2 flex h-[100px] flex-col items-start rounded-lg border p-4">
          <div>Nav</div>
          <ul className="flex gap-2">
            <li>
              <Button asChild variant="ghost">
                <Link to="/">Example Home</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link to="/debug-scorm">Debug SCORM</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link to="/components">Components</Link>
              </Button>
            </li>
          </ul>
        </nav>
        <main className="m-2 flex-1 rounded-lg border p-4">
          Main
          <Outlet />
        </main>
      </div>
      <div className="container">
        <footer className="m-2 mt-auto rounded-lg border p-4">
          Footer © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
