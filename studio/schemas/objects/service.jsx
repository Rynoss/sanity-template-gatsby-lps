import React from 'react';
import Icon from '../../components/icon.jsx';
import bust from '../../utils/bust';
import loadStyle from '../../utils/loadStyle';
const icomoonPath = 'https://cdn.icomoon.io/198172/ryno-lp-factory';

//promise loads icomoon stylesheet for select option preview
loadStyle(bust(`${icomoonPath}/style.css`), 'icomoon');

export default {
  title: 'Service',
  name: 'service',
  type: 'object',

  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      inputComponent: Icon,
      description: '',
      icomoonPath: icomoonPath,
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: '',
    },
  ],
  preview: {
    select: {
      label: 'label',
      icon: 'icon'
    },
    prepare({ icon, label }) {
      return {
        title: label,
        media: <i className={`icon-${icon}`}></i>
      }
    }
  }
};
