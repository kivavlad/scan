import { useState } from "react";
import { useAppSelector } from "../../store/hook";
import { DocumentCard } from "./DocumentCard";
import styles from './DocumentCard.module.scss';

export const Documents: React.FC = () => {
    const documents = useAppSelector((state) => state.docs.documents);
    const docs: any[] = documents[0] || [];
    const totalDocs = documents[0]?.length || 0;
    const [showDocs, setShowDocs] = useState(10);

    function sliceList(list: any[]) {
        return list.slice(0, showDocs);
    }

    function loadMore() {
        setTimeout(() => setShowDocs(showDocs + 10), 800);
    }

    const docsList = sliceList(docs);
    
    
    if (docs?.length) {
        return (
            <>
                <div className={styles.documents__list}>
                    {docsList?.map((item: any) => <DocumentCard key={item.ok.id} {...item} />)}
                </div>

                {(totalDocs > 10 && showDocs !== totalDocs)  &&
                    <div className={styles.documents__button}>
                        <button type='button' onClick={loadMore}>Показать больше</button>
                    </div>
                }
            </>
        )
    } else {
        return (
            <>
            
            </>
        )
    }
}