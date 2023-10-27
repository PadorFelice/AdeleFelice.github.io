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
            name: '花の塔',
            artist: 'さユり',
            url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',
            cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
        },
        {
            name: '花の塔',
            artist: 'さユり',
            url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',
            cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
        },
    ]
});