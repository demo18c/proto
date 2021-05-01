import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import RadioIcon from '@material-ui/icons/Radio';
import PetsIcon from '@material-ui/icons/Pets';
import HelpIcon from '@material-ui/icons/Help';

export const SideBarData = [
	{
		title: 'Dashboard',
		icon: <HomeIcon />,
		path: '/'
	},
	{
		title: 'Overview',
		icon: <InfoIcon />,
		path: '/overview'
	},
	{
		title: 'Hound',
		icon: <PetsIcon />,
		path: '/hound'
	},
	{
		title: 'Radio',
		icon: <RadioIcon />,
		path: '/radiospec'
	},
	{
		title: 'FAQ',
		icon: <HelpIcon />,
		path: '/faq'
	}
];
