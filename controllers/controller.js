let message=[];
let id = 0;

module.exports={
    create:(req, res) =>{
        let {text, time} = req.body
        message.push({text, time , id})
        i++
        res.status(200).send(message)
    },
    read:(req, res) =>{
        res.status(200).send(message)
    },
    update:(req, res) =>{
        message.map(e =>{
            if(e.id = +req.params.id){
                return e
            }
        })
        res.status(200).send(message)
    },
    delete:(req, res) =>{
        books.filter( e =>{
            if(e.id !== +req.params.id){
                return e
            }
        res.status(200).send(message)
        })
    }
}

