/**
 *
 */
'use strict';
export const DEF_VISUAL_STYLE = [
  {
    selector: 'node',
    style: {
      'background-color': '#ffffff',
      'width': 'label',
      'height': 'label',
      'label': 'data(name)',
      'shape': 'rectangle',
      'padding':'2px',
      'font-family': 'Roboto, sans-serif',
      'text-valign': 'center',
    }
  },
  {
    selector: 'edge',
    style: {
      'line-color': '#aaaaaa',
      'width': 1,
      'label': 'data(label)',
      'font-size': '12px',
      'font-family': 'Roboto, sans-serif',
      'text-opacity': 0.5,
      'edge-pointing-direction': 'inside',
    }
  },
  {
    selector: 'node:selected',
    style: {
      'background-color': 'yellow'
    }
  },
  {
    selector: 'edge:selected',
    style: {
      'line-color': 'yellow',
      'width': 6
    }
  }
];
