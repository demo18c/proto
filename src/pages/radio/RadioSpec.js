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
	{ specs: 'Wave', descrip: 'wckmwcmwc' },
	{ specs: 'Enc', descrip: 'svcsvcsvs' },
	{ specs: 'Data', descrip: 'vsvdv ' },
	{ specs: 'sdvcsv', descrip: 'sfcsfscscvg​' },
	{ specs: 'Input Power', descrip: 'scscsc' },
	{ specs: 'Output Power', descrip: 'wfscvwc' },
	{ specs: 'cwdcwc', descrip: 'cscc' }
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
				<Button size="large" component={Link} to="/radiocomp" variant="contained" color="default">
					Next
				</Button>
			</>
			{/* </> */}
		</Grid>
	);
}
