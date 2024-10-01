import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Articles from "@/components/Articles";
import SideHustles from "@/components/SideHustles";
import Recommendations from "@/components/Recommendations";
import Skill from "@/components/Skill";

export const metadata = {
  title: "Home",
  description: "Page description",
};

export default async function Home() {
  return (
    <>
      <Experience />
      <SideHustles />
      <Education />
      <Skill />
      <Recommendations />
    </>
  );
}
