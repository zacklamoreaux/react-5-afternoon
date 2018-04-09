const initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: 'false',
  realEstateAgent: 'false',
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'
const UPDATE_FOUND = 'UPDATE_FOUND'
const UPDATE_AGENT = 'UPDATE_AGENT'
const UPDATE_COST = 'UPDATE_COST'
const UPDATE_PAYMENT = 'UPDATE_PAYMENT'
const UPDATE_CREDIT = 'UPDATE_CREDIT'
const UPDATE_HISTORY = 'UPDATE_HISTORY'
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE'
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO'
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE'
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'
const UPDATE_LASTNAME = 'UPDATE_LASTNAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'
 
export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  }
}

export function updatePropertyType(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  }
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  }
}

export function updateAgent(agent) {
  return {
    type: UPDATE_AGENT,
    payload: agent
  }
}

export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  }
}

export function updatePayment(payment) {
  return {
    type: UPDATE_PAYMENT,
    payload: payment
  }
}

export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  }
}

export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  }
}

export function updateAddressOne(address) {
  return {
    type: UPDATE_ADDRESS_ONE,
    payload: address
  }
}

export function updateAddressTwo(address) {
  return {
    type: UPDATE_ADDRESS_TWO,
    payload: address
  }
}

export function updateAddressThree(address) {
  return {
    type: UPDATE_ADDRESS_THREE,
    payload: address
  }
}

export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: firstName
  }
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_LASTNAME,
    payload: lastName
  }
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  }
}

function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_LOAN_TYPE:
    return {
      loanType: action.payload
    }
    case UPDATE_PROPERTY_TYPE:
    return {
      propertyType: action.payload
    }
    case UPDATE_CITY:
    return {
      city: action.payload
    }
    case UPDATE_PROP:
    return {
      propToBeUsedOn: action.payload
    }
    case UPDATE_FOUND: 
    return {
      found: action.payload
    }
    case UPDATE_AGENT:
    return {
      realEstateAgent: action.payload
    }
    case UPDATE_COST:
    return {
      cost: action.payload
    }
    case UPDATE_PAYMENT:
    return {
      downPayment: action.payload
    }
    case UPDATE_CREDIT:
    return {
      credit: action.payload
    }
    case UPDATE_HISTORY:
    return {
      history: action.payload
    }
    case UPDATE_ADDRESS_ONE:
    return {
      addressOne: action.payload
    }
    case UPDATE_ADDRESS_TWO:
    return {
      addressTwo: action.payload
    }
    case UPDATE_ADDRESS_THREE:
    return {
      addressThree: action.payload
    }
    case UPDATE_FIRSTNAME:
    return {
      firstName: action.payload
    }
    case UPDATE_LASTNAME:
    return {
      lastName: action.payload
    }
    case UPDATE_EMAIL:
    return {
      email: action.payload
    }
    default:
    return state
  }
}

export default reducer;