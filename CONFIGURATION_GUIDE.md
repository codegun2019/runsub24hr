# 🚀 Flash App Configuration System Guide

## 📋 ภาพรวม

ระบบ Configuration ของ Flash App ได้รับการออกแบบให้รวมการตั้งค่าทั้งหมดไว้ในไฟล์เดียว เพื่อให้:
- **เรียกใช้ง่าย** - ใช้ hook หรือ function ง่ายๆ
- **แก้ไขง่าย** - แก้ไขในไฟล์เดียว
- **จัดการง่าย** - โครงสร้างชัดเจน แยกหมวดหมู่
- **Type Safe** - มี TypeScript support เต็มรูปแบบ

## 🗂️ โครงสร้างไฟล์

```
lib/
├── config.ts              # ไฟล์หลักรวมการตั้งค่าทั้งหมด
└── ...

hooks/
├── useConfig.ts           # Custom hooks สำหรับใช้งาน configuration
└── ...

components/examples/
└── ConfigUsageExamples.tsx  # ตัวอย่างการใช้งาน
```

## 🔧 การตั้งค่าที่รวมอยู่

### 1. **APP_CONFIG** - ข้อมูลพื้นฐานแอป
```typescript
export const APP_CONFIG = {
  name: "Flash24Hr Gaming",
  version: "1.0.0",
  developer: "ThaiGaming Corporation",
  description: "แอปเกมคาสิโนออนไลน์ 24 ชั่วโมง",
  website: "https://flash24hr.com",
  support: "support@flash24hr.com",
  copyright: "© 2024 ThaiGaming Corporation. All rights reserved.",
}
```

### 2. **LINKS** - ลิงก์ภายนอกทั้งหมด
```typescript
export const LINKS = {
  appStore: {
    googlePlay: "https://play.google.com/store/apps/details?id=...",
    appStore: "https://apps.apple.com/app/...",
  },
  social: {
    facebook: "https://facebook.com/flash24hr",
    twitter: "https://twitter.com/flash24hr",
  },
  support: {
    helpCenter: "https://flash24hr.com/help",
    contactUs: "https://flash24hr.com/contact",
  },
  // ... อื่นๆ
}
```

### 3. **TEXT** - ข้อความทั้งหมดในแอป
```typescript
export const TEXT = {
  actions: {
    download: "ดาวน์โหลด",
    install: "ติดตั้ง",
    play: "เล่นเกม",
  },
  status: {
    loading: "กำลังโหลด...",
    success: "สำเร็จ",
    error: "เกิดข้อผิดพลาด",
  },
  navigation: {
    home: "หน้าแรก",
    games: "เกม",
    promotions: "โปรโมชั่น",
  },
  // ... อื่นๆ
}
```

### 4. **MENU** - โครงสร้างเมนูทั้งหมด
```typescript
export const MENU = {
  main: [
    {
      id: "home",
      label: "หน้าแรก",
      path: "/",
      icon: "home",
      children: [],
    },
    {
      id: "games",
      label: "เกม",
      path: "/games",
      icon: "gamepad",
      children: [
        { id: "slot", label: "สล็อต", path: "/games/slot" },
        { id: "poker", label: "โป๊กเกอร์", path: "/games/poker" },
      ],
    },
    // ... อื่นๆ
  ],
  user: [...],
  footer: [...],
}
```

### 5. **SETTINGS** - การตั้งค่าแอป
```typescript
export const SETTINGS = {
  app: {
    language: "th",
    timezone: "Asia/Bangkok",
    currency: "THB",
    darkMode: "auto",
  },
  gaming: {
    soundEffects: true,
    chatEnabled: true,
    maxBet: 10000,
  },
  // ... อื่นๆ
}
```

## 🎣 การใช้งานด้วย Custom Hooks

### **useConfig()** - เข้าถึงทุกอย่าง
```typescript
import { useConfig } from '@/hooks/useConfig'

function MyComponent() {
  const { 
    app, 
    links, 
    text, 
    menu, 
    settings,
    getText,
    getLink,
    getMenuItem,
    getSetting
  } = useConfig()

  return (
    <div>
      <h1>{app.name}</h1>
      <button>{getText('actions.download')}</button>
      <a href={getLink('appStore', 'googlePlay')}>Google Play</a>
    </div>
  )
}
```

### **useText()** - เฉพาะข้อความ
```typescript
import { useText } from '@/hooks/useConfig'

function TextComponent() {
  const { text, get } = useText()

  return (
    <div>
      <p>{text.actions.download}</p>
      <p>{get('status.loading')}</p>
    </div>
  )
}
```

### **useLinks()** - เฉพาะลิงก์
```typescript
import { useLinks } from '@/hooks/useConfig'

function LinksComponent() {
  const { links, get } = useLinks()

  return (
    <div>
      <a href={links.social.facebook}>Facebook</a>
      <a href={get('appStore', 'googlePlay')}>Google Play</a>
    </div>
  )
}
```

### **useMenu()** - เฉพาะเมนู
```typescript
import { useMenu } from '@/hooks/useConfig'

function MenuComponent() {
  const { menu, get } = useMenu()

  return (
    <nav>
      {menu.main.map(item => (
        <a key={item.id} href={item.path}>{item.label}</a>
      ))}
    </nav>
  )
}
```

### **useSettings()** - เฉพาะการตั้งค่า
```typescript
import { useSettings } from '@/hooks/useConfig'

function SettingsComponent() {
  const { settings, get } = useSettings()

  return (
    <div>
      <p>ภาษา: {settings.app.language}</p>
      <p>สกุลเงิน: {get('app', 'currency')}</p>
    </div>
  )
}
```

