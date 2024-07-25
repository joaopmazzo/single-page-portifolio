import HeaderComponent from "@components/HeaderComponent";
import ButtonComponent from "@components/shared/ButtonComponent";
import ProjectContainerComponent from "@components/shared/ProjectContainerComponent";

import * as forms from "@components/shared/forms";

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
      <div className="bg-black">
        <HeaderComponent />

        {/* intro section */}
        <section className="bg-pattern-rings bg-no-repeat bg-[position:-10%_15%] flex flex-col items-center sm:items-start text-center sm:text-start gap-6 mb-16 lg:mb-52 pt-10 px-4 sm:px-7 lg:pt-32 lg:pl-40 sm:max-w-xl lg:max-w-4xl">
          <h1 className="text-[40px] sm:text-[72px] lg:text-headerXL leading-headerL sm:leading-headerXL tracking-headerL sm:tracking-headerXL font-bold sm:pb-16">
            Nice to <br className="hidden sm:block lg:hidden" /> meet you!{" "}
            <br className="block sm:hidden" />
            I'm{" "}
            <span className="border-b-4 border-green border-b-">
              João Paulo
            </span>
            .
          </h1>

          <p className="text-base sm:text-bodyL leading-bodyL font-medium text-grey sm:pb-9">
            Based in the BR, I'm a full-stack developer passionate about
            building accessible web apps that users love.
          </p>

          <ButtonComponent text="CONTACT ME" />
        </section>

        <hr className="h-[1px] mx-4 sm:mx-7 lg:mx-40" />

        {/* skills section */}
        <section className="bg-pattern-rings bg-no-repeat bg-[position:120%_100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-start gap-6 my-10 lg:mt-20 lg:mb-0 px-4 sm:px-7 lg:px-40">
          {Skills.sort(
            (a: (typeof Skills)[number], b: (typeof Skills)[number]) =>
              a.year - b.year,
          ).map((element: (typeof Skills)[number], index: number) => (
            <div key={index}>
              <h1 className="text-[32px] sm:text-headerL leading-headerL sm:leading-headerL tracking-headerL sm:tracking-headerL font-bold">
                {element.name}
              </h1>
              <p className="text-base sm:text-bodyL leading-bodyL font-medium text-grey">
                {differenceInYearsToSkillLearnDate(element.year)} Years
                Experience
              </p>
            </div>
          ))}
        </section>

        <hr className="h-[1px] mx-4 sm:hidden" />

        {/* projects section */}
        <section className="flex flex-col gap-10 py-16 lg:scroll-py-36 px-4 sm:px-7 lg:px-40">
          <div className="flex items-center justify-between">
            <h1 className="text-[40px] sm:text-[72px] lg:text-headerXL leading-headerL sm:leading-headerXL tracking-headerL sm:tracking-headerXL font-bold">
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
      </div>

      <div className="bg-pattern-rings bg-no-repeat bg-[position:-10%_50%] bg-darkGrey">
        {/* contact section */}
        <section className=" py-16 px-4 sm:px-7 lg:px-40">
          <div className="sm:w-[445px] lg:w-full mx-auto lg:flex lg:justify-between">
            <div className="text-center lg:text-start mb-12 lg:w-[445px]">
              <h2 className="text-[40px] sm:text-[72px] lg:text-headerXL leading-headerL sm:leading-headerXL tracking-headerL sm:tracking-headerXL font-bold pb-5">
                Contact
              </h2>
              <p className="text-base sm:text-bodyL leading-bodyL font-medium text-grey">
                I would love to hear about your project and how I could help.
                Please fill in the form, and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form action="" className="flex flex-col gap-6 lg:w-[445px]">
              <forms.InputTextComponent
                name="name"
                id="name"
                placeholder="NAME"
              />
              <forms.InputTextComponent
                name="email"
                id="email"
                placeholder="EMAIL"
              />
              <forms.TextareaComponent
                name="message"
                id="message"
                placeholder="MESSAGE"
              />

              <div className="flex justify-end pt-8">
                <ButtonComponent text="SEND MESSAGE" />
              </div>
            </form>
          </div>
        </section>

        <hr className="h-[1px] mx-4 sm:mx-7 lg:mx-40" />

        <section className="py-16 lg:py-0 lg:pb-24 lg:pt-12 bg-darkGrey px-4">
          <HeaderComponent />
        </section>
      </div>
    </>
  );
}

export default App;
