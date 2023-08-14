import { Box, IconButton, Typography } from "@mui/material";
import { styles } from "./DropDownStyles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { constantes } from "@/domain/constants";

interface DropDownProps {
  data: { value: string; label: string }[];
  selectedValue: string;
  placeHolder: string;
  handleChange: (value: string) => void;
}

const returnPlaceholderText = (
  selectedValue: string,
  data: { value: string; label: string }[],
  placeholder: string
): string => {
  if (!selectedValue) return placeholder;
  if (!data || data.length === 0) return placeholder;
  const reg = data.find((row) => row.value === selectedValue);
  if (reg) return reg.label;
  return placeholder;
};

const Dropdown = ({
  data,
  selectedValue,
  placeHolder,
  handleChange,
}: DropDownProps) => {
  const [openList, setOpenList] = useState(false);
  const { labelSelectedBox, listItemsBox, listRow, iconButton } =
    styles(openList);
  const handleClickIcon = () => {
    setOpenList(!openList);
  };

  const handleClick = (value: string) => {
    handleChange(value);
    handleClickIcon();
  };

  return (
    <Box sx={labelSelectedBox}>
      <Typography sx={{ fontFamily: "inherit" }}>
        {returnPlaceholderText(selectedValue, data, placeHolder)}
      </Typography>
      <IconButton sx={iconButton} onClick={handleClickIcon}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <Box sx={listItemsBox}>
        <Box sx={listRow} key={"Phlist"}>
          <span onClick={() => handleClick("")}>
            {constantes.catalog.removeFilterText}
          </span>
        </Box>
        {data &&
          data.map((row) => (
            <Box sx={listRow} key={row.value}>
              <span onClick={() => handleClick(row.value)}>{row.label}</span>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Dropdown;
