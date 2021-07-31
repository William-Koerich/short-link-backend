import { IsString } from 'class-validator'

export class LinkRequest {
  @IsString()
  link: string
}
