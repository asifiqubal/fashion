/**
 * @copyright Asif Iqubal
 */

const RdxUpdateCart = data => {
  return {
    type: 'cart:update',
    payload: data,
  };
};
const RdxUpdateTotalItem = data => {
  return {
    type: 'cart:update-total-item',
    payload: data,
  };
};
const RdxUpdateSubtotal = data => {
  return {
    type: 'cart:update-subtotal',
    payload: data,
  };
};
export const RdxOrderSccess = _ => {
  return {
    type: 'cart:init',
  };
};

export const UpdateCart = p => {
  return async (d, gs) => {
    try {
      const {item, type} = p;
      console.log(gs(), item, gs()._cart.items);
      const index = gs()._cart.items.findIndex(data => data.itemId === item.id);
      const itemList = gs()._cart.items;
      if (type === 'add') {
        if (index < 0) {
          const data = {
            item,
            count: 1,
            amount: item.price * 1,
            itemId: item.id,
          };
          const totalItem = gs()._cart.totalItem + 1;
          const subtotal = gs()._cart.subtotal + item.price;
          const items = [...gs()._cart.items, data];
          d(RdxUpdateCart(items));
          d(RdxUpdateTotalItem(totalItem));
          d(RdxUpdateSubtotal(subtotal));
          return {msg: 'ok'};
        } else {
          const cartItem = gs()._cart.items[index];
          const data = {
            item,
            count: cartItem.count + 1,
            amount: item.price + cartItem.amount,
            itemId: item.id,
          };
          const totalItem = gs()._cart.totalItem + 1;
          const subtotal = gs()._cart.subtotal + item.price;
          itemList[index] = data;
          d(RdxUpdateCart(itemList));
          d(RdxUpdateTotalItem(totalItem));
          d(RdxUpdateSubtotal(subtotal));
          return {msg: 'ok'};
        }
      } else if (type === 'subtract') {
        if (index < 0) {
          return {msg: 'ok'};
        }
        const cartItem = gs()._cart.items[index];
        if (cartItem.count === 1) {
          const itemList = gs()._cart.items;
          itemList.splice(index, 1);
          const totalItem = gs()._cart.totalItem - 1;
          const subtotal = gs()._cart.subtotal - item.price;
          d(RdxUpdateCart(itemList));
          d(RdxUpdateTotalItem(totalItem));
          d(RdxUpdateSubtotal(subtotal));
          return {msg: 'ok'};
        } else if (cartItem.count > 1) {
          const data = {
            item,
            count: cartItem.count - 1,
            amount: cartItem.amount - item.price,
            itemId: item.id,
          };
          const totalItem = gs()._cart.totalItem - 1;
          const subtotal = gs()._cart.subtotal - item.price;
          itemList[index] = data;
          d(RdxUpdateCart(itemList));
          d(RdxUpdateTotalItem(totalItem));
          d(RdxUpdateSubtotal(subtotal));
          return {msg: 'ok'};
        }
      } else if (type === 'remove') {
        const cartItem = gs()._cart.items[index];
        itemList.splice(index, 1);
        const totalItem = gs()._cart.totalItem - cartItem.count;
        const subtotal = gs()._cart.subtotal - cartItem.amount;
        d(RdxUpdateCart(itemList));
        d(RdxUpdateTotalItem(totalItem));
        d(RdxUpdateSubtotal(subtotal));
        return {msg: 'ok'};
      }
    } catch (error) {
      console.warn(error);
    }
  };
};
