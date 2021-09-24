import React from "react";
import axios from "axios";
//import Hooks from './Hooks'
import Grid from "@material-ui/core/Grid";
//import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//import AppBar from "@material-ui/core/AppBar";

export default class APICall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tekkom: [],
            visible: false,

        };
    }

    handleButton = (harga) => {
        alert("Mahar : " + harga);
    };

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:3000/data",
            //url: "https://jsonplaceholder.typicode.com/photos",
            headers: {
                accept: "*/*"
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    tekkom: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (

            <div>
                <Grid container md={11} spacing={4} style={{ marginTop: "50px", marginLeft: "50px" }}>

                    {this.state.tekkom.map((results, index) => {
                        return (

                            <Grid item key={results.name} md={3}>
                                <CardActionArea onClick={() => this.handleButton(results.harga)}>
                                    <CardContent style={{ backgroundColor: '#506D84' }}>
                                        <Typography><img src={results.gambar} alt='Cover Game' style={{width:150, height:200}}/></Typography>
                                        <Typography>Judul : {results.judul}</Typography>
                                        <Typography>Publisher : {results.pub}</Typography>
                                        {/* <Typography>Harga : {results.harga}</Typography> */}
                                        
                                    </CardContent>
                                </CardActionArea>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>

        );
    }
}