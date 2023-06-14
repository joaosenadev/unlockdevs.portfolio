import "./select.css"
import { useState } from "react"

//flags
import BR from "./assets/brasil.png"
import USA from "./assets/usa.png"

function Flag({ flag }) {
    return (
        <div className="flags">
            {flag === "br" ? <img src={BR} /> : null}
            {flag === "usa" ? <img src={USA} /> : null}
        </div>
    )
}

const languages = [
    {
        id: 1,
        flag: "br",
        name: "Português",
        value: "pt-BR"
    },
    {
        id: 2,
        flag: "usa",
        name: "English",
        value: "en"
    },
]

export function SelectLang() {

    const [content, setContent] = useState(false)

    const I18N_STORAGE_KEY = "i18nextLng"
    const handleSelectLanguage = (language) => {
        localStorage.setItem(I18N_STORAGE_KEY, language)

        window.location.reload()
    }

    return (
        <div className="select-container">

            <div className="select" onClick={() => setContent(!content)}>
                {
                    localStorage.getItem(I18N_STORAGE_KEY) === "pt-BR" ?
                        <img src={BR} /> : <img src={USA} />
                }
            </div>

            <div className={content ? "select-content" : "close-content"}>
                {languages.map((item) => (
                    <div key={item.id} onClick={() => handleSelectLanguage(item.value)} className="langs">
                        <Flag flag={item.flag} />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
