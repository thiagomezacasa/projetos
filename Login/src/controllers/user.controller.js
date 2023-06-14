
const { response } = require("../app");
const db = require("../config/database");

exports.listAllUsers = async (req, res) => {
    try {
        const response = await db.query('SELECT * FROM users ORDER BY NOME ASC');
        res.status(201).send(response.rows);    
    } catch (error) {
        res.status(400).send(error)
        
    }
    
};

exports.insereUser = async(req,res) => {
    try {
        const {nome, nascimento, email, senha} = req.body;
        const {rows} = await db.query("INSERT INTO USERS (nome,nascimento, email, senha) VALUES ($1, $2, $3, $4)", [nome,nascimento,email,senha]);
        res.status(201).send({message: "Incluído com sucesso!", body:{nome}});
        
    } catch (error) {
        res.status(400).send(error)
    }
    
   
}

exports.findUserId = async(req,res) => {
    
    const userId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM USERS WHERE ID = $1',[userId]);    

    if (response.rows == '[]'){
        res.status(404).send('Id não encontrado!');
    }else{
        res.status(200).send(response.rows);
    }    

}