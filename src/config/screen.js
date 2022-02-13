/**
 * @copyright Asif Iqubal
 */

import React from 'react';
import PageWrapper from '../component/common/page_wrapper';
import {AuthHome, Login} from '../component/auth';
import {Landing} from '../component/home';
import Cart from '../component/cart/cart';

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

/**
 */
export function ScreenLanding(props) {
  return (
    <PageWrapper navigation={props.navigation}>
      <Landing navigation={props.navigation} {...props} />
    </PageWrapper>
  );
} // ScreenAuthHome

/**
 */
export function ScreenCart(props) {
  return (
    <PageWrapper navigation={props.navigation}>
      <Cart navigation={props.navigation} {...props} />
    </PageWrapper>
  );
} // ScreenCart
