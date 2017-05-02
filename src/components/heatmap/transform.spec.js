/**
 *
 */
'use strict';
import {expect} from 'chai';
import {transformHeatmapData} from './transform'

const CUSTOM_DATA = Object.freeze({
  z: [[0, 10], [3, 4]],
  x: ['Build Artifact', null],
  y: ['UI', 'Titan'],
  hoverinfo: 'text',
  type: 'heatmap',
  colorscale: []
});

describe('data transformHeatmapData', () => {
  it('should remove null values from data', () => {
    const data = transformHeatmapData(CUSTOM_DATA);
    expect(data.x[1]).to.be.equal('Unknown');
  });

  it('should add a "text" property with correct values', () => {
    const expected = [[
      "Stage: Build Artifact<br>Application: UI<br>Failures: 0",
      "Stage: Unknown<br>Application: UI<br>Failures: 10"
    ], [
      "Stage: Build Artifact<br>Application: Titan<br>Failures: 3",
      "Stage: Unknown<br>Application: Titan<br>Failures: 4"
    ]];
    expect(transformHeatmapData(CUSTOM_DATA).text).to.deep.equal(expected);
  });
});