### **useAppInfo()** - เฉพาะข้อมูลแอป
```typescript
import { useAppInfo } from '@/hooks/useConfig'

function AppInfoComponent() {
  const appInfo = useAppInfo()

  return (
    <div>
      <h1>{appInfo.name}</h1>
      <p>เวอร์ชัน: {appInfo.version}</p>
      <p>ผู้พัฒนา: {appInfo.developer}</p>
    </div>
  )
}
```

## 🔧 Helper Functions

### **getText(key)** - รับข้อความด้วย dot notation
```typescript
import { getText } from '@/lib/config'

// ใช้ใน component ที่ไม่ต้องการ hook
const downloadText = getText('actions.download')
const loadingText = getText('status.loading')
```

### **getLink(category, key)** - รับลิงก์
```typescript
import { getLink } from '@/lib/config'

const googlePlayLink = getLink('appStore', 'googlePlay')
const facebookLink = getLink('social', 'facebook')
```

### **getMenuItem(menuType, itemId)** - รับเมนู
```typescript
import { getMenuItem } from '@/lib/config'

const gamesMenu = getMenuItem('main', 'games')
const profileMenu = getMenuItem('user', 'profile')
```

### **getSetting(category, key)** - รับการตั้งค่า
```typescript
import { getSetting } from '@/lib/config'

const language = getSetting('app', 'language')
const maxBet = getSetting('gaming', 'maxBet')
```

## 📝 วิธีการแก้ไขและเพิ่มเติม

### **เพิ่มข้อความใหม่**
```typescript
// ใน lib/config.ts
export const TEXT = {
  actions: {
    download: "ดาวน์โหลด",
    install: "ติดตั้ง",
    // เพิ่มใหม่
    share: "แชร์",
    bookmark: "บุ๊กมาร์ค",
  },
  // เพิ่มหมวดหมู่ใหม่
  newCategory: {
    title: "หัวข้อใหม่",
    subtitle: "หัวข้อย่อย",
  },
}
```

### **เพิ่มลิงก์ใหม่**
```typescript
// ใน lib/config.ts
export const LINKS = {
  appStore: {
    googlePlay: "https://play.google.com/...",
    // เพิ่มใหม่
    samsungStore: "https://galaxy.store/...",
  },
  // เพิ่มหมวดหมู่ใหม่
  newLinks: {
    documentation: "https://docs.flash24hr.com",
    api: "https://api.flash24hr.com",
  },
}
```

### **เพิ่มเมนูใหม่**
```typescript
// ใน lib/config.ts
export const MENU = {
  main: [
    // ... เมนูเดิม
    {
      id: "newMenu",
      label: "เมนูใหม่",
      path: "/new-menu",
      icon: "star",
      children: [
        { id: "submenu1", label: "เมนูย่อย 1", path: "/new-menu/sub1" },
        { id: "submenu2", label: "เมนูย่อย 2", path: "/new-menu/sub2" },
      ],
    },
  ],
}
```

## 🎯 ตัวอย่างการใช้งานจริง

### **Component ปุ่มดาวน์โหลด**
```typescript
import { useConfig } from '@/hooks/useConfig'

export function DownloadButton() {
  const { getText, getLink } = useConfig()

  return (
    <a 
      href={getLink('appStore', 'googlePlay')}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
    >
      {getText('actions.download')}
    </a>
  )
}
```

### **Component เมนูนำทาง**
```typescript
import { useMenu } from '@/hooks/useConfig'

export function NavigationMenu() {
  const { menu } = useMenu()

  return (
    <nav className="flex space-x-6">
      {menu.main.map(item => (
        <a 
          key={item.id} 
          href={item.path}
          className="text-gray-700 hover:text-blue-600"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
```

### **Component ข้อมูลแอป**
```typescript
import { useAppInfo } from '@/hooks/useConfig'

export function AppInfo() {
  const appInfo = useAppInfo()

  return (
    <footer className="bg-gray-100 p-6">
      <div className="text-center">
        <h3 className="font-semibold">{appInfo.name}</h3>
        <p className="text-sm text-gray-600">
          เวอร์ชัน {appInfo.version} | {appInfo.copyright}
        </p>
        <a href={appInfo.website} className="text-blue-600 hover:underline">
          {appInfo.website}
        </a>
      </div>
    </footer>
  )
}
```

## 🚨 ข้อควรระวัง

1. **อย่าแก้ไขไฟล์โดยตรง** - ใช้ function ที่มีอยู่แล้ว
2. **ตรวจสอบ Type** - ใช้ TypeScript เพื่อความปลอดภัย
3. **Cache ข้อมูล** - ข้อมูลจะถูก cache ใน memory
4. **Performance** - ใช้ useMemo ใน hook เพื่อป้องกัน re-render

## 🔄 การอัพเดท

เมื่อแก้ไข configuration:
1. แก้ไขไฟล์ `lib/config.ts`
2. ข้อมูลจะอัพเดททันทีใน component
3. ไม่ต้อง restart development server
4. TypeScript จะตรวจสอบ type ให้อัตโนมัติ

## 📚 ไฟล์ที่เกี่ยวข้อง

- `lib/config.ts` - ไฟล์หลัก configuration
- `hooks/useConfig.ts` - Custom hooks
- `components/examples/ConfigUsageExamples.tsx` - ตัวอย่างการใช้งาน
- `CONFIGURATION_GUIDE.md` - คู่มือนี้

---

**🎉 ตอนนี้คุณสามารถจัดการการตั้งค่าทั้งหมดของแอปได้จากไฟล์เดียวแล้ว!**
