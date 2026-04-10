import { NotFoundElement } from './../../components/NotFoundElement/index';
import { useTranslations } from './../../components/Hooks/useTranslations';
import { useState } from 'react';

export function NotFoundPage() {
    const { t } = useTranslations();
    const [seconds, setSeconds] = useState(10);

    return(
        <div className="not-found-div">
            <section className="not-found">
                <h1>{t("notFound.title")}</h1>
                <NotFoundElement message={t("notFound.message").replace("{sec}", seconds)} />
            </section>
        </div>
    )
}