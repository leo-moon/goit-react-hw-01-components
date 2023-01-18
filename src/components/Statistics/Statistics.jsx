import './statistics.css';
import bgcs from './colors.json'

const Statistics = ({ stats })=> {
  const elementsLi = stats.map(stat => 
    <li className="item" key = {stat.id} >
      <span className="label">.{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
    )
  const bgcsLength = bgcs.length
  for (let i=0 ; i < elementsLi.length; i+= 1) {
    i = i % bgcsLength
    console.log(i)
  }

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {elementsLi}
      </ul>
    </section>
  )
}

export default Statistics;

Statistics.defaultProps = {
  stats: [],
  title: ""
}