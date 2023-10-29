import PageHeader from "./layouts/PageHeader";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <Sidebar />
    </div>
  );
}

export default App;
