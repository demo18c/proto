import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		backgroundColor: '#424242'
	},
	paper: {
		backgroundColor: '#424242'
	}
	// button: {
	// 	size: 'large'
	// }
});

function createData(specs, descrip) {
	return { specs, descrip };
}

const rows = [
	{ specs: 'Wavefrom', descrip: 'Mobile Networked MIMO MN-MIMO​' },
	{ specs: 'tEncryption', descrip: 'AES-256, FIPS140-2 Level 2 Suite B' },
	{ specs: 'Data Rate', descrip: 'Up to 20Mbps' },
	{ specs: 'MIMO Cap', descrip: 'Spatial Multiplexing, Space-Time Coding, TX/RX Eigen Beamforming​' },
	{ specs: 'Input Power', descrip: '9 Volts' },
	{ specs: 'Output Power', descrip: '1mW-1W' },
	{ specs: 'Freq Range', descrip: '2.2-2.5GHz' }
];

export default function RadioTable() {
	const classes = useStyles();

	return (
		// <>
		<Grid>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.cell}>Specs</TableCell>
							<TableCell align="right">Description</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<TableRow key={row.specs}>
								<TableCell component="th" scope="row">
									{row.specs}
								</TableCell>
								<TableCell align="right">{row.descrip}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<Link>
					<Button />
				</Link>
			</TableContainer>
			<>
				<Button size="large" component={Link} to="/" variant="contained" color="default">
					Next
				</Button>
			</>
			{/* </> */}
		</Grid>
	);
}
