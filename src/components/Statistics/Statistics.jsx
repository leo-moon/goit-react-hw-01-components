import style from './statistics.module.css';
import PropTypes from 'prop-types';
// import bgcs from './colors.json'

const Statistics = ({ title, stats })=> {
  const elementsLi = stats.map(({ id, label, percentage }) => 
    <li key={id} className={style.item}>
      <span className={style.label}>..{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li> 
    )
  // const bgcsLength = bgcs.length
  // for (let i=0 ; i < elementsLi.length; i+= 1) {
  //   i = i % bgcsLength
  //   console.log(i)
  // }

  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {elementsLi}
      </ul>
    </section>
  )
}

export default Statistics;

Statistics.defaultProps = {
  title: "",
  stats: []
}

Statistics.propTypes = {
  title: PropTypes.string, 
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired , 
    label: PropTypes.string.isRequired , 
    percentage: PropTypes.number.isRequired
  }))
}