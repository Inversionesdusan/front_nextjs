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
import { constantes } from "@/domain/constants";
import Dropdown from "../components/dropdown/Dropdown";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import MoreInfoView from "../components/moreInfoDrawer/MoreInfoView";
import Grid from "@mui/material/Unstable_Grid2";
import { inputStyle } from "../styles/theme";

const CatalogView = () => {
  const catalogViewModel = Container.resolve(
    "CatalogViewModel"
  ) as ICatalogoViewModel;

  const {
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
      <Grid container sx={{ width: "100%", marginTop: "0.5rem" }}>
        <Grid
          xs={12}
          sm={5}
          md={4}
          sx={{ paddingRight: { xs: "0", sm: "1rem" } }}
        >
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
        </Grid>
        <Grid
          xs={12}
          sm={7}
          md={8}
          sx={{ paddingLeft: { xs: "0", sm: "1rem" } }}
        >
          <Input
            sx={inputStyle}
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
        </Grid>
      </Grid>
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
                    handleClickCarButton={catalogViewModel.handleClickCarDetail}
                    handleClickMoreButton={catalogViewModel.handleOpenDetail}
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

      {catalogViewModel.productoSeleccionado && (
        <ShoppingCarModal
          producto={catalogViewModel.productoSeleccionado!}
          open={catalogViewModel.openModalCar}
          handleClose={catalogViewModel.handleOpenModalCar}
          handleOrder={() => {}}
          handleShoppingCart={catalogViewModel.handleClickShoppingCar}
        />
      )}
      <MoreInfoView
        open={catalogViewModel.openDetail}
        onClose={catalogViewModel.handleOpenDetail}
      />
    </>
  );
};

export default CatalogView;
