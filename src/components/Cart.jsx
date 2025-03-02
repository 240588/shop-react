const Cart = ({cartItems, onRemove}) => {
    return(
        <div className="p-4 bg-white shadow rouned">
            <h2 className="text-xl font-bold mb-4">Корзина</h2>
            {
                cartItems.lenght === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    <ul>
                        {
                            cartItems.map(inem => (
                                <li key={cartItems.id} className="flex justify-between items-center mb-2">
                                    <span>{cartItems.title}</span>
                                    <button onClick={() => onRemove (inem.id)}
                                    className="text- red-500">Удалить</button>
                                </li>
                            ))}
                    </ul>
                )}
        </div>
    )

}
export default Cart