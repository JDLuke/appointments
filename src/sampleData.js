const today = new Date();
const at = (hours) => today.setHours(hours, 0);
export const sampleAppointments = [
  {startsAt: at(9),
    customer: {
      firstName: "Charlie",
      lastName: "Jones",
      phoneNumber: "1234567",
      stylist: "Bill",
      service: "cut",
      notes: "pain in the ass"
    }
  },
  {startsAt: at(10),
    customer: {
      firstName: "Frankie",
      lastName: "Jones",
      phoneNumber: "1234567",
      stylist: "Bill",
      service: "cut",
      notes: "pain in the ass"
    }
  },
  {startsAt: at(11),
    customer: {
      firstName: "Casey",
      lastName: "Jones",
      phoneNumber: "1234567",
      stylist: "Bill",
      service: "cut",
      notes: "pain in the ass"
    }
  },
  {startsAt: at(12),
    customer: {
      firstName: "Ashley",
      lastName: "Jones",
      phoneNumber: "1234567",
      stylist: "Bill",
      service: "cut",
      notes: "pain in the ass"
    }
  },
  {startsAt: at(13),
    customer: {
      firstName: "Jordan",
      lastName: "Jones",
      phoneNumber: "1234567",
      stylist: "Bill",
      service: "cut",
      notes: "pain in the ass"
    }
  },
  {startsAt: at(14),
    customer: {
      firstName: "Jay",
      lastName: "Jones",
      phoneNumber: "1234567",
      stylist: "Bill",
      service: "cut",
      notes: "pain in the ass"
    }
  },
  {startsAt: at(15),
    customer: {
      firstName: "Alex",
      lastName: "Jones",
      phoneNumber: "1234567",
      stylist: "Bill",
      service: "cut",
      notes: "pain in the ass"
    }
  },
  {startsAt: at(16),
    customer: {
      firstName: "Jennie",
      lastName: "Jones",
      phoneNumber: "8675309",
      stylist: "Bill",
      service: "cut",
      notes: "I have got her number"
    }
  },
  {startsAt: at(17),
    customer: {
      firstName: "Stevie",
      lastName: "Nicks",
      phoneNumber: "1234567",
      stylist: "Lindsay",
      service: "full",
      notes: "she will write a song about you if you are not careful"
    }
  },
];


export const blankCustomer = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
}