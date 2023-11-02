const Soma = () => {

    const x = 10;
    const y = 13;

    const soma = (e) => {
        const somatotal = x + y;
        alert("A soma é igual a " + {somatotal})//Fica dando erro de objeto, tem que converter ?
        console.log(somatotal);
    }

    return(
        <div>  
            <button onClick={soma}>Clique para somar</button>

        </div>
    )
};

export default Soma;