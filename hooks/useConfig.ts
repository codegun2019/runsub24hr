import { useMemo } from 'react'
import { 
  APP_CONFIG, 
  LINKS, 
  TEXT, 
  MENU, 
  SETTINGS,
  getText,
  getMenuItem,
  getLink,
  getSetting
} from '@/lib/config'

/**
 * Custom hook สำหรับเข้าถึงการตั้งค่าต่างๆ ของแอป
 * ทำให้ component สามารถเรียกใช้ configuration ได้ง่ายๆ
 */
export function useConfig() {
  // Memoize configuration values to prevent unnecessary re-renders
  const config = useMemo(() => ({
    // App metadata
    app: APP_CONFIG,
    
    // Links
    links: LINKS,
    
    // Text content
    text: TEXT,
    
    // Menu structure
    menu: MENU,
    
    // App settings
    settings: SETTINGS,
  }), [])

  // Helper functions
  const helpers = useMemo(() => ({
    // Get text by key (dot notation)
    getText: (key: string): string => getText(key),
    
    // Get menu item by type and ID
    getMenuItem: (menuType: keyof typeof MENU, itemId: string) => 
      getMenuItem(menuType, itemId),
    
    // Get link by category and key
    getLink: (category: keyof typeof LINKS, key: string): string => 
      getLink(category, key),
    
    // Get setting value
    getSetting: (category: keyof typeof SETTINGS, key: string): any => 
      getSetting(category, key),
  }), [])

  return {
    ...config,
    ...helpers,
  }
}

/**
 * Hook เฉพาะสำหรับการเข้าถึงข้อความ
 */
export function useText() {
  const { text, getText } = useConfig()
  
  return {
    text,
    get: getText,
  }
}

/**
 * Hook เฉพาะสำหรับการเข้าถึงลิงก์
 */
export function useLinks() {
  const { links, getLink } = useConfig()
  
  return {
    links,
    get: getLink,
  }
}

/**
 * Hook เฉพาะสำหรับการเข้าถึงเมนู
 */
export function useMenu() {
  const { menu, getMenuItem } = useConfig()
  
  return {
    menu,
    get: getMenuItem,
  }
}

/**
 * Hook เฉพาะสำหรับการเข้าถึงการตั้งค่า
 */
export function useSettings() {
  const { settings, getSetting } = useConfig()
  
  return {
    settings,
    get: getSetting,
  }
}

/**
 * Hook สำหรับการเข้าถึงข้อมูลแอป
 */
export function useAppInfo() {
  const { app } = useConfig()
  
  return app
}
