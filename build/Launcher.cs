using System;
using System.IO;
using System.IO.Compression;
using System.Diagnostics;

// Feekr Code — self-extracting launcher.
// Tuzilma: [launcher.exe baytlari][app.zip baytlari][8 bayt: zip uzunligi (LE)]
// Ishga tushganda zip'ni vaqtinchalik papkaga ochadi (keshlaydi) va Feekr Code.exe ni ishga tushiradi.
class FeekrLauncher
{
    [STAThread]
    static void Main()
    {
        try
        {
            string self = Process.GetCurrentProcess().MainModule.FileName;
            string tmp = Path.Combine(Path.GetTempPath(), "FeekrCode");
            string exe = Path.Combine(tmp, "Feekr Code.exe");

            using (var fs = new FileStream(self, FileMode.Open, FileAccess.Read))
            {
                fs.Seek(-8, SeekOrigin.End);
                byte[] lenb = new byte[8];
                fs.Read(lenb, 0, 8);
                long zipLen = BitConverter.ToInt64(lenb, 0);
                long zipStart = fs.Length - 8 - zipLen;

                string stampPath = Path.Combine(tmp, ".feekr-stamp");
                string myStamp = zipStart + "_" + zipLen;
                bool needExtract = !File.Exists(exe);
                if (!needExtract)
                {
                    try { if (File.ReadAllText(stampPath) != myStamp) needExtract = true; }
                    catch { needExtract = true; }
                }

                if (needExtract)
                {
                    try { if (Directory.Exists(tmp)) Directory.Delete(tmp, true); } catch { }
                    Directory.CreateDirectory(tmp);
                    string ztmp = Path.Combine(Path.GetTempPath(), "feekr_app_" + zipLen + ".zip");
                    fs.Seek(zipStart, SeekOrigin.Begin);
                    using (var outz = new FileStream(ztmp, FileMode.Create, FileAccess.Write))
                    {
                        byte[] buf = new byte[1 << 20];
                        long remaining = zipLen;
                        while (remaining > 0)
                        {
                            int r = fs.Read(buf, 0, (int)Math.Min(buf.Length, remaining));
                            if (r <= 0) break;
                            outz.Write(buf, 0, r);
                            remaining -= r;
                        }
                    }
                    ZipFile.ExtractToDirectory(ztmp, tmp);
                    try { File.Delete(ztmp); } catch { }
                    File.WriteAllText(stampPath, myStamp);
                }
            }

            var psi = new ProcessStartInfo(exe);
            psi.UseShellExecute = true;
            psi.WorkingDirectory = tmp;
            Process.Start(psi);
        }
        catch (Exception ex)
        {
            try { System.Windows.Forms.MessageBox.Show(ex.ToString(), "Feekr Code"); } catch { }
        }
    }
}
