
export type PortableTextPayload = PortableTextBlock[]


export interface PortableTextBlock {
  style: string,
  _type: string,
  children: PortableTextChildren[],
  markDefs: PortableTextMarkDefs[]

}

export interface PortableTextChildren {
  _type: string,
  marks: string[],
  text: string
}

export interface PortableTextMarkDefs {
  _key: string,
  _type: string,
  [x: string]: any
}
