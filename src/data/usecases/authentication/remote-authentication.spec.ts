import faker from 'faker'

import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'
import { mockAuthentication } from '../../../domain/test/mock-authentication'

const makeSut = (url = faker.internet.url()) => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return { sut, httpPostClientSpy }
}

describe('remote authentication', () => {
  it('should call HttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('should call HttpPostClient with correct body', async () => {
    const { httpPostClientSpy, sut } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.body).toEqual(authenticationParams)
  })
})
