import { Request, Response } from 'express'

class FirstController {

  public home(req: Request, res: Response) {
    res.json({
      message: "Olá, seja bem vindo!"
    })
  }

  public users(req: Request, res: Response) {
    const { name, password } = req.body
    
    try {
      if (!name || !password) {
        res.json({
          message: "Por favor, preencha os campos obrigatórios"
        })
        return
      }
      else {
        res.header({ barecode: "1sad2f3ads5f65d" })
        res.json({
          message: `Olá, ${name}. sua senha é ${password}`
        })
      }
    }
    catch (err) {
      console.log(err)
    }
  }
}

export const firstController = new FirstController()