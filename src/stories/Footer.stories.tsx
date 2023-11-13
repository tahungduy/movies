import AppFooter from 'components/AppFooter';
import React from 'react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'AppFooter',
  component: AppFooter,
};

// Story 1
export const DefaultFooter = () => <AppFooter />;

export const CustomContent = () => (
  <div className="custom-style">
    <AppFooter />
  </div>
);
