
import Counter from './Counter';
function One(props)
{
    const {count,increment,name}=props
    return(
        <div>
            <button onClick={increment}>Click {name} {count}</button>
        </div>
    )
}
export default Counter(One,2);