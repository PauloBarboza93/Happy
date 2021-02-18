const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.219911",
        lng: "-49.6364187",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "978225572",
        images: [
            "https://images.unsplash.com/photo-1600720665043-3c088759e359?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas Das 18h até 8h",
        open_on_weekends: "0"
        
    })

    //consultar dados da tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
     console.log(selectedOrphanages)

     //consultar somente 1 orfanato, pelo ID
     const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
     console.log(orphanage)

    //deletar dado da tabela
   // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
   
}) 