// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { dashboardTool } from '@sanity/dashboard';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';
import Logo from "./plugins/ryno-studio-logo/Logo";
import './styles/theme.css';
import {colorInput} from '@sanity/color-input';
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary';



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
    }),
    //"@sanity/color-input",
    colorInput(),
    //"@sanity/dashboard",
    dashboardTool({
        widgets: [
          //"dashboard-widget-netlify",
          netlifyWidget({
              title: 'Netlify Deploys',
              sites: [
                //{
                //  title: 'Sanity Studio',
                //  apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
                //  buildHookId: 'xxxyyyxxxyyyyxxxyyy',
                //  name: 'sanity-gatsby-blog-20-studio',
                //},
                {
                  title: 'Web Frontend',
                  apiId: '<#<deployments.web.providerInfo.siteId>#>',
                  buildHookId: '<#<deployments.web.providerInfo.buildHookId>#>',
                  name: '<#<deployments.web.providerInfo.siteName>#>',
                }
              ]
          })
        ]
      }),
    cloudinarySchemaPlugin(),
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