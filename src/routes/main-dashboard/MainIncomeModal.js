
import CloseExpenseModal from "../expenses-dashboard/CloseExpenseModal";
import categories from '../../data/Categories.js';

const MainIncomeModal = (props) => {
    return (
        <article className="add-income-modal-main">
            <section className="add-income-popup-main">
                <CloseExpenseModal closeModal={props.closeModal} resetForm={props.resetForm} />
                <h2>New Income</h2>
                {props.submit && Object.keys(props.formError).length === 0 ? <p>Successfully added income! 🤑</p> : <form onSubmit={props.addIncome}>
                    <input onChange={props.handleValidation} value={props.formValue.name} name="name" type="text" placeholder="Income name" />
                    {props.formError.name ? <span className="modal-input-err">{props.formError.name}</span> : null}
                    <input onChange={props.handleValidation} value={props.formValue.amount} name="amount" type="text" placeholder="Amount" />
                    {props.formError.amount ? <span className="modal-input-err">{props.formError.amount}</span> : null}
                    <select onChange={props.handleValidation} value={props.formValue.category} name="category">
                        <option defaultChecked>Select category</option>
                        {categories.map((category) => <option key={category.id} >{category.name}</option>)}
                    </select>
                    {props.formError.category ? <span className="modal-input-err">{props.formError.category}</span> : null}
                    <input onChange={props.handleValidation} value={props.formValue.created} name="created" type="date" id="date" />
                    {props.formError.created ? <span className="modal-input-err">{props.formError.created}</span> : null}
                    <textarea onChange={props.handleValidation} value={props.formValue.note} name="note" type="textarea" placeholder="Note" rows="5" />
                    <button type="submit">Add</button>
                </form>}
            </section>
        </article>
    )
}

export default MainIncomeModal;