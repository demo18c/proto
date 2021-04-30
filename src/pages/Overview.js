import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		backgroundColor: 'transparent',
		// width: '75vw',
		height: '100vh'
	}
}));

const Overview = () => {
	const classes = useStyles();

	return (
		<Grid justify="center">
			<Paper className={classes.paper}>
				<Typography variant="h1">Overview</Typography>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra lobortis justo eget pulvinar.
					Cras auctor in diam sed dapibus. Nullam in justo nec erat fermentum commodo eget eget urna. Cras
					vehicula enim id ipsum laoreet convallis. Nunc eget egestas ligula, at placerat leo. Praesent vitae
					luctus ante, nec tincidunt est. Nam fringilla nisi quis dui cursus vehicula. Aliquam pulvinar
					lacinia nunc ac accumsan. Cras id lobortis ante, a lobortis magna. Morbi diam arcu, aliquet vel
					nulla vitae, varius pharetra urna. Integer non placerat mi, et finibus nunc. Phasellus quam urna,
					scelerisque nec augue quis, ullamcorper mollis ligula. Maecenas ac nisl suscipit, volutpat nunc
					eget, malesuada turpis. Integer vulputate quam sed dolor ullamcorper elementum. Donec iaculis
					lacinia neque non cursus. Fusce vel nibh metus.
				</p>
				<p>
					Proin laoreet feugiat mauris ac pulvinar. In at ipsum imperdiet, gravida mauris quis, varius lacus.
					Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec bibendum est vel ex iaculis
					porttitor. Vestibulum ut facilisis nunc. Curabitur elit eros, congue eu faucibus sed, egestas
					laoreet dui. Proin a diam nunc. Fusce blandit, arcu vel auctor mollis, eros arcu eleifend orci, sit
					amet ullamcorper libero lorem et risus. Donec diam justo, luctus eu blandit rhoncus, fringilla
					congue elit. Maecenas a erat et eros tempor ultricies. Fusce euismod, mauris ut consectetur rhoncus,
					nisi quam auctor augue, in pulvinar magna quam vel metus. Etiam at egestas nibh. Pellentesque
					imperdiet mattis euismod. Nam viverra, augue eget finibus sodales, justo turpis suscipit purus, id
					ultricies sapien nibh ac enim. Mauris eget dui vel diam elementum mattis. Curabitur quis condimentum
					sem.
				</p>
			</Paper>
		</Grid>
	);
};

export default Overview;
