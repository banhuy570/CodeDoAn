
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer(props) {
  const footers = useSelector(state => state.lienhes.lienhe.data);
  const footer = [];
  if (footers) {
    for (let i = 0; i < footers.length; i++) {
      if (footers[i].status === 1) {
        footer.push(footers[i])
      }
    }
  }

  const chuyentrang = (url) => {
    window.location.href = url;
  }
  return (
    <div id="footer">
      <footer className="page-footer font-small blue pt-4 container">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            {footer.map(ok => (
              <div className="col-md-6 mt-md-0 mt-3" key={ok.id}>
                <h5 className="text-uppercase text-danger">Footer Content</h5>
                <p>{ok.content}</p>
                <h5 className="text-uppercase text-danger mt-3">Liên hệ</h5>
                <p>
                  <strong>Email: </strong>
                  <i>{ok.email}</i>
                </p>
                <p>
                  <strong>Số điện thoại: </strong>
                  <i>+{ok.sdt}</i>
                </p>
                <p>
                  <strong>Địa chỉ: </strong>
                  <i>{ok.diachi}</i>
                </p>
              </div>
            ))}
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-danger">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Trang chủ
               </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Tin tức
               </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Dịch vụ
               </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                  Khuyến mãi
               </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 mxh ">
              <h5 className="text-uppercase text-danger ">Mạng xã hội</h5>
            
                <div >
                  <div className="icon_footer" style={{
                 
                    cursor: "pointer"
                  }}>
                    <i >FB</i>
                  </div>
                </div>
              
            </div>
          </div>
        </div>

      </footer>
    </div >

  )
}

Footer.propTypes = {

}

export default Footer
