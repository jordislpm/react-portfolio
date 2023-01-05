export default function Header (){
    return (
        <header>
            <img className="img-header_background" src="./homeAssets/img/"/>
            <video id="video" autoplay loop muted >
                <source src="./homeAssets/video/hero.webm" />
            </video>
            <img className="circle" src="./homeAssets/img/logos/hacker.png" alt="logo large" />
            <h1>JUAN TOMAS DE PEÑA MEDINA</h1>
            <hr />
            <h2>React Developer</h2>
        </header>
    )
}