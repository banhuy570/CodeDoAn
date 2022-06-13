import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm, Popover, Spin, Table, Tooltip } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hoadonData, removehoadon } from "./hoadonSlice";
import "antd/dist/antd.css";
import "./hoadon.css"
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
function Hoadon() {
  const hoadons = useSelector((state) => state.hoadons.hoadon.data);
  const soluong = (nguoilon, treem, embe) => {
    return nguoilon + treem + embe;
  };
  const loading = useSelector((state) => state.hoadons.loading);
  const dispatch = useDispatch();
  const actionResult = async () => {
    await dispatch(hoadonData());
  };

  const hangdleDelete = (e) => {
    dispatch(removehoadon(e));
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  const tongtien = (nguoilon, treem, embe, gnl, gte, geb) => {
    return (nguoilon * gnl + treem * gte + embe * geb).toLocaleString();
  };
  const title = (nguoilon, treem, embe) => {
    return (
      <div>
        <span>Người lớn: {nguoilon}</span>
        <br />
        <span>Trẻ em: {treem}</span>
        <br />
        <span>Em bé: {embe}</span>
      </div>
    );
  };

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
   
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
           
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const columns = [
    {
      key: "1",
      title: "ID người dùng",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      key: "2",
      title: "Người dùng",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps("name"),
    },
    {
      key: "3",
      title: "Tour",
      dataIndex: "tour",
      sorter: (a, b) => a.tour.length - b.tour.length,
      ...getColumnSearchProps("tour"),
    },
    {
      key: "4",
      title: "Ngày đi",
      dataIndex: "date",
      // sorter: (a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? 0 : -1 ,
    },
    {
      key: "5",
      title: "Số lượng",
      dataIndex: "soluong",
    },
    {
      key: "6",
      title: "Tổng tiền",
      dataIndex: "tien",
      // sorter: (a, b) => a.tien > b.tien ? -1 : 1 ,
    },

    { key: "7", title: "Action", dataIndex: "action" },
  ];

  return (
    <div id="admin">
      <div className="heading">
        <h4>Hoá đơn</h4>
        <div className="hr"></div>
      </div>

      <div className="content">
        {loading ? (
          <div className="spin">
            <Spin className="mt-5" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={hoadons
              // .filter((ok) => {
              //   if (searchInput === "") {
              //     return ok;
              //   } else if (
              //     ok.Tour.name.toLowerCase().includes(searchInput.toLowerCase())
              //   ) {
              //     return ok;
              //   }
              // })
              .map((ok, index) => ({
                key: index + 1,
                id: ok.User.id,
                name: ok.User.name,
                tour: ok.Tour.name,
                date: ok.ngaydi,
                soluong: (
                  <Tooltip title={title(ok.nguoilon, ok.treem, ok.embe)}>
                    {soluong(ok.nguoilon, ok.treem, ok.embe)}
                  </Tooltip>
                ),
                tien:
                  tongtien(
                    ok.nguoilon,
                    ok.treem,
                    ok.embe,
                    ok.Tour.gianguoilon,
                    ok.Tour.giatreem,
                    ok.Tour.giaembe
                  ) + "vnđ",

                action: (
                  <div className="action">
                    <Popconfirm
                      title="Bạn có muốn xoá？"
                      onConfirm={() => {
                        hangdleDelete(ok.id);
                      }}
                      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                    >
                      <i className="far fa-trash-alt"></i>
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

export default Hoadon;
