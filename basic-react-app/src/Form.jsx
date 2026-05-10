
function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submited");
}
export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="string" placeholder="write anything.." />
            <button>Submit</button>
        </form>
    )
}