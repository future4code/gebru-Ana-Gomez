import express from "express";
import cors from "cors";
import { Request, Response} from "express";


// Exercício 1
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () =>{
    console.log("Fala que eu te escuto")
})

app.get('/', (req: Request, res: Response) =>{
    res.status(200).send("Hello from Express")
})

// Exercício 2
app.get('/usuario', (req: Request, res: Response) =>{

    body: JSON.stringify({
        id: "",
        name: "",
        phone: "",
        email: "",
        website: ""
    })
    try{
        res.status(200).send("Usuário encontrado com sucesso!")
    }
    catch(error){
        res.status(400).end("Usuário não encontrado")
    }
})

// Exercício 3 
app.post('/cadastro', (req: Request, res: Response) =>{
    try{
        res.status(200).send("Cadastro realizado!")
    }
    catch(error){
        res.status(400).end("Cadastro não efetuado")
    }
})