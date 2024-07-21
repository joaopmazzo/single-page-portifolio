import HeaderComponent from "@components/HeaderComponent";
import ButtonComponent from "@components/shared/ButtonComponent";
import ProjectContainerComponent from "@components/shared/ProjectContainerComponent";

import {
  InputTextComponent,
  TextareaComponent,
} from "@components/shared/forms";

import { Skills } from "./enums/Skills";

import MockupTestThumbnail from "@assets/thumbs/thumbnail-project-1-small.webp";

function App() {
  const differenceInYearsToSkillLearnDate = (skillLearnDate: number) => {
    const todayYear = new Date().getFullYear();
    const diffTime = todayYear - skillLearnDate;
    return diffTime;
  };

  return (
    <>
      <HeaderComponent />

      {/* intro section */}
      <section className="flex flex-col items-center sm:items-start text-center sm:text-start gap-6 mb-16 lg:mb-52 pt-10 px-4 sm:px-7 lg:pl-40 sm:max-w-xl lg:max-w-4xl">
        <h1 className="text-[40px] sm:text-headerXL leading-headerL sm:leading-headerXL tracking-headerL sm:tracking-headerXL font-bold sm:pb-16">
          Nice to <br className="hidden sm:block lg:hidden" /> meet you!{" "}
          <br className="block sm:hidden" />
          I'm{" "}
          <span className="border-b-4 border-green border-b-">João Paulo</span>.
        </h1>

        <p className="text-base sm:text-bodyL leading-bodyL font-medium text-grey sm:pb-9">
          Based in the BR, I'm a full-stack developer passionate about building
          accessible web apps that users love.
        </p>

        <ButtonComponent text="CONTACT ME" />
      </section>

      <hr className="h-[1px] mx-4 sm:mx-7 lg:mx-40" />

      {/* skills section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-start gap-6 my-10 px-4 sm:px-7 lg:px-40">
        {Skills.sort(
          (a: (typeof Skills)[number], b: (typeof Skills)[number]) =>
            a.year - b.year
        ).map((element: (typeof Skills)[number], index: number) => (
          <div key={index}>
            <h1 className="text-[32px] leading-headerL tracking-headerL font-bold px-4">
              {element.name}
            </h1>
            <p className="text-base sm:text-bodyL leading-bodyL font-medium text-grey">
              {differenceInYearsToSkillLearnDate(element.year)} Years Experience
            </p>
          </div>
        ))}
      </section>

      <hr className="h-[1px] mx-4 sm:hidden" />

      {/* projects section */}
      <section className="flex flex-col gap-10 my-16 px-4 sm:px-7 lg:px-40">
        <div className="flex items-center justify-between">
          <h1 className="text-[40px] sm:text-headerXL leading-headerL sm:leading-headerXL tracking-headerL sm:tracking-headerXL font-bold">
            Projects
          </h1>
          <ButtonComponent text="CONTACT ME" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5">
          <ProjectContainerComponent
            imgSrc={MockupTestThumbnail}
            imgAlt="project thumbnail"
            title="DESIGN PORTIFOLIO"
            technologiesUsed={["React", "Tailwind CSS", "Netlify"]}
          />

          <ProjectContainerComponent
            imgSrc={MockupTestThumbnail}
            imgAlt="project thumbnail"
            title="DESIGN PORTIFOLIO"
            technologiesUsed={["React", "Tailwind CSS", "Netlify"]}
          />
        </div>
      </section>

      {/* contact section */}
      <section className="py-16 bg-darkGrey px-4 sm:px-7 lg:px-40">
        <div className="mx-auto lg:flex lg:justify-between">
          <div className="text-center lg:text-start mb-12 lg:w-[445px]">
            <h2 className="text-[40px] sm:text-headerXL leading-headerL sm:leading-headerXL tracking-headerL sm:tracking-headerXL font-bold pb-5">
              Contact
            </h2>
            <p className="text-base sm:text-bodyL leading-bodyL font-medium text-grey">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            action=""
            className="flex flex-col gap-6 lg:w-[445px]"
          >
            <InputTextComponent
              name="name"
              id="name"
              placeholder="NAME"
            />
            <InputTextComponent
              name="email"
              id="email"
              placeholder="EMAIL"
            />
            <TextareaComponent
              name="email"
              id="email"
              placeholder="EMAIL"
            />

            <div className="flex justify-end pt-8">
              <ButtonComponent text="SEND MESSAGE" />
            </div>
          </form>
        </div>
      </section>

      <hr className="h-[1px] mx-4 sm:mx-7 lg:mx-40" />

      <section className="py-16 bg-darkGrey px-4">
        <HeaderComponent />
      </section>
    </>
  );
}

export default App;
