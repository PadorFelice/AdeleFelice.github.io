const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Shooting Stars',
            artist: '碧蓝档案',
            url: 'http://music.163.com/song/media/outer/url?id=2041192599.mp3',
            cover: 'https://p2.music.126.net/ptLXVC_R7xzczPq8jDhteA==/109951168556363112.jpg?param=130y130',
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
        },
        {
            name: 'Pixel Time',
            artist: '蜜柑黛西蕾',
            url: 'http://music.163.com/song/media/outer/url?id=2062135555.mp3',
            cover: 'https://p2.music.126.net/NiHQRBqasAOAJdzk8hiKAg==/109951168723181271.jpg?param=130y130',
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
        },
    ]
});