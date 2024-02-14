interface IUser {
    name: string,
    email: string,
    password: string,
}

const users: IUser[] = [
    {
        name: 'Luan Guilherme',
        email: 'luan@email.com',
        password: '1234567'
    }
];

export const login = (email: string, senha: string): void => {
    if(users.some(user => user.email === email && user.password === senha)){
        return alert('Login Realizado com Sucesso!');
    }
    return alert('Email e/ou Senha inválido!');
}
