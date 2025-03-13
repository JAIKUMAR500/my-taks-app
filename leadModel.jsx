import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const LeadModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="p-3">
      <h3>neuronest ai task project</h3>
      <Button variant="warning" onClick={handleShow}>
        Add Lead
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Add lead</h5>
            <Button variant="" onClick={handleClose} style={{fontSize :"20px" , fontWeight :"600"}} className=""> 
              x
            </Button>
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label >Name</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Source</Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            
            <div className="d-flex justify-content-end gap-2">
              <Button variant="light" onClick={handleClose}>
                Cancel
              </Button>
              <Button style={{ backgroundColor: "#FDCB3E", borderColor: "#FDCB3E", color: "#000" }}>
                Save & add new
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LeadModal;
