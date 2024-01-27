import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hook";
import { DocumentCard } from "./DocumentCard";
import { ButtonLoader } from "../Loader/ButtonLoader";
import styles from './DocumentCard.module.scss';

export const Documents: React.FC = () => {
    const navigate = useNavigate();
    const documents = useAppSelector((state) => state.docs.documents);
    const docs: any[] = documents[0] || [];
    const totalDocs = documents[0]?.length || 0;
    const [showDocs, setShowDocs] = useState(10);
    const [loading, setLoading] = useState(false);

    function sliceList(list: any[]) {
        return list.slice(0, showDocs);
    }

    function loadMore() {
        setLoading(true);
        
        setTimeout(() => {
            setShowDocs(showDocs + 10);
            setLoading(false);
        }, 800);
    }

    const docsList = sliceList(docs);
    
    if (docs?.length) {
        return (
            <>
                <div className={styles.documents__list}>
                    {docsList.map((item: any) => <DocumentCard key={item.ok.id} {...item} />)}
                </div>

                {(totalDocs > 10 && showDocs < totalDocs)  &&
                    <div className={styles.documents__button}>
                        <button type='button' onClick={loadMore}>{loading ? <ButtonLoader /> : 'Показать больше'}</button>
                    </div>
                }
            </>
        )
    } else {
        return (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Ничего не найдено</h2>
                <div className={styles.documents__button}>
                    <button type='button' onClick={() => navigate("/search")} >Назад</button>
                </div>
            </div>
        )
    }
}