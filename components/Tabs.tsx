'use client'
import React, { useState } from 'react'; // Add useState import
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0); // Use useState to handle the state

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue); // Update the state when the tab is changed
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange} // Call handleChange when the tab is changed
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Button 1" />
        <Tab label="Button 2" />
        <Tab label="Button 3" />
        <Tab label="Button 4" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Content for Button 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Button 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Button 3
      </TabPanel>
      <TabPanel value={value} index={3}>
        Content for Button 4
      </TabPanel>
    </Box>
  );
}
