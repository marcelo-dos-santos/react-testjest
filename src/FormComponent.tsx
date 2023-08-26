import React, { useState } from 'react';

const FormComponent: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode implementar a lógica de envio do formulário, por exemplo, fazer uma requisição para um servidor.
        // Após o envio, você pode definir setIsSubmitted(true) para exibir a mensagem de sucesso.
        setIsSubmitted(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <button type="submit">Enviar</button>
            </form>
            {isSubmitted && <p>Formulário enviado com sucesso!</p>}
        </div>
    );
};

export default FormComponent;
