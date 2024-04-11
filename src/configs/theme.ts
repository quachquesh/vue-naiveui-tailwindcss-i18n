import type { GlobalThemeOverrides } from 'naive-ui'
import colors from './colors'

export default {
  common: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',

    primaryColor: `rgb(${colors.primary.default})`,
    primaryColorHover: 'rgb(91, 114, 137)',
    primaryColorPressed: 'rgb(40, 63, 86)',
    primaryColorSuppl: 'rgb(91, 114, 137)',

    errorColor: `rgb(${colors.danger.default})`,
    errorColorHover: `rgb(${colors.danger[200]})`,
    errorColorPressed: `rgb(${colors.danger[400]})`,
    errorColorSuppl: `rgb(${colors.danger[200]})`,

    warningColor: `rgb(${colors.warning.default})`,
    warningColorHover: `rgb(${colors.warning[200]})`,
    warningColorPressed: `rgb(${colors.warning[400]})`,
    warningColorSuppl: `rgb(${colors.warning[200]})`,

    infoColor: `rgb(${colors.info.default})`,
    infoColorHover: `rgb(${colors.info[200]})`,
    infoColorPressed: `rgb(${colors.info[400]})`,
    infoColorSuppl: `rgb(${colors.info[200]})`,

    successColor: `rgb(${colors.success.default})`,
    successColorHover: `rgb(${colors.success[200]})`,
    successColorPressed: `rgb(${colors.success[400]})`,
    successColorSuppl: `rgb(${colors.success[200]})`
  },
  Button: {
    // Medium
    paddingMedium: '0 14px',
    iconMarginMedium: '0 8px',
    iconSizeMedium: '16px',
    fontSizeMedium: '16px',
    // Small
    paddingSmall: '0 10px',
    iconMarginSmall: '0 4px',
    iconSizeSmall: '16px',
    fontSizeSmall: '16px',
    // Large
    paddingLarge: '0 20px',
    iconMarginLarge: '0 8px',
    iconSizeLarge: '18px',
    fontSizeLarge: '16px'
  },
  Card: {
    paddingSmall: '16px 20px'
  },
  DataTable: {
    thColor: `rgb(${colors.gray[100]})`,
    borderColor: `rgb(${colors.gray[300]})`,
    borderRadius: 0,
    tdColorHover: '#E8ECF6',
    fontSizeSmall: '16px',
    fontSizeMedium: '16px'
  },
  Tabs: {
    tabGapSmallLine: '32px',
    tabPaddingSmallLine: '8px 0 4px',
    tabFontWeightActive: 600,
    tabBorderColor: `rgb(${colors.gray[300]})`
  },
  Tag: {
    fontSizeMedium: '16px'
  },
  Layout: {
    siderColor: `rgb(${colors.primary.dark})`, // background sider
    color: '#eaedf3', // background
    textColor: `rgb(${colors.primary.dark})` // text color
  },
  Menu: {
    itemColorHover: `rgb(${colors.primary.default})`,
    itemColorActive: `rgb(${colors.primary.default})`,
    itemColorActiveHover: `rgb(${colors.primary.default})`,
    itemColorActiveCollapsed: `rgb(${colors.primary.default})`,

    itemTextColor: `rgb(${colors.white})`,
    itemTextColorHover: `rgb(${colors.white})`,
    itemIconColor: `rgb(${colors.white})`,
    itemIconColorHover: `rgb(${colors.white})`,
    itemIconColorCollapsed: `rgb(${colors.white})`,

    itemTextColorActive: `rgb(${colors.warning.default})`,
    itemTextColorActiveHover: `rgb(${colors.warning.default})`,
    itemTextColorChildActive: `rgb(${colors.warning.default})`,
    itemTextColorChildActiveHover: `rgb(${colors.warning.default})`,
    itemIconColorActive: `rgb(${colors.warning.default})`,
    itemIconColorActiveHover: `rgb(${colors.warning.default})`,
    itemIconColorChildActive: `rgb(${colors.warning.default})`,
    itemIconColorChildActiveHover: `rgb(${colors.warning.default})`,

    arrowColor: `rgba(${colors.white}, 0.7)`,
    arrowColorHover: `rgba(${colors.white}, 1)`,
    arrowColorActive: `rgba(${colors.white}, 1)`,
    arrowColorActiveHover: `rgba(${colors.white}, 1)`,
    arrowColorChildActive: `rgba(${colors.white}, 1)`,
    arrowColorChildActiveHover: `rgba(${colors.white}, 1)`
  }
} as GlobalThemeOverrides
