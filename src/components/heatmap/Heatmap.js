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
const LAYOUT = Object.freeze({
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
    tickangle: -30,
    tickfont: {
      family: 'Old Standard TT, serif',
      size: 14,
      color: 'black'
    },
  },
  margin: {
    l: 100,
    r: 50,
    b: 130,
    t: 30,
    pad: 4
  }
});

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
 * @returns {XML} a component that renders the heatmap as a plotly heatmap.
 */
export const Heatmap = ({data}) => {
  data.type = 'heatmap';
  data.hoverinfo = 'text';
  data.colorscale = COLOURSCALE_VALUE;
  return (
    <PlotlyComponent className='project-stage-heatmap' data={[data]} layout={LAYOUT}
                     config={CONFIG} />
  );
};

Heatmap.propTypes = {
  data: PropTypes.object.isRequired
};

export default Heatmap;
