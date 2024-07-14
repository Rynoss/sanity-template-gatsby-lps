import React, { useState, useEffect, useId } from 'react';
import bust from '../utils/bust';
import { FiSearch } from 'react-icons/fi';
import { FormField } from 'sanity';
import {
  Autocomplete,
  Card,
  Text,
  Flex,
  Box,
} from '@sanity/ui';
import { set, unset, PatchEvent } from 'sanity';

const Icon = React.forwardRef((props, ref) => {
  const {
    elementProps: {
      id,
      onBlur,
      onFocus,
      placeholder,
      readOnly,
      ref: inputRef,
    },
    onChange,
    schemaType,
    validation,
    value = '',
    presence,
    compareValue,
  } = props;

  const [icons, setIcons] = useState([]);

  const inputId = useId();

  useEffect(() => {
    getIcons();
  }, []);

  async function getIcons() {
    const iconPackSelection = await (
      await fetch(
        bust(`${schemaType.icomoonPath}/selection.json`)
      )
    ).json();
    const icons = iconPackSelection.icons.map((icon) => ({
      value: icon.properties.name,
      payload: icon,
    }));
    setIcons(icons);
  }

  const handleChange = React.useCallback(
    (value) => {
      onChange(PatchEvent.from(value ? set(value) : unset()));
    },
    [onChange]
  );

  return (
    <FormField
      description={schemaType.description} // Ensure description is not undefined
      //title={schemaType.title} // Ensure title is not undefined
      __unstable_markers={validation}
      __unstable_presence={presence}
      compareValue={compareValue}
      inputId={inputId}
    >
      <Card padding={0}>
        <Autocomplete
          value={value}
          ref={inputRef}
          id={inputId}
          filterOption={(query, icon) => icon.value.toLowerCase().includes(query.toLowerCase())}
          fontSize={[2, 2, 3]}
          icon={FiSearch}
          openButton
          onChange={handleChange}
          options={icons}
          padding={[3, 3, 4]}
          placeholder="Type to find icon …"
          renderOption={(option) => (
            <Card as="button">
              <Flex align="center">
                <Box paddingLeft={3} paddingY={2}>
                  <i className={`icon-${option.value}`}></i>
                </Box>
                <Box flex={1} padding={3}>
                  <Text size={[2, 2, 3]}>{option.value}</Text>
                </Box>
              </Flex>
            </Card>
          )}
          renderValue={(value) => value}
        />
      </Card>
    </FormField>
  );
});

export default Icon;