import * as React from 'react'
import * as Loadable from 'react-loadable'

export default (loader: any) =>  Loadable({  loader,  loading: () => <div>Loading</div> })
