import { Box, Button, Typography } from "@mui/material";
import { IProductoDto } from "../../domain/models/Dto/IProductoDto";
import { colors } from "@/presentation/styles/colors";

export interface ProductCardProps {
  producto: IProductoDto;
  position: "center" | "topLeft" | "topRigth" | "bottomLeft" | "bottomRigth";
  downXl: boolean;
}

const ProductCard = ({ producto, position, downXl }: ProductCardProps) => {
  const getBorderRadius = (position: string): string => {
    if (position === "center" || downXl) return "50px";
    if (position === "topLeft" || position === "bottomRigth")
      return "0 50px 0 50px";
    if (position === "topRigth" || position === "bottomLeft")
      return "50px 0 50px 0";
    return "50px";
  };
  return (
    <Box
      sx={{
        width: downXl ? "312px" : "290px",
        height: "351px",
        background: colors.black,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        justifyContent: "space-between",
        borderRadius: getBorderRadius(position),
        borderStyle: "none",
        borderBottom: "1px solid " + colors.lightGray,
        transition: "all 0.5s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        },
      }}
    >
      <Box
        sx={{
          height: "3rem",
          background: colors.green,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "1.5rem",
            fontWeight: "500",
          }}
        >
          {producto.nombreProducto}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "230px",
          flex: 1,
          backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_URL_IMAGES}${producto.imagen.urlThumbnail}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Button
          sx={{
            width: "186px",
            height: "48px",
            background: colors.white,
            color: colors.black,
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            position: "relative",
            bottom: "-5px",
            "&:hover": {
              background: colors.lightGray,
              color: colors.black,
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Ver catálogo
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
