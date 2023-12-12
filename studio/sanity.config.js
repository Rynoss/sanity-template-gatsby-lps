// sanity.config.js
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import Logo from "./plugins/ryno-studio-logo/Logo";
    deskTool({
        structure: deskStructure
    })
  schema: {
    types: schemas,
  },
  studio: {
    components: {
        logo: Logo
    }
  }
