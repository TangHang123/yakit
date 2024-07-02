module.exports = async function (context) {
    const arch = context.arch;
    const config = context.electronPlatformName === 'linux' ? context.packager.config.linux : null;
    if (config) {
        switch (arch) {
            case 'x64':
                config.artifactName = '${productName}-${version}-linux-amd64.${ext}';
                config.extraFiles = [
                    ...config.extraFiles,
                    {
                        "from": "bins/yak_linux_amd64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            case 'arm64':
                config.artifactName = '${productName}-${version}-linux-arm64.${ext}';
                config.extraFiles = [
                    ...config.extraFiles,
                    {
                        "from": "bins/yak_linux_arm64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            default:
                break;
        }
    }
};
