// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
import Logo from "./plugins/ryno-studio-logo/Logo";
import './styles/theme.css';

export default defineConfig({
  title: "<#< sanity.projectTitle >#>",
  projectId: "<#< sanity.projectId >#>",
  dataset: "<#< sanity.dataset >#>",
  plugins: [
    //"@sanity/base",
    //"@sanity/default-layout",
    //"@sanity/default-login",
    //"@sanity/desk-tool",
    deskTool({
        structure: deskStructure
    })
    //"@sanity/color-input",
    //"@sanity/dashboard",
    //"dashboard-widget-netlify",
    //"cloudinary",
    // Add '@sanity/vision' plugin for development environment if needed
  ],
  schema: {
    types: schemas,
  },
  studio: {
    components: {
        logo: Logo
    }
  }
});