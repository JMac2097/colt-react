const choice = (item) => item[Math.floor(Math.random() * item.length)];

const remove = (items, item) =>
	items.indexOf(item) > -1 ? items.splice(items.indexOf(item), 1) : false;

export { choice, remove };
