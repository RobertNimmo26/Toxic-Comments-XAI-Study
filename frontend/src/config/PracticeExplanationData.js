const PracticeExplanationData = Array.from([
  {
    id: "9da546936bcd59dc",
    comment:
      "Ah, the wonders of political correctness. Bastard, a perfectly good word for centuries, is no longer to be used. Where do you suppose it will end?",
    prediction_proba: 91.26,
    prediction_label: "Toxic",
    important_words: [
      { word: "Bastard", weight: 0.8294, label: "Toxic" },
      { word: "perfectly", weight: 0.03, label: "Toxic" },
      { word: "the", weight: 0.0214, label: "Non-toxic" },
      { word: "Where", weight: 0.0204, label: "Toxic" },
      { word: "good", weight: 0.0158, label: "Non-toxic" },
      { word: "Ah", weight: 0.0134, label: "Non-toxic" },
      { word: "political", weight: 0.0118, label: "Non-toxic" },
      { word: "is", weight: 0.0105, label: "Non-toxic" },
      { word: "centuries", weight: 0.0075, label: "Non-toxic" },
      { word: "used", weight: 0.0024, label: "Toxic" },
    ],
    new_important_words: [],
    checked: false,
  },
]);
export default PracticeExplanationData;
