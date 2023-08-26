import useMenuHook from "@/domain/hooks/useMenuHook";
import HeaderView from "../landing/header/HeaderView";
import {
  Box,
  Grow,
  Input,
  InputAdornment,
  Typography,
  CircularProgress,
} from "@mui/material";
import { styles } from "./CatalogViewStyles";
import CatalogCard from "../components/catalogCard/CatalogCard";
import Container from "@/DI/Container";
import { ICatalogoViewModel } from "./CatalogViewModel";
import { useEffect } from "react";
import ShoppingCarModal from "../components/shoppingCartModal/ShoppingCartModal";
import ModalComponent from "../components/common/ModalComponent";
import { constantes } from "@/domain/constants";
import Dropdown from "../components/dropdown/Dropdown";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import FooterView from "../landing/footer/FooterView";

const CatalogView = () => {
  const catalogViewModel = Container.resolve(
    "CatalogViewModel"
  ) as ICatalogoViewModel;

  const { menuOptions } = useMenuHook();
  const {
    container,
    catalogContainer,
    titleBox,
    title,
    productContainer,
    filterBox,
    filterText,
    boxNoData,
    iconEmptyState,
    textEmptyState,
    progress,
  } = styles();

  useEffect(() => {
    (async () => {
      await catalogViewModel.getProductos();
    })();
  }, []);

  return (
    <>
      <Box sx={container}>
        <HeaderView menuOptions={menuOptions} landing={false} />
        <Box sx={catalogContainer}>
          <Box sx={titleBox}>
            <Typography variant="h1" sx={title}>
              {constantes.catalog.pageTitle}
            </Typography>
          </Box>
          <Box sx={filterBox}>
            {catalogViewModel.tipoProducto && (
              <Dropdown
                placeHolder={constantes.catalog.filterPlaceholder}
                selectedValue={catalogViewModel.tipoSeleccionado}
                handleChange={catalogViewModel.handleFilterChange}
                data={catalogViewModel.tipoProducto.map((tp) => ({
                  value: tp.tipoProductoId.toString(),
                  label: tp.descripcion,
                }))}
              />
            )}
            <Input
              sx={filterText}
              fullWidth
              placeholder="Buscar..."
              value={catalogViewModel.textFilter}
              onChange={(e) =>
                catalogViewModel.handleChangetextFilter(e.target.value)
              }
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Box>

          {catalogViewModel.loadingProds ? (
            <Grow
              in={catalogViewModel.productosFiltrados.length === 0}
              style={{ transformOrigin: "0" }}
              timeout={500}
            >
              <Box sx={boxNoData}>
                <CircularProgress sx={progress} />
                <Typography sx={textEmptyState}>
                  {constantes.catalog.loadingMessage}
                </Typography>
              </Box>
            </Grow>
          ) : catalogViewModel.productosFiltrados.length > 0 ? (
            <Grow
              in={catalogViewModel.productosFiltrados.length > 0}
              style={{ transformOrigin: "0" }}
              timeout={500}
            >
              {
                <Box sx={productContainer}>
                  {catalogViewModel.productosFiltrados &&
                    catalogViewModel.productosFiltrados.map((producto) => (
                      <CatalogCard
                        key={`Pr-${producto.id}`}
                        producto={producto}
                        handleClickBuyButton={catalogViewModel.buyProduct}
                        handleClickCarButton={
                          catalogViewModel.handleClickCarDetail
                        }
                      />
                    ))}
                </Box>
              }
            </Grow>
          ) : (
            <Grow
              in={catalogViewModel.productosFiltrados.length === 0}
              style={{ transformOrigin: "0" }}
              timeout={500}
            >
              <Box sx={boxNoData}>
                <SearchOffIcon sx={iconEmptyState} />
                <Typography sx={textEmptyState}>
                  {constantes.catalog.emptyStateMessage}
                </Typography>
              </Box>
            </Grow>
          )}
        </Box>
        <FooterView />
      </Box>
      {catalogViewModel.productoSeleccionado && (
        <ShoppingCarModal
          producto={catalogViewModel.productoSeleccionado!}
          open={catalogViewModel.openModalCar}
          handleClose={catalogViewModel.handleOpenModalCar}
          handleOrder={() => console.log("ordenar")}
          handleShoppingCart={catalogViewModel.handleClickShoppingCar}
        />
      )}
      <ModalComponent
        open={catalogViewModel.openModalMessage}
        title={catalogViewModel.dataModalMessage.title}
        message={catalogViewModel.dataModalMessage.message}
        onAccept={catalogViewModel.handleOpenModalMessage}
        onClose={catalogViewModel.handleOpenModalMessage}
      />
    </>
  );
};

export default CatalogView;
