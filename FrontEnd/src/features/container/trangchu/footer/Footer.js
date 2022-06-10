import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./footer.css";
import fb from "../../../images/Facebook.png"
function Footer(props) {
  const footer = [];

  // const chuyentrang = (url) => {
  //   window.location.href = url;
  // };
  return (
    <div id="footer">
      <footer className="page-footer font-small blue pt-4 container">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
              <div className="col-md-6 mt-md-0 mt-3" >
                <h5 className="text-uppercase text-danger">CÔNG TY CỔ PHẦN DU LỊCH DANANG TRAVEL.</h5>
                <p>Số 08 Xuân Diệu, Quận Hải Châu, Tp Đà Nẵng</p>
                <p>Lô 28, Đường Lạc Long Quân, Tp.Hội An</p>
                <h5 className="text-uppercase text-danger mt-3">Liên hệ</h5>
                <p>
                  <strong>Email: </strong>
                  <i>ngochuy57@gmail.com</i>
                </p>
                <p>
                  <strong>Số điện thoại: </strong>
                  <i>+0123456789</i>
                </p>        
              </div>
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-danger">Menu</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="/">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/listtintuc">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Dịch vụ
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Khuyến mãi
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 mxh ">
              <h5 className="text-uppercase text-danger ">Mạng xã hội</h5>
              <div>
                <div
                  className="icon_footer"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img src={fb} alt="Facebook" style={{width: "40px"}}></img>
                </div>
                <div
                  className="icon_footer"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img src={"https://noithatlinhngan.vn/wp-content/uploads/2019/12/icon-zalo.png"} alt="Zalo" style={{width: "60px" , radius: "50%"}}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
