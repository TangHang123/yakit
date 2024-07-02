module.exports = async function (context) {
    console.log('arch', context.arch, arch)
    console.log('electronPlatformName', context.electronPlatformName)
    console.log('context.packager.config.linux', context.packager.config.linux)
    console.log('context.packager.config.mac', context.packager.config.mac)
};
