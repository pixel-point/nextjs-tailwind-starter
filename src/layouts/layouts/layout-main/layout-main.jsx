import React from 'react';
import Seo from 'components/shared/seo';
import styles from './layout-main.module.scss';

const LayoutMain = ({ children }) => (
  <>
    <Seo />
    <main>{children}</main>
  </>
);

export default LayoutMain;
