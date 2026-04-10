import { NotFoundElement } from './../../components/NotFoundElement/index';
import { useTranslations } from './../../components/Hooks/useTranslations';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export function NotFoundPage() {
    const { t } = useTranslations();
    let [seconds, setSeconds] = useState(8000);

    const navigate = useNavigate();

    useEffect(() => {
        if (seconds <= 0) {
            navigate('/');
            return;
        }

        const timer = setTimeout(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
        
    }, [seconds, navigate]);

    return(
        <div className="not-found-div">
            <section className="not-found">
                <h1>{t("notFound.title")}</h1>
                <NotFoundElement message={t("notFound.message").replace("{sec}", seconds)} />
            </section>
        </div>
    )
}