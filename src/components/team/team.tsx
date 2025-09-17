import type { FunctionComponent, JSX } from "react";
import SectionHeader from "../section-header/section-header";
import type { TeamMemberType } from "./types";
import TeamMember from "./team-member";

const Team: FunctionComponent = (): JSX.Element => {
  const teamMembers: TeamMemberType[] = [
    {
      pic: "/assets/ceo.jpg",
      name: "MD Tuhin Khandakar",
      position: "Web Designer and Digital Marketer",
    },
    {
      pic: "/assets/video-editor.jpg",
      name: "Mahin",
      position: "Video Editor",
    },
    {
      pic: "/assets/copywriter.jpg",
      name: "Siam",
      position: "Copywriter",
    },
    {
      pic: "/assets/hr-manager.jpg",
      name: "Sahil",
      position: "HR Manager",
    },
    {
      pic: "/assets/graphics-designer.jpg",
      name: "Razwan",
      position: "Graphics Designer",
    },
    {
      pic: "/assets/intern-graphics-designer.jpg",
      name: "Nur Mohammad",
      position: "Intern Graphics Designer",
    },
    {
      pic: "/assets/motion-graphics-and-3d-artist.jpg",
      name: "Miraj",
      position: "Motion Graphics & 3D Artist",
    },
  ];

  return (
    <section className="px-5 sm:px-10 mb-30 z-90">
      <div className="mx-auto max-w-[1536px]">
        <SectionHeader
          title="our team"
          subtitle="The Experts Behind Markiety"
          description="At Markiety, our success is powered by a dedicated team of experts who bring creativity, strategy, and passion to every project."
        />
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-7 xs:grid-rows-4 md:grid-rows-3 lg:grid-rows-2 gap-8">
          {teamMembers.map(
            ({ pic, name, position }, index: number): JSX.Element => {
              return (
                <TeamMember
                  key={index}
                  pic={pic}
                  name={name}
                  position={position}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
