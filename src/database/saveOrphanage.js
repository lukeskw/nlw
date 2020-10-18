function saveOrphanage(db, {lat,lng,name,about,whatsapp,images,instructions,opening_hours,open_weekends}){
    console.log('saveOrphanage:', {lat,lng,name,about,whatsapp,images,instructions,opening_hours,open_weekends})
    return db.run(` 
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_weekends
        ) VALUES (
            "${lat}",
            "${lng}",
            "${name}",
            "${about}",
            "${whatsapp}",
            "${images}",
            "${instructions}",
            "${opening_hours}",
            "${open_weekends}"
        );
        `)
}
module.exports = saveOrphanage;