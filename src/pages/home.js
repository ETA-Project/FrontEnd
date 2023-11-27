import { Link } from "react-router-dom";

export default function home(){
    return(
        <div className="iphone-container">
            <div className="rect-63"></div>
            <div className="rect-64"></div> 
            <div className="rect-65"></div>
            <div className="rect-66"></div>
            <div className="rect-67">
              <h3>택배 보관함</h3>
            </div>
            <div className="rect-68"></div>
            <div className="rect-69"></div>
            <div className="rect-70">
              <h3>사감실</h3>
            </div>
            <div className="rect-71"></div>
            <div className="rect-72">
              <h3>취업 진로 센터</h3>
            </div>
            <div className="rect-73"></div>
            <div className="rect-74"></div>
            <div className="rect-75"></div>
            <div className="rect-76"></div>
            <div className="rect-77"></div>
            <div className="rect-78"></div>
            <Link to ='/elevator'>
              <div className="eleva1"></div>
              <div className="eleva2"></div>
              <div className="eleva3"></div>
              <div className="eleva4"></div>

            </Link>
          </div>
  );
}
