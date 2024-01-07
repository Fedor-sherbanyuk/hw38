export const Form= ({submitHandler}) =>{
        return (
            <form onSubmit={submitHandler}>
                    <input placeholder="Name of store" autoComplete="off" name="todoInput"/>
                    <button type="submit">Add Todo</button>
            </form>
        );
};
