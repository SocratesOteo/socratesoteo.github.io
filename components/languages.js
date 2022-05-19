import Image from "next/image"

const Languages = ()=>{
    const pythonIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    const javascriptIcon= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    const phpIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    const postgresIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    const htmlIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    const cssIcon =  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    const nextJsIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    const reactIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    const dockerIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    const webpackIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
    return(

        [<Image src={pythonIcon} width={80} height={80}/>,
        <Image src={javascriptIcon} width={80} height={80}/>,
        <Image src={phpIcon} width={80} height={80}/>,
        <Image src={postgresIcon} width={80} height={80}/>,
        <Image src={htmlIcon} width={80} height={80}/>,
        <Image src={cssIcon} width={80} height={80}/>,
        <Image src={nextJsIcon} width={80} height={80}/>,
        <Image src={reactIcon} width={80} height={80}/>,
        <Image src={dockerIcon} width={80} height={80}/>,
        <Image src={webpackIcon} width={80} height={80}/>,
       
        
    ]
    )

}

export default Languages