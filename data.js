var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.010727879103399118,
        "pitch": 0.0188328755718441,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.3277807084234734,
          "pitch": 0.12848149603745895,
          "rotation": 0.7853981633974483,
          "target": "1-hall--family-living"
        },
        {
          "yaw": -1.2411663985089394,
          "pitch": 0.05189208253022848,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall--family-living",
      "name": "hall & family living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.05101731659675934,
        "pitch": 0.0018797568267672204,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.907256280307573,
          "pitch": 0.08314513209080587,
          "rotation": 4.71238898038469,
          "target": "0-living"
        },
        {
          "yaw": -3.0819935072162394,
          "pitch": 0.029612806163747507,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.006293711489771425,
        "pitch": 0.08091991794326958,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.1322284304941936,
          "pitch": 0.1309670383058048,
          "rotation": 0,
          "target": "1-hall--family-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ullas",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
