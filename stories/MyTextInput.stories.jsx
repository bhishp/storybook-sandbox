import React from 'react';
import withFormik from '@bbbtech/storybook-formik';
// import withFormik from 'storybook-formik';

import { MyTextInput } from './MyTextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MyTextInput',
  component: MyTextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withFormik],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MyTextInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "formikTweet",
  label: "Describe formik in 80 characters",
  placeholder: "I love formik because..."
};
