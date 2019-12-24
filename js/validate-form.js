$(document).ready(function() {
  $("#form-themchoo").validate({
    rules: {
      ten: {
        required: true,
        minlength: 3
      },
      loaichoo: {
        required: true
      },
      loaiphong: {
        required: true
      },
      khachtc: {
        required: true,
        min: 1
      },
      khachtd: {
        required: true,
        min: 1
      }
    },
    messages: {
      ten: {
        required: "Vui lòng nhập tên chỗ ở",
        minlength: "Ít nhất 3 ký tự"
      },
      loaichoo: {
        required: "Vui lòng chọn loại chỗ ở"
      },
      loaiphong: {
        required: "Vui lòng chọn loại phòng"
      },
      khachtc: {
        required: "Số khách tiêu chuẩn tối thiểu là 1",
        min: "Số khách tiêu chuẩn tối thiểu là 1"
      },
      khachtd: {
        required: "Số khách tối đa tối thiểu là 1",
        min: "Số khách tối đa tối thiểu là 1"
      }
    }
  });
  $("#form-mota").validate({
    rules: {
      ten: {
        required: true,
        minlength: 3
      },
      gioithieu: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      ten: {
        required: "Vui lòng nhập tên chỗ ở",
        minlength: "Ít nhất 3 ký tự"
      },
      gioithieu: {
        required: "Vui lòng nhập giới thiệu chỗ ở",
        minlength: "Giới thiệu ít nhất 10 từ"
      }
    }
  });
  $("#form-chitietphong").validate({
    rules: {
      loaichoo: {
        required: true
      },
      loaiphong: {
        required: true
      },
      khachtc: {
        required: true,
        min: 1
      },
      khachtd: {
        required: true,
        min: 1
      },
      dientich: {
        required: true,
        minlength: 2
      },
      phongngu: {
        required: true,
        min: 1
      },
      giuong: {
        required: true,
        min: 1
      },
      loaigiuong: "required",
      phongtam: {
        required: true,
        min: 1
      }
    },
    messages: {
      loaichoo: {
        required: "Vui lòng chọn loại chỗ ở"
      },
      loaiphong: {
        required: "Vui lòng chọn loại phòng"
      },
      khachtc: {
        required: "Số khách tiêu chuẩn tối thiểu là 1",
        min: "Số khách tiêu chuẩn tối thiểu là 1"
      },
      khachtd: {
        required: "Số khách tối đa tối thiểu là 1",
        min: "Số khách tối đa tối thiểu là 1"
      },
      dientich: {
        required: "Chọn diện tích chỗ ở",
        minlength: "Diện tích ít nhất 10m2"
      },
      phongngu: {
        required: "Phòng ngủ tối thiểu là 1",
        min: "Phòng ngủ tối thiểu là 1"
      },
      giuong: {
        required: "Giười tối thiểu là 1",
        min: "Giười tối thiểu là 1"
      },
      loaigiuong: {
        required: "Vui lòng chọn loại giường"
      },
      phongtam: {
        required: "Phòng tắm tối thiểu là 1",
        min: "Phòng tắm tối thiểu là 1"
      }
    }
  });
  $("#form-chiphi").validate({
    rules: {
      price: {
        required: true,
        min: 1
      }
    },
    messages: {
      price: {
        required: "Giá tối thiểu là 1",
        min: "Giá tối thiểu là 1"
      }
    }
  });
  $("#form-vitri").validate({
    rules: {
      diachi: {
        required: true,
        minlength: 6
      },
      tinhthanhpho: "required",
      quanhuyen: "required",
      xaphuong: "required"
    },
    messages: {
      diachi: {
        required: "Vui lòng nhập địa chỉ",
        minlength: "Ít nhất 6 ký tự"
      },
      tinhthanhpho: {
        required: "Vui lòng chọn tỉnh/ Thành phố"
      },
      quanhuyen: {
        required: "Vui lòng chọn quận/ Huyện"
      },
      xaphuong: {
        required: "Vui lòng chọn Xã/ Phường"
      }
    }
  });
  $("#form-khuyenmai").validate({
    rules: {
      tenkm: "required",
      giamgia: {
        required: true,
        min: 1,
        max: 100
      },
      vitrigiamgia: "required",
      timeCheckIn: "required",
      timeCheckOut: "required"
    },
    messages: {
      tenkm: {
        required: "Vui lòng nhập tên khuyến mãi"
      },
      giamgia: {
        required: "Giá giảm tối thiểu là 1",
        max: "Tối đa là 100",
        min: "Giảm thấp nhất 1 "
      },
      vitrigiamgia: {
        required: "Vui lòng chọn địa điểm giảm"
      },
      timeCheckIn: {
        required: "Chọn ngày bắt đầu"
      },
      timeCheckOut: {
        required: "Chọn ngày kết thúc"
      }
    }
  });
});
