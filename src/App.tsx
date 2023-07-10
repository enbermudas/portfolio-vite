import MainMenu from "@/components/MainMenu";
import QuickAccessMenu from "@/components/QuickAccessMenu";
import TabContainer from "@/components/TabContainer";

const App = () => {
  return (
    <div className="min-h-screen h-full w-full md:grid md:grid-cols-12 md:grid-rows-1 md:gap-2 bg-background-press p-2 text-text-base">
      <div className="col-span-3 flex-col invisible hidden sm:invisible sm:hidden md:flex md:visible">
        <nav className="flex h-full flex-col gap-2">
          <MainMenu />

          <QuickAccessMenu />
        </nav>
      </div>

      <div className="col-span-9 flex">
        <TabContainer />
      </div>
    </div>
  );
};

export default App;
