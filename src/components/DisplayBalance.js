import React from 'react'
import { Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react';

function DisplayBalance({size='tiny', color='black', label, value}) {
  return (
    <Statistic size={size} color={color}>
      <StatisticLabel style={{textAlign: 'left'}}>
        {label}
      </StatisticLabel>
      <StatisticValue>{value}</StatisticValue>
    </Statistic>
  )
}

export default DisplayBalance