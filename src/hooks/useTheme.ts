import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";
import { useGlobalStore } from "@/stores/modules/global";
import { getLightColor, getDarkColor } from "@/utils/color";
import { Theme } from "./interface";
import { menuTheme } from "@/styles/theme/menu";
import { asideTheme } from "@/styles/theme/aside";
import { headerTheme } from "@/styles/theme/header";

const DEFAULT_PRIMARY: string = "#009688";

export const useTheme = () => {
  const globalStore = useGlobalStore();
  const { isDark, primary } = storeToRefs(globalStore);
  const switchDark = () => {
    const html = document.documentElement as HTMLElement;
    if (isDark.value) html.setAttribute("class", "dark");
    else html.setAttribute("class", "");
    changePrimary(primary.value);
    setAsideTheme();
    setHeaderTheme();
  };
  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY;
      ElMessage({ type: "success", message: `主题颜色已重置为 ${DEFAULT_PRIMARY}` });
    }
    // 计算主题颜色变化
    document.documentElement.style.setProperty("--el-color-primary", val);
    document.documentElement.style.setProperty(
      "--el-color-primary-dark-2",
      isDark.value ? `${getLightColor(val, 0.2)}` : `${getDarkColor(val, 0.3)}`
    );
    for (let i = 1; i <= 9; i++) {
      const primaryColor = isDark.value ? `${getDarkColor(val, i / 10)}` : `${getLightColor(val, i / 10)}`;
      document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
    }
    globalStore.setPrimary(val);
  };
  // 设置菜单样式
  const setMenuTheme = () => {
    let type: Theme.ThemeType = "light";
    // if (layout.value === "transverse" && headerInverted.value) type = "inverted";
    // if (layout.value !== "transverse" && asideInverted.value) type = "inverted";
    if (isDark.value) type = "dark";
    const theme = menuTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
  };

  // 设置侧边栏样式
  const setAsideTheme = () => {
    let type: Theme.ThemeType = "light";
    // if (asideInverted.value) type = "inverted";
    if (isDark.value) type = "dark";
    const theme = asideTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
    setMenuTheme();
  };
  // 设置头部样式
  const setHeaderTheme = () => {
    let type: Theme.ThemeType = "light";
    // if (headerInverted.value) type = "inverted";
    if (isDark.value) type = "dark";
    const theme = headerTheme[type!];
    for (const [key, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(key, value);
    }
    setMenuTheme();
  };
  // init theme
  const initTheme = () => {
    switchDark();
    // if (isGrey.value) changeGreyOrWeak("grey", true);
    // if (isWeak.value) changeGreyOrWeak("weak", true);
  };
  return { switchDark, initTheme };
};