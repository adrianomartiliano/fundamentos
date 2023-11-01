const Events = ()=>{
    
    const handleMyEvent = (e) => {
        alert("Ativou o evento");
    }

    return (
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
            <button onClick={() => alert("Outro tipo")}>Outro tipo de função</button>
        </div>
    )

};

export default Events;