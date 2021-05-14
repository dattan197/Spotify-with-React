const initialState = {
  playlists: [
      {
          id: "4sfo4hQwaN2wDjgtQkFTI1",
          name: "US-UK songs",
          tracks: [
              {
                  id: "2ccW4vFSVKRgVjkZzvdjRw",
                  name: "That's Why You Go Away",
                  preview_url: "https://p.scdn.co/mp3-preview/577e231124dd8775922b81f510e07734a2f04073?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273ac4617cbd865dfeaa4372157"
              },
              {
                  id: "7rdtBpPpe4knfd7aD98h9X",
                  name: "Take Me to Your Heart",
                  preview_url: "https://p.scdn.co/mp3-preview/658ae61ac7b1a1b7b7bb9e6f242246be27e25c2d?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2734b8929ee375f3a2539bd2868"
              },
              {
                  id: "1OOtq8tRnDM8kG2gqUPjAj",
                  name: "Beat It",
                  preview_url: "https://p.scdn.co/mp3-preview/4901df6e0f8bf6ce93e08df7d98a50e220c45799?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be"
              },
              {
                  id: "3wuCCNCnBhJlwkIJTBZFiv",
                  name: "They Don't Care About Us",
                  preview_url: "https://p.scdn.co/mp3-preview/8b45e8eec4f6be9ecfd343a2db7dece8eb78d583?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273d0593178c6c2594693ee34b7"
              },
              {
                  id: "2kJwzbxV2ppxnQoYw4GLBZ",
                  name: "If the World Was Ending - feat. Julia Michaels",
                  preview_url: "https://p.scdn.co/mp3-preview/018d975f965ed16e92e601c53afa1c7e7ce9ab27?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273dedbec8cca43642f06533476"
              },
              {
                  id: "6lhZLbb0czULpjb2kFryPS",
                  name: "Let's Love",
                  preview_url: "https://p.scdn.co/mp3-preview/218a9663fcb2c3e5d88db68ee0a8e924e70f128c?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2735940eb4559e46f50d00b678a"
              },
          ]
      },
      {
          id: "3SdFAUVMAhJX5eomHjufg9",
          name: "Vietnamese songs",
          tracks: [
              {
                  id: "17iGUekw5nFt5mIRJcUm3R",
                  name: "Chúng Ta Của Hiện Tại",
                  preview_url: "https://p.scdn.co/mp3-preview/ceabc496d014ee7a59cfb55e974c0c52837c03df?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2735888c34015bebbf123957f6d"
              },
              {
                  id: "0f5yQttJS5nNxRAleF4kZO",
                  name: "Hãy Trao Cho Anh",
                  preview_url: "https://p.scdn.co/mp3-preview/757df0941c434b1d85eb5529ebc9f56fb8cf72af?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2730ac09baba508700ed0b5d4e3"
              },
              {
                  id: "2gT5LL3uRANxvvmDxaULbQ",
                  name: "Thuong Em La Dieu Anh Khong The Ngo",
                  preview_url: "https://p.scdn.co/mp3-preview/e18f1d5b7b501ef10d652c171bb8e759e7ef78cc?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273d695275db90bb8729ede2cef",
              },
              {
                  id: "5L6UkGeVNHy7CurA8aVhpy",
                  name: "Yêu Một Người Sao Buồn Đến Thế",
                  preview_url: "https://p.scdn.co/mp3-preview/d737c58a057ceebc82151b48eb72a3aea4f34586?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b27316941d69dae1a25b9a7f3259"
              },
              {
                  id: "2NEzxeMKW0mk5pr7tcrvs2",
                  name: "Có Chàng Trai Viết Lên Cây",
                  preview_url: "https://p.scdn.co/mp3-preview/d97e71dcb8b39f5bd8673193f6ca4d0e07e90b3c?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2734e4308fb52657d620674f1c0"
              },
              {
                  id: "5tc6Z6WeOCEzhWOvMD0sWA",
                  name: "Từ Đó (Mắt Biếc OST)",
                  preview_url: "https://p.scdn.co/mp3-preview/6004e30b0e6441acbec36096aaf3a4d6ed9d213e?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2737b939a734026f3521482cab2"
              },
              {
                  id: "3yWacnoBnM0lrzLmXAk44d",
                  name: "Em Không Sai, Chúng Ta Sai",
                  preview_url: "https://p.scdn.co/mp3-preview/59a742a04d1f9b3080bd3351df7c07990226c61a?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273ff22ed3b7faf55f2333c2d56"
              },
              {
                  id: "2Gt0kVB7kHnJZi0GTJe4Qm",
                  name: "Lac Nhau Co Phai Muon Doi. - Original",
                  preview_url: "https://p.scdn.co/mp3-preview/9f685547624dbbd1e49e0fda30df1acc6a5b92a3?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2737047c91e677bf2b741de54e1"
              },
              {
                  id: "5uye47llqkE8Oyn56Y3IkW",
                  name: "Nguoi Oi Nguoi O Dung Ve (feat. Suboi)",
                  preview_url: "https://p.scdn.co/mp3-preview/41eed4863a45ac12dabd6020755ebff11022a1c3?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273e90844f67adfa95ce2a58a70",
              },
              {
                  id: "6w1XQT4FPrChQvsFqmxxKC",
                  name: "Anh Ở Đây Mà",
                  preview_url: "https://p.scdn.co/mp3-preview/424d2c318a2ff958458b59ca69d76d94b99b075c?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2733e50574078686afbfc69c70d"
              },
              {
                  id: "7BSyMiUKDSXdnZ9wTmLPKv",
                  name: "Năm Ấy",
                  preview_url: "https://p.scdn.co/mp3-preview/abdc1529608144bbfd79666cd4e43e3d5c7c30d9?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b27309b6b199f656bb5723c03479"

              },
              {
                  id: "6v2XzgdJRZIdRbxD5euMal",
                  name: "Tháng 4 Là Lời Nói Dối Của Em",
                  preview_url: "https://p.scdn.co/mp3-preview/0b2cbdff3ea1793e6b3f6b7caf11b7f5ead40cbe?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273543e54ede9ce98b1c0487cdb"

              },
              {
                  id: "3vk3dClmtyZeCOInJJeRCB",
                  name: "Người Tình Mùa Đông",
                  preview_url: "https://p.scdn.co/mp3-preview/a483781cbc4e7061287d4fc9f0072f91a11cfa50?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2737cbe37f4434f9007b8a2f6d5"
              },
              {
                  id: "1PsWTHzfxVS1OTuk6caOiH",
                  name: "Phố Mùa Đông",
                  preview_url: "https://p.scdn.co/mp3-preview/943327a3100bba321b3d4b338294bd180f332e62?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2737cbe37f4434f9007b8a2f6d5"
              },
              {
                  id: "1Huy9G87D6pbIveFulsH0P",
                  name: "Âm Thầm Bên Em",
                  preview_url: "https://p.scdn.co/mp3-preview/ef0d505ab5cdf41f4eba6ca070cf0045bc16acf8?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273af31997b23b7e6e65de1816b"

              },
              {
                  id: "4stGDwiLe6DYjxCDSo4Xqf",
                  name: "Chờ Anh Nhé (feat. Hoang Rob)",
                  preview_url: "https://p.scdn.co/mp3-preview/414c589e3b20fc933e81db79f9f6a7fdd49efd79?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273e464830bf32e0b7bdf3616dc"

              },
              {
                  id: "72Gu8ceNV9sBq2nYibS6rL",
                  name: "Minh Yeu Nhau Tu Kiep Nao ? - Original",
                  preview_url: "https://p.scdn.co/mp3-preview/38704c1ccedc5cd87517d99858a79a82e5b3965e?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273c5ae1aca1876379c7e121ddb"
              },
          ]
      },
      {
          id: "0AxmqDEvQI7I1256gaaTjr",
          name: "Work hard, Play hard",
          tracks: [
              {
                  id: "0iTI5FTB9iEUtcMdx9YyZS",
                  name: "Stronger",
                  preview_url: "https://p.scdn.co/mp3-preview/21199b899aaa130c33acbe92e0aab39c7b384794?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b27370a71a630e82020b916a7b92"
              },
              {
                  id: "3LGk9yc6xhq4hAnDdXOsKd",
                  name: "Last Reunion (Epicmusicvn Series)",
                  preview_url: "https://p.scdn.co/mp3-preview/1d7812fcdb5e64c1b57cc6b6091ee18296c32501?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2735d1d3a415d849e10138ac25c"

              },
              {
                  id: "2kJwzbxV2ppxnQoYw4GLBZ",
                  name: "If the World Was Ending - feat. Julia Michaels",
                  preview_url: "https://p.scdn.co/mp3-preview/018d975f965ed16e92e601c53afa1c7e7ce9ab27?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273dedbec8cca43642f06533476"
              },
              {
                  id: "0lUSd7TCG8srh6HpIAEIWL",
                  name: "Power",
                  preview_url: "https://p.scdn.co/mp3-preview/4e0cf1570dd97250a96888e052747a936dedba07?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2733042c53026e29faf3a21c9f9"
              },
              {
                  id: "3f4fc8c8unrQeKecmUPEDR",
                  name: "Warriors",
                  preview_url: "https://p.scdn.co/mp3-preview/972c7ec00a23ee0cff37b0481f9d9cbd19526304?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273f8fa082806184fcb032d8e0a"
              },
          ]
      },
      {
          id: "7sHUzPVRg0uKdLpc9kJSBt",
          name: "Anime music",
          tracks: [
              {
                  id: "3wn5Rw7VBqwP0vAQtjMhOS",
                  name: "Anime Thighs",
                  preview_url: "https://p.scdn.co/mp3-preview/19017bb2f78086c00bd6349e47af3aa312781fb1?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2731c06a5c98056ec3ad95403b7"
              },
              {
                  id: "6oEjl3ONjKHvSeqna6w1Ir",
                  name: "Vibe Animes",
                  preview_url: "https://p.scdn.co/mp3-preview/fb9faf92a18fa6f2d7bc003eab37a43f0074fbeb?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273151f8e9ce3f0be191bfe612d"
              },
              {
                  id: "2nRmXQvAeo7N58r9RY5daI",
                  name: "5 Centimeters Per Second - End Theme",
                  preview_url: "https://p.scdn.co/mp3-preview/efde3596370f7194d3a7d195bb73d03abbbd08fa?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b27378b53d19bb739fe98f822152"

              },
              {
                  id: "4C4qRIny5lgSR0BDqkOuuC",
                  name: "Anime Luv",
                  preview_url: "https://p.scdn.co/mp3-preview/760eaa7ff20dc456eb8ebfaa98e5d5aab96f2b69?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2731f5fffb5a0279cf490e81f8b"
              },
              {
                  id: "0BhXjfwv3Du12NOIqSaRbo",
                  name: "Anime Sunset - Lofi Chill",
                  preview_url: "https://p.scdn.co/mp3-preview/f1df40b5765a8b7fc98b966796dea2e016594d32?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273f1ad44b81dcae1ef4ebcef3d"
              },
              {
                  id: "05IcB8INTaqWjWToIi2VzR",
                  name: "Anime - Lofi Hip Hop",
                  preview_url: "https://p.scdn.co/mp3-preview/13f9aa33f983f84f35f9c4d9dcc46ccefdb91952?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273c09e5f21747bc45c6327b6fd"
              },
          ]
      },
      {
          id: "2rUXMGofrCudMYZTXhIEcL",
          name: "Lofi music",
          tracks: [
              {
                  id: "1Qv4Gm6jCjK9wzZ9IXqFHE",
                  name: "Đánh Mất Em (Lofi Ver.)",
                  preview_url: "https://p.scdn.co/mp3-preview/5ce912712171d51deedf8454b0de7964e5727b4b?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273ded8c162a4f75bf366a34049",
              },
              {
                  id: "0bUYgpgrUaoFouvS0vf6qe",
                  name: "Lofi Rain",
                  preview_url: "https://p.scdn.co/mp3-preview/413c0bd757fa1dbe4a44262f9b5ddd02ae1546e8?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b273ac07f4708d0c27f95643d808"
              },
              {
                  id: "0ok7F6EBYsFrndFmcuCkNg",
                  name: "Lofi Beats for Relaxation",
                  preview_url: "https://p.scdn.co/mp3-preview/ce9ff8da5696604e112e14742069c673d4b8dd4d",
                  image: "https://i.scdn.co/image/39de2ce882685d19c55c54c1007f63e1b119ba51"

              },
              {
                  id: "3scT2J09FF902h0qrPnL4r",
                  name: "NARUTO VIBES(LOFI TYPE)🎶 | NARUTO ANIME BUT IN LOFI BEATS FORM🎧 | ",
                  preview_url: "https://p.scdn.co/mp3-preview/ed993f20fba7d7843fa465dadba485ace5d86b4a",
                  image: "https://i.scdn.co/image/ab6765630000ba8a679024005171dc563c6c6641"
              },
              {
                  id: "7BiGN9u1la3rNQPRmGDUa1",
                  name: "Hóa Tương Tư Lofi Ver",
                  preview_url: "https://p.scdn.co/mp3-preview/eb211a9a1b3c4f14601066b70c5bb2e62bc55638?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2731beb3984c9ffc0d25d6ac10a",
              },
              {
                  id: "16xb57jpnappEqnsIFeL7m",
                  name: "Phố Cũ Còn Anh Lofi Ver",
                  preview_url: "https://p.scdn.co/mp3-preview/af1729275990c0b597668a7ecebea89a7bf1f88f?cid=e198a5098c5649299e71e319dd9593e4",
                  image: "https://i.scdn.co/image/ab67616d0000b2731beb3984c9ffc0d25d6ac10a"
              },
          ]
      },
  ],
  tracks: {},
}

