import type { GlobalThemeOverrides } from 'naive-ui'
import colors from './colors'

export default {
  common: {
    fontFamily:
      'Inter, v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: '16px',
    fontSizeMedium: '16px',
    fontSizeLarge: '18px',
    fontSizeHuge: '20px',

    primaryColor: `rgb(${colors.primary.default})`,
    primaryColorHover: `#9673E4FF`,
    primaryColorPressed: `#7751C9FF`,
    primaryColorSuppl: `#3B2864FF`,

    errorColor: `rgb(${colors.danger.default})`,
    errorColorHover: `#EA6D59FF`,
    errorColorPressed: `#CF4B36FF`,
    errorColorSuppl: `#CF4631FF`,

    warningColor: `rgb(${colors.warning.default})`,
    warningColorHover: `#F7C364FF`,
    warningColorPressed: `#DDA642FF`,
    warningColorSuppl: `rgb(240, 138, 0)`,

    infoColor: `rgb(${colors.info.default})`,
    infoColorHover: `#64C1F7FF`,
    infoColorPressed: `#42A4DDFF`,
    infoColorSuppl: `#49B6F5FF`,

    successColor: `rgb(${colors.success.default})`,
    successColorHover: `#47C9A4FF`,
    successColorPressed: `#22AC85FF`,
    successColorSuppl: `#3AB491FF`
  },
  Button: {
    textColorPrimary: '#FFFFFFFF',
    textColorHoverPrimary: '#FFFFFFFF',
    textColorPressedPrimary: '#FFFFFFFF',
    textColorFocusPrimary: '#FFFFFFFF',
    textColorDisabledPrimary: '#FFFFFFFF',
    textColorSuccess: '#FFFFFFFF',
    textColorDisabledSuccess: '#FFFFFFFF',
    textColorFocusSuccess: '#FFFFFFFF',
    textColorPressedSuccess: '#FFFFFFFF',
    textColorHoverSuccess: '#FFFFFFFF',
    textColorError: '#FFFFFFFF',
    textColorDisabledError: '#FFFFFFFF',
    textColorFocusError: '#FFFFFFFF',
    textColorPressedError: '#FFFFFFFF',
    textColorHoverError: '#FFFFFFFF',
    textColorInfo: '#FFFFFFFF',
    textColorDisabledInfo: '#FFFFFFFF',
    textColorFocusInfo: '#FFFFFFFF',
    textColorPressedInfo: '#FFFFFFFF',
    textColorHoverInfo: '#FFFFFFFF',
    textColorWarning: '#FFFFFFFF',
    textColorDisabledWarning: '#FFFFFFFF',
    textColorFocusWarning: '#FFFFFFFF',
    textColorPressedWarning: '#FFFFFFFF',
    textColorHoverWarning: '#FFFFFFFF',
    borderRadiusMedium: '4px'
  },
  FloatButton: {
    textColorPrimary: '#FFFFFFFF'
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
  Layout: {
    siderColor: `#111C43`, // background sider
    color: '#F0F1F7', // background
    textColor: `rgb(${colors.gray[600]})` // text color
  },
  Menu: {
    itemColorHover: `#ffffff0d`,
    itemColorActive: `#ffffff0d`,
    itemColorActiveHover: `#ffffff0d`,
    itemColorActiveCollapsed: `#ffffff0d`,

    itemTextColor: `rgb(${colors.white})`,
    itemTextColorHover: `rgb(${colors.white})`,
    itemIconColor: `rgb(${colors.white})`,
    itemIconColorHover: `rgb(${colors.white})`,
    itemIconColorCollapsed: `rgb(${colors.white})`,

    itemTextColorActive: `rgb(${colors.primary[400]})`,
    itemTextColorActiveHover: `rgb(${colors.primary[400]})`,
    itemTextColorChildActive: `rgb(${colors.primary[400]})`,
    itemTextColorChildActiveHover: `rgb(${colors.primary[400]})`,
    itemIconColorActive: `rgb(${colors.primary[400]})`,
    itemIconColorActiveHover: `rgb(${colors.primary[400]})`,
    itemIconColorChildActive: `rgb(${colors.primary[400]})`,
    itemIconColorChildActiveHover: `rgb(${colors.primary[400]})`,

    arrowColor: `rgba(${colors.white}, 0.7)`,
    arrowColorHover: `rgba(${colors.white}, 1)`,
    arrowColorActive: `rgba(${colors.white}, 1)`,
    arrowColorActiveHover: `rgba(${colors.white}, 1)`,
    arrowColorChildActive: `rgba(${colors.white}, 1)`,
    arrowColorChildActiveHover: `rgba(${colors.white}, 1)`
  }
} as GlobalThemeOverrides
