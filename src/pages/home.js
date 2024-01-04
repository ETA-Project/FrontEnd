import { Link } from "react-router-dom";

export default function home() {
  return (
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
      <Link to="/elevator1">
        <div id="container1">
          <div className="eleva1">
            <div className="floor">홀수층</div>
          </div>
        </div>
      </Link>
      <Link to="/elevator2">
        <div id="container2">
          <div className="eleva2">
            <div className="floor">짝수층</div>
          </div>
        </div>
      </Link>
      <Link to="/elevator3">
        <div id="container3">
          <div className="eleva3">
            <div className="floor">짝수층</div>
          </div>
        </div>
      </Link>
      <Link to="/elevator4">
        <div id="container4">
          <div className="eleva4">
            <div className="floor">홀수층</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
