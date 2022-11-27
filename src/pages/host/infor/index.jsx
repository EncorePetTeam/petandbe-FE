import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './infor.module.scss'
import Link from 'next/link';
import React, { useState } from 'react';


const index = () => {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
 
  const toggle = () => setModal(!modal);
 
 
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  return (
    <div className={styles.containner}>
      <div className={styles.content}>
    <div className={styles.top}>
      <h2 className={styles.topinfor}>지영님의 정보</h2>
        <Button className={styles.btn} color="danger" onClick={toggle}>
    호스트 등록하기
    </Button>
    </div>
    <h3 className={styles.text} >등록되있는 호스트</h3>
    <div>
    <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th> Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> @mdo</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> @mdo</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> @mdo</td>
    </tr>
  </tbody>
</Table>
    </div>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>호스트 등록하기</ModalHeader>
      <ModalBody>
        <div>
        <h2>사업등록자증 선택</h2>
        <hr/>
        <input type="file"></input>
        <div className={styles.modaltop}> </div>
        <h2>사업등록자번호 입력</h2>
        <hr/>
        <input type="text"></input>
        </div>
        <br />
        <Button color="success" onClick={toggleNested}>
          주의사항
        </Button>
        <Modal
          isOpen={nestedModal}
          toggle={toggleNested}
          onClosed={closeAll ? toggle : undefined}
        >
          <ModalHeader>주의사항입니다</ModalHeader>
          <ModalBody>조심해서 써주십쇼!!!!!!</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleNested}>
              완료
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Submit
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>

  <div className={styles.top}>
  <h3 className={styles.text}>숙소 등록하기</h3>
  <div className={styles.btn}>
  <Link href="/host/add">
  <Button className={styles.btn} color="danger">
    숙소 등록하기
    </Button>
    </Link>
    </div>
    </div>
    <div>
    <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th> Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> @mdo</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> @mdo</td>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td> @mdo</td>
    </tr>
  </tbody>
</Table>
    </div>
    </div>
    </div>
  );
};
export default index;