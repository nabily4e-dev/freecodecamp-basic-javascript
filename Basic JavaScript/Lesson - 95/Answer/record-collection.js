// Setup
const recordCollection = {
	2548: {
		albumTitle: 'Slippery When Wet',
		artist: 'Bon Jovi',
		tracks: ['Let It Rock', 'You Give Love a Bad Name'],
	},
	2468: {
		albumTitle: '1999',
		artist: 'Prince',
		tracks: ['1999', 'Little Red Corvette'],
	},
	1245: {
		artist: 'Robert Palmer',
		tracks: [],
	},
	5439: {
		albumTitle: 'ABBA Gold',
	},
}

console.log(recordCollection)

//* Only change code below this line
/// Old attempt ///
// function updateRecords(records, id, prop, value) {
// 	const updatedRecords = { ...records }
// 	const album = updatedRecords[id]

// 	if (value === '') {
// 		delete album[prop]
// 	} else if (prop === 'tracks') {
// 		if (!album.hasOwnProperty('tracks')) {
// 			album.tracks = []
// 		}
// 		album.tracks.push(value)
// 	} else if (prop !== 'tracks' && value !== '') {
// 		album[prop] = value
// 	} else if (prop === 'tracks' && value !== '') {
// 		album.tracks.push(value)
// 	}

// 	return updatedRecords
// }
/// End of old attempt ///

///Refactored attempt ///
function updateRecords(records, id, prop, value) {
  const updatedRecords = { ...records }; // Create a copy of the records object
  const album = updatedRecords[id]

  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (!album.hasOwnProperty("tracks")) {
      album.tracks = [];
    }
    album.tracks.push(value);
  }

  return updatedRecords;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA')
