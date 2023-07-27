import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  imageSrc: string; // Add an imageSrc prop
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, imageSrc, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3,backgroundColor: 'white', }}>
          {imageSrc && (
            <img
              src={imageSrc}
              alt={`Image for Tab ${index}`}
              style={{ marginBottom: 10 }}
            />
          )}
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const VerticalTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  height: 700,backgroundImage: 'url("/images/why.jpg")', 
    backgroundSize: 'cover', }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider','& .MuiTab-root': {
          '&.Mui-selected': {
            backgroundColor: 'black', 
          },
        }, }}
      >
        <Tab label="Easy to cutomize" />
        <Tab label="More flexible" />
        <Tab label="Clean mode" />
        <Tab label="Ratinaready" />
      </Tabs>
      <TabPanel value={value} index={0} imageSrc="/images/admin.png">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br />
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit<br />
        anim id est laborum."
      </TabPanel>
      <TabPanel value={value} index={1} imageSrc="/images/admin.png">
        Content for Button 2
      </TabPanel>
      <TabPanel value={value} index={2} imageSrc="/images/admin.png">
        Content for Button 3
      </TabPanel>
      <TabPanel value={value} index={3} imageSrc="/images/admin.png">
        Content for Button 4
      </TabPanel>
    </Box>
  );
}

export default VerticalTabs;
