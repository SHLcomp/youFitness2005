import './FilterOp.scss';

const FilterOp = () => {
  return (
    <div>
      <div className="filter">
          {/* type 1 */}
          <div className="type">
            <h2>Filter by Type</h2>
            <ul>
              <li><input type="checkbox" />Jumper</li>
              <li><input type="checkbox" />Dress</li>
              <li><input type="checkbox" />Trainings</li>
              <li><input type="checkbox" />Shoes</li>
              <li><input type="checkbox" />Overwholes</li>
              <li><input type="checkbox" />Skirts</li>
              <li><input type="checkbox" />Trousers</li>
              <li><input type="checkbox" />Full Outfits</li>
            </ul>
          </div>

          {/* type 2 */}
          <div className="type">
            <h2>Filter by Size</h2>
            <ul>
              <li><input type="checkbox" />XXX Small</li>
              <li><input type="checkbox" />XX Small</li>
              <li><input type="checkbox" />X Small</li>
              <li><input type="checkbox" />Small</li>
              <li><input type="checkbox" />Medium</li>
              <li><input type="checkbox" />Large</li>
              <li><input type="checkbox" />X Large</li>
              <li><input type="checkbox" />XX Large</li>
              <li><input type="checkbox" />XXX Large</li>
            </ul>
          </div>

        </div>
    </div>
  )
}

export default FilterOp
