import { __esModule } from 'vuelidate/lib/vval'

const elevenDigits = (value) => value.toString().length === 11
const startsWith = (value) => value.toString().charAt(0) === '7'

export { elevenDigits, startsWith }
