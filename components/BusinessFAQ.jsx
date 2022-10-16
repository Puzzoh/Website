import React, { useState, useRef } from "react";

// interface AccordionProps {
//   title: string;
//   content: string | null | any;
// }

// interface ChevronProps {
//   className: string;
//   height?: number;
//   width: number;
//   fill: string;
// }

const Chevron = (props) => {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill={props.fill}
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      />
    </svg>
  );
};

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#000"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

// const qa = [
//   { q: "Is my restaurant eligible?", a: "Lorem ipsum dolor sit amet" },
//   {
//     q: "How do I track my customers via the app?",
//     a: "Lorem ipsum dolor sit amet",
//   },
//   {
//     q: "?",
//     a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     q: "What perks do I gain?",
//     a: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];

// interface Props {
//   reference: React.MutableRefObject<HTMLInputElement>;
// }

const BusinessFAQ = ({ reference }) => {
  return (
    <div ref={reference}>
      <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight font-LexendMega sm:text-4xl">
          Frequently Asked Questions
        </p>
        {/* <p className="mt-4 max-w-2xl text-xl font-LexendDeca lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p> */}
      </div>
      {/* {qa.map((q, a) => (
        <Accordion key={qa.q} title={qa.q} content={qa.a} />
      ))} */}
      <Accordion
        title="Is my restaurant eligible?"
        content="Lorem ipsum dolor sit amet"
      />
      <Accordion
        title="How long does it take to become a partner?"
        content="Lorem ipsum dolor sit amet"
      />
      <Accordion
        title="How do I track my customers via the app?"
        content="Lorem ipsum dolor sit amet"
      />
      <Accordion
        title="What kind of MEE&apos;Tools&apos; do partners receive?"
        content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default BusinessFAQ;
