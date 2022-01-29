import React from "react";
import Header from "../../componentes/header";
import swal from 'sweetalert2';
const Cadastro = () => {

    const [cerveja, setCerveja] = React.useState({
        id: Math.floor(Math.random() * (9999 - 1000) + 1000),
        image_url: 'https://santahelenacenter.com.br/wp-content/uploads/fotos-produtos/4155.jpg',
        name: '',
        description: '',
    }
    );

    const onChangeCerveja = (e) => {
        setCerveja({
            ...cerveja,
            [e.target.name]: e.target.value
        });
    }

    const handleCadastrar = (e) => {
        e.preventDefault();
        // Verifica se existe cerveja no localStorage, se não existir cria com oos dados
        const cervejas = JSON.parse(localStorage.getItem('cervejas')) || [];
        // Adiciona a cerveja no array
        cervejas.push(cerveja);
        // Atualiza o localStorage
        localStorage.setItem('cervejas', JSON.stringify(cervejas));
        // Limpa o formulario
        setCerveja({
            image_url: 'https://santahelenacenter.com.br/wp-content/uploads/fotos-produtos/4155.jpg',
            name: '',
            description: '',
        });

        setTimeout(() => {
            swal.fire({  
                icon: 'success',
                title: 'Obrigado pelo seu cadastro.',
                showConfirmButton: false,
                timer: 2500
            })
        }, 200)
        
    }
    
    return (
        <>
        <Header/>
            <div className="container">

                <section className="list-cards">
                    <div className="card">
                        <div className="card-header">
                            <h1>Cadastrar Cerveja</h1>
                        </div>
                        <div className="card-body">
                            <form className="form-cadastrar">
                                <div className="form-group">
                                    <label htmlFor="titulo">Titulo</label>
                                    <input id="titulo" name="name" onChange={onChangeCerveja} value={cerveja.name} type="text" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea id="description" name="description" onChange={onChangeCerveja} value={cerveja.description} />
                                </div>
                                <div className="form-group">
                                    <button className="btn-cadastrar" onClick={handleCadastrar}>Cadastrar</button> 
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                            
            </div>
        </>
    )
}

export default Cadastro;