/**
 *
 */
'use strict';
import cytoscape from 'cytoscape';
import React from 'react';
import {DEF_VISUAL_STYLE} from './VisualStyle';

// TODO: consolidate Cytoscape-dependent tags
const CYTOSCAPE_TAG = 'cy';

// Original position will be used when layout is positions are available
const DEF_LAYOUT = 'preset';

// Layout to be used when there is no layout information
const DEF_NO_LAYOUT = 'cose';

let network = {
  elements: {
    nodes: [
      {data: {id: 'n0', name: 'Exception'}},
      {data: {id: 'n1', name: 'app1'}},
      {data: {id: 'n2', name: 'app2'}},

    ],
    edges: [
      {data: {source: 'n1', target: 'n0', label: 'kaa-tests'}},
      {data: {source: 'n2', target: 'n0', label: 'user-journey'}},
    ]
  }
}


class CytoscapeRenderer extends React.Component {

  updateCyjs() {
    console.log('* Cytoscape.js is rendering new network...');

    let visualStyle = DEF_VISUAL_STYLE
    let layout = DEF_LAYOUT

    if (visualStyle === undefined || visualStyle === null) {
      visualStyle = DEF_VISUAL_STYLE
      layout = DEF_NO_LAYOUT
    }


    this.refs.cy = cytoscape(
      {
        container: document.getElementById(CYTOSCAPE_TAG),
        elements: network.elements,
        style: visualStyle,
        layout: {
          name: 'breadthfirst'
        }

      });
  }

  componentDidMount() {
    this.updateCyjs();
  }

  shouldComponentUpdate(nextProps, nextState) {

    return true;
  }

  render() {
    return (
      <div ref={CYTOSCAPE_TAG} id={CYTOSCAPE_TAG} style={{
        position: 'absolute',
        bottom: '0px',
        left: '0',
        right: '0',
        height: '100%',
        paddingLeft: '15px',
        paddingRight: '15px',
      }} />
    )
  }
}

export default CytoscapeRenderer
