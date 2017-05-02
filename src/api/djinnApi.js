/**
 *
 */
'use strict';
import axios from 'axios';
import config from '../config';

const djinn = axios.create({baseURL: config.djinnUrl});

export function fetchHeatmap() {
  return djinn.get('/heatmap/').then(({data}) => {
    return data
  });
}

export function fetchProjects() {
  return djinn.get('/projects/').then(({data}) => {
    return data
  });
}