import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import { round, sum } from 'lodash';

export default props => {
  const average = data => {
    return round(sum(data) / data.length);
  };

  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={250} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.unit}
      </div>
    </div>
  );
};
