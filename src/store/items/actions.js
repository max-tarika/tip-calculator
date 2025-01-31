export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
})

export const removeItem = (uuid) => ({
  type: ITEM_REMOVED,
  payload: uuid
})
