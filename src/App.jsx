import "./App.css";
import Logo from "./assets/images/logo.png";
import img from "./assets/images/apple.png"

function App() {
  return (
    <div className="app-body">
      <div className="app-body-container">
        <h4 className="app-body-title app-body-title-top">Yêu thích ngay</h4>
        <div className="app-body-group-header">
          <img src={Logo} alt="logo" />
          <p>
            Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm
            có ưu đãi
          </p>
        </div>
        <div>
          <h4 className="app-body-title">Mục yêu thích của bạn.</h4>
        </div>
        <div className="app-body-form-search">
          <button className="app-body-btn-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            className="form-control app-body-form-control-search"
            placeholder="Tìm kiếm"
          />
        </div>
        <div className="app-body-group-select">
          <select
            className="form-select app-body-group-select-active"
            aria-label="Default select example"
          >
            <option selected>Trạng thái</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="form-select app-body-group-select-category"
            aria-label="Default select example"
          >
            <option selected>Danh mục</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            className="form-select app-body-group-select-and-recent"
            aria-label="Default select example"
          >
            <option selected>Đã thêm gần đây</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <button>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="app-body-bottom">
          <div className="app-body-bottom-group-title">
            <h5>Qùa tặng</h5>
            <button>Tạo</button>
          </div>
          <div className="app-body-bottom-list-product">
            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>

            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>
            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>
            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>
          </div>

          <div className="app-body-bottom-list-product">
            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>

            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>
            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>
            <div className="product-item">
              <img className="product-item-image" src={img} alt="img" />
              <div className="row-top">
                <div className="row-top-tittle">
                  Granola siêu hạt ăn kiêng 15% yến mạch
                </div>
                <button>
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </div>

              <div className="row-bottom">
                <div className="row-bottom-price">199.000đ</div>
                <p className="row-bottom-discount">99%</p>
              </div>
            </div>
          </div>

          <div className="app-body-bottom-pagination">
          <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item "><a className="page-link" href="#">Previous</a></li>
                <li className="page-item "><a className="page-link" href="#">1</a></li>
                <li className="page-item "><a className="page-link" href="#">2</a></li>
                <li className="page-item "><a className="page-link" href="#">3</a></li>
                <li className="page-item "><a className="page-link" href="#">...</a></li>
                <li className="page-item "><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
