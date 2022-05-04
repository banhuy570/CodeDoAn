import React, { Component } from "react";
import { connect } from "react-redux";

export class Dieukhoan extends Component {
  render() {
    return (
      <div className="text-justify">
        ĐIỀU KIỆN BÁN VÉ CÁC CHƯƠNG TRÌNH DU LỊCH TRONG NƯỚC GIÁ VÉ DU LỊCH Giá
        vé du lịch được tính theo tiền Đồng (Việt Nam - VNĐ). GIÁ DÀNH CHO TRẺ
        EM - Trẻ em dưới 5 tuổi: không thu phí dịch vụ, bố mẹ tự lo cho bé và
        thanh toán các chi phí phát sinh (đối với các dịch vụ tính phí theo
        chiều cao…). Hai người lớn chỉ được kèm 1 trẻ em dưới 5 tuổi, trẻ em thứ
        2 sẽ đóng phí theo qui định dành cho độ tuổi từ 5 đến dưới 12 tuổi và
        phụ thu phòng đơn. Vé máy bay, tàu hỏa, phương tiện vận chuyển công cộng
        mua vé theo qui định của các đơn vị vận chuyển (nếu có) - Trẻ em từ 5
        tuổi đến dưới 12 tuổi: 50% giá tour người lớn đối với tuyến xe, 75% giá
        tour người lớn đối với tuyến có vé máy bay (không có chế độ giường
        riêng). Hai người lớn chỉ được kèm 1 trẻ em từ 5 - dưới 12 tuổi, em thứ
        hai trở lên phải mua 1 suất giường đơn. - Trẻ em từ 12 tuổi trở lên: mua
        một vé như người lớn. THANH TOÁN Khi thanh toán, Quý khách vui lòng cung
        cấp đầy đủ thông tin và đặt cọc ít nhất 50% tổng số tiền tour để giữ
        chỗ, số tiền còn lại Quý khách sẽ thanh toán trước ngày khởi hành 05
        ngày làm việc (tour ngày thường) và trước 10 ngày làm việc (tour dịp Lễ,
        Tết)”. Thanh toán bằng tiền mặt hoặc chuyển khoản tới tài khoản ngân
        hàng của Vietravel. DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG
        WWW.TRAVEL.COM.VN THANH TOÁN CHUYỂN KHOẢN: Khi thực hiện việc chuyển
        khoản, Quý khách vui lòng ghi rõ Tên họ, Số điện thoại và Nội dung
        chuyển cho chương trình du lịch cụ thể đã được Quý khách chọn đăng ký.
        DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG WWW.TRAVEL.COM.VN THANH TOÁN TRỰC
        TUYẾN: Khách hàng hủy Vé du lịch trong thời điểm ngày Thường và Lễ Tết
        theo đúng những qui định trên, trong trường hợp khách thanh toán trực
        tuyến, nếu hủy Vé du lịch khách hàng sẽ chịu toàn bộ phí ngân hàng cho
        việc thanh toán tiền Vé du lịch. Việc hoàn trả tiền cho khách sẽ được
        Danang travel thực hiện ngay sau khi ngân hàng thông báo tiền đã vào tài
        khoản của Danang travel. VẬN CHUYỂN Phương tiện vận chuyển tùy thuộc
        theo từng chương trình du lịch. Với chương trình đi bằng xe: xe máy lạnh
        (4, 7, 15, 25, 35, 45 chỗ) sẽ được Vietravel sắp xếp tùy theo số lượng
        khách từng đoàn, phục vụ suốt chương trình tham quan. Với chương trình
        đi bằng xe lửa - máy bay - tàu cánh ngầm (phương tiện vận chuyển công
        cộng), trong một số chương trình các nhà cung cấp dịch vụ có thể thay
        đổi giờ khởi hành mà không báo trước, việc thay đổi này sẽ được
        Vietravel thông báo cho khách hàng nếu thời gian cho phép. Vietravel
        không chịu trách nhiệm bồi hoàn và trách nhiệm pháp lý với những thiệt
        hại về vật chất lẫn tinh thần do việc chậm trễ, thay đổi giờ giấc khởi
        hành của các phương tiện vận chuyển công cộng hoặc sự chậm trễ do chính
        hành khách gây ra. Vietravel chỉ thực hiện hành vi giúp đỡ để giảm bớt
        tổn thất cho hành khách. HÀNH LÝ Hành lý gọn nhẹ, với các chương trình
        sử dụng dịch vụ hàng không, hành lý miễn cước sẽ do các hãng hàng không
        qui định. Vietravel không chịu trách nhiệm về sự thất lạc, hư hỏng hành
        lý hoặc bất kỳ vật dụng gì của du khách trong suốt chuyến đi, du khách
        tự bảo quản hành lý của mình. Nếu khách hàng bị mất hay thất lạc hành lý
        thì Vietravel sẽ giúp hành khách liên lạc và khai báo với các bộ phận
        liên quan truy tìm hành lý bị mất hay thất lạc. Việc bồi thường hành lý
        bị mất hay thất lạc sẽ theo qui định của các đơn vị cung cấp dịch vụ
        hoặc các đơn vị bảo hiểm (nếu có).
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dieukhoan);
