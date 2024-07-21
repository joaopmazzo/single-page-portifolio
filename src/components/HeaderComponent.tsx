import SocialMediaLinksComponents from "./shared/SocialMediaLinksComponent";

const HeaderComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-5 sm:px-7 lg:px-40 sm:py-7">
      <h1 className="text-headerM leading-headerM font-bold">joaopmazzo</h1>
      <SocialMediaLinksComponents />
    </div>
  );
};

export default HeaderComponent;
