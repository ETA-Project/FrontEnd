import imgLogo from '../elevator.png'

export default function elevator() {
    return (
      <div style={{
        marginLeft: "45px",
        marginTop:"50"
      }}>
        <h1>elevator</h1>
        <img class="elevatorPicture" src={imgLogo} position="absolute" width="300px" height="300px"/>       
    </div>
    );
  }