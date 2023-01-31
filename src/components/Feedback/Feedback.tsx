import React from "react";
import "./Feedback.css";
import Avatar1 from "../../assets/feedback/author1.png";
import Avatar2 from "../../assets/feedback/author2.png";
import Avatar3 from "../../assets/feedback/author3.png";

interface IFeedback {
  avatar: string;
  name: string;
  comment: string;
}

const feedbacks: IFeedback[] = [
  {
    avatar: Avatar1,
    name: "Andrew Huang",
    comment:
      "I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.",
  },
  {
    avatar: Avatar2,
    name: "KSHMR",
    comment:
      "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
  },
  {
    avatar: Avatar3,
    name: "Kesha Lee",
    comment:
      "It's been fun to dive into Splice's creator community and explore tools that support my own creative process.",
  },
];

const Feedback = () => {
  return (
    <section className="feedback">
      {feedbacks.map((feedback, index) => (
        <div className="feedback__item" key={index}>
          <div className="feedback__avatar">
            <img src={feedback.avatar} alt={feedback.name} />
          </div>
          <div className="feedback__content">
            <p className="feedback__content-comment">{feedback.comment}</p>
            <p className="feedback__content-name">{feedback.name}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Feedback;
