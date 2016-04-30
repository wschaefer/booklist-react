module.exports = {
  reducer: function (state, action) {
  	if (state === undefined) {
  		return [
				{id: 0, title: "Norwegian Wood", authorLast: "Murakami", authorFirst: "Haruki"},
				{id: 1, title: "French Lieutenant's Woman", authorLast: "Fowles", authorFirst: "John"}
			];
  	}

    switch (action.type) {
		  case 'ADD_BOOK':
		  	return state.concat([action.book])
		  default:
		    return state
		}
  },
}