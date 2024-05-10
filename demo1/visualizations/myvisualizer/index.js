import React from "react";
 
import { AreaChart, LineChart, PieChart } from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading"> <h1> custom visualizer </h1>
 
<Grid>
   
<GridItem columnSpan={6}>
    <AreaChart
            accountId={4440025}
            query="SELECT average(memoryUsedPercent) AS `Memory used %` FROM SystemSample WHERE (entityGuid = 'NDQ0MDAyNXxJTkZSQXxOQXw3NDQwNDk3OTEyNzYyMDI2Mjk2') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
 
<GridItem columnSpan={6}>
    <AreaChart
            accountId={4440025}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQ0MDAyNXxJTkZSQXxOQXw3NDQwNDk3OTEyNzYyMDI2Mjk2') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<AreaChart
            accountId={4440025}
            query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQ0MDAyNXxJTkZSQXxOQXw3NDQwNDk3OTEyNzYyMDI2Mjk2') TIMESERIES AUTO"
            fullWidth
          />
</GridItem>
<GridItem columnSpan={6}>
<PieChart
          accountId={4440025
            
          }
          query="SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQ0MDAyNXxJTkZSQXxOQXw3NDQwNDk3OTEyNzYyMDI2Mjk2') TIMESERIES AUTO"
          fullWidth
          />
</GridItem></Grid>
 
 
 
   
    </div>
  );
};
 
export default index;