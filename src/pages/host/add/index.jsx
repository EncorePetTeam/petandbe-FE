import { Button } from 'reactstrap';
import { Adress } from '../../../components/atoms/Adress'
import  styles  from './index.module.scss'
import { Image } from '../../../components/atoms/Image'
import Link from 'next/link';

function hostadd(params) {
    
    return(
        <div className={styles.total}>
                <h1 className={styles.text}>숙소 등록</h1>
                <div className={styles.containner}>
                <h2 className={styles.text}>숙소 이름</h2>
                <input className={styles.input} placeholder='숙소 이름'></input>
                <h2 className={styles.text}>숙소 사진</h2>
                < Image >
                </Image>
                <h2 className={styles.text}>숙소 종류</h2>
                <select className={styles.input}>
                    <option>주택</option>
                    <option>캠핑카</option>
                    <option>주택</option>
                    <option>풀빌라</option>
                    <option>모텔</option>
                    <option>호텔</option>
                </select>
                <h2 className={styles.text}>숙소의 유형</h2>
                <select className={styles.input}>
                    <option>공간전체</option>
                    <option>개인실</option>
                    <option>다인실</option>
                </select>
                <h2 className={styles.text}>주소</h2>
                <Adress></Adress>
                <h2 className={styles.text}>수용 가능 인원</h2>
                <input className={styles.input } placeholder="최대인원"></input>
                <h2 className={styles.text}>설명</h2>
                <input className={styles.example} placeholder="추가정보를 적어주세요"></input>
            </div>
            <div className={styles.bottom}>
            <Button className={styles.button}>등록</Button>
            <Link href="/host/infor">
            <Button className={styles.button}>취소</Button>
            </Link>
            </div>
      </div>
    
    );

    
}
export default hostadd