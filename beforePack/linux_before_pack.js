module.exports = async function (context) {
    const arch = context.arch;
    const config = context.electronPlatformName === 'linux' ? context.packager.config.linux : null;
    if (config) {
        if (arch === 'x64') {
            config.artifactName = '${productName}-${version}-linux-amd64.${ext}';
            config.extraFiles = [
                {
                    "from": "bins/flag.linux.txt",
                    "to": "bins/flag.linux.txt",
                },
                {
                    "from": "bins/yak_linux_amd64.zip",
                    "to": "bins/yak.zip",
                },
                {
                    "from": "report/template.zip",
                    "to": "report/template.zip",
                },
            ];
        } else if (arch === 'arm64') {
            config.artifactName = '${productName}-${version}-linux-arm64.${ext}';
            config.extraFiles = [
                {
                    "from": "bins/flag.linux.txt",
                    "to": "bins/flag.linux.txt",
                },
                {
                    "from": "bins/yak_linux_arm64.zip",
                    "to": "bins/yak.zip",
                },
                {
                    "from": "report/template.zip",
                    "to": "report/template.zip",
                },
            ];
        }
    }
};
