import MainMenu from "@/components/MainMenu";
import QuickAccessMenu from "@/components/QuickAccessMenu";
import TabContainer from "@/components/TabContainer";

const App = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-1 gap-2 bg-background-press p-2 text-text-base">
      <div className="col-span-3 flex flex-col">
        <nav className="flex h-full flex-col gap-2">
          <MainMenu />

          <QuickAccessMenu />
        </nav>
      </div>

      <div className="col-span-9 flex">
        <TabContainer />
      </div>

      <div className="col-span-12 h-20"></div>
    </div>
  );
};

export default App;
