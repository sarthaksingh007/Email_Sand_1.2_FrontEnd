import {
    Grid, Typography, Box, IconButton, Stack, Input,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";

import React from "react";
import Button from "@mui/material/Button";
 
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
 
import LoaderCon from "../../../../common/loader/containers/loader_cont";
 
import "../../style/order.css"
 
import { Link } from "react-router-dom";
import Snackbar from "../../../../common/snackbar/components/snackbar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "20ch",
            "&:focus": {
                width: "30ch",
            },
        },
    },
}));

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
        this.state = {
            add_event: false,
            edit: false,
            upload_image_dialog: false,
            delete: false,
            profile_pic: "",
            cust_name: "",
            cust_mobile: "",
            cust_email: "",
            cust_address: "",
            cust_aadhar: "",
            cust_pan: "",
            cust_gst_cert: "",
           
            other_doc1: "",
            other_doc2: "",
            cust_gst_no: "",
            
            page: 0,
            setPage: 0,
            rowsPerPage: 10,
            setRowsPerPage: 10,
        };
        this.handleMobileChange = this.handleMobileChange.bind(this);
    }


    handleMobileChange(event) {
        const value = event.target.value;
        if (value.length <= 10) {
          this.setState({ cust_mobile: value });
        }
      }
    handleFileChange(e) {
        
    };

    render() {

        

        
        const {
            snackbar,
            close_snack_bar
        } = this.props;


        return (
            <Grid>


                <Grid style={{ display: "flex", justifyContent: "space-between" }}>
                    <Box className='makeorder'>
                        <center style={{ display: "flex" }}>
                            <Link to="/customer" style={{ textDecoration: "none" }}>
                                <IconButton
                                    style={{ marginLeft: "18px" }}

                                >
                                    <ArrowBackIcon style={{ color: "white" }} />
                                </IconButton>
                            </Link>


                            <Typography style={{ color: "white ", marginLeft: "40px", fontSize: 16, marginTop: "8px" }}>ADD A NEW CUSTOMER</Typography>
                        </center>
                    </Box>


                </Grid>


                <Grid style={{ marginLeft: "50px", width: "300px" }}>
                    <Typography style={{ color: "black ", fontSize: 18, marginTop: "8px", fontWeight: "500", marginLeft: "30px" }}>PROFILE PICTURE</Typography>


                    <Stack
                        spacing={1}
                        style={{
                            textDecoration: "none",
                            // display: "inline-block",
                            padding: "0 30px",
                            marginTop: "10px",
                        }}
                        className="imagemedia"
                    >
                        <Avatar
                            alt="Profile"
                            src={this.state.profile_pic !== "" ? URL.createObjectURL(this.state.profile_pic) : this.state.profile_pic}
                            style={{ height: "114px", width: "114px" }}
                            variant={"circular"}
                        />
                        {/* {imageUrl && (
                                        <img
                                            src={imageUrl}
                                            alt={imageAlt}
                                            className="displayed-image"
                                        />
                                    )} */}
                        <Input
                            type="file"
                            // onChange={(e)=>this.handleFileChange(e)}
                            onChange={(e) => { this.setState({ profile_pic: e.target.files[0] }) }}
                        />
                    </Stack>
                </Grid>



                <Grid class="register-form-custom-select" style={{ marginTop: 5, display: 'flex' }} >
                    {/* <Dropdown
        // options={this.state.options}
        // placeholder='Choose Language'
        search
        // selection
        fluid
        allowAdditions
        value={currentValue}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      /> */}

                    <Grid style={{ display: "flex", flexDirection: "column", marginLeft: 80, marginTop: 25, }}>
                        <label style={{ marginTop: -10, }}> Customer/Organisation Name</label>
                        <input required={true} style={{
                            background: "linear-gradient(91.75deg, #EBF1F2 0.93%, #FFFFFF 110.51%)",

                            height: 30,
                            // marginLeft:-55,
                            marginTop: 0,
                            width: "305px",
                            border: "2px solid #000000",
                            // borderRadius:8
                        }}
                            onChange={(e) => { this.setState({ cust_name: e.target.value }) }}

                        ></input>


                        {/* <label style={{color:"black"}}>BOOKING/INVOICE</label> */}


                    </Grid>
                    <Grid style={{ display: "flex", flexDirection: "column", marginLeft: 80, marginTop: 25, }}>
                        <label style={{ marginTop: -10, marginLeft: -55, }}> Email</label>
                        <input
                            type={"email"}
                            style={{
                                background: "linear-gradient(91.75deg, #EBF1F2 0.93%, #FFFFFF 110.51%)",

                                height: 30,
                                marginLeft: -55,
                                marginTop: 0,
                                width: "305px",
                                border: "2px solid #000000",
                               
                            }}
                            onChange={(e) => { this.setState({ cust_email: e.target.value }) }}

                        ></input>

                  


                    </Grid>


                </Grid>

                <Grid class="register-form-custom-select" style={{ marginTop: 5, display: 'flex' }} >
                    

                    <Grid style={{ display: "flex", flexDirection: "column", marginLeft: 80, marginTop: 25, }}>
                       
                   
                       
                        <label style={{ marginTop: -10, }}> Mobile</label>
                        <form>

                        <input required={true}  type="tel" id="mobile" name="formName" value={this.state.cust_mobile} onChange={this.handleMobileChange} />


                        <input required={true} 
                        
                        type="number" pattern="[0-9]{10}" name="formName"
                        // disabled={ this.state.cust_mobile.length<10?true:false}
                           
                            style={{
                                
                                background: "linear-gradient(91.75deg, #EBF1F2 0.93%, #FFFFFF 110.51%)",

                                height: 30,
                               
                                marginTop: 0,
                                width: "305px",
                                border: "2px solid #000000",
                             
                            }}
                            value={this.state.cust_mobile}
                            min={0}
                            
                            maxLength={10}
                          
                            onChange={(e) => { this.setState({ cust_mobile: e.target.value }) }}

                        ></input>
                        </form>




                    </Grid>
                    <Grid style={{ display: "flex", flexDirection: "column", marginLeft: 80, marginTop: 25, }}>
                        <label style={{ marginTop: -10, marginLeft: -55, }}> GST number</label>
                        <textarea
                           
                            style={{
                                background: "linear-gradient(91.75deg, #EBF1F2 0.93%, #FFFFFF 110.51%)",

                                height: 30,
                                marginLeft: -55,
                                marginTop: 0,
                                width: "305px",
                                border: "2px solid #000000",
                          
                            }}
                            onChange={(e) => { this.setState({ cust_gst_no: e.target.value }) }}

                        ></textarea>



                    </Grid>






                </Grid>

                <Grid class="register-form-custom-select" style={{ marginTop: 5, display: 'flex' }} >
                   

                    <Grid style={{ display: "flex", flexDirection: "column", marginLeft: 80, marginTop: 25, }}>
                        <label style={{ marginTop: -10, }}> Address</label>
                        <input required={true} style={{
                            background: "linear-gradient(91.75deg, #EBF1F2 0.93%, #FFFFFF 110.51%)",

                            height: 100,
                            // marginLeft:-55,
                            marginTop: 0,
                            width: "635px",
                            border: "2px solid #000000",
                            // borderRadius:8
                        }}
                            onChange={(e) => { this.setState({ cust_address: e.target.value }) }}

                        ></input>


                    


                    </Grid>



                </Grid>


                <Grid style={{ marginLeft: "50px", width: "300px" }}>
                    <Typography style={{ color: "black ", fontSize: 18, marginTop: "8px", fontWeight: "500", marginLeft: "30px" }}>DOCUMENTS UPLOAD</Typography>
                    <Grid style={{ display: "flex", flexDirection: "row" }}>
                        <Grid style={{ display: "flex", flexDirection: "column", width: "300px" }} >
                            <Typography style={{ color: "black ", fontSize: 16, marginTop: "8px", fontWeight: "400", marginLeft: "30px" }}> AADHAR :    </Typography>


                            <Stack
                                spacing={1}
                                style={{
                                    textDecoration: "none",
                                    // display: "inline-block",
                                    padding: "0 30px",
                                    marginTop: "10px",
                                }}
                                className="imagemedia"
                            >
                                <Avatar
                                    alt="Profile"
                                    src={this.state.cust_aadhar !== "" ? URL.createObjectURL(this.state.cust_aadhar) : this.state.cust_aadhar}
                                  
                                    style={{ height: "114px", width: "114px" }}
                                    variant={"rounded"}
                                />
                               
                                <Input
                                    type="file"
                                    onChange={(e) => this.setState({ cust_aadhar: e.target.files[0] })}
                                />
                            </Stack>
                        </Grid>
                        <Grid style={{ display: "flex", flexDirection: "column", marginLeft: "80px", width: "300px" }} >
                            <Typography style={{ color: "black ", fontSize: 16, marginTop: "8px", fontWeight: "400", marginLeft: "30px" }}> PAN :    </Typography>


                            <Stack
                                spacing={1}
                                style={{
                                    textDecoration: "none",
                                    // display: "inline-block",
                                    padding: "0 30px",
                                    marginTop: "10px",
                                }}
                                className="imagemedia"
                            >
                                <Avatar
                                    alt="Profile"
                                    src={this.state.cust_pan !== "" ? URL.createObjectURL(this.state.cust_pan) : this.state.cust_pan}
                                    style={{ height: "114px", width: "114px" }}
                                    variant={"rounded"}
                                />
                               
                                <Input
                                    type="file"
                                    onChange={(e) => this.setState({ cust_pan: e.target.files[0] })}
                                />
                            </Stack>
                        </Grid>

                        <Grid style={{ display: "flex", flexDirection: "column", marginLeft: "80px", width: "300px" }} >
                            <Typography style={{ color: "black ", fontSize: 16, marginTop: "8px", fontWeight: "400", marginLeft: "30px" }}> GST :    </Typography>


                            <Stack
                                spacing={1}
                                style={{
                                    textDecoration: "none",
                                    // display: "inline-block",
                                    padding: "0 30px",
                                    marginTop: "10px",
                                }}
                                className="imagemedia"
                            >
                                <Avatar
                                    alt="Profile"
                                    src={this.state.cust_gst_cert !== "" ? URL.createObjectURL(this.state.cust_gst_cert) : this.state.cust_gst_cert}
                                    // src={this.state.cust_gst_cert}
                                    style={{ height: "114px", width: "114px" }}
                                    variant={"rounded"}
                                />
                               
                                <Input
                                    type="file"
                                    onChange={(e) => this.setState({ cust_gst_cert: e.target.files[0] })}
                                />



                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid style={{ display: "flex", flexDirection: "row" }}>
                        <Grid style={{ display: "flex", flexDirection: "column", width: "300px" }} >
                            <Typography style={{ color: "black ", fontSize: 16, marginTop: "8px", fontWeight: "400", marginLeft: "30px" }}> OTHER 1 :    </Typography>


                            <Stack
                                spacing={1}
                                style={{
                                    textDecoration: "none",
                                    // display: "inline-block",
                                    padding: "0 30px",
                                    marginTop: "10px",
                                }}
                                className="imagemedia"
                            >
                                <Avatar
                                    alt="Profile"
                                    // src={this.state.cust_aadhar!==""?URL.createObjectURL(this.state.cust_aadhar):this.state.cust_aadhar}
                                    src={this.state.other_doc1 !== "" ? URL.createObjectURL(this.state.other_doc1) : this.state.other_doc1}

                                    // src={this.state.cust_aadhar}
                                    style={{ height: "114px", width: "114px" }}
                                    variant={"rounded"}
                                />
                              
                                <Input
                                    type="file"
                                   
                                    onChange={(e) => this.setState({ other_doc1: e.target.files[0] })}

                                />
                            </Stack>
                        </Grid>
                        <Grid style={{ display: "flex", flexDirection: "column", marginLeft: "80px", width: "300px" }} >
                            <Typography style={{ color: "black ", fontSize: 16, marginTop: "8px", fontWeight: "400", marginLeft: "30px" }}> OTHER 2 :    </Typography>


                            <Stack
                                spacing={1}
                                style={{
                                    textDecoration: "none",
                                    // display: "inline-block",
                                    padding: "0 30px",
                                    marginTop: "10px",
                                }}
                                className="imagemedia"
                            >
                                <Avatar
                                    alt="Profile"
                                    // src={this.state.cust_pan!==""?URL.createObjectURL(this.state.cust_pan):this.state.cust_pan}
                                    src={this.state.other_doc2 !== "" ? URL.createObjectURL(this.state.other_doc2) : this.state.other_doc2}

                                    style={{ height: "114px", width: "114px" }}
                                    variant={"rounded"}
                                />
                              
                                <Input
                                    type="file"
                                    // onChange={(e) => this.setState({ cust_pan: e.target.files[0] })}
                                    onChange={(e) => this.setState({ other_doc2: e.target.files[0] })}

                                />
                            </Stack>
                        </Grid>


                    </Grid>



                </Grid>
                <Grid class="register-form-custom-select" style={{ marginTop: 25, display: 'flex', marginBottom: 25 }} >
                    
                    {/* <Link to="/customer" style={{ textDecoration: "none" }}> */}
                    <Typography marginLeft={40} sx={{ borderRadius: "15px" }}>
                        <Button
                            disabled={this.state.cust_name === "" || this.state.cust_mobile === "" || this.state.cust_email === "" || this.state.cust_address === "" }
                            onClick={() => {
                                this.props.add_upload_profile(this.state.cust_name, this.state.cust_mobile, this.state.cust_email, this.state.cust_address, this.state.cust_aadhar, this.state.cust_pan, this.state.cust_gst_cert, this.state.profile_pic, this.state.cust_gst_no, this.state.other_doc1, this.state.other_doc2);


                                // this.setState({ add: false });
                            }}
                            className='button' variant='contained' style={{ borderRadius: "20px", width: "100%" }}>Add Customer </Button></Typography>

                    {/* </Link> */}

                </Grid>
                <LoaderCon />
                <Snackbar
            open={snackbar.response_received}
            close_snack_bar={close_snack_bar}
            message={snackbar.message}
          />

            </Grid>
        );
    }
}