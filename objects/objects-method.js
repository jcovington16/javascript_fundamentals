// A method is just an object property who's value
// is a function

let resturant = {
  name: 'Texas Road House',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    /* this key word references the object the method is defined on. */
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },

  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },

  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  },
}

resturant.seatParty(72)

console.log(resturant.checkAvailability(4))

resturant.removeParty(5)

console.log(resturant.checkAvailability(4))
