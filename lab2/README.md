Lab 2: Vancouver Bike Lanes & Cycling Accidents

By Sarah Kelly

Here is a snapshot of my map!
![rushhour_screenshot](https://user-images.githubusercontent.com/97564270/159425794-27b6109d-6953-4448-97e0-9eb9248f61e4.png)
This screenshot shows a heatmap of cycling accidents downtown Vancouver, filtered for afternoon rush hour (3PM - 6PM on weekdays).

And here is the link to the full map: https://sarahkkelly.github.io/sarahkkelly-web/lab2/vancouver-cycling-lanes-and-accidents.html

Reflection:

I created a cycling map of Vancouver that contains bike lanes in the city, as well as cycling accidents that occured between 2016 and 2020. This map attempts to explore the relationship between bike lanes and cycling accidents, as well as looks to analyze temporal trends in cycling accidents. I had two audiences in mind when designing the map. Cyclists can use the map to explore the different categories of bike lanes in the city, as well as to learn about streets or intersections that tend to pose a greater risk to the safety of cyclists. The other audience would be people involved in city planning. By looking at where accidents occur in relation to bike lanes, the map can help gain insight into locations where new bike lanes may be beneficial or where a different category of bike lane may be more safe.

I utilized two geojson datasets for my map. I obtained bike lane data from the City of Vancouver’s Open Data Portal and cycling accident data from ICBC’s public data. ICBC has cycling accident data available from 2016 to 2020. All the accidents in the dataset involved a car and resulted in a claim made. This does introduce a limitation to the map, as only those cycling accidents that involved a car and resulted in a claim are shown. I created the map using Mapbox GL JS. I utilized a light grey base map to allow the symbology of my bike lane and bike accident data layers to really stand out. For the bike lane data, I symbolized the bike lane line data with a different colour hue corresponding to each of the four categories of bike lanes. I also had the line width increase as the user zooms into the map. I added popups to the bike lanes, so that when the user clicks on a bike lane, details about that route are given.

Designing the cycling accident data was more challenging. I represented the accidents as a heatmap when the map is zoomed out, and as individual crash location points as you zoom in. The heatmap helps to visualize the spatial variation in crashes. Areas with higher density of accidents are shown in a darker red-orange, while areas with lower crash density are shown in a lighter orange. I also slightly reduced the opacity of the heatmap layer to make it easier to see the bike lanes overlaid on top. As the user zooms in, the heatmap transitions into an red-orange point layer. This transition allows for an increase in the level of detail shown when zooming in (Roth, 2017). More specifically, the points represent individual crashes, and increase in size as the user zooms in. By clicking on a point, details about the crash are provided in a popup. A key feature of my map are the filtering buttons on the left side of the map. Filters allow for map features to be included or removed based on meet user-defined conditions (Roth, 2017). To filter the data, I added buttons representing different time categories throughout the course of a day, and buttons for weekday and weekend. Clicking on the buttons will display only the accidents that occurred during the specified time/days. This allows the user to explore temporal trends in the cycling accident data, and highlights times/days that have higher or lower occurrences of cycling accidents. The filtering buttons work on both the heatmap layer and the point layer. Through the filtering buttons, popups, and bike lane symbolization, I believe I was successful addressing the questions that my map raises. Showing the bike lanes and cycling accidents together allows the relationship between the two to be explored. While the filtering buttons  allow for the analysis of temporal trends in cycling accidents. The popups on both the bike and lanes and the crash points also provide greater insight into the nature of cycling behaviour around the city. To complete the map and provide context, I added a title and description of the map's features, as well as a legend. 

As I further develop my skills, I would be able to make a few additions to the map that would improve it. For example I think it would be beneficial to have the points corresponding to cycling accidents that took place on bike lanes as one colour, while accidents that took place off bike lanes a different colour. This would help to visualize the relationship between bike lanes and accidents a bit more clearly. I could also add more filter options to allow for further investigation of the accident data. While I wanted to focus on temporal trends here, it would also be interesting to filter by other properties such as crash severity.

Reference:

Roth, R. E. (2017). User Interface and User Experience (UI/UX) Design. The Geographic Information Science & Technology Body of Knowledge (2nd Quarter 2017 Edition), John P. Wilson (ed.). DOI: 10.22224/gistbok/2017.2.5.


Collaboration and reliance on resources:

In the process of making my map, I collaborated with Simen Hennum. We conducted a peer review process and provided feedback on each other's maps. He made suggestions regarding the symbology of my heatmap. I originally had the sequential colour palette of the heat map transition from blue at lowest density to dark red at highest density. He suggested that I change the symbology to transition between fewer colours, as it made the map look overly confusing. He also suggested that I make the transition from the heatmap to the point data more seamless, as originally the heatmap layer was not removed soon enough and could still be seen under the point layer. 

I utilized the following examples in my work:

For styling lines based on data property:
https://docs.mapbox.com/mapbox-gl-js/example/data-driven-lines/

For adding a legend:
https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-2/

For creating the heatmap:
https://docs.mapbox.com/mapbox-gl-js/example/heatmap-layer/

To filter data by time and day of the week using buttons:
https://docs.mapbox.com/help/tutorials/show-changes-over-time/


Data Sources:

ICBC cycling accident data, https://public.tableau.com/app/profile/icbc/viz/PublicDataset-ICBCReportedCrashesCyclists/ICBCReportedCrashes-Cyclists?publish=yes

City of Vancouver Open Data Portal Bikeways data,
https://opendata.vancouver.ca/explore/dataset/bikeways/information/
