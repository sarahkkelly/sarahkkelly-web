var config = {
    style: 'mapbox://styles/skkelly/cl1pg3k4i002v14miuko2dwgz',
    accessToken: 'pk.eyJ1Ijoic2trZWxseSIsImEiOiJjbDAxbHVkN2cwdjFuM2lwa3AzZWc0NDB0In0.cu-n7Etu07mUFTTmWEfiFw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The Districts of Panem',
    image: '/desktop/title.png',
    subtitle: 'Exploring portrayals of environmental justice and destruction through the industries of the districts of Panem',
    //byline: 'By a Digital Storyteller',
    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
      {
          id: 'panem',
          alignment: 'left',
          hidden: false,
          title: 'Panem',
          description: 'Panem is made up of the Capitol and its thirteen surrounding districts.',
          location: {
              center: [-98.29348, 47.41201],
              zoom: 3,
              pitch: 0,
              bearing: 0,
              opacity: 0.2
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'panem',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'panem',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

      {
          id: 'district-twelve',
          alignment: 'left',
          hidden: false,
          title: 'District 12',
          //image: './path/to/image/source.png',
          description: 'District 12 incorporates the coal mining sector. Within the world of Panem, coal is burned for energy and sent around the different districts, specifically the Capitol. Mining for coal has been found to cause a great deal of environmental problems, including pollution, erosion and habitat loss (Zakrutkin et al., 2016). Burning coal also releases a large amount of carbon into the atmosphere, enhancing the greenhouse effect and worsening the already apocalyptic climate catastrophes that the District is living under. Communities surrounding coal mining regions are placed at a higher risk of diseases relating to unsafe drinking water and air quality (Hendryx et al., 2018) District 12 is the poorest of all of the districts, with countless reports of citizens dying of starvation and engaging in other forms of business in order to survive. Coal has long been associated with poverty, as coal mining is extremely dangerous and low paying. Because of the harsh environmental impacts of the mining, the citizens in District 12 are constantly at risk of accidents within the mine or toxins from the natural resources. Throughout the series, coal mining comes to an end within the District, displaying how the production of the resource was surrounded less by need and more for control of the civilians and reinforcement of class structures. ',
          location: {
              center: [-81.91234, 40.55072],
              zoom: 5.5,
              pitch: 50,
              bearing: 20,
              speed: 0.5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-12',
            opacity: 0.5,
            duration: 10000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-12',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

      {
          id: 'district-eleven',
          alignment: 'left',
          hidden: false,
          title: 'District 11',
          //image: './path/to/image/source.png',
          description: 'District 11 is the agricultural district,  along with one of the poorest districts of Panem. The Capitol, known for overconsumption and waste, uses this district to grow large quantities of food and export it to other districts. The citizens of District 11 work long hours in hot conditions and are often suffering from malnourishment and exhaustion. The land that this district is on originally had a variety of different ecosystems, but land use change, till farming and overexploitation of resources has turned this region into monoculture croplands. First converted in the early 1800s, these croplands have been destroying healthy soils and changing ecosystems ever since (Johnston, 2020). In the time of Panem, these soils are stripped of nutrients and key components that can assist the larger ecosystem and are continuously overexploited in order to feed the entire nation. The Capitol uses this district solely for extraction, leaving little behind little for the people and environment it takes from.',
          location: {
              center: [-94.64877, 33.88680],
              zoom: 5.5,
              pitch: 50,
              bearing: 20,
              speed: 0.5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-11',
            opacity: 0.5,
            //duration: 10000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-11',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

{
          id: 'district-seven',
          alignment: 'left',
          hidden: false,
          title: 'District 7',
          //image: './path/to/image/source.png',
          description: 'District seven is one of the largest districts as they are in-charge of providing paper and lumber supplies to the capitol. Located in the Pacific Northwest, the trees as seen in the books and movie are probably Douglas Fir and RedWood (both conifers), which is representative of their location on our map. As the trees in this district are the only source of lumber supplies for all of panem, we can assume that the trees here do not have enough time to grow to their peak potential height and are chopped down early. While all trees are carbon sequesters, conifer trees are considered less effective against mitigating climate effects due to their darker color therefore absorbing more heat than other tree species like oak and birch (McGrath, 2016). Citizens of district seven are not poor nor rich. As the need for paper supplies continues to decrease in their increasingly dystopian capital, it can be predicted that this district will become less valuable and poorer. Furthermore, though technological advances are shown throughout the series, citizens of this district still rely on axes to chop down trees. This may be reflective of the capitals diminishing value for lumber supplies. ',
          location: {
              center: [-120.09595, 48.36356],
              zoom: 5,
              pitch: 50,
              bearing: -20,
              speed: 0.5, // make the flying slow
              curve: 1
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-7',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
          layer: 'district-7',
          opacity: 0.5
          // duration: 5000
          }
        ]
      },


            {
                id: 'district-five',
                alignment: 'left',
                hidden: false,
                title: 'District 5',
                //image: './path/to/image/source.png',
                description: 'Generation of power for the entire region of Panem is the responsibility of District 5. Here, power is mainly generated through a huge hydroelectric dam but also through solar and nuclear energy. The hydroelectric dam can be assumed to be their main generator of power as when it is bombed as an act of rebellion against the capitol by various districts, all power is lost. As electricity is increasingly relied upon in the capitol, it can be assumed that more dams and energy generators will be built. While hydropower is a renewable resource, building of dams is highly contested as there are impacts to marine biodiversity, downstead water quality, habitat distrcution from clearing forests and the construction of the dam (Pacca, 2007). Furthermore, dams also generate a large quantity of greenhouse gases despite being thought of as a “geen” energy source (Fearnside, 2003). An increase of dams to support the growing use of energy from the capitol will be damaging to the environment in district five and the surrounding districts. ',
                location: {
                    center: [-113.24551, 34.82320],
                    zoom: 5.5,
                    pitch: 50,
                    bearing: -20,
                    speed: 0.5, // make the flying slow
                    curve: 1
                },
                mapAnimation: 'flyTo',
                rotateAnimation: true,
                callback: '',
                onChapterEnter: [
                  {
                  layer: 'district-5',
                  opacity: 0.5
                  // duration: 5000
                  }
                ],
                onChapterExit: [{
                layer: 'district-5',
                opacity: 0.5
                // duration: 5000
                }]
            },


      {
          id: 'district-four',
          alignment: 'left',
          hidden: false,
          title: 'District 4',
          //image: './path/to/image/source.png',
          description: 'District 4 specializes in fishing. Located along the west coast of Panem (Southern Oregon and California), there are numerous fisheries that provide the people with work and the country with food. After full environmental collapse, fish in the Pacific Ocean were most likely sparse and low in biodiversity. Rather than switching to plant based diets and allowing for the oceans to recover, the government of Panem created multiple large scale fisheries and trained an entire district to be skilled fishermen. The overexploitation of the oceans continues to harm marine life, pollute the waters, and hinders the ocean’s ability to adapt to changing climates and acidification (Issifu et al., 2022). Although creating lasting environmental damage, the fishing industry does not cause local harm, allowing for those in District 4 to live more prosperous lives. As one of the wealthier districts in Panem, the people are not directly impacted by the fishing industry and are able to engage in different activities than those in districts impacted directly by their industry. ',
          location: {
              center: [-124.25656, 40.35866],
              zoom: 5.5,
              pitch: 50,
              bearing: 40,
              speed: 0.5, // make the flying slow
              curve: 1
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-4',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-4',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

      {
            id: 'the-capitol',
            alignment: 'left',
            hidden: false,
            title: 'The Capitol',
            //image: './path/to/image/source.png',
            description: 'The Capitol contains Panem’s totalitarian government elite, and the nation’s wealthiest citizens. Residents of the Capitol are accustomed to an extravagant lifestyle, focused on food and fashion. The accumulation and perpetuation of the Capitol’s wealth is dependent upon the exploitation of the environment and the people of the districts. The extreme contrast between the Capitol and the districts is emblematic of today’s capitalist world, in which a small group of individuals and corporations control much of the world’s wealth and power. The poverty and environmental degradation observed across Panem illustrate the consequences of the behaviour of the citizens of the Capitol (Harrison, 2019). Moreover, the anthropocentric, exploitative, consumption-driven culture of the Capitol causes  alienation from the natural world, a fundamental factor that ultimately causes environmental exploitation and destruction (Harrison, 2019). In contrast, the rebels of the districts demonstrate resistance to the Capitol’s anthropogenic exploitative practices, through maintaining sustainable relationships with the environment (Harrison, 2019).',
            location: {
                center: [-105.11151, 39.86526],
                zoom: 8,
                pitch: 50,
                bearing: -40,
                speed: 0.5, // make the flying slow
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
              layer: 'capitol',
              opacity: 0.5
              // duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'capitol',
              opacity: 0.5
              // duration: 5000
              }
            ]
        }



    ]
};
