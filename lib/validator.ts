import {z} from 'zod'
import { formatNumberWithDecimal } from './utils'

const Price = (field: string) => 
    z.coerce
    .number()
    .refine(
        (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)),
    )