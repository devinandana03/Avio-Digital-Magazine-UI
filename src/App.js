import React from "react";
import image1 from "./img/one.jpeg";
import image2 from "./img/two.jpeg";
import img3 from "./img/three.jpg";
import img4 from "./img/four.jpg";
import img5 from "./img/five.png";
import img6 from "./img/twotwo.jpeg";
import img7 from  "./img/2.jpeg"
import { RiStarSmileFill } from "react-icons/ri";
import "./App.css";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { MdArrowOutward } from "react-icons/md";
import { PiButterflyFill } from "react-icons/pi";
import { MdCoronavirus } from "react-icons/md";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function App() {
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        height: "150vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="main"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <div style={{}}>
            <img src={image1} style={{ width: 335, height: 400 }}></img>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <RiStarSmileFill
              style={{
                position: "absolute",
                top: "10%",
                left: "80%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "5.2%",
                left: "90%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                fontFamily: "'Mulish', sans-serif",
                fontOpticalSizing: "auto",
                fontWeight: "weight",
                fontStyle: "normal",
              }}
            >
              4.9
            </p>
          </div>
          <p
            style={{
              position: "absolute",
              top: "70%",
              left: "20%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "'Gruppo', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Paris
          </p>
          <p
            style={{
              border: "0.5px solid white",
              width: 299,
              marginBottom: 12,
              position: "absolute",
              top: "80%",
              left: "49%",
              transform: "translate(-50%, -50%)",
            }}
          ></p>
          <SentimentSatisfiedOutlinedIcon
            style={{
              color: "white",
              width: 250,
              marginBottom: 12,
              position: "absolute",
              top: "90%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <p
            style={{
              position: "absolute",
              top: "85%",
              left: "39%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 20,
            }}
          >
            244.5K Attended
          </p>
          <MdArrowOutward
            style={{
              color: "white",
              position: "absolute",
              top: "90%",
              left: "89%",
              transform: "translate(-50%, -50%)",
              fontSize: 24,
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "rgb(241, 168, 252)",
            height: 400,
            width: 255,
          }}
        >
          <p style={{ marginBottom: 0, marginLeft: 14 }}>Total Numbers of </p>
          <p style={{ marginTop: 0, marginLeft: 14 }}>Models*</p>
          <p
            style={{
              fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 60,
              marginTop: 0,
              position: "absolute",
              left: 688,
            }}
          >
            12.8M
          </p>
          <div style={{ display: "flex", flexDirection: "row  " }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p
                style={{
                  border: "5px solid #ddff00",
                  padding: "17px",
                  height: 30,
                  width: 30,
                  marginLeft: 19,
                  marginTop: 205,
                  borderRadius: "79px",
                  backgroundColor: "#ddff00",
                }}
              ></p>
              <div>
                <p
                  style={{
                    border: "2px solid black",
                    borderRadius: "79px",
                    height: 40,
                    width: 40,
                    position: "absolute",
                    top: 349,
                    left: 671,
                  }}
                ></p>
                <PiButterflyFill
                  style={{
                    position: "absolute",
                    top: 376,
                    left: 681,
                    fontSize: 23,
                  }}
                />
              </div>
            </div>
            <div>
              <p
                style={{
                  marginTop: 178,
                  marginLeft: 26,
                  marginBottom: 10,

                  fontSize: 15,
                }}
              >
                Upcoming*
              </p>
              <p
                style={{
                  border: "0.5px inset black",
                  width: 99,
                  marginTop: 0,
                  marginLeft: 29,
                }}
              ></p>
              <p
                style={{
                  margin: 0,
                  marginLeft: 26,

                  fontSize: 15,
                }}
              >
                United State (4)
              </p>
              <p
                style={{
                  margin: 0,
                  marginLeft: 26,

                  fontSize: 15,
                }}
              >
                Zurich (2)
              </p>
              <p
                style={{
                  marginTop: 0,
                  marginLeft: 26,

                  fontSize: 15,
                }}
              >
                Las Vegas (8)
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img6 } style={{ width: 279, height: 400 }}></img>
          <p
            style={{
              position: "absolute",
              top: "10%",
              left: "75%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 30,
            }}
          >
            Diva*
          </p>
          <p
            style={{
              border: "0.5px solid white",
              width: 220,
              marginBottom: 12,
              position: "absolute",
              top: "53%",
              left: "69%",
              transform: "translate(-50%, -50%)",
            }}
          ></p>
          <RiStarSmileFill
            style={{
              position: "absolute",
              top: "58%",
              left: "63%",
              transform: "translate(-50%,-50%)",
              color: "white",
              fontSize: 23,
            }}
          />
          <p style={{
              position: "absolute",
              top: "54.5%",
              left: "68%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 25,
            }}>Rated 5.0</p>
             <MdArrowOutward
            style={{
              color: "white",
              position: "absolute",
              top: "58%",
              left: "77%",
              transform: "translate(-50%, -50%)",
              fontSize: 24,
            }}
          />      
        </div>
      </div>

      <div
        className="main2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginRight: 12,
          marginLeft: 12,
        }}
      >
        <div
          style={{
            backgroundColor: "#04936d",
            height: 200,
            width: 160,
            marginBottom: 375,
            display: "flex",
            flexDirection: "row",
          }} >  
          <div style={{gap:0}}>
            <p  style={{margin:0,marginLeft:10,marginTop:5
      
            }}>The Fashion</p>
            <div style={{display:"flex",flexDirection:"row",gap:3}}>
            <p style={{margin:0,marginLeft:10}}>With Top</p>
            <p style={{margin:0,borderBottom:"2px solid black",width:10}}></p>
            </div>
            <p style={{margin:0,marginLeft:10}}>Design</p>
            {/* <p style={{marginBottom:100,backgroundColor:"yellow"}}>Design</p> */}
            </div>
            <div>< MdCoronavirus style={{marginLeft:30,marginTop:9,fontSize:24}}/></div>
             <div>
              <p style={{borderBottom:"0.5px solid black",width:"129px",position:"absolute",top:"82%",left:"21.5%"}}></p>
              <div style={{display:"flex",flexDirection:""}}>
              <div style={{display:"flex",flexDirection:"column",position:"absolute",top:"85%",left:"22%"}}>
                  <p style={{fontSize:11,margin:0}}>Avio</p>
                  <p style={{fontSize:11,margin:0}}>International</p>
                </div>
                <div>
                  <p style={{fontSize:11,position:"absolute",top:"84%",left:"28%"}}>(Global)</p>
                </div>
              </div>
             </div>
        </div>
        <div
          style={{
            backgroundColor: "#aa4409",
            marginBottom: 375,
            height: 200,
            width: 177,
          }}
        >
          <p style={{marginLeft:28,margin:0,marginTop:5}}>Growth In Industry</p>
          <p style={{marginLeft:28,margin:0}}>Last Year*</p>
          <p style={{fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 65,marginLeft:29,position:"absolute",top:"64%"}}>35%</p>
              
              <p style={{borderBottom:"0.5px solid black",width:"129px",position:"absolute",top:"82%",left:"31.5%"}}></p>
              <div style={{display:"flex",flexDirection:""}}>
              <div style={{display:"flex",flexDirection:"column",position:"absolute",top:"85%",left:"32%"}}>
                  <p style={{fontSize:11,margin:0}}>Avio</p>
                  <p style={{fontSize:11,margin:0}}>International</p>
                </div>
                <div>
                  <p style={{fontSize:11,position:"absolute",top:"84%",left:"39%"}}>(Global)</p>
                </div>
              </div>
             
        </div>
        <div
          style={{
            backgroundColor: "#ddff00",
            height: 200,
            width: 537,
            marginBottom: 375,
          }}
        >
          <p style={{fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 21,position:"absolute",left:"44%"}}>Show Hosted</p>
              <p style={{fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 65,position:"absolute",left:"44%"}}>84.3K</p>
              <p style={{fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 35,position:"absolute",left:"59%",top:"70%"}}>/</p>
              <Stack direction="row" spacing={1}style={{position:"absolute",left:"62%",top:"66%"}}>
      <Avatar alt="Remy Sharp" src={img3} style={{height:"30px",width:"30px"}} />
      <Avatar alt="Travis Howard" src={img4} style={{height:"30px",width:"30px"}}/>
      <Avatar alt="Cindy Baker" src={img5} style={{height:"30px",width:"30px"}}/>
    </Stack>
              
              <p style={{fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 25,position:"absolute",left:"62%",top:"70%"}}>Globally*</p>
              <p style={{fontFamily: "'Gruppo',sans-serif",
              fontWeight: 700,
              fontStyle: "bold",
              fontSize: 25,position:"absolute",left:"62%",top:"73%"}}>Popular Magazine</p>
              <p style={{fontFamily: "'Gruppo',sans-serif",
              fontWeight: 900,
              fontStyle: "bolder",
              fontSize: 18,position:"absolute",left:"62%",top:"78%"}}>#Avio_int</p>
              
        </div>
      </div>
    </div>
  );
}

export default App;
