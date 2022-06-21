import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { Image, Popconfirm, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { ngaydiData } from "../Ngaydi/ngaydiSlice";
import { removetour, updatetour } from "./tourSlice";
import { tourData } from "./tourSlice";
function Tour() {
  const match = useRouteMatch();

  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tour.data);
  var tour = [];
  if (tours) {
    var sort = [];
    for (let i = 0; i < tours.length; i++) {
      sort.unshift(tours[i]);
    }
    tour = sort;
  }
  const loading = useSelector((state) => state.tours.Loading);
  const history = useHistory();
  const actionResult = async () => await dispatch(tourData());
  const actionngaydi = async () => await dispatch(ngaydiData());
  useEffect(() => {
    actionResult();
    actionngaydi();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      sorter: (a, b) => a.stt - b.stt,
    },
    {
      title: "Tên tour",
      dataIndex: "name",
      sorter: (a, b) => a.name.length > b.name.length,
    },
    {
      title: "Ảnh",
      dataIndex: "anh",
    },
    {
      title: "Số lượng ",
      dataIndex: "songuoi",
      sorter: (a, b) => a.songuoi - b.songuoi,
    },

    {
      title: "tình trạng",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const hangdleDelete = (e) => {
    dispatch(removetour(e));
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  const hangdleEdit = (id) => {
    history.replace(`${match.url}/suatour/${id}`);
  };
  const handleStatus = (e, id) => {
    if (e === 1) {
      dispatch(updatetour({ status: 0, idsua: id }));
    } else {
      dispatch(updatetour({ status: 1, idsua: id }));
    }
    setTimeout(() => {
      actionResult();
    }, 500);
  };

  const [searchInput, setSearchInput] = useState("");
  return (
    <div id="admin">
      <div className="heading">
        <h4>Quản lý tour</h4>
        <div className="hr"></div>
      </div>
      <div className="content">
        <div
          className="add"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div className="">
            <input
              type="text"
              className=""
              placeholder="Tìm kiếm tour..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <i
              className="fas fa-search"
              style={{
                paddingRight: "20px",
                paddingLeft: "10px",
                fontSize: "1rem",
              }}
            ></i>
          </div>

          <Link to={`${match.url}/themtour`}>
            <Button variant="outlined" color="secondary">
              <i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới
            </Button>
          </Link>
        </div>
        {loading ? (
          <div className="spin">
            <Spin className="mt-5" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={tour
              .filter((ok) => {
                if (searchInput == "") {
                  return ok;
                } else if (
                  ok.name.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return ok;
                }
              })
              .map((ok, index) => ({
                key: index + 1,
                stt: index + 1,
                name: ok.name,
                anh: (
                  <Image src={ok.avatar} width="150px" height="200px" alt="" />
                ),
                songuoi: ok.songuoi,
                status: (
                  <div className="action">
                    {ok.status === 1 ? (
                      <span
                        onClick={() => {
                          handleStatus(ok.status, ok.id);
                        }}
                      >
                        <i className="fas fa-check-circle text-primary"></i>
                      </span>
                    ) : (
                      <span onClick={() => handleStatus(ok.status, ok.id)}>
                        <i
                          className="fas fa-times-circle"
                          style={{ color: "red" }}
                        ></i>
                      </span>
                    )}
                  </div>
                ),
                action: (
                  <div className="action">
                    <Popconfirm
                      title="Bạn có muốn sửa？"
                      onConfirm={() => {
                        hangdleEdit(ok.id);
                      }}
                      icon={
                        <QuestionCircleOutlined style={{ color: "green" }} />
                      }
                    >
                      <i
                        className="far fa-edit mr-4"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </Popconfirm>
                    <Popconfirm
                      title="Bạn có muốn xoá？"
                      onConfirm={() => {
                        hangdleDelete(ok.id);
                      }}
                      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                    >
                      <i
                        className="far fa-trash-alt"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </Popconfirm>
                  </div>
                ),
              }))}
          />
        )}
      </div>
    </div>
  );
}

Tour.propTypes = {};

export default Tour;
