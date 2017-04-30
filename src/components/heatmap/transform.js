/**
 *
 */
'use strict';

/**
 * Find null's and convert to 'Unknown' in an object of two
 * keys 'x' and 'y' pointing at lists.
 * @param data the data to clean.
 * @returns {Object} the cleaned data.
 */
const cleanData = (data) => {
  const nullToUnknown = (ref) => {
    return ref === null ? 'Unknown' : ref;
  };
  data.x = data.x.map(item => nullToUnknown(item));
  data.y = data.y.map(item => nullToUnknown(item));
  return data;
};

/**
 * Given heatmap data transform it by updating null values to the
 * string 'Unknown' and adding a text property.
 * @param heatmapData the data to transform.
 * @returns {Object}
 */
const transform = (heatmapData) => {
  const data = cleanData(Object.assign({}, heatmapData));

  let x = data.x;
  let y = data.y;
  let z = data.z;

  data.text = y.map((yi, i) =>
    x.map((xi, j) => `Stage: ${xi}<br>Application: ${yi}<br>Failures: ${z[i][j]}`)
  );

  return data;
};

export default transform;
