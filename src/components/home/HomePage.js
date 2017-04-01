/**
 *
 */
'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';
import Plotly from 'plotly.js/lib/index-cartesian';
import createPlotlyComponent from 'react-plotlyjs';

const PlotlyComponent = createPlotlyComponent(Plotly);

const style = {
  paddingLeft: 20,
  paddingRight: 20,
};
let myPlot = document.getElementById('myDiv')
let colorscaleValue = [
  ['0.0', 'rgb(200,200,200)'],
  ['0.2', 'rgb(255,255,0)'],
  ['0.3', 'rgb(255,240,0)'],
  ['0.5', 'rgb(255,150,0)'],
  ['0.8', 'rgb(255,50,0)'],
  ['1.0', 'rgb(255,0,0)']
]

let data = {
  z: [[0, 10], [3, 4]],
  x: ['Build Artifact', 'Test'],
  y: ['UI', 'Titan'],
  hoverinfo: 'text',
  type: 'heatmap',
  colorscale: colorscaleValue
}

let x = data.x
let y = data.y
let z = data.z

let text = x.map((xi, i) => y.map((yi, j) => `
Stage: ${xi}<br>
Application: ${yi}<br>
Failures: ${z[i][j]}
`))

data.text = text
let layout = {                     // all "layout" attributes: #layout
  title: 'Stage Failures',  // more about "layout.title": #layout-title
  xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
    title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
  },
  annotations: [            // all "annotation" attributes: #layout-annotations
    {
      text: 'This is the centre!',    // #layout-annotations-text
      x: 0.5,                         // #layout-annotations-x
      xref: 'paper',                // #layout-annotations-xref
      y: 0.5,                         // #layout-annotations-y
      yref: 'paper'                 // #layout-annotations-yref
    }
  ]
};
let config = {
  showLink: false,
  displayModeBar: true
};

class HomePage extends React.Component {

  render() {
    return <div style={style}>
      <Paper style={{padding:20, width:'60%', overflow: 'hidden'}}>
        <div style={{overflow: 'hidden'}}>
          <h1 style={{float:'left'}}>Stats!</h1>
          <div style={{float:'right', paddingTop:30}}></div>
        </div>
        <div>
          <PlotlyComponent className="whatever" data={[data]} layout={layout} config={config}/>
        </div>
      </Paper>
    </div>
  }
}

export default HomePage;
