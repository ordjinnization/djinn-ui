/**
 *
 */
'use strict';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import React from 'react';
import DjinnCard from '../djinncard.component';
import CytoscapeRenderer from './cytoscape';

const FailTable = () => {
  return (<DjinnCard>
    <CytoscapeRenderer/>
  </DjinnCard>);
};

export default FailTable;
