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
      <section className="flex flex-col items-center text-center gap-6 mb-16 px-4">
        <h1 className="text-headerL leading-headerL tracking-headerL font-bold">
          Nice to meet you!
          <br />
          I'm{" "}
          <span className="border-b-4 border-green border-b-">João Paulo</span>.
        </h1>

        <p className="text-bodyL leading-bodyL font-medium text-grey">
          Based in the UK, I'm a full-stack developer passionate about building
          accessible web apps that users love.
        </p>

        <ButtonComponent text="CONTACT ME" />
      </section>

      <hr className="h-[1px] mx-4" />

      {/* skills section */}
      <section className="flex flex-col text-center gap-6 my-10 px-4">
        {Skills.sort(
          (a: (typeof Skills)[number], b: (typeof Skills)[number]) =>
            a.year - b.year
        ).map((element: (typeof Skills)[number], index: number) => (
          <div key={index}>
            <h1 className="text-[40px] leading-headerL tracking-headerL font-bold px-4">
              {element.name}
            </h1>
            <p className="font-medium">
              {differenceInYearsToSkillLearnDate(element.year)} Years Experience
            </p>
          </div>
        ))}
      </section>

      <hr className="h-[1px] mx-4" />

      {/* projects section */}
      <section className="flex flex-col gap-10 my-16 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-headerL leading-headerL tracking-headerL font-bold">
            Projects
          </h1>
          <ButtonComponent text="CONTACT ME" />
        </div>

        <div>
          <ProjectContainerComponent
            imgSrc={MockupTestThumbnail}
            imgAlt="project thumbnail"
            title="DESIGN PORTIFOLIO"
            technologiesUsed={["React", "Tailwind CSS", "Netlify"]}
          />
        </div>
      </section>

      {/* contact section */}
      <section className="py-16 bg-darkGrey px-4">
        <div className="text-center mb-12">
          <h2 className="text-headerL leading-headerL tracking-headerL font-bold pb-5">
            Contact
          </h2>
          <p className="text-bodyL leading-bodyL font-medium text-grey">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        <form
          action=""
          className="flex flex-col gap-6"
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
        </form>

        <div className="flex justify-end pt-8">
          <ButtonComponent text="SEND MESSAGE" />
        </div>
      </section>

      <hr className="h-[1px] mx-4" />

      <section className="py-16 bg-darkGrey px-4">
        <HeaderComponent />
      </section>
    </>
  );
}

export default App;
