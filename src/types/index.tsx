export type inlineString = string;
export type inlineNumber = number;
export type inlineBoolean = boolean;

export type IPropsBasket = {
	openCart: inlineBoolean;
	closeCart: () => void;
	order: IMappingProps[];
	removeFromOrder: (e:inlineString) => void;
};

export type IPropsSnack = {
	isOpen: inlineBoolean;
	handleClose: () => void;
};
export type IPropsSearch = {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: inlineString;
};

export type IPropsHeader = {
	openCart: () => void;
	orderLen: inlineNumber;
};

export interface IState {
	id: inlineString;
	category: inlineString;
	name: inlineString;
	poster: inlineString;
	price: inlineNumber;
	quantity: inlineNumber;
}

export interface IPropsProduct {
	id: inlineString;
	category: inlineString;
	name: inlineString;
	poster: inlineString;
	price: inlineNumber;
}

export interface IItem {
	item: IState;
	setOrder: (e: inlineString) => void;
}
export type IMap = {
	id: inlineString;
};

export interface IOrder {
	id: inlineString;
	name: inlineString;
	price: inlineNumber;
}

export interface IProps {
	id: inlineString;
	name: inlineString;
	price: inlineNumber;
	setOrder: (e: IOrder) => void;
	poster: inlineString;
}

export interface IPropsGoodsList {
	goods: IPropsProduct[];
	addOrder: (e: IOrder) => void;
}

export type IPropsGoodsItem = {
	name: inlineString;
	price: inlineNumber;
	setOrder: () => void;
	id: inlineString;
	poster: inlineString;
};

export interface IMappingProps {
	id: inlineString;
	name: inlineString;
	price: inlineNumber;
   quantity:inlineNumber
}

export interface IMappingBasketItem {
	item: IMappingProps;
	setOrder:(e:inlineString) => void;

}


