const Events = ()=>{
    
    const handleMyEvent = (e) => {
        alert("Ativou o evento");
    };

    const Teste = (x) =>{
        if (x){
            return <h1>Verdadeiro</h1>
        }else {
            return <h2>Falso</h2>
        }
    }

    return (
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
            <button onClick={() => alert("Outro tipo")}>Outro tipo de função</button>
            {Teste(true)}
        </div>
    )

};

export default Events;