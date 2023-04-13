interface ViteEnv {
  VITE_API_URL: string;
  VITE_PORT: number;
  VITE_OPEN: boolean;
  VITE_GLOB_APP_TITLE: string;
  VITE_DROP_CONSOLE: boolean;
  VITE_BUILD_GZIP: boolean;
  VITE_REPORT: boolean;
}

/**
 * env 包装函数
 * @param env 自定义环境配置对象
 * @returns 包装后的自定义环境配置对象
 */
export function wrapperEnv(env: Record<string, any>): ViteEnv {
  const res: any = {};
  for (const envName of Object.keys(env)) {
    let envValue = env[envName];
    envValue = envValue === "true" ? true : envValue === "false" ? false : envValue;
    if (envName === "VITE_PORT") {
      envValue = Number(envValue);
    }
    res[envName] = envValue;
  }
  return res;
}
