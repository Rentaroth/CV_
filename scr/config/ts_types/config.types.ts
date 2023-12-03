interface _config {
  db: {
    active: string | undefined,
    mongo: {
      uri: string,
    },
  },

}

export { _config }