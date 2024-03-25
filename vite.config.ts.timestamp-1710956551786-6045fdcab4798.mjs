// vite.config.ts
import path from "path";
import react from "file:///D:/Projects/clevertc/Fitness/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svg from "file:///D:/Projects/clevertc/Fitness/node_modules/@neodx/svg/vite.mjs";
import { defineConfig } from "file:///D:/Projects/clevertc/Fitness/node_modules/vite/dist/node/index.js";
var __vite_injected_original_dirname = "D:\\Projects\\clevertc\\Fitness";
var vite_config_default = defineConfig({
  base: "/Krautsou-Andrei/",
  plugins: [
    react(),
    svg({
      group: true,
      root: "src/shared/ui/app-icon/assets",
      output: "public/sprite",
      metadata: "src/shared/ui/app-icon/sprite.h.ts",
      resetColors: {
        exclude: [/^layout/, /^result/, /^review/],
        replaceUnknown: "var(--icon-color)"
      }
    })
  ],
  server: {
    host: true,
    port: 3e3
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      "@public": path.resolve(__vite_injected_original_dirname, "public"),
      "@app": path.resolve(__vite_injected_original_dirname, "src/app"),
      "@entities": path.resolve(__vite_injected_original_dirname, "src/entities"),
      "@features": path.resolve(__vite_injected_original_dirname, "src/features"),
      "@pages": path.resolve(__vite_injected_original_dirname, "src/pages"),
      "@widgets": path.resolve(__vite_injected_original_dirname, "src/widgets"),
      "@shared": path.resolve(__vite_injected_original_dirname, "src/shared")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxjbGV2ZXJ0Y1xcXFxGaXRuZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxjbGV2ZXJ0Y1xcXFxGaXRuZXNzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy9jbGV2ZXJ0Yy9GaXRuZXNzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgc3ZnIGZyb20gJ0BuZW9keC9zdmcvdml0ZSc7XHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBiYXNlOiAnL0tyYXV0c291LUFuZHJlaS8nLFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIHJlYWN0KCksXHJcbiAgICAgICAgc3ZnKHtcclxuICAgICAgICAgICAgZ3JvdXA6IHRydWUsXHJcbiAgICAgICAgICAgIHJvb3Q6ICdzcmMvc2hhcmVkL3VpL2FwcC1pY29uL2Fzc2V0cycsXHJcbiAgICAgICAgICAgIG91dHB1dDogJ3B1YmxpYy9zcHJpdGUnLFxyXG4gICAgICAgICAgICBtZXRhZGF0YTogJ3NyYy9zaGFyZWQvdWkvYXBwLWljb24vc3ByaXRlLmgudHMnLFxyXG4gICAgICAgICAgICByZXNldENvbG9yczoge1xyXG4gICAgICAgICAgICAgICAgZXhjbHVkZTogWy9ebGF5b3V0LywgL15yZXN1bHQvLCAvXnJldmlldy9dLFxyXG4gICAgICAgICAgICAgICAgcmVwbGFjZVVua25vd246ICd2YXIoLS1pY29uLWNvbG9yKScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgICBwb3J0OiAzMDAwLFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbGVzczoge1xyXG4gICAgICAgICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgJ0BwdWJsaWMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncHVibGljJyksXHJcbiAgICAgICAgICAgICdAYXBwJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hcHAnKSxcclxuICAgICAgICAgICAgJ0BlbnRpdGllcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvZW50aXRpZXMnKSxcclxuICAgICAgICAgICAgJ0BmZWF0dXJlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvZmVhdHVyZXMnKSxcclxuICAgICAgICAgICAgJ0BwYWdlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvcGFnZXMnKSxcclxuICAgICAgICAgICAgJ0B3aWRnZXRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy93aWRnZXRzJyksXHJcbiAgICAgICAgICAgICdAc2hhcmVkJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9zaGFyZWQnKSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFEsT0FBTyxVQUFVO0FBRS9SLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFFaEIsU0FBUyxvQkFBb0I7QUFMN0IsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0EsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLFFBQ1QsU0FBUyxDQUFDLFdBQVcsV0FBVyxTQUFTO0FBQUEsUUFDekMsZ0JBQWdCO0FBQUEsTUFDcEI7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0QscUJBQXFCO0FBQUEsTUFDakIsTUFBTTtBQUFBLFFBQ0YsbUJBQW1CO0FBQUEsTUFDdkI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsV0FBVyxLQUFLLFFBQVEsa0NBQVcsUUFBUTtBQUFBLE1BQzNDLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFNBQVM7QUFBQSxNQUN6QyxhQUFhLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDbkQsYUFBYSxLQUFLLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ25ELFVBQVUsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUM3QyxZQUFZLEtBQUssUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDakQsV0FBVyxLQUFLLFFBQVEsa0NBQVcsWUFBWTtBQUFBLElBQ25EO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
