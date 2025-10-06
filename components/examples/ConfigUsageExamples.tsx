import React from 'react'
import { useConfig, useText, useLinks, useMenu, useSettings, useAppInfo } from '@/hooks/useConfig'

/**
 * ตัวอย่างการใช้งาน Configuration ใน Component
 * แสดงวิธีการเรียกใช้การตั้งค่าต่างๆ ได้ง่ายๆ
 */

// ตัวอย่าง 1: ใช้ useConfig() เพื่อเข้าถึงทุกอย่าง
export function ConfigUsageExample() {
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
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">ตัวอย่างการใช้งาน Configuration</h2>
      
      {/* ใช้ข้อมูลแอป */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800">ข้อมูลแอป</h3>
        <p>ชื่อ: {app.name}</p>
        <p>เวอร์ชัน: {app.version}</p>
        <p>ผู้พัฒนา: {app.developer}</p>
      </div>

      {/* ใช้ข้อความ */}
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-800">ข้อความ</h3>
        <p>ปุ่มดาวน์โหลด: {getText('actions.download')}</p>
        <p>สถานะโหลด: {getText('status.loading')}</p>
        <p>เมนูเกม: {getText('navigation.games')}</p>
      </div>

      {/* ใช้ลิงก์ */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h3 className="font-semibold text-yellow-800">ลิงก์</h3>
        <a href={getLink('appStore', 'googlePlay')} className="text-blue-600 hover:underline">
          Google Play Store
        </a>
        <br />
        <a href={getLink('social', 'facebook')} className="text-blue-600 hover:underline">
          Facebook
        </a>
      </div>

      {/* ใช้เมนู */}
      <div className="bg-purple-50 p-4 rounded-lg">
        <h3 className="font-semibold text-purple-800">เมนู</h3>
        <p>เมนูหลัก: {menu.main.length} รายการ</p>
        <p>เมนูผู้ใช้: {menu.user.length} รายการ</p>
        <p>เมนูฟุตเตอร์: {menu.footer.length} รายการ</p>
      </div>

      {/* ใช้การตั้งค่า */}
      <div className="bg-red-50 p-4 rounded-lg">
        <h3 className="font-semibold text-red-800">การตั้งค่า</h3>
        <p>ภาษา: {getSetting('app', 'language')}</p>
        <p>สกุลเงิน: {getSetting('app', 'currency')}</p>
        <p>โหมดมืด: {getSetting('app', 'darkMode')}</p>
      </div>
    </div>
  )
}

// ตัวอย่าง 2: ใช้ useText() เฉพาะ
export function TextUsageExample() {
  const { text, get } = useText()

  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h3 className="font-semibold text-green-800">การใช้ Text Hook</h3>
      
      {/* ใช้ข้อความโดยตรง */}
      <div className="space-y-2">
        <p>ปุ่ม: {text.actions.download}</p>
        <p>สถานะ: {text.status.loading}</p>
        <p>เมนู: {text.navigation.games}</p>
      </div>

      {/* ใช้ get function */}
      <div className="space-y-2 mt-4">
        <p>ปุ่ม: {get('actions.download')}</p>
        <p>สถานะ: {get('status.loading')}</p>
        <p>เมนู: {get('navigation.games')}</p>
      </div>
    </div>
  )
}

// ตัวอย่าง 3: ใช้ useLinks() เฉพาะ
export function LinksUsageExample() {
  const { links, get } = useLinks()

  return (
    <div className="p-4 bg-yellow-100 rounded-lg">
      <h3 className="font-semibold text-yellow-800">การใช้ Links Hook</h3>
      
      {/* ใช้ลิงก์โดยตรง */}
      <div className="space-y-2">
        <a href={links.appStore.googlePlay} className="text-blue-600 hover:underline block">
          Google Play Store
        </a>
        <a href={links.social.facebook} className="text-blue-600 hover:underline block">
          Facebook
        </a>
        <a href={links.support.helpCenter} className="text-blue-600 hover:underline block">
          ศูนย์ช่วยเหลือ
        </a>
      </div>

      {/* ใช้ get function */}
      <div className="space-y-2 mt-4">
        <a href={get('appStore', 'googlePlay')} className="text-blue-600 hover:underline block">
          Google Play Store (get)
        </a>
        <a href={get('social', 'facebook')} className="text-blue-600 hover:underline block">
          Facebook (get)
        </a>
      </div>
    </div>
  )
}

