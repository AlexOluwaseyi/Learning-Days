// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (value!==''){
    if (prop=="tracks"){
      if(records[id][prop]!==undefined){          //if statement to check if prop (i.e. tracks) alreadry exists (as an array).
        records[id][prop]=records[id][prop];      //if yes, continue by reassigning the same value to prop, and escape to push(value) in line 32
      }
      else if (records[id][prop]==undefined){     //if statement to check if prop (i.e. tracks) does not exits.
        records[id][prop]=[];                     //create and assign an empty array to prop (i.e. tracks)
      }
      records[id][prop].push(value);
    }
    else if (prop!="tracks"){
      records[id][prop]=value;
    }
  }
  else if (value==""){
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
