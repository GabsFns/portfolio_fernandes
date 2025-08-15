import Header from "../../header/header";
import WelcomeCard from "../../cards/welcome_card";
import CardCarousel from "../../cards/cardCarousel";
import AboutComponent from "../../about/aboutComponent";
import Works from "../../works/works";
import ProjectComponent from "../../project/projectComponent";
export default function defaultLayout() {
  return (
    <div className="default-layout">
      <Header />
      <WelcomeCard/>
      <CardCarousel/>
      <AboutComponent/>
      <Works/>
      <ProjectComponent/>
      <main>
      </main>
    </div>
  );
}