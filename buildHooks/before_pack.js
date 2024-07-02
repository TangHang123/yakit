module.exports = async function (context) {
    const archMap = {
        1: 'x64',
        2: 'ia32',
        3: 'armv7l',
        4: 'arm64',
        5: 'mips64el'
    };
    const arch = archMap[context.arch];
    console.log('arch', context.arch,arch)
    console.log('electronPlatformName', context.electronPlatformName)
    console.log('config', context.packager.config)
    console.log('context', context)
    /**linux */
    const linuxConfig = context.packager.config.linux;
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
        context.packager.config.linux = { ...linuxConfig }
    }
    /**mac */
    const macConfig = context.packager.config.mac;
    if (macConfig) {
        switch (arch) {
            case 'x64':
                macConfig.extraFiles = [
                    ...macConfig.extraFiles,
                    {
                        "from": "bins/yak_darwin_amd64.zip",
                        "to": "bins/yak.zip",
                    },
                ]
                break;
            case 'arm64':
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
        context.packager.config.mac = { ...macConfig }
    }
};
