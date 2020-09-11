import React from 'react';
import words from "./data/words";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WordCard from "./WordCard";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        const maxPage = Math.floor(words.length / 150) + 1;
        this.state = {
            words: words,
            number: words.length,
            page: 1,
            mapPage: maxPage
        }
    }

    handleBack = () => {
        if (this.state.page !== 1) {
            this.setState({page: this.state.page - 1})
        }
    }

    handleForword = () => {
        if (this.state.page !== 22) {
            this.setState({page: this.state.page + 1})
        }
    }

    render() {

        return (
            <Container maxWidth='md'>
                <Typography variant='h3' component='h3' gutterBottom align='center'>Words List Page {this.state.page}</Typography>
                <Box style={{'textAlign': 'center'}} m={2}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        {this.state.page === 1 ? null:<Button onClick={this.handleBack}>上一页</Button> }
                        {this.state.page === 22 ? null:<Button onClick={this.handleForword}>下一页</Button> }
                    </ButtonGroup>
                </Box>
                <Grid container spacing={2} >
                    {
                        this.state.words.slice((this.state.page - 1) * 150, this.state.page * 150).map(
                            word => (
                                <WordCard name={word.name} key={word.name} mean={word.meaning}/>
                            )
                        )
                    }
                </Grid>
            </Container>
        );
    }
}


export default App;
