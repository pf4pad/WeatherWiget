
import { startWiget } from "./modules/wigetServise.js";



const app = document.querySelector('#app')

const init = async () => {

  const widget = await startWiget()
  app.append(widget)

}

init(app)