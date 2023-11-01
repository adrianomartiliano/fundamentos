import MyComponent from "./MyComponent";

const TemplateExpression = ()=>{

    const name = "Adriano";
    const data = {
        job: "Programador",
        age: 30
    }

    return(
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Eu sou {data.job} e tenho {data.age} anos</p>

            <div>
                <MyComponent />
            </div>
        </div>
    )

};

export default TemplateExpression;