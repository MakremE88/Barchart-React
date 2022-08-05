import React from 'react';
import Chart, {
  CommonSeriesSettings,
  SelectionStyle,
  Hatching,
  Series,
  Legend,
  Tooltip,
  Export,
} from 'devextreme-react/chart';
import { medalSources, medalStatistics } from './data.js';

const Barchart = () => {
  
  return (
    <div>
        <Chart
        id="chart"
        dataSource={medalStatistics}
        rotated={false}
        pointSelectionMode="multiple"
        onPointClick={onPointClick}
        title="Bar Chart statistique"
        hoverMode= "allArgumentPoints"
      >
        <Tooltip enabled={true} />
        <CommonSeriesSettings
          argumentField="country"
          type="stackedbar"
        >
          <SelectionStyle 
             color="#285bbf"
          >
          <Hatching direction="none" />
          </SelectionStyle>
        </CommonSeriesSettings>
        {
          medalSources.map(({ value, name, color }) => <Series
            key={value}
            valueField={value}
            name={name}
            color={color} />)
        }
        <Legend
          verticalAlignment="center"
          horizontalAlignment="center">
        </Legend>
        <Export enabled={true} />
      </Chart>
    </div>
  )
}

function onPointClick({ target: point }) {
    if (point.isSelected()) {
      point.clearSelection();
    } else {
      point.select();
    }
  }


export default Barchart