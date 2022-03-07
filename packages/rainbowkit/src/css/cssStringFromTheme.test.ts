import { describe, expect, it } from 'vitest';
import { lightTheme } from '../themes/lightTheme';
import { cssStringFromTheme } from './cssStringFromTheme';

describe('cssStringFromTheme', () => {
  it('converts themes to CSS strings', () => {
    expect(cssStringFromTheme(lightTheme())).toMatchInlineSnapshot(
      '"--rk-fonts-body:SFRounded,ui-rounded,SF Pro Rounded,system-ui,Helvetica Neue,Arial,Helvetica,sans-serif;--rk-radii-connectButton:12px;--rk-radii-menuButton:12px;--rk-radii-modal:24px;--rk-colors-accentColor:#1A85FF;--rk-colors-buttonBorder:rgba(0, 0, 0, 0.04);--rk-colors-buttonSecondaryBackground:rgba(0, 0, 0, 0.06);--rk-colors-buttonText:#FFF;--rk-colors-connectButtonBackground:#FFFFFF;--rk-colors-connectButtonBackgroundError:#FF494A;--rk-colors-connectButtonInnerBackground:linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06));--rk-colors-connectButtonText:#25292E;--rk-colors-connectButtonTextError:white;--rk-colors-connectionIndicator:#2CCC00;--rk-colors-error:#FF494A;--rk-colors-menuBackground:#fff;--rk-colors-menuItemActiveBackground:rgba(196, 196, 196, 0.2);--rk-colors-menuItemBackground:rgba(196, 196, 196, 0.1);--rk-colors-menuText:#25292E;--rk-colors-menuTextAction:#4892FE;--rk-colors-menuTextDisconnect:#FF494A;--rk-colors-menuTextSecondary:#A3A4A5;--rk-colors-modalBackdrop:rgba(0, 0, 0, 0.3);--rk-colors-modalBackground:#fff;--rk-colors-modalBorder:rgba(0, 0, 0, 0.06);--rk-colors-modalClose:rgba(0, 0, 0, 0.6);--rk-colors-modalCloseBackground:rgba(0, 0, 0, 0.06);--rk-colors-modalText:#25292E;--rk-colors-modalTextSecondary:rgba(60, 66, 82, 0.6);--rk-colors-profileAction:#FFFFFF;--rk-colors-profileActionHover:rgba(255, 255, 255, 0.5);--rk-colors-profileForeground:rgba(60, 66, 66, 0.1);--rk-colors-selectedOptionBorder:rgba(60, 66, 66, 0.1);--rk-colors-standby:#FFD641;--rk-shadows-connectButton:0px 4px 12px rgba(0, 0, 0, 0.1);--rk-shadows-dialog:0px 8px 32px rgba(0, 0, 0, 0.32);--rk-shadows-menu:0px 10px 30px rgba(0, 0, 0, 0.1);--rk-shadows-selectedOption:0px 2px 6px rgba(0, 0, 0, 0.24);"'
    );
  });
});
