import avatarImg from "@/assets/images/avatar.jpeg";

const Header = () => {
  return (
    <div className="bg-background-profile h-96 p-6 flex relative">
      <div className="bg-gradient-to-b from-[transparent] to-background-elevatedBase w-full h-full absolute left-0 bottom-0 z-0"></div>

      <div className="flex bottom-0 left-0 z-10">
        <div className="avatar flex-none flex items-end mr-6">
          <img className="rounded-full drop-shadow-2xl w-60" src={avatarImg} alt="avatar" />
        </div>

        <div className="content flex-grow flex flex-col justify-end">
          <span className="text-sm font-bold">Perfil</span>

          <h1 className="text-8xl font-black text-text-base tracking-tighter py-4">e.bermudez</h1>

          <div className="text-sm font-medium">
            <span>ingeniero en sistemas</span>
            <span className="before:content-['•'] before:m-2">desarrollador frontend</span>
            <span className="before:content-['•'] before:m-2">27 años</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
