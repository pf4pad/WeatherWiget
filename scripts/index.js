
// import { fetchGeoHelper } from "./modules/APIservise.js";
import { cityServiseSearch } from "./modules/cityServiseSearch.js";
import { startWidget } from "./modules/widgetServise.js";



const app = document.querySelector('#app')

const init = async () => {

  const widget = await startWidget()
  app.append(widget)

  cityServiseSearch(widget)
  //   fetchGeoHelper()
}

init(app)