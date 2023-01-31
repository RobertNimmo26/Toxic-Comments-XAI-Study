// import react components
import { useContext } from "react";

// import context
import PreTaskQuestionnaireContext from "../../context/PreTaskQuestionnaireContext";

// import bootstrap components
import Table from "react-bootstrap/Table";

// import react-likert-scale component
import Likert from "react-likert-scale";

const PreviousExperienceQuestion = () => {
  const { preTaskForm, setPreTaskForm } = useContext(
    PreTaskQuestionnaireContext
  );

  const handleChange = (event) => {
    setPreTaskForm({
      ...preTaskForm,
      [event.id]: event.val.value,
    });
  };

  const responses = [
    {
      value: 1,
      text: "Level 1",
    },
    {
      value: 2,
      text: "Level 2",
    },
    {
      value: 3,
      text: "Level 3",
    },
    {
      value: 4,
      text: "Level 4",
    },
    {
      value: 5,
      text: "Level 5",
    },
    {
      value: 6,
      text: "Level 6",
    },
    {
      value: 7,
      text: "Level 7",
    },
    {
      value: 8,
      text: "Level 8",
    },
    {
      value: 9,
      text: "Level 9",
    },
    {
      value: 10,
      text: "Level 10",
    },
  ];
  const prevExperience = {
    question:
      "11.	How experienced are you with AI systems from 1 to 10. Use the table below to help you determine your level of expertise.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "prevExperience", val: val });
    },
  };

  return (
    <>
      <Likert {...prevExperience} />

      <Table striped bordered>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Inexperienced</td>
            <td>I have never heard of AI systems.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Interested</td>
            <td>
              I have heard a little about AI systems, but don't know much.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Pursuing</td>
            <td>
              I have read an article/watched a vidoe online about AI systems and
              understand the basics of what it is, but nothing in depth.
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Beginner</td>
            <td>
              I have read an in-depth article, primer, or how-to book, and/or
              have played with an AI systems a bit, such as ChatGPT.
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Apprentice</td>
            <td>
              I developed my own simple AI system for a small project.
              <br /> <br />
              Example: followed a tutorial online, taking an AI course at
              university.
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Intermediate</td>
            <td>
              I have been developing AI systems for a while and am comfortable
              developing AI systems for moderately complex projects.
              <br /> <br />
              Example: completed an AI course at university.
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Advanced</td>
            <td>
              I have been developing AI systems for a number of years on a
              regular basis and understand all the basic aspects about AI
              systems. Comfortable using AI systems as a key element in complex
              projects.
              <br /> <br />
              Example: work as a junior data scientist/machine learning engineer
              in a company using AI systems, Masters/PhD student focusing on AI
              systems.
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Accomplished</td>
            <td>
              I am a team expert, with 5 or more years of solid experience.
              People come to me with their questions on AI systems.
              <br /> <br />
              Example: work as a senior data scientist/machine learning engineer
              for a team in a company using AI systems, published 1-2 papers in
              AI journals/conferences.
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Master</td>
            <td>
              I am a company-wide guru with ten or more years of experience;
              people from other divisions come to me with their questions on AI
              systems.
              <br /> <br />
              Example: work as a principal data scientist/machine learning
              engineer in a company using AI systems, an experienced researcher
              in AI systems who as written a large number of papers which have
              been published in AI journals/conferences.
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Grandmaster</td>
            <td>
              I am a recognized international authority.
              <br /> <br />
              Example: highly renowned researcher who has made a very big impact
              in the field of AI systems.
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PreviousExperienceQuestion;
