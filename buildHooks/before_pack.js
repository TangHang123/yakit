module.exports = async function (context) {
    const arch = context.arch;
    console.log('arch',context.arch)
    console.log('electronPlatformName',context.electronPlatformName)
    console.log('config',context.packager.config)
    console.log('context',context)
    /**linux */
    const linuxConfig = context.electronPlatformName === 'linux' ? context.packager.config.linux : null;
    if (linuxConfig) {
        switch (arch) {
            case 'x64':
                linuxConfig.artifactName = '${productName}-${version}-linux-amd64.${ext}';
                linuxConfig.extraFiles = [
                    ...linuxConfig.extraFiles,
                    {
                        "from": "bins/yak_linux_amd64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            case 'arm64':
                linuxConfig.artifactName = '${productName}-${version}-linux-arm64.${ext}';
                linuxConfig.extraFiles = [
                    ...linuxConfig.extraFiles,
                    {
                        "from": "bins/yak_linux_arm64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            default:
                break;
        }
        context.packager.config.linux={...linuxConfig}
    }
    /**mac */
    const macConfig = context.electronPlatformName === 'mac' ? context.packager.config.mac : null;
    if (macConfig) {
        switch (arch) {
            case 'x64':
                macConfig.artifactName = '${productName}-${version}-darwin-amd64.${ext}';
                macConfig.extraFiles = [
                    ...macConfig.extraFiles,
                    {
                        "from": "bins/yak_darwin_amd64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            case 'arm64':
                macConfig.artifactName = '${productName}-${version}-darwin-arm64.${ext}';
                macConfig.extraFiles = [
                    ...macConfig.extraFiles,
                    {
                        "from": "bins/yak_darwin_arm64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            default:
                break;
        }
        context.packager.config.mac={...macConfig}
    }
    /**win */
    const winConfig = context.electronPlatformName === 'win' ? context.packager.config.win : null;
    if (winConfig) {
        console.log('arch',arch)
        switch (arch) {
            case 'x64':
                winConfig.artifactName = '${productName}-${version}-windows-amd64.${ext}';
                winConfig.extraFiles = [
                    ...winConfig.extraFiles,
                    {
                        "from": "bins/yak_windows_amd64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            case 'arm64':
                winConfig.artifactName = '${productName}-${version}-windows-arm64.${ext}';
                winConfig.extraFiles = [
                    ...winConfig.extraFiles,
                    {
                        "from": "bins/yak_windows_arm64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            default:
                break;
        }
        context.packager.config.mac={...macConfig}
    }
};
