import React, {  useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "@mui/material";

interface NavbarProps {
  onSearch: (type: string, searchQuery: string) => void;
}

const NavbarNLP: React.FC<NavbarProps> = ({ onSearch }) => {
  const [filterType, setFilterType] = useState<string>("Internal"); // Selected filter type
  const [searchTerm, setSearchTerm] = useState<string>(""); // Search term

  // Handle filter type selection
  const handleFilterTypeChange = (
    event: React.ChangeEvent<{}>,
    newValue: string | null
  ) => {
    console.log(event)
    if (newValue !== null) {
      setFilterType(newValue);
    }
  };

  // Handle search button click
  const handleSearch = () => {
    onSearch(filterType, searchTerm);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: window.innerWidth < 960 ? 180 : 80,
       
      }}
    >
      <Toolbar >
        <Grid container spacing={2} sx={{
        marginLeft: window.innerWidth < 960 ? 5 : 0,
        marginTop: window.innerWidth < 960 ? 1 : 0,
      }}>
          <Typography variant="h6" component="div" sx={{ marginTop: window.innerWidth < 960 ? 0 : 2,flexGrow: 1}} >
            SHL - Project Filtering
          </Typography>
          {/* Filter Dropdown */}

          <Autocomplete
            value={filterType}
            onChange={handleFilterTypeChange}
            options={[
              "Internal",
              "OpenCv"
            ]}
            defaultValue="All"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Filter"
                variant="outlined"
                sx={{
                  width: 200,
                  height: 40,
                  marginTop: 1,
                  "& .MuiInputLabel-root": {
                    fontSize: "0.875rem",
                  },
                }}
              />
            )}
          />

          {/* Search Text Field */}
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            label="Search"
            variant="outlined"
            sx={{
              width: 600,
              height: 40,
              marginRight: 1,
              marginTop: window.innerWidth < 960 ? 3 : 1,
              "& .MuiInputLabel-root": {
                fontSize: "0.875rem",
              },
            }}
          />
        </Grid>

        {/* Search Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ marginTop: window.innerWidth < 960 ? 5 :3 }}
        >
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarNLP;
