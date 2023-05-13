import { messages as ptMessages} from "./languages/pt-br"
import { messages as engMessages} from "./languages/en"

const messages = {
    ...ptMessages,
    ...engMessages
}

export { messages }