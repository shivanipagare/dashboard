import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Form, Button } from 'react-bootstrap'
const Booking = () => {
  return (
    <div>
        <div>
<h5 style={{textAlign:"center" , padding:"50px", fontSize:"25px", color:"#146C94"}}>Booking</h5>

<Tabs variant='enclosed'>
  <TabList className='tabs' style={{width:"1142px"}}>
    <Tab>One</Tab>
    <Tab>Two</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <form>

  <div class="row mb-4">
    <div class="col">
      <Form class="form-outline">
        <Form.Control type="text" id="form6Example1" class="form-control" />
        <Form.Label class="form-label" for="form6Example1">First name</Form.Label>
      </Form>
    </div>
    <div class="col">
    <Form class="form-outline">
        <Form.Control type="text" id="form6Example1" class="form-control" />
        <Form.Label class="form-label" for="form6Example1">Second name</Form.Label>
      </Form>
    </div>
  </div>

  
  <Form class="form-outline mb-4">
    <Form.Control type="text" id="form6Example3" class="form-control" />
    <Form.Label class="form-label" for="form6Example3">Company name</Form.Label>
  </Form>

  
  <Form class="form-outline mb-4">
    <Form.Control type="text" id="form6Example3" class="form-control" />
    <Form.Label class="form-label" for="form6Example3">Address</Form.Label>
  </Form>

 
  <Form class="form-outline mb-4">
    <Form.Control type="email" id="form6Example5" class="form-control" />
    <Form.Label class="form-label" for="form6Example5">Email</Form.Label>
  </Form>


  <Button type="submit" class="btn btn-primary btn-block mb-4">place Order</Button>
</form>
    </TabPanel>
    <TabPanel>
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    
    <Thead>
      <Tr>
        <Th>Id</Th>
        <Th>Name</Th>
        <Th>status</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </TabPanel>
  </TabPanels>
</Tabs>

   
    </div>
    </div>
  )
}

export default Booking
