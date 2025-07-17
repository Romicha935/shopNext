// src/types/index.ts

export interface SiteCurrency {
  code: string       // যেমন: 'USD', 'BDT'
  symbol: string     // যেমন: '$', '৳'
  name: string       // যেমন: 'US Dollar', 'Bangladeshi Taka'
}

export interface ClientSetting {
  defaultCurrency: string            // ডিফল্ট কারেন্সি কোড
  currency: string                   // বর্তমানে ব্যবহৃত কারেন্সি কোড
  availableCurrencies: SiteCurrency[]  // সাপোর্টেড কারেন্সির লিস্ট
  // প্রয়োজন অনুসারে এখানে অন্য ফিল্ড যোগ করতে পারো, যেমন:
  // siteName?: string
  // theme?: 'light' | 'dark'
}
