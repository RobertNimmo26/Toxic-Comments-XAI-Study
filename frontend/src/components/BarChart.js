// import ChartJS components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
      text: "Important words",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      title: {
        text: "Important words",
        display: true,
      },
    },
    y: {
      stacked: true,
      title: {
        text: "Word weight",
        display: true,
      },
    },
  },
};

const barchartdata = (important_words) => {
  let toxic_data = [];
  let non_toxic_data = [];

  let labels = [];

  for (let i = 0; i < important_words.length; i++) {
    labels.push(important_words[i].word);
    if (important_words[i].weight > 0) {
      toxic_data.push(important_words[i].weight);
      non_toxic_data.push("0");
    } else {
      non_toxic_data.push(important_words[i].weight * -1);
      toxic_data.push("0");
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Toxic",
        data: toxic_data,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Non-toxic",
        data: non_toxic_data,
        backgroundColor: "rgb(75, 192, 192)",
      },
    ],
  };
  return data;
};

const BarChart = ({ important_words }) => {
  const data = barchartdata(important_words);
  // console.log(data);
  return <Bar options={options} data={data} />;
};

export default BarChart;
