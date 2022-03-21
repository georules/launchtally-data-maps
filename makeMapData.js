const fs = require('fs')

const data = JSON.parse(fs.readFileSync('cleaned.json').toString())

const transitData = {
    "title": "Launch Tally",
    "stations": []
}

data.forEach((d) => {
    const station = {
        label: d.name,
        lines:d.tracks
    }
    transitData.stations.push(station)
})

let shuffled = transitData.stations
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

transitData.stations=shuffled

console.log(JSON.stringify(transitData,null,2))