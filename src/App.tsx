import { useState } from "react";

import MainMenu from "@/components/MainMenu";
import { AppTabs } from "@/components/MainMenu/mainMenu.data";
import QuickAccessMenu from "@/components/QuickAccessMenu";
import TabContainer from "@/components/TabContainer";

const App = () => {
  const [activeTab, setActiveTab] = useState<AppTabs>(AppTabs.SKILLS);

  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-1 gap-2 bg-background-press p-2 text-text-base">
      <div className="col-span-3 flex flex-col">
        <nav className="flex h-full flex-col gap-2">
          <MainMenu activeTab={activeTab} onMenuButtonClick={setActiveTab} />

          <QuickAccessMenu />
        </nav>
      </div>

      <div className="col-span-9 flex">
        <TabContainer activeTab={activeTab} />
      </div>

      <div className="col-span-12 h-20"></div>
    </div>
  );
};

export default App;
