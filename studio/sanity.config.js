// sanity.config.js
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import Logo from "./plugins/ryno-studio-logo/Logo";
import './styles/theme.css';
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
