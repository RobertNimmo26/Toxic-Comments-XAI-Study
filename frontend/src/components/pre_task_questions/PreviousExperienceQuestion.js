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
    { value: 0, text: "Level 0" },
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
      "11.	How experienced are you with AI systems from 0 to 10. Use the table below to help you determine you level of expertise.",
    responses: responses,
    layout: "stacked",
    onChange: (val) => {
      handleChange({ id: "prevExperience", val: val });
    },
  };

  return (
    <>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>Description</th>
            <th>Size</th>
            <th>Practice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>Inexperienced</td>
            <td>I have never heard of AI systems.</td>
            <td>10,000,000,000</td>
            <td>None</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Interested</td>
            <td>
              I have heard a little about AI systems, but don't know much.
            </td>
            <td>1,000,000,000</td>
            <td>1 hour</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Pursuing</td>
            <td>
              I have read an article or two about AI systems and understand the
              basics of what it is, but nothing in depth.
            </td>
            <td>100,000,000</td>
            <td>1 day</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Beginner</td>
            <td>
              I have read an in-depth article, primer, or how-to book, and/or
              have played (tried out Chat GPT for example) with AI systems a
              bit.
            </td>
            <td>10,000,000</td>
            <td>1 week</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Apprentice</td>
            <td>
              I have used AI system for at least a few months and have
              successfully completed a small project using it.
            </td>
            <td>1,000,000</td>
            <td>3 months</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Intermediate</td>
            <td>
              I have used AI systems for a year or more on a daily or regular
              basis, and am comfortable using developing AI systems in
              moderately complex projects.
            </td>
            <td>100,000</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Advanced</td>
            <td>
              I have been using it for many years, know all of the basic
              aspects, and am comfortable using it as a key element in complex
              projects. People in my group come to me with their questions.
            </td>
            <td>10,000</td>
            <td>5 years</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Accomplished</td>
            <td>
              I am a team expert, with ten or more years of solid experience.
              People in my division come to me with their questions on AI
              systems.
            </td>
            <td>1,000</td>
            <td>10 years</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Master</td>
            <td>
              I am a company-wide guru with twenty or more years of experience;
              people from other divisions come to me with their questions on AI
              systems.
            </td>
            <td>100</td>
            <td>20 years</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Grandmaster</td>
            <td>
              I am a recognized international authority (highly renowned
              researcher) on AI systems.
            </td>
            <td>10</td>
            <td>30 years</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Great grandmaster</td>
            <td>I created it, and am the number 1 expert in the world.</td>
            <td>1</td>
            <td>50 years</td>
          </tr>
        </tbody>
      </Table>
      <Likert {...prevExperience} />
    </>
  );
};

export default PreviousExperienceQuestion;
