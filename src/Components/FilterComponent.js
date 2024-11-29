// import React, { useState } from 'react';
// import { Dropdown, Button, Form, Col, Row } from 'react-bootstrap';
// import Select from 'react-select';

// const FilterComponent = () => {
//     const [filterValue, setFilterValue] = useState('all');
//     const [fromDate, setFromDate] = useState('');
//     const [toDate, setToDate] = useState('');
//     const [selectedDoctors, setSelectedDoctors] = useState([]);

//     const items = [
//         { id: 1, text: 'Item 1 for Filter 1 with Dr. John Doe', filter: 'filter1', date: '2024-11-25', doctors: ['doctor1'] },
//         { id: 2, text: 'Item 2 for Filter 2 with Dr. Jane Smith', filter: 'filter2', date: '2024-11-26', doctors: ['doctor2'] },
//         { id: 3, text: 'Item 3 for Filter 3 with Dr. Bob Brown', filter: 'filter3', date: '2024-11-27', doctors: ['doctor3'] },
//         { id: 4, text: 'Item 4 for Filter 1 with Dr. Alice Green', filter: 'filter1', date: '2024-11-28', doctors: ['doctor4'] },
//         { id: 5, text: 'Item 5 for Filter 2 with Dr. John Doe', filter: 'filter2', date: '2024-11-29', doctors: ['doctor1'] },
//     ];

//     const doctorOptions = [
//         { value: 'doctor1', label: 'Dr. John Doe' },
//         { value: 'doctor2', label: 'Dr. Jane Smith' },
//         { value: 'doctor3', label: 'Dr. Bob Brown' },
//         { value: 'doctor4', label: 'Dr. Alice Green' },
//     ];

//     const handleDoctorChange = (selectedOptions) => {
//         setSelectedDoctors(selectedOptions ? selectedOptions.map(option => option.value) : []);
//     };

//     const handleFilterChange = (event) => {
//         setFilterValue(event.target.value);
//     };

//     const handleDateChange = (event) => {
//         const { name, value } = event.target;
//         if (name === 'fromDate') setFromDate(value);
//         if (name === 'toDate') setToDate(value);
//     };

//     const handleReset = () => {
//         setFilterValue('all');
//         setFromDate('');
//         setToDate('');
//         setSelectedDoctors([]);
//     };

//     const filteredItems = items.filter(item => {
//         const isFilterMatch = filterValue === 'all' || item.filter === filterValue;
//         const isDateMatch = (!fromDate || item.date >= fromDate) && (!toDate || item.date <= toDate);
//         const isDoctorMatch = selectedDoctors.length === 0 || selectedDoctors.some(doctor => item.doctors.includes(doctor));

//         return isFilterMatch && isDateMatch && isDoctorMatch;
//     });

//     return (
//         <div>
//             <Dropdown drop="down-centered">
//                 <Dropdown.Toggle variant="primary" style={{
//                                         backgroundColor: '#183E9F',
//                                         color: 'white',
//                                         border: 'none',
//                                         padding: '5px',
//                                         borderRadius: '4px',
//                                         cursor: 'pointer',
//                                         fontSize: '16px',
//                                         fontWeight: 'bold',
//                                         transition: 'background-color 0.3s ease'
//                                     }}>
//                     Filters
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu style={{ padding: '20px' }}>
//                     <Form>
//                         <Form.Group controlId="doctor-selector">
//                             <Form.Label>Select Doctors:</Form.Label>
//                             <Select
//                                 isMulti
//                                 options={doctorOptions}
//                                 value={doctorOptions.filter(option => selectedDoctors.includes(option.value))}
//                                 onChange={handleDoctorChange}
//                                 placeholder="Select doctors"
//                                 isSearchable
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="from-date">
//                             <Form.Label>From Date:</Form.Label>
//                             <Form.Control
//                                 type="date"
//                                 name="fromDate"
//                                 value={fromDate}
//                                 onChange={handleDateChange}
//                             />
//                         </Form.Group>

//                         <Form.Group controlId="to-date">
//                             <Form.Label>To Date:</Form.Label>
//                             <Form.Control
//                                 type="date"
//                                 name="toDate"
//                                 value={toDate}
//                                 onChange={handleDateChange}
//                             />
//                         </Form.Group>

                        

//                         <Row>
//                             <Col>
//                                 <Button 
//                                     variant="secondary" 
//                                     onClick={handleReset} 
//                                     style={{
//                                         backgroundColor: '#183E9F',
//                                         color: 'white',
//                                         border: 'none',
//                                         padding: '5px',
//                                         marginTop: '20px',
//                                         borderRadius: '4px',
//                                         cursor: 'pointer',
//                                         fontSize: '16px',
//                                         fontWeight: 'bold',
//                                         transition: 'background-color 0.3s ease'
//                                     }}
//                                 >
//                                     Reset
//                                 </Button>
//                             </Col>
//                             <Col>
//                                 <Button 
//                                     variant="primary" 
//                                     onClick={() => {}} 
//                                     style={{
//                                         backgroundColor: '#183E9F',
//                                         color: 'white',
//                                         border: 'none',
//                                         padding: '5px',
//                                         marginTop: '20px',
//                                         borderRadius: '4px',
//                                         cursor: 'pointer',
//                                         fontSize: '16px',
//                                         fontWeight: 'bold',
//                                         transition: 'background-color 0.3s ease'
//                                     }}
//                                 >
//                                     Apply Filters
//                                 </Button>
//                             </Col>
//                         </Row>
//                     </Form>
//                 </Dropdown.Menu>
//             </Dropdown>

//             {/* <div id="content">
//                 {filteredItems.map(item => (
//                     <div key={item.id} className="filterable-item">
//                         {item.text}
//                     </div>
//                 ))}
//             </div> */}
//         </div>
//     );
// };

// export default FilterComponent;
