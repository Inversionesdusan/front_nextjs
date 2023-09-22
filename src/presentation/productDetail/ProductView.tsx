import { Box, Button, Typography } from "@mui/material";
import { styles } from "./ProductViewStyles";
import HeaderView from "../landing/header/HeaderView";
import { constantes } from "@/domain/constants";
import QuantityComponent from "../components/common/QuantityComponent";
import Container from "@/DI/Container";
import { ProductViewModelReturn } from "./ProductViewModel";
import { useEffect } from "react";
import Slider from "react-slick";
import CatalogCard from "../components/catalogCard/CatalogCard";
import FooterView from "../landing/footer/FooterView";
import { useRouter } from "next/router";
import ComposicionView from "./components/composicion/ComposicionView";
import Descripcion from "./components/descripcion/Descripcion";
import VentajasView from "./components/ventajas/VentajasView";

const sliderSettings = {
  infinite: true,
  dots: false,
  speed: 2000,
  auutoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  nextArrow: <></>,
  prevArrow: <></>,
};

const ProductView = () => {
  const router = useRouter();

  const productViewModel = Container.resolve(
    "ProductViewModel"
  ) as ProductViewModelReturn;

  const {
    container,
    productContainer,
    titleBox,
    title,
    subtitle,
    productInfo,
    imageBox,
    image,
    infoBox,
    dataRow,
    dataText,
    selectBox,
    priceLabel,
    shoppingCarButton,
    buttonLabel,
    buyButton,
    detailBox,
    detailItem,
    headerBox,
    productSliderContainer,
  } = styles(productViewModel?.selectedProduct?.imagen?.url || "");

  const formatNumber = Intl.NumberFormat(constantes.locale);

  useEffect(() => {
    productViewModel.getProductos();
  }, []);

  useEffect(() => {
    if (productViewModel.selectedProduct) {
      productViewModel.setPrecio(
        productViewModel.selectedProduct.precios[0].valor
      );
      productViewModel.setPrecioSeleccionado(
        productViewModel.selectedProduct.precios[0].idPresentacion.toString()
      );
    }
  }, [productViewModel.selectedProduct]);

  const navigateToCatalog = () => {
    router.push("/catalogo");
  };

  if (!productViewModel.selectedProduct) {
    return <>Cargando datos...</>;
  }

  return (
    <Box sx={container}>
      <HeaderView landing={false} />
      <Box sx={productContainer}>
        <Box sx={headerBox}>
          <Box sx={titleBox}>
            <Typography sx={subtitle}>
              {productViewModel.selectedProduct.tipo.descripcion}
            </Typography>
            <Typography variant="h1" sx={title}>
              {productViewModel.selectedProduct.nombreProducto}
            </Typography>
          </Box>
          <Button sx={buyButton} onClick={navigateToCatalog}>
            <Typography sx={buttonLabel}>Ir al catálogo</Typography>
          </Button>
        </Box>
        <Box sx={productInfo}>
          <Box sx={imageBox}>
            <img
              style={image}
              src={`${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${
                productViewModel?.selectedProduct?.imagen?.url || ""
              }`}
              alt={productViewModel.selectedProduct.nombreProducto}
            />
          </Box>
          <Box sx={infoBox}>
            <Box sx={dataRow}>
              <Typography sx={dataText}>Precio</Typography>
              <Typography sx={dataText}>
                {"$ " +
                  formatNumber.format(
                    productViewModel.precio * productViewModel.cantidad
                  )}
              </Typography>
            </Box>
            <Box sx={dataRow}>
              <Typography sx={dataText}>Presentación</Typography>
              <Typography sx={dataText}>
                <select
                  style={selectBox}
                  value={productViewModel.precioSeleccionado}
                  onChange={productViewModel.handleSelectPriceSelect}
                >
                  {productViewModel.selectedProduct.precios.map((precio) => (
                    <option
                      style={priceLabel}
                      key={precio.idPresentacion}
                      value={precio.idPresentacion.toString()}
                    >
                      {precio.descripcionPres}
                    </option>
                  ))}
                </select>
              </Typography>
            </Box>
            <Box sx={dataRow}>
              <Typography sx={dataText}>Cantidad</Typography>
              <QuantityComponent
                quantity={productViewModel.cantidad}
                addQty={productViewModel.addItem}
                removeQty={productViewModel.removeItem}
              />
            </Box>
            <Box sx={dataRow}>
              <Button sx={buyButton} onClick={productViewModel.buyItem}>
                <Typography sx={buttonLabel}>Comprar ahora</Typography>
              </Button>
            </Box>
            {
              <Box sx={dataRow}>
                <Button
                  sx={shoppingCarButton}
                  onClick={productViewModel.handleClickShoppingCart}
                >
                  <Typography sx={buttonLabel}>Agregar al Carrito</Typography>
                </Button>
              </Box>
            }
            <ComposicionView producto={productViewModel.selectedProduct} />
          </Box>
        </Box>
        <Box sx={detailBox}>
          <Descripcion
            label="Descripción del Producto"
            text={productViewModel.selectedProduct.descripcion}
          />
          <VentajasView text={productViewModel.selectedProduct.ventajas} />
        </Box>
        <Box sx={productSliderContainer}>
          <Typography
            sx={{
              ...title,
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Productos Recomendados
          </Typography>
          <Slider {...sliderSettings}>
            {productViewModel.productos.map((producto) => (
              <Box
                key={producto.id}
                sx={{ marginY: "0.5rem", paddingY: "0.5rem" }}
              >
                <CatalogCard
                  producto={producto}
                  handleClickCarButton={() => {}}
                  handleClickBuyButton={productViewModel.handleClickBuyButton}
                  showCartButton={false}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      <FooterView />
    </Box>
  );
};

export default ProductView;
