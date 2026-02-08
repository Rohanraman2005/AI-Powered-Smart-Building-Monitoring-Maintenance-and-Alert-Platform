import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  const menuItems = [
    "Dashboard",
    "Buildings",
    "Complaints",
    "Workers",
    "Payments",
    "Settings"
  ];

  return (
    <Drawer variant="permanent">
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item}/>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
