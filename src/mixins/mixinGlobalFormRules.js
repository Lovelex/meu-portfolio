export default {
  data: () => ({
    inputRules: {
      required: v => (!!v && !!v.length && !!v.trim().length) || "O campo deve ser preenchido",
      fullName: v => (!!v && !!v.match(/\w+ \w+/g)) || "Você deve preencher seu nome completo",
      email: v => (!!v && /.+@.+\..+/.test(v)) || "E-mail precisa ser válido",
      min: v => (!!v && v.length >= 6) || "O senha dever ter no mínimo 6 caracteres",
      sms: v => !!v && v.match(/\d/g).length == 6 || "O código sms sevem ter 6 dígitos",
      ddd: v => (!!v && v.length === 2) || "DDD deve ter 2 dígitos",
      zip: v => (!!v && v.length === 8) || "CEP inválido",
      cpf: v => (!!v && v.match(/\d/g).length === 11) || "cpf inválido",
      isFileBiggerThanLimiteSize(v) {
        return (
          (!!v && v.size <= 1000000) ||
          `O arquivo não pode ser maior que 1MB`
        );
      },
      onlyNumbers: v => (!(/\D/g.test(v))) || "Apenas números são permitidos",
      phone: v => {
        if (v && v.match(/\d/g)) {
          return (v.match(/\d/g).length === 10) || (v.match(/\d/g).length === 11) || 'Telefone Inválido'
        } else {
          return 'Telefone Inválido'
        }
      },
      startsWithHttp: v => {
        if (!v) {
          return
        }
        if (!!v && !v.startsWith('https://')) {

          return 'Você deve passar seu nome de perfil, não o link'
        }
      }
    }
  }),
  methods: {
    isInputEmpty(...values) {
      const validations = []
      values.forEach(value => {
        const isNotValid = !value || !value.length || !value.trim().length
        validations.push(isNotValid)
      })
      const isSomeNotValid = !!validations.filter(validation => validation === true).length
      return isSomeNotValid
    }
  }
}