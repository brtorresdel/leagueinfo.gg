import { ClassesList } from '../ClassesList';
import './homefilters.styles.css';

export function HomeFilters ({nameFilter, setNameFilter, classFilter, setClassFilter}) {

    const champClasses = ['tank', 'support', 'fighter', 'mage', 'assassin', 'marksman'];

    return (
        <div className="home-filters-div">
            <div className="home-filters">
                <input 
                type="text" 
                name="nameSearch" 
                className='input-name' 
                placeholder='Encontre seu campeão...' 
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