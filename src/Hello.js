import './Hello.css'
const Hello = ({name="Dummy",age="20",salary="3000"}) =>{
    return(<>
    <h5>Hello {name} {age} {salary}!</h5><br/>
    </>);
}
export default Hello;