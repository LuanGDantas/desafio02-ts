import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert de login realizado com sucesso', () => {
        login('luan@email.com', '123456');
        expect(mockAlert).toHaveBeenCalledWith('Login Realizado com Sucesso!')
    })

    it('Deve exibir um alert de email e/ou senha inválido', () => {
        login('luan@email.com', '123456');
        expect(mockAlert).toHaveBeenCalledWith('Email e/ou Senha inválido!')
    })
})