import { FC } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";

interface InfoBoxProps {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox: FC<InfoBoxProps> = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent: any = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Hai5eDFM</span>
      <br />
      Fullstack Developer and Designer
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way. I am passionate about creating beautiful and functional websites."
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years."
      link="/projects"
      btnText="Check out my portfolio."
    />
  ),
  4: (
    <InfoBox
      text="I am always looking for new opportunities to learn and grow. I am currently open to new projects and collaborations."
      link="/contact"
      btnText="Get in touch with me"
    />
  ),
};

interface Props {
  currentStage: number;
}

export const HomeInfo: FC<Props> = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
