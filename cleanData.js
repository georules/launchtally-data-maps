const fs = require('fs')

const companies = JSON.parse(fs.readFileSync('companies.json').toString())
const startups = JSON.parse(fs.readFileSync('startups.json').toString())

newStartups = startups.map((d) => {
    d['type'] = 'startup'
    return d
})

const all = companies.concat(newStartups)

const cleanedAll = all.map((d) => {
    const types = [].concat(
        d.industries,
        d.businessTypes
    ).filter(d=>d)

    if (d.name.includes('College')
        || d.name.includes('School')
        || d.name.includes('University') 
        || d.name.includes('Edu')) {
        types.push('Education')
    }
    if (d.name.includes('Software')
        || d.name.includes('Tech') 
        || d.name.includes('Compu')) {
        types.push('Technology')
    }
    if (d.type.includes('serviceProvider')) {
        types.push('Services')
    }
    if (d.name.includes('Consulting')) {
        types.push('Consulting')
    }

    const typesCleaned = types.map((d) => {
        if (d.includes('Edu')) return 'Education'
        if (d.includes('Tech') 
            || d.includes('Data') 
            || d.includes('Internet')
            || d.includes('SaaS')
            || d.includes('E-Commerce')
            || d.includes('Mobile')
            || d.includes('tech')
            ) return 'Technology'
        if (d.includes('Services')) return 'Services'
        if (d.includes('Art')) return 'Art'
        if (d.includes('Advertising')) return 'Marketing'
        return d
    })

    const tracks = typesCleaned.filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .filter((d) => {
        if ((d==='Small Business') 
        || (d==='Startup Support')
        || (d==='Defence')
        || (d==='Marketplace')
        || (d==='Robotics')
        || (d==='Social Enterprise')) return false
        return true
    })
    .filter(d=>d)

    return {
        'name': d.name,
        'type': d.type,
        'tracks': tracks
    }
})

// Helper to see what all of the tracks are
const allTracks = cleanedAll.flatMap((d) => {
    return d.tracks
}).filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
}).filter(d=>d)

// Helper to look for those without tracks
const emptyEntity = cleanedAll.filter((d) => {
    return (d.tracks.length > 0) ? false : true
})

console.log(JSON.stringify(cleanedAll,null,2))