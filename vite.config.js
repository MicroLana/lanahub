//import { defineConfig } from 'vite';
//import react from '@vitejs/plugin-react';

//export default defineConfig({
<<<<<<< HEAD
  //plugins: [react()],
  //server: {
    //port: 5173,
  //},
  //resolve: {
    //extensions: ['.js', '.jsx'],
  //},
//});




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false
  }
=======
//plugins: [react()],
//server: {
//port: 5173,
//},
//resolve: {
//extensions: ['.js', '.jsx'],
//},
//});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
  },
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
});
