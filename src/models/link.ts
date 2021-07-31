import mongoose, {
  Schema,
  Document,
  SchemaDefinition,
  SchemaOptions
} from 'mongoose'

/**
 * Link.
 */
const link: SchemaDefinition = {
  link: String,
  shortLink: String
}

/**
 * Options.
 */
const options: SchemaOptions = {
  timestamps: true
}

/**
 * Document.
 */
export interface LinkDocument extends Document {
  link: string
  shortLink: string
}

/**
 * Schema.
 */
export const LinkSchema = new Schema(link, options)

/**
 * Model.
 */
export const Link = mongoose.model<LinkDocument>('link', LinkSchema)
