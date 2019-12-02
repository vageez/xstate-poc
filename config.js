import { taggedSum } from 'daggy'

const IS = taggedSum('IS', {
    ON: [],
    OFF: []
})

export const FF = {
    INPERSONSIGNING : IS.ON
}