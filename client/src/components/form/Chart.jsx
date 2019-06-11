import React from "react";
import PropTypes from "prop-types";

import styles from "./Chart.module.css";

const Chart = ({ value, max }) => {
  const progres = (max - value) / max;

  const style = {
    strokeDasharray: `${(progres * 251.2).toFixed(2)} 251.2`,
    stroke: `var(--pink-color)`
  };

  return (
    <svg viewBox="0 0 100 100" className={styles.chart}>
      <circle r="40" cy="50" cx="50" className={styles.chartbackground} />
      <circle
        r="40"
        cy="50"
        cx="50"
        className={styles.chartprogress}
        transform="rotate(-90)"
        style={style}
      />

      <text className={styles.chartvalue} x="50" y="60" textAnchor="middle">
        {value}
      </text>
    </svg>
  );
};

Chart.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default Chart;
