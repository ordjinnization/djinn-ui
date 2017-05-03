/**
 * Presentation component for heatmaps.
 */
'use strict';
import React, {PropTypes} from 'react';
import Plotly from 'plotly.js/lib/index-cartesian';
import createPlotlyComponent from 'react-plotlyjs';

const PlotlyComponent = createPlotlyComponent(Plotly);

/**
 * A green -> yellow -> red colour scale.
 */
const COLOURSCALE_VALUE = Object.freeze([
  ['0.0', 'rgb(0,153,51)'],
  ['0.2', 'rgb(255,250,0)'],
  ['0.3', 'rgb(255,200,0)'],
  ['0.5', 'rgb(255,150,0)'],
  ['0.8', 'rgb(255,50,0)'],
  ['1.0', 'rgb(255,0,0)']
]);

/**
 * Default layout.
 */
const layout = {
  autosize: true,
  height: '700',
  title: 'Stage Failures',
  xaxis: {
    tickangle: 20,
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 14,
      color: 'black'
    },
  },
  yaxis: {
    tickangle: -10,
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 14,
      color: 'black'
    },
  },
  margin: {
    l: 180,
    r: 190,
    b: 160,
    t: 30,
    pad: 4
  }
};

/**
 * Default config.
 */
const CONFIG = Object.freeze({
  showLink: false,
  displayModeBar: false
});

/**
 * Renders a heatmap of the given data. The data must to be in a form
 * plotly.js expects.
 * @param data the data to render.
 * @param style style to use.
 * @returns {XML} a component that renders the heatmap as a plotly heatmap.
 */
export const Heatmap = ({data}) => {
  layout.margin = computeLayoutmargin(data.x, data.y);
  data.type = 'heatmap';
  data.hoverinfo = 'text';
  data.colorscale = COLOURSCALE_VALUE;

  return (
    <PlotlyComponent className='project-stage-heatmap' data={[data]} layout={layout}
                     config={CONFIG} />
  );
};

/**
 * Dynamically compute the x/y margins based on label size. Note, this is
 * not an optimal algorithm, it causes the size computed to grow faster than
 * the actual max size of a list of labels.
 * @param xs x labels
 * @param ys y labels.
 * @returns {{l, r, b: number, t: number, pad: number}}
 */
const computeLayoutmargin = (xs, ys) => {
  const getLargestString = (list) => {
    return list.reduce((a, b) => {
      return a.length >= b.length ? a : b;
    });
  };

  const computeLeft = (list) => {
    return 7 * getLargestString(list).length;
  };

  const computeRight = (list) => {
    const last = list.slice(-1)[0];
    if (last === null) {
      return 0;
    }
    return 4 * list.slice(-1)[0].length;
  };

  return {
    l: computeLeft(ys),
    r: computeRight(xs),
    b: 160,
    t: 30,
    pad: 4
  }
};

Heatmap.propTypes = {
  data: PropTypes.object.isRequired
};

export default Heatmap;