const PlayListsReducer = (state = initialState, action) => {
  //console.log(action);
  let tempPlaylist = [...state.playlists];
  switch (action.type) {
      case "GET_PLAYLISTS":
          /* console.log(action.playlists); */
          return { ...state, playlists: action.playlists };
      case "GET_SONGS":
          console.log(action.tracks);
          for (let index = 0; index < tempPlaylist.length; index++) {
              if (action.tracks.playlistId === tempPlaylist[index].id) {
                  tempPlaylist[index].tracks = action.tracks.items;
                  return { ...state, playlists: [...tempPlaylist] }
              }
          }
          return { ...state, tracks: action.tracks, playlists: tempPlaylist };
      case 'ADD_PLAYLIST':
          console.log(action);
          tempPlaylist.unshift(action.newPlaylist);
          return { ...state, playlists: tempPlaylist }
      case 'DELETE_PLAYLIST':
          console.log(action.playlistId);
          console.log(tempPlaylist.length);
          for (let index = 0; index < tempPlaylist.length; index++) {
              if (action.playlistId === tempPlaylist[index].id) {
                  tempPlaylist.splice(index, 1);
              }
          }
          return { ...state, playlists: tempPlaylist }
      case 'EDIT_PLAYLIST':
          console.log(action);
          tempPlaylist.forEach(item => {
              if (item.id === action?.playlistId) {
                  item.name = action?.playlistName;
                  console.log(item);
              }
          })
          return { ...state, playlists: tempPlaylist }
      case 'DELETE_MUSIC':
          console.log(action)
          let tempTracks = tempPlaylist.filter(playlist => playlist.id === action.playlistId)[0].tracks;
          let filteredTempTracks = tempTracks.filter(track => track.id !== action?.musicId);
          tempPlaylist.forEach(item => {
              if (item.id === action?.playlistId) {
                  item.tracks = filteredTempTracks;
                  console.log(item)
              }
          })
          return { ...state, playlists: tempPlaylist }
      case 'ADD_MUSIC':
          console.log(action);
          tempPlaylist.forEach(item => {
              if (item.id === action?.playlistId) {
                  item.tracks.unshift(action?.musicInfo);
                  console.log(item.tracks);
              }
          })
          return { ...state, playlists: tempPlaylist }
      case 'EDIT_MUSIC':
          console.log(action);
          return { ...state }
      default:
          return state;
  }
};

export default PlayListsReducer;
