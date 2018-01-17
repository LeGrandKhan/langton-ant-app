import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, IconButton } from 'material-ui';
import NavigationPlay from 'material-ui/svg-icons/av/play-arrow';

export interface AppBindingProps {
  title?: string;
}
export interface AppEventProps {}
export interface AppProps extends AppBindingProps, AppEventProps {}

export default ({title= 'Langton Ant'}: AppProps) => (
    <MuiThemeProvider>
      <div className="center">
        {/* <CircularProgress size={180} thickness={5} /> */}
        <AppBar
          title={title}
          iconElementLeft={<IconButton><NavigationPlay /></IconButton>}
        />
      </div>
    </MuiThemeProvider>
);