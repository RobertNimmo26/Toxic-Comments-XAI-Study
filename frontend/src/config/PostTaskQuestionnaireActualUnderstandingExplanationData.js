const PracticeExplanationData = Array.from([
  {
    id: "ddd4823663e5cb49",
    comment:
      "Shut up, Moron. Halo was even voted AND rated better then Half Life or Half life 2.",
    prediction_proba: 95.68,
    prediction_label: "Toxic",
    important_words: [
      { word: "Moron", weight: 0.7, label: "Toxic" },
      { word: "Shut", weight: 0.36, label: "Toxic" },
      { word: "better", weight: 0.21, label: "Non-toxic" },
      { word: "up", weight: 0.17, label: "Toxic" },
      { word: "AND", weight: 0.11, label: "Toxic" },
      { word: "even", weight: 0.09, label: "Toxic" },
      { word: "voted", weight: 0.05, label: "Non-toxic" },
      { word: "rated", weight: 0.025, label: "Toxic" },
      { word: "Halo", weight: 0.02, label: "Non-toxic" },
      { word: "then", weight: 0.01, label: "Toxic" },
    ],
    checked: false,
  },
]);
export default PracticeExplanationData;
