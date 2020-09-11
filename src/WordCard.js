import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";

import './tap.scss'

class WordCard extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            meaning: null
        }
    }

    render() {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Typography variant='body1'>{this.props.name}</Typography>
                <Typography className='tap' variant='body1'>{this.props.mean}</Typography>
            </Grid>
        )
    }
}

export default WordCard;