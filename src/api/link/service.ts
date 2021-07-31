import { NotFoundError } from 'routing-controllers'
import { Link } from './../../models/link'
import { LinkRequest } from './requests/link-request'

/**
 * Save link.
 */
export const save = async ({ link }: LinkRequest) => {
  const { createHmac } = await import('crypto')

  const secret = link
  const shortLink = createHmac('sha1', secret).update('Short').digest('hex')

  const data = {
    link,
    shortLink
  }

  console.log(data)

  Link.create(data)

  return data
}

/**
 * Return shortned link.
 */
export const findRealURL = async (shortLink: string) => {
  const foundLink = await Link.findOne({ shortLink }).lean()

  if (!foundLink) {
    throw new NotFoundError('Link não encontrado')
  }

  return foundLink.link
}
