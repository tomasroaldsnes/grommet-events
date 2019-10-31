import React, { Component } from 'react';
import { Box, AccordionPanel, Accordion, Text, Menu, Grid, Button, Layer, Collapsible, Heading, Grommet, ResponsiveContext } from 'grommet';
import { Notification, FormClose, Slack, Github } from 'grommet-icons';
import { render } from '@testing-library/react';

const theme = {
  global: {
    /* colors: {
      brand: '#228BE6',
    }, */
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    
  },
};
const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

class App extends Component{
  state = {
    showSidebar: false,
  }
  render() {
  const { showSidebar } = this.state;

  return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
        <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>
            FAT Dashboard
          </Heading>
          <Button icon={<Notification/>} onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}/>
        </AppBar>
    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
   
    {(!showSidebar || size !== 'small') ? (
    <Collapsible direction="horizontal" open={showSidebar}>
      <Box align='center' justify='center' width='medium'>
      <Box align='center' alignSelf='start' pad="medium">
        <Heading level='3' margin="none">Kategorier</Heading>   
     </Box>
      <Accordion alignSelf='stretch'>
        <AccordionPanel label="Innlogging og BankID">
          <Box pad="medium" background="light-2">
            <Text>One</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Konto">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Kort">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Renter og lån">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Rene idiot spørsmål">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Aksjesparekonto">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
      </Accordion>

    
      <Box align='center' direction='row' gap='medium' alignSelf='center' pad="medium">
        <Button primary label="Ny intent" onClick={() => {} } />
        <Button primary label="Ny kategori" onClick={() => {} } />
    </Box>
      </Box>

       </Collapsible>
       ): (
          <Layer>
             <Box
              background='light-2'
              tag='header'
              justify='end'
              align='center'
              direction='row'
              >
              <Button
                icon={<FormClose />}
                onClick={() => this.setState({ showSidebar: false })}
              />
            </Box>
            <Box
              fill
              background='light-2'
              align='center'
              justify='center'
            >
            
            </Box>
          </Layer>
    )}

      <Box
        flex
        background='light-2'
        elevation='small'
        align='center'
        justify='center'
       >
      main body
     </Box>
          
    </Box>
  </Box>    
  )}
  </ResponsiveContext.Consumer>  
  </Grommet>
  );
 }
}

export default App;
