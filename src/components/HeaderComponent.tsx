import SocialMediaLinksComponents from "./shared/SocialMediaLinksComponent";

const HeaderComponent = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-headerM leading-headerM font-bold">joaopmazzo</h1>
      <SocialMediaLinksComponents />
    </div>
  );
};

export default HeaderComponent;
