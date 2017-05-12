/**
 *
 */
'use strict';
import axios from 'axios';
import config from '../config';

const djinn = axios.create({baseURL: config.djinnUrl});

export function fetchHeatmap() {
  return djinn.get('/heatmap/')
    .then(({data}) => ({data}))
    .catch(error => ({error}));
}

export function fetchHeatmapForProject(project) {
  return djinn.get(`/heatmap/${project}/`)
    .then(({data}) => ({data}))
    .catch(error => ({error}));
}

export function fetchProjects() {
  return djinn.get('/projects/')
    .then(({data}) => ({data}))
    .catch(error => ({error}));
}

/**
 * Retrieve the latest results.
 */
export function fetchLatestResults() {
  return djinn.get('/results/?latest=true')
    .then(({data}) => ({data}))
    .catch(error => ({error}));
}
