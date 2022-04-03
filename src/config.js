var config = {
    style: 'mapbox://styles/skkelly/cl1jui49e007d14ls4ko3jhw5',
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
              bearing: 0
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
          id: 'district-ten',
          alignment: 'fully',
          hidden: false,
          title: 'District 10',
          //image: './path/to/image/source.png',
          description: 'Livestock',
          location: {
              center: [-103.109147, 27.638739],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-10',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-10',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

      {
          id: 'district-nine',
          alignment: 'fully',
          hidden: false,
          title: 'District 9',
          //image: './path/to/image/source.png',
          description: 'Grain',
          location: {
              center: [-100.627764, 44.247621],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-9',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-9',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

      {
          id: 'district-eight',
          alignment: 'fully',
          hidden: false,
          title: 'District 8',
          //image: './path/to/image/source.png',
          description: 'Textiles',
          location: {
              center: [-85.217074, 40.490623],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-8',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-8',
            opacity: 0.5
            // duration: 5000
            }
          ]
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
          id: 'district-six',
          alignment: 'fully',
          hidden: false,
          title: 'District 6',
          //image: './path/to/image/source.png',
          description: 'Technology',
          location: {
              center: [-93.314216, 45.687654],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-6',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-6',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

      {
          id: 'district-five',
          alignment: 'fully',
          hidden: false,
          title: 'District 5',
          //image: './path/to/image/source.png',
          description: 'Power',
          location: {
              center: [-112.120483, 35.397564],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-5',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-5',
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
          id: 'district-three',
          alignment: 'fully',
          hidden: false,
          title: 'District 3',
          //image: './path/to/image/source.png',
          description: 'Technology',
          location: {
              center: [-91.485829, 39.435143],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'district-3',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-3',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

      {
          id: 'district-two',
          alignment: 'left',
          hidden: false,
          title: 'District 2',
          //image: './path/to/image/source.png',
          description: 'Defence',
          location: {
              center: [-104.284539, 36.041427],
              zoom: 5,
              pitch: 0,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',

          onChapterEnter: [
            {
            layer: 'district-2',
            opacity: 0.5
            // duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'district-2',
            opacity: 0.5
            // duration: 5000
            }
          ]
      },

        {
            id: 'district-one',
            alignment: 'right',
            hidden: false,
            title: 'District 1',
            //image: './path/to/image/source.png',
            description: 'Luxury Goods',
            location: {
                center: [-110.945091, 44.934340],
                zoom: 5,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
              layer: 'district-1',
              opacity: 0.5
              // duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'district-1',
              opacity: 0.5
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
        },



    ]
};
