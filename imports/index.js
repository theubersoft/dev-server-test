const destinations = {
  'DO': {
    storagePath  : '/home/ubersoft/BN/uploads',
    downloadRoute: '/home/ubersoft/BN/uploads',
  },
  'DEV': {
    storagePath  : `${ process.env.HOME }/Downloads/BN/uploads`,
    downloadRoute: `${ process.env.HOME }/Downloads/BN/uploads`,
  },
}

export const destination = process.env.NODE_ENV === 'development' ? destinations.DEV : destinations.DO

setTimeout(() => {
  console.log(destination)
}, 500)