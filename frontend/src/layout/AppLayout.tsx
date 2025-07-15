import SideBar from './sidebar/SideBar';
import NavBar from './navbar/NavBar';

function AppLayout({ children }) {
  return (
    <div className="max-w-screen flex flex-col min-h-screen">
      <header className="p-4 h-32 w-full">
        <NavBar />
      </header>
      
      <div className="flex mt-8">
        <SideBar />

        <main className="flex-grow p-4 h-full w-full justify-between">
          {children}
        </main>
      </div>

    </div>
  );
}

export default AppLayout;