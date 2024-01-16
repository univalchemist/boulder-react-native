import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  eventHeader: {
    width: '100%',
    paddingHorizontal: RW(16),
    paddingVertical: RH(12),
    backgroundColor: Colors.Grey.Lighter,
  },
  eventHeaderText: {
    ...font('regular', 12, Colors.Primary.Dark, 16),
    textTransform: 'uppercase',
  },
  eventHeaderDot: {
    width: RH(4),
    height: RH(4),
    borderRadius: RH(4),
    backgroundColor: Colors.Grey.Default,
    marginHorizontal: RW(8),
  },
})
