import './statistics.css';
// import bgcs from './colors.json'

const Statistics = ({ title, stats })=> {
  const elementsLi = stats.map(({ id, label, percentage }) => 
    <li key={id} className="item">
      <span className="label">..{label}</span>
      <span className="percentage">{percentage}%</span>
    </li> 
    )
  // const bgcsLength = bgcs.length
  // for (let i=0 ; i < elementsLi.length; i+= 1) {
  //   i = i % bgcsLength
  //   console.log(i)
  // }

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
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