// ตัวอย่าง 4: ใช้ useMenu() เฉพาะ
export function MenuUsageExample() {
  const { menu, get } = useMenu()

  return (
    <div className="p-4 bg-purple-100 rounded-lg">
      <h3 className="font-semibold text-purple-800">การใช้ Menu Hook</h3>
      
      {/* แสดงเมนูหลัก */}
      <div className="space-y-2">
        <h4 className="font-medium">เมนูหลัก:</h4>
        {menu.main.map((item) => (
          <div key={item.id} className="ml-4">
            <span className="font-medium">{item.label}</span>
            {item.children && item.children.length > 0 && (
              <div className="ml-4 text-sm text-gray-600">
                {item.children.map((child) => (
                  <div key={child.id}>- {child.label}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ใช้ get function */}
      <div className="mt-4">
        <h4 className="font-medium">ค้นหาเมนู:</h4>
        <p>เมนูเกม: {get('main', 'games')?.label}</p>
        <p>เมนูโปรโมชั่น: {get('main', 'promotions')?.label}</p>
      </div>
    </div>
  )
}

// ตัวอย่าง 5: ใช้ useSettings() เฉพาะ
export function SettingsUsageExample() {
  const { settings, get } = useSettings()

  return (
    <div className="p-4 bg-red-100 rounded-lg">
      <h3 className="font-semibold text-red-800">การใช้ Settings Hook</h3>
      
      {/* แสดงการตั้งค่าแอป */}
      <div className="space-y-2">
        <h4 className="font-medium">การตั้งค่าแอป:</h4>
        <p>ภาษา: {settings.app.language}</p>
        <p>สกุลเงิน: {settings.app.currency}</p>
        <p>โหมดมืด: {settings.app.darkMode}</p>
        <p>การแจ้งเตือน: {settings.app.notifications ? 'เปิด' : 'ปิด'}</p>
      </div>

      {/* แสดงการตั้งค่าเกม */}
      <div className="space-y-2 mt-4">
        <h4 className="font-medium">การตั้งค่าเกม:</h4>
        <p>เสียงเอฟเฟกต์: {settings.gaming.soundEffects ? 'เปิด' : 'ปิด'}</p>
        <p>แชท: {settings.gaming.chatEnabled ? 'เปิด' : 'ปิด'}</p>
        <p>เดิมพันสูงสุด: {settings.gaming.maxBet.toLocaleString()} บาท</p>
      </div>

      {/* ใช้ get function */}
      <div className="mt-4">
        <h4 className="font-medium">ใช้ get function:</h4>
        <p>ภาษา: {get('app', 'language')}</p>
        <p>สกุลเงิน: {get('app', 'currency')}</p>
      </div>
    </div>
  )
}

// ตัวอย่าง 6: ใช้ useAppInfo() เฉพาะ
export function AppInfoUsageExample() {
  const appInfo = useAppInfo()

  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h3 className="font-semibold text-blue-800">การใช้ AppInfo Hook</h3>
      
      <div className="space-y-2">
        <p><strong>ชื่อแอป:</strong> {appInfo.name}</p>
        <p><strong>เวอร์ชัน:</strong> {appInfo.version}</p>
        <p><strong>ผู้พัฒนา:</strong> {appInfo.developer}</p>
        <p><strong>คำอธิบาย:</strong> {appInfo.description}</p>
        <p><strong>เว็บไซต์:</strong> 
          <a href={appInfo.website} className="text-blue-600 hover:underline ml-2">
            {appInfo.website}
          </a>
        </p>
        <p><strong>อีเมล:</strong> {appInfo.support}</p>
        <p><strong>ลิขสิทธิ์:</strong> {appInfo.copyright}</p>
      </div>
    </div>
  )
}

// ตัวอย่าง 7: Component ที่ใช้ configuration แบบง่าย
export function SimpleConfigComponent() {
  const { getText, getLink } = useConfig()

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Component ง่ายๆ</h3>
      
      <div className="space-y-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          {getText('actions.download')}
        </button>
        
        <a 
          href={getLink('appStore', 'googlePlay')}
          className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {getText('actions.install')}
        </a>
        
        <p className="text-gray-600">
          {getText('ui.welcome')} {getText('ui.hello')}!
        </p>
      </div>
    </div>
  )
}
