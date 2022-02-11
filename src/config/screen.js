/**
 * @copyright Asif Iqubal
 */

import React from 'react';
import PageWrapper from '../component/common/page_wrapper';
import {AuthHome, Login} from '../component/auth';

/**
 */
export function ScreenLogin(props) {
  return (
    <PageWrapper navigation={props.navigation}>
      <Login navigation={props.navigation} {...props} />
    </PageWrapper>
  );
} // ScreenLogin

/**
 */
export function ScreenAuthHome(props) {
  return (
    <PageWrapper navigation={props.navigation}>
      <AuthHome navigation={props.navigation} {...props} />
    </PageWrapper>
  );
} // ScreenAuthHome
