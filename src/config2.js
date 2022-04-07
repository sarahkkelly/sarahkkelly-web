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
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
      {
          id: 'panem',
          alignment: 'left',
          hidden: false,
          title: 'Panem',
          //image: './path/to/image/source.png',
          description: 'The District of Panem',
          location: {
              center: [-108.730698, 48.452381],
              zoom: 2.5,
              pitch: 0,
              bearing: 0,
              opacity: 0.5
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
          alignment: 'fully',
          hidden: false,
          title: 'District 12',
          //image: './path/to/image/source.png',
          description: 'Coal Mining',
          location: {
              center: [-77.903526, 41.150522],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-12',
            opacity: 0.5
            // duration: 5000
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
          alignment: 'fully',
          hidden: false,
          title: 'District 11',
          //image: './path/to/image/source.png',
          description: 'Agriculture',
          location: {
              center: [-88.873848, 34.148200],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-11',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [{
          layer: 'district-11',
          opacity: 0.5
          // duration: 5000
          }]
      },

{
          id: 'district-seven',
          alignment: 'fully',
          hidden: false,
          title: 'District 7',
          //image: './path/to/image/source.png',
          description: 'Lumber',
          location: {
              center: [-115.777257, 49.571107],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
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
          id: 'district-four',
          alignment: 'fully',
          hidden: false,
          title: 'District 4',
          //image: './path/to/image/source.png',
          description: 'Fishing',
          location: {
              center: [-120.217625, 39.838096],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
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
            alignment: 'fully',
            hidden: false,
            title: 'The Capitol',
            //image: './path/to/image/source.png',
            description: 'The Capitol',
            location: {
                center: [-107.680114, 40.857542],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
