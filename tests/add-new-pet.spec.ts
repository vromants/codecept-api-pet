import { petFactory } from '../support/factory/pet.factory'

Feature('Add new pet feature')

Scenario('Add new pet', ({ I }) => {
  const newPet = petFactory.build()
  I.sendPostRequest('pet', newPet)
  I.seeResponseCodeIsSuccessful()
  I.seeResponseContainsJson(newPet)
  I.sendGetRequest(`pet/${newPet.id}`)
  I.seeResponseContainsJson(newPet)
})
