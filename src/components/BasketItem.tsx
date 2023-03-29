import { FC } from "react";

const BasketItem: FC<any> = ({
	name,
	price,
	quantity,
	id,
	setOrder,
}): JSX.Element => {
	return (
		<li className="list-group-item">
			{name} {price}руб x{quantity}
			<button className="btn btn-primary" onClick={() => setOrder(id)}>
				Удалить из корзины
			</button>
		</li>
	);
};

export default BasketItem;
