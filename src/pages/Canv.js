import React from 'react';
import { Canvas } from '@react-three/fiber';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Box from './Box';
import { Suspense } from 'react';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		height: '100%'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

const Canv = () => {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.root}>
				<CardContent>
					<Canvas pixelRatio={[1, 2]}>
						<Suspense fallback={null}>
							<ambientLight />
							<pointLight position={[10, 10, 10]} />
							<Box position={[-1.2, 0, 0]} />
							<Box position={[1.2, 0, 0]} />
						</Suspense>
					</Canvas>
				</CardContent>
				<Typography>acljnalancacnancnalcna</Typography>
			</Card>

			<Button>Next</Button>
		</>
	);
};

export default Canv;
