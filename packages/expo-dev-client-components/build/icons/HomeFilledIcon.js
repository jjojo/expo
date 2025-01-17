import * as React from 'react';
import { Image } from '../Image';
import { useCurrentTheme } from '../useExpoTheme';
const activeLightIcon = require('../../assets/home-filled-active-icon-light.png');
const activeIcon = require('../../assets/home-filled-active-icon.png');
const inactiveLightIcon = require('../../assets/home-filled-inactive-icon-light.png');
const inactiveIcon = require('../../assets/home-filled-inactive-icon.png');
const iconMap = {
    light: {
        active: activeIcon,
        inactive: inactiveIcon,
    },
    dark: {
        active: activeLightIcon,
        inactive: inactiveLightIcon,
    },
};
export function HomeFilledIcon(props) {
    const theme = useCurrentTheme();
    const themedIcon = iconMap[theme];
    const icon = props.focused ? themedIcon.active : themedIcon.inactive;
    return React.createElement(Image, { source: icon, ...props });
}
//# sourceMappingURL=HomeFilledIcon.js.map