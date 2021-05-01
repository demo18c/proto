import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
//
import { OrbitControls, Html } from '@react-three/drei';

//
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//
// import Box from './Box';
import Silvus from './Silvus';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		height: '75%',
		flexGrow: 1
	},
	// bullet: {
	// 	display: 'inline-block',
	// 	margin: '0 2px',
	// 	transform: 'scale(0.8)'
	// },
	p: {
		fontSize: 10
	},
	button: {
		paddingTop: '10px'
	}
	// pos: {
	// 	marginBottom: 12
	// }
});

const RadioComp = () => {
	const classes = useStyles();

	return (
		<>
			{/* <Card className={classes.root}> */}
			{/* <CardContent> */}
			<Canvas dpr={[1, 2]} camera={{ fov: 60 }}>
				<OrbitControls />
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 5]} />
				<pointLight position={[-10, -10, -10]} />
				<Suspense fallback={null}>
					<Silvus position={[0, -2.5, 0]} />
				</Suspense>
			</Canvas>
			{/* </CardContent> */}

			<Typography>
				<p>acljnalancacnancnalcna</p>
				<p>ascacnacjnacknacacacac</p>
				<p>oapcmaclnacalckanclanclancaacxalcna</p>
			</Typography>
			{/* </Card> */}
			<Button component={Link} to="/radiospec" variant="contained">
				Back
			</Button>
		</>
	);
};

export default RadioComp;
