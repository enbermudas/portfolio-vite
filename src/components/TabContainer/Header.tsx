import avatarImg from "@/assets/images/avatar.jpeg";
import noise from "@/assets/images/noise.svg";

const Header = () => {
  return (
    <div className="relative">
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

      <div
        className="bg-background-profile z-0 w-full h-[160px] absolute left-0 -bottom-[40%]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6) 0,#121212 100%),url(${noise})`,
        }}
      ></div>
    </div>
  );
};

export default Header;
