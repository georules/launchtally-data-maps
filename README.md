# Launch Tally Ecosystem Data Maps

+ `getData.sh` will pull organizations from https://tlh.ramenlife.co/ and save to `companies.json` and `startups.json`
+ `cleanData.js` will combine `companies.json` and `startups.json` into one data set and merge/remove some attributes to clean the data some

## Transit Map
+ `node cleanData.js > cleaned.json` will prepare the data for `makeMapData.js`
+ `node makeMapData.js > launchtally.json` prepares data in a format for the memory underground map https://memoryunderground.com/

![Launch Tally](transitmap-whitebackground.png)

## Other ideas
+ Make a map that looks like a star map, on brand with launch