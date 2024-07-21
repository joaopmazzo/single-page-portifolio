import FrontendMentorIcon from "@assets/icons/icon-frontend-mentor.svg";
import GithubIcon from "@assets/icons/icon-github.svg";
import LinkedinIcon from "@assets/icons/icon-linkedin.svg";
import TwitterIcon from "@assets/icons/icon-twitter.svg";

const SocialMediaLinksComponents = () => {
  return (
    <div className="flex gap-8">
      <img
        className="w-6 h-6"
        src={GithubIcon}
        alt="Github Icon"
      />
      <img
        className="w-6 h-6"
        src={FrontendMentorIcon}
        alt="Frontend Mentor Icon"
      />
      <img
        className="w-6 h-6"
        src={LinkedinIcon}
        alt="LinkedIn Icon"
      />
      <img
        className="w-6 h-6"
        src={TwitterIcon}
        alt="Twitter Icon"
      />
    </div>
  );
};

export default SocialMediaLinksComponents;
