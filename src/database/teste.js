const database = require('./db.js')
const saveOrphanage = require('./saveOrphanage')

database.then( async db =>{
    // await saveOrphanage(db, {
    //     lat:"-22.5038399", 
    //     lng:"-44.0101356",
    //     name:"Lar dos meninos",
    //     about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp:"99988-7777",
    //     images: [
    //         "https://images.unsplash.com/photo-1599231091952-5274031ead92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1601564267524-75b772c1aa7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visitas Das 8h até 18h",
    //     open_weekends: "0"
    // })
//})

// database.then(async db => {
//     //inserir dados na tabela
//         // await db.run(`
//         // INSERT INTO orphanages (
//         //     lat,
//         //     lng,
//         //     name,
//         //     about,
//         //     whatsapp,
//         //     images,
//         //     instructions,
//         //     opening_hours,
//         //     open_weekends
//         // ) VALUES (
//         //     "-22.5038399",
//         //     "-44.0101356",
//         //     "Lar dos meninos",
//         //     "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
//         //     "(24)99998-7777",
//         //     "https://images.unsplash.com/photo-1599231091952-5274031ead92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//         //     "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
//         //     "Horário de visitas Das 8h até 18h",
//         //     "0"
//         // );
//         // `)

       

    //consultar dados da tabela
         const selectedData = await db.all(`
         DELETE FROM orphanages
     `)
         console.log(selectedData)

  })