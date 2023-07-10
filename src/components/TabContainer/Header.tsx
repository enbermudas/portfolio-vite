import avatarImg from "@/assets/images/avatar.jpeg";
import noise from "@/assets/images/noise.svg";
import { Dispatch, RootState } from "@/store";
import { Langs } from "@/store/models/lang";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

interface HeaderProps {
  lang: {
    currentLang: Langs;
  };
  changeLang: (newLang: Langs) => void;
}

const Header = ({ lang: { currentLang }, changeLang }: HeaderProps) => {
  const { t, i18n } = useTranslation();

  const handleLangChange = () => {
    const newLang = currentLang === Langs.ES ? Langs.EN : Langs.ES;
    i18n.changeLanguage(newLang);
    changeLang(newLang);
  };

  return (
    <div className="relative">
      <div className="bg-background-profile h-96 p-6 flex relative">
        <div className="bg-gradient-to-b from-[transparent] to-background-elevatedBase w-full h-full absolute left-0 bottom-0 z-0"></div>

        <div className="flex bottom-0 left-0 z-10">
          <div className="avatar flex-none items-end mr-6 hidden sm:flex">
            <img className="rounded-full drop-shadow-2xl w-60" src={avatarImg} alt="avatar" />
          </div>

          <div className="content flex-grow flex-col justify-end flex">
            <span className="text-sm font-bold">{t("header.profile")}</span>

            <h1 className="text-6xl lg:text-8xl font-black text-text-base tracking-tighter py-4">e.bermudez</h1>

            <div className="text-sm font-medium flex flex-col md:flex-row">
              <span>{t("header.title")}</span>
              <span className="md:before:content-['•'] md:before:m-2">{t("header.role")}</span>
              <span className="md:before:content-['•'] md:before:m-2">{t("header.age")}</span>
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

      <button
        onClick={handleLangChange}
        className="rounded-full bg-background-section text-text-base w-10 h-10 absolute top-4 right-4 transition-all ease-in-out hover:bg-text-base hover:text-background-section"
      >
        {currentLang}
      </button>
    </div>
  );
};

const mapState = (state: RootState) => ({
  lang: state.lang,
});

const mapDispatch = (dispatch: Dispatch) => ({
  changeLang: (newLang: Langs) => dispatch.lang.changeLang(newLang),
});

export default connect(mapState, mapDispatch)(Header);
