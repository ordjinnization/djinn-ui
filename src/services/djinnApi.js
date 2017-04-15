/**
 *
 */
'use strict';

export function fetchHeatmap() {
  return fetch('http://localhost:8000/heatmap').then(response => response.json());
}
