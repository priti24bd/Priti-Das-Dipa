import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import { defineConfig, Plugin } from 'vite';

function videoUploadPlugin(): Plugin {
  return {
    name: 'video-upload-plugin',
    configureServer(server) {
      server.middlewares.use('/api/upload-video', (req, res) => {
        if (req.method === 'POST') {
          const chunks: Buffer[] = [];
          req.on('data', (chunk) => chunks.push(chunk));
          req.on('end', () => {
            try {
              const buffer = Buffer.concat(chunks);
              const targetDir = path.resolve(__dirname, 'public/assets/videos');
              const srcDir = path.resolve(__dirname, 'src/assets/videos');
              const distDir = path.resolve(__dirname, 'dist/assets/videos');

              if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
              if (!fs.existsSync(srcDir)) fs.mkdirSync(srcDir, { recursive: true });
              if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

              const targetPath = path.join(targetDir, 'speaking.mp4');
              const tempPath = path.join(targetDir, 'speaking_temp.mp4');

              fs.writeFileSync(tempPath, buffer);

              // Use ffmpeg to optimize with +faststart for instant mobile and web streaming
              exec(
                `ffmpeg -y -i "${tempPath}" -c copy -movflags +faststart "${targetPath}" && rm -f "${tempPath}"`,
                (err) => {
                  if (err) {
                    // Fallback to direct write if ffmpeg copy failed
                    fs.writeFileSync(targetPath, buffer);
                    try { fs.unlinkSync(tempPath); } catch {}
                  }

                  // Also copy to src and dist
                  try {
                    fs.copyFileSync(targetPath, path.join(srcDir, 'speaking.mp4'));
                    fs.copyFileSync(targetPath, path.join(distDir, 'speaking.mp4'));
                  } catch {}

                  // Generate poster frame from second 2 of the video
                  const posterPath = path.resolve(__dirname, 'public/assets/images/speaking_poster.jpg');
                  const posterDist = path.resolve(__dirname, 'dist/assets/images/speaking_poster.jpg');
                  exec(`ffmpeg -y -ss 00:00:02 -i "${targetPath}" -frames:v 1 -q:v 2 "${posterPath}" && cp "${posterPath}" "${posterDist}" 2>/dev/null`, () => {});

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: '/assets/videos/speaking.mp4' }));
                }
              );
            } catch (err: any) {
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.writeHead(405).end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), videoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
