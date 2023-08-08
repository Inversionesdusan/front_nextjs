import useMenuHook from "@/domain/hooks/useMenuHook";
import HeaderView from "../landing/header/HeaderView";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "../styles/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";

const productos = [
  {
    id: 1,
    nombreProducto: "Nutri 100 Balance",
    descripcion:
      "Granulado inorgánico para suelos que potencia el metabolismo vegetal mediante fosforo y magnesio, elementos esenciales con garantía de componentes.",
    composicion: " NPK 10-5-7 (nitrógeno-fósforo-potasio)",
    urlVideo: null,
    manejaInventario: "S",
    cantidadInventario: 1,
    estado: "Activo",
    mostrarLanding: "S",
    orden: 1,
    imagen: {
      url: "/uploads/nutri_100_balance_85643ecff8.png",
      urlSmall: "/uploads/small_nutri_100_balance_85643ecff8.png",
      urlMedium: "/uploads/thumbnail_nutri_100_balance_85643ecff8.png",
      urlThumbnail: "/uploads/thumbnail_nutri_100_balance_85643ecff8.png",
    },
    tipo: {
      id: 1,
      descripcion: "Orgánicos",
    },
  },
  {
    id: 3,
    nombreProducto: "Terrabono Silicio",
    descripcion: "Terrabono Silicio",
    composicion: "NPK 5-10-10",
    urlVideo: null,
    manejaInventario: "N",
    cantidadInventario: 0,
    estado: "Activo",
    mostrarLanding: "S",
    orden: 3,
    imagen: {
      url: "/uploads/terrabono_silicio_c20be272ff.png",
      urlSmall: "/uploads/small_terrabono_silicio_c20be272ff.png",
      urlMedium: "/uploads/thumbnail_terrabono_silicio_c20be272ff.png",
      urlThumbnail: "/uploads/thumbnail_terrabono_silicio_c20be272ff.png",
    },
    tipo: {
      id: 2,
      descripcion: "Químicos",
    },
  },
  {
    id: 4,
    nombreProducto: "Silibases",
    descripcion:
      "Acondicionador inorganico de suelos granulado, que gracias a sus componentes garantizados aporta en el metabolismo primario de la planta por medio del fosforo y del mg que es el compuesto central de la clorofila",
    composicion:
      "Mezcla de nutrientes orgánicos y microorganismos beneficiosos",
    urlVideo: null,
    manejaInventario: "S",
    cantidadInventario: 9,
    estado: "Activo",
    mostrarLanding: "S",
    orden: 4,
    imagen: {
      url: "/uploads/silibases_32e2f67ebd.png",
      urlSmall: "/uploads/small_silibases_32e2f67ebd.png",
      urlMedium: "/uploads/thumbnail_silibases_32e2f67ebd.png",
      urlThumbnail: "/uploads/thumbnail_silibases_32e2f67ebd.png",
    },
    tipo: {
      id: 1,
      descripcion: "Orgánicos",
    },
  },
  {
    id: 5,
    nombreProducto: "R-Sil",
    descripcion: "R-Sil",
    composicion: " NPK 10-6-10, con micronutrientes específicos para cítricos",
    urlVideo: null,
    manejaInventario: "N",
    cantidadInventario: 0,
    estado: "Activo",
    mostrarLanding: "S",
    orden: 5,
    imagen: {
      url: "/uploads/r_sil_0247490daa.png",
      urlSmall: "/uploads/small_r_sil_0247490daa.png",
      urlMedium: "/uploads/thumbnail_r_sil_0247490daa.png",
      urlThumbnail: "/uploads/thumbnail_r_sil_0247490daa.png",
    },
    tipo: {
      id: 1,
      descripcion: "Orgánicos",
    },
  },
  {
    id: 6,
    nombreProducto: "Terrabono",
    descripcion: "Terrabono",
    composicion: "Fertilizante quelatado con hierro (Fe)",
    urlVideo: null,
    manejaInventario: "S",
    cantidadInventario: 9,
    estado: "Activo",
    mostrarLanding: "S",
    orden: 6,
    imagen: {
      url: "/uploads/terrabono_a4328ba93f.png",
      urlSmall: "/uploads/small_terrabono_a4328ba93f.png",
      urlMedium: "/uploads/thumbnail_terrabono_a4328ba93f.png",
      urlThumbnail: "/uploads/thumbnail_terrabono_a4328ba93f.png",
    },
    tipo: {
      id: 2,
      descripcion: "Químicos",
    },
  },
  {
    id: 7,
    nombreProducto: "Terrabono Menores",
    descripcion: "Terrabono Menores",
    composicion:
      "NPK 12-6-8, con herbicidas específicos para el control de malas hierbas",
    urlVideo: null,
    manejaInventario: "N",
    cantidadInventario: 0,
    estado: "Activo",
    mostrarLanding: "S",
    orden: 8,
    imagen: {
      url: "/uploads/terrabono_menores_e9da412993.png",
      urlSmall: "/uploads/small_terrabono_menores_e9da412993.png",
      urlMedium: "/uploads/thumbnail_terrabono_menores_e9da412993.png",
      urlThumbnail: "/uploads/thumbnail_terrabono_menores_e9da412993.png",
    },
    tipo: {
      id: 2,
      descripcion: "Químicos",
    },
  },
];

const Catalog = () => {
  const { menuOptions } = useMenuHook();

  return (
    <Box
      sx={{
        marginTop: "66px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeaderView menuOptions={menuOptions} landing={false} />
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            paddingY: "2rem",
            borderBottom: `solid 1px ${colors.solidGreen}`,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Cunia",
              fontSize: "1.5rem",
              color: colors.solidGreen,
            }}
          >
            Catálogo de productos
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            paddingY: "2rem",
          }}
        >
          {productos.map((producto) => (
            <Box
              key={`Pr${producto.id}`}
              sx={{
                width: "260px",
                //height: "350px",
                borderRadius: "20px",
                paddingY: "1rem",
                paddingX: "1.25rem",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  color: colors.solidGreen,
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                {producto.tipo.descripcion}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Cunia",
                  color: colors.solidBlack,
                  marginY: "0.25rem",
                }}
              >
                {producto.nombreProducto}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "230px",
                  borderRadius: "10px",
                  backgroundImage: `url('https://backendmysql-production.up.railway.app${producto.imagen.urlThumbnail}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  marginY: "2rem",
                }}
              ></Box>
              <Button
                startIcon={<AddIcon />}
                sx={{
                  background: colors.lightGray,
                  color: colors.solidGreen,
                  width: "100%",
                  marginY: "0.24rem",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontWeight: "700",
                    marginY: "auto",
                  }}
                >
                  Ver Detalle
                </Typography>
              </Button>
              <Button
                startIcon={<AddShoppingCartIcon />}
                sx={{
                  background: colors.green,
                  color: colors.white,
                  width: "100%",
                  marginY: "0.25rem",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    fontWeight: "700",
                    marginY: "auto",
                  }}
                >
                  Agregar al Carrito
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Catalog;
