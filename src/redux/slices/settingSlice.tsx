"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ClientSetting } from '@/types'
import { data } from '@/lib/data'
// import { ClientSetting, SiteCurrency } from '@/types'

interface SettingState {
  setting: ClientSetting
}

const initialState: SettingState = {
  setting: {
    ...data.settings[0],
    currency: data.settings[0].defaultCurrency,
  },
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<ClientSetting>) => {
      state.setting = {
        ...action.payload,
        currency: action.payload.currency || state.setting.currency,
      }
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.setting.currency = action.payload
    },
  },
})

export const { setSetting, setCurrency } = settingSlice.actions
export default settingSlice.reducer
