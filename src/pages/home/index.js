import React from "react";
import Header from "../../componentes/header";
import axios from 'axios';

const Home = () => {
    const [lista, setLista] = React.useState([]);
    const [busca, setBusca] = React.useState('');

    React.useEffect(() => {
        async function getLista() {
            const response = await axios.get('https://api.punkapi.com/v2/beers');
            setLista(response.data);
            // Acrescenta na lista os itens do localStorage
            const cervejas = JSON.parse(localStorage.getItem('cervejas')) || [];
            // Pegar os itens da const cervejas e adiciona na lista
            setLista([...cervejas, ...response.data]);
        }
        getLista();
    }, []);

    function reloadLista() {
        async function getLista() {
            const response = await axios.get(`https://api.punkapi.com/v2/beers`);
            setLista(response.data);
            // Acrescenta na lista os itens do localStorage
            const cervejas = JSON.parse(localStorage.getItem('cervejas')) || [];
            // Pegar os itens da const cervejas e adiciona na lista
            setLista([...cervejas, ...response.data]);
        }
        getLista();
    }

    const removeBebidaLista = (id) => {
        const targetIndex = lista.findIndex(item => item.id === id);

        // Procura se no localStorage existe alguma item igual ao targetIndex
        const cervejas = JSON.parse(localStorage.getItem('cervejas')) || [];
        const cerveja = cervejas.find(item => item.id === id);

        // Se existir remove da lista
        if (cerveja) {
            cervejas.splice(cervejas.indexOf(cerveja), 1);
            localStorage.setItem('cervejas', JSON.stringify(cervejas));
            reloadLista();
        }

        // Remover da lista
        lista.splice(targetIndex, 1);
        console.log(lista.splice(targetIndex-1, 1));
        setLista([...lista]);
        // Se lista vazia, recarregar a lista
        if (lista.length === 0) {
            reloadLista();
        }
    }

    const onChangePesquisa = (event) => {
        setBusca(event.target.value);
    }

    const handlePesquisar = (event) => {
        event.preventDefault();
        // Limpa o campo de busca
        setBusca('');
        // Filtra a lista pelo name ou description
        const resultado = lista.filter(item => {
            return item.name.toLowerCase().includes(busca.toLowerCase()) || item.description.toLowerCase().includes(busca.toLowerCase());
        }
        );
        setLista(resultado);
    }

    const ListaCervejas = () => {
        return lista.map(item => {
            return (
                <div className="card" key={item.id}>
                <div className="card-header">
                    <p>
                        <button onClick={()=>removeBebidaLista(item.id)} className="btn-remove">X</button>
                    </p>
                </div>
                <div className="card-body card-body-200">
                    <img src={item.image_url} className="card-img-top" alt="..." />
                    <h3 className="card-title">{item.name}</h3>
                    <h5 className="card-text">{
                        item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description
                    }</h5>
                </div>
                </div>
            );
        });
    };

    return (
        <>
        <Header/>
            <div className="container">
            <section className="search">
                <input id="busca" name="busca" onChange={onChangePesquisa} value={busca} type="text" placeholder="Pesquisar" />
                <button className="btn" onClick={handlePesquisar}>Pesquisar</button>              
            </section>

                    <section className="list-cards">
                        <ListaCervejas/>
                    </section>
                            
                </div>
        </>
    )
    }

    export default Home;
