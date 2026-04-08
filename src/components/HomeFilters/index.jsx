import { ClassesList } from '../ClassesList';
import { useTranslations } from '../Hooks/useTranslations';
import './homefilters.styles.css';

export function HomeFilters ({nameFilter, setNameFilter, classFilter, setClassFilter}) {

    const champClasses = ['tank', 'support', 'fighter', 'mage', 'assassin', 'marksman'];

    const { t } = useTranslations();

    return (
        <div className="home-filters-div">
            <div className="home-filters">
                <input 
                type="text" 
                name="nameSearch" 
                className='input-name' 
                placeholder={t("home.filters.placeholder")} 
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                />
                <div className="class-filter-div">
                    <h4>Classes:</h4>
                    <ClassesList 
                    champClasses={champClasses} 
                    classFilter={classFilter}
                    setClassFilter={setClassFilter}
                    />
                </div>
            </div>
        </div>
    )
}