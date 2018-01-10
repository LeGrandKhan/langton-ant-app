import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

export interface AppBindingProps {
  title?: string;
}
export interface AppEventProps {}
export interface AppProps extends AppBindingProps, AppEventProps {}

export default ({title= 'Langton Ant'}: AppProps) => (
    <MuiThemeProvider>
      <div className="center">
        {/* <CircularProgress size={180} thickness={5} /> */}
        <AppBar title={title} />
      </div>
    </MuiThemeProvider>
);