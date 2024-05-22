import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  Avatar,
  Typography,
  Box,
  TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Example employee data
const employee = {
  name: "Jane Cooper",
  email: "jane.cooper@example.com",
  title: "Regional Paradigm Technician",
  status: "ACTIVE",
  age: 27,
  role: "Admin",
  image: "https://example.com/path-to-jane-cooper-image.jpg", // Replace with actual image URL
};

const demoData = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    status: "ACTIVE",
    age: 27,
    role: "Admin",
    address: {
      plotNumber: "Plot 22",
      landmark: "Near Park",
      pincode: "110001",
    },
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    status: "INACTIVE",
    age: 43,
    role: "Owner",
    address: {
      plotNumber: "Plot 24",
      landmark: "Near School",
      pincode: "110002",
    },
  },
  {
    id: 3,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    status: "ACTIVE",
    age: 32,
    role: "Member",
    address: {
      plotNumber: "Plot 26",
      landmark: "Near Mall",
      pincode: "110003",
    },
  },
  {
    id: 4,
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    status: "OFFLINE",
    age: 29,
    role: "Member",
    address: {
      plotNumber: "Plot 28",
      landmark: "Near Hospital",
      pincode: "110004",
    },
  },
  {
    id: 5,
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    status: "INACTIVE",
    age: 36,
    role: "Admin",
    address: {
      plotNumber: "Plot 30",
      landmark: "Near Temple",
      pincode: "110005",
    },
  },
  {
    id: 6,
    name: "Devon Lane",
    email: "devon.lane@example.com",
    title: "Product Integration Specialist",
    status: "ACTIVE",
    age: 34,
    role: "Member",
    address: {
      plotNumber: "Plot 32",
      landmark: "Near Market",
      pincode: "110006",
    },
  },
  {
    id: 7,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    title: "Senior Web Developer",
    status: "OFFLINE",
    age: 40,
    role: "Admin",
    address: {
      plotNumber: "Plot 34",
      landmark: "Near Station",
      pincode: "110007",
    },
  },
  {
    id: 8,
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    title: "Lead Security Specialist",
    status: "INACTIVE",
    age: 41,
    role: "Owner",
    address: {
      plotNumber: "Plot 36",
      landmark: "Near Office",
      pincode: "110008",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    email: "glenna.reichert@example.com",
    title: "Human Research Officer",
    status: "ACTIVE",
    age: 28,
    role: "Admin",
    address: {
      plotNumber: "Plot 38",
      landmark: "Near Stadium",
      pincode: "110009",
    },
  },
  {
    id: 10,
    name: "Roosevelt Williams",
    email: "roosevelt.williams@example.com",
    title: "Lead Branding Specialist",
    status: "OFFLINE",
    age: 39,
    role: "Owner",
    address: {
      plotNumber: "Plot 40",
      landmark: "Near Bus Stop",
      pincode: "110010",
    },
  },
  {
    id: 11,
    name: "Kurtis Weissnat",
    email: "kurtis.weissnat@example.com",
    title: "Chief Marketing Analyst",
    status: "INACTIVE",
    age: 42,
    role: "Member",
    address: {
      plotNumber: "Plot 42",
      landmark: "Near Bank",
      pincode: "110011",
    },
  },
  {
    id: 12,
    name: "Nicholas Runolfsdottir",
    email: "nicholas.runolfsdottir@example.com",
    title: "Internal Configuration Manager",
    status: "ACTIVE",
    age: 35,
    role: "Member",
    address: {
      plotNumber: "Plot 44",
      landmark: "Near Library",
      pincode: "110012",
    },
  },
  {
    id: 13,
    name: "Norene Ritchie",
    email: "norene.ritchie@example.com",
    title: "Dynamic Web Specialist",
    status: "INACTIVE",
    age: 33,
    role: "Admin",
    address: {
      plotNumber: "Plot 46",
      landmark: "Near College",
      pincode: "110013",
    },
  },
  {
    id: 14,
    name: "Amie Crona",
    email: "amie.crona@example.com",
    title: "Global Paradigm Director",
    status: "OFFLINE",
    age: 30,
    role: "Owner",
    address: {
      plotNumber: "Plot 48",
      landmark: "Near Hotel",
      pincode: "110014",
    },
  },
  {
    id: 15,
    name: "Ted Renner",
    email: "ted.renner@example.com",
    title: "Product Operations Officer",
    status: "ACTIVE",
    age: 37,
    role: "Member",
    address: {
      plotNumber: "Plot 50",
      landmark: "Near Cinema",
      pincode: "110015",
    },
  },
];

const statusStyles = {
  ACTIVE: {
    color: "green",
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    borderRadius: "5px",
    padding: "2px 6px",
  },
  INACTIVE: {
    color: "orange",
    backgroundColor: "rgba(255, 165, 0, 0.1)",
    borderRadius: "5px",
    padding: "2px 6px",
  },
  OFFLINE: {
    color: "red",
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "2px 6px",
  },
};

const GRAPHQL_QUERY = `
query Query {
  ships {
    type
    roles
    name
    mmsi
    id
    active
    home_port
    year_built
  }
}
`;
const ListView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [data,setData]=useState([])
  const[filteredData,setFilteredData]=useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  //API integration UseEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://spacex-production.up.railway.app/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-apollo-operation-name": "some-operation-name",
        },
        body: JSON.stringify({ query:GRAPHQL_QUERY }),
      });

      const result = await response.json();
      setData(result.data.ships);
    };

    fetchData();
  }, []);

  //Filter and sorting searching Functionality
  useEffect(()=>{
    const filteredData1 = data
    .filter(
      (user) =>
        (user.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (roleFilter === "All" || user.type === roleFilter)
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
    setFilteredData(filteredData1)
  },[searchTerm,sortOrder,roleFilter,data])
  
  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`,{state:user});
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRoleFilter(event.target.value);
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        React Table
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Select
          variant="outlined"
          value={roleFilter}
          onChange={handleRoleChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Barge">Barge</MenuItem>
          <MenuItem value="Tug">Tug</MenuItem>
          <MenuItem value="Cargo">Cargo</MenuItem>
          <MenuItem value="High Speed Craft">High Speed Craft</MenuItem>
        </Select>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                onClick={handleSortChange}
                style={{ cursor: "pointer" }}
              >
                Name
              </TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>
                Home Port
              </TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Year Build</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleRowClick(user)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar sx={{ marginRight: "10px" }}>
                        {user.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body1">{user.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {user.mmsi}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>{user?.roles[0]}</TableCell>
                  <TableCell>
                    <Box sx={statusStyles[user.active === true ? "ACTIVE" : "INACTIVE"]}>{user.active === true ? "ACTIVE" : "INACTIVE"}</Box>
                  </TableCell>
                  <TableCell>{user.home_port}</TableCell>
                  <TableCell>{user.type}</TableCell>
                  <TableCell>{user.year_built}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default ListView;
