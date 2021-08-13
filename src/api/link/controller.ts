import {
  Get,
  Post,
  Body,
  OnUndefined,
  JsonController,
  Param,
  Res
} from 'routing-controllers'

import { Response } from 'express'

import { LinkRequest } from './requests/link-request'
import { save, findRealURL } from './service'

@JsonController('/link')
export class LinkController {
  @Get('/:shortLink')
  @OnUndefined(204)
  async findRealURL(
    @Param('shortLink') shortLink: string,
    @Res() response: Response
  ) {
    /**
     * Return shortlink.
     */
    const realLink = await findRealURL(shortLink)

    console.log(realLink)

    response.redirect(realLink)

    return response
  }

  @Post('/')
  @OnUndefined(204)
  saveLink(@Body() link: LinkRequest) {
    /**
     * Save link.
     */
    return save(link)
  }
}
