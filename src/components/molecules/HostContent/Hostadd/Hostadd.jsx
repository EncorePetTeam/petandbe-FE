import {HouseModal, Hostparam} from '../../../atoms/Modal/Modal'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function add(){
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return(
      <div>
        <h1>내정보</h1>
        <h3>호스트 등록하기</h3>
        <div>
          <Button color="danger" onClick={toggle}>
            호스트 등록
          </Button>
          <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalBody>
          <Hostparam></Hostparam>
          </ModalBody>
          <ModalFooter>
          <Button color="danger" onClick={toggle}>
            확인
          </Button>
          <Button color="danger" onClick={toggle}>
            취소
          </Button>
          </ModalFooter>
          </Modal>
        </div>
        <div>
        <h3>숙소 등록하기</h3>
          <ul>
            <li> 1.페이커빌딩 </li>
            <li> 2.롯데타워</li>
          </ul>
        </div>
      </div>

    )
  }
  export {add}
