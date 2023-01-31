import React from "react";
import "./Benefits.css";
import Image1 from "../../assets/benefits/img1.png";
import Image2 from "../../assets/benefits/img2.png";
import Image3 from "../../assets/benefits/img3.png";
import Image4 from "../../assets/benefits/img4.png";
import Button from "../common/Button/Button";

interface IBenefit {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  button?: {
    text: string;
    link: string;
  };
}

const benefits: IBenefit[] = [
  {
    subtitle: "SOUNDS",
    title: "A catalog so deep, it's dangerous.",
    description:
      "Expertly created and curated samples in any style imaginable. Start swimming in sound.",
    image: Image1,
    button: { text: "Explore Sounds", link: "#" },
  },
  {
    subtitle: "Connected Experience",
    title: "A workflow that actually flows.",
    description:
      "Preview samples in your track’s key and tempo, drag and drop sounds into your DAW, and organize your favorite samples, MIDI and presets in one place.",
    image: Image2,
  },
  {
    subtitle: "Gear",
    title: "Build a drool-worthy studio, affordably.",
    description:
      "The industry’s top software, all in one place, on payment plans built to work for you.",
    image: Image3,
    button: { text: "Explore Gear", link: "#" },
  },
  {
    subtitle: "Technology",
    title: "Crate dig without the dust.",
    description:
      "Our intelligent search tools help you discover sounds you would normally have to dig to find. Tech breaks the sweat, not you.",
    image: Image4,
    button: { text: "Discover CoSo", link: "#" },
  },
];

const Benefits = () => {
  return (
    <section className="benefits">
      {benefits.map(
        ({ subtitle, title, description, image, button }, index) => (
          <div className="benefit__part" key={index}>
            <div className="benefit__part-text">
              <h4>{subtitle}</h4>
              <h2>{title}</h2>
              <p>{description}</p>
              {button && <Button>{button.text}</Button>}
            </div>
            <div className="benefit__part-image">
              <img src={image} alt={title} />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Benefits;
