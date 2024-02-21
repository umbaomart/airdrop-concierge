import {Outlet} from 'react-router-dom';

export default function Layout() {
    return (
        <div className="app">
            <main>
                <Outlet />
            </main>
        </div>
    )
}