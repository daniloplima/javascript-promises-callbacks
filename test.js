const assert = require('assert')
const { buscaGIF } = require('./index')
const { buscaGIFComPromise } = require('./index')
const { deepEqual } = require('assert')

describe('vai executar funções assincronas', () =>{
   it('deve receber valores de arquivo resolvendo com callback', (done) => {
        const expected = {
	   "data":
   [
       {
           "type": "gif",
           "id": "amrNGnZUeWhZC",
           "slug": "pokemon-gif-gifs-amrNGnZUeWhZC",
           "url": "https://giphy.com/gifs/pokemon-gif-gifs-amrNGnZUeWhZC",
           "bitly_gif_url": "https://gph.is/1orIG0e",
           "bitly_url": "https://gph.is/1orIG0e",
           "embed_url": "https://giphy.com/embed/amrNGnZUeWhZC",
           "username": "",
           "source": "https://yukinari-okido.tumblr.com/post/78470121682",
           "rating": "g",
           "content_url": "",
           "source_tld": "yukinari-okido.tumblr.com",
           "source_post_url": "https://yukinari-okido.tumblr.com/post/78470121682",
           "is_sticker": 0,
           "import_datetime": "2014-03-05 21:02:00",
           "trending_datetime": "2016-08-03 10:45:02",
           "images":
           {
               "fixed_height_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_s.gif",
                   "width": "267",
                   "height": "200"
               },
               "original_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy_s.gif",
                   "width": "400",
                   "height": "300"
               },
               "fixed_width":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.gif",
                   "width": "200",
                   "height": "150",
                   "size": "431594",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.mp4",
                   "mp4_size": "90086",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.webp",
                   "webp_size": "241338"
               },
               "fixed_height_small_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100_s.gif",
                   "width": "133",
                   "height": "100"
               },
               "fixed_height_downsampled":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_d.gif",
                   "width": "267",
                   "height": "200",
                   "size": "157186",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_d.webp",
                   "webp_size": "74966"
               },
               "preview":
               {
                   "width": "150",
                   "height": "112",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.mp4",
                   "mp4_size": "43147"
               },
               "fixed_height_small":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.gif",
                   "width": "133",
                   "height": "100",
                   "size": "215973",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.mp4",
                   "mp4_size": "45308",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.webp",
                   "webp_size": "133212"
               },
               "downsized_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized_s.gif",
                   "width": "400",
                   "height": "300",
                   "size": "62647"
               },
               "downsized":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "downsized_large":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "fixed_width_small_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w_s.gif",
                   "width": "100",
                   "height": "75"
               },
               "preview_webp":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.webp",
                   "width": "147",
                   "height": "110",
                   "size": "47798"
               },
               "fixed_width_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_s.gif",
                   "width": "200",
                   "height": "150"
               },
               "fixed_width_small":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.gif",
                   "width": "100",
                   "height": "75",
                   "size": "132174",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.mp4",
                   "mp4_size": "36255",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.webp",
                   "webp_size": "88926"
               },
               "downsized_small":
               {
                   "width": "328",
                   "height": "246",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized-small.mp4",
                   "mp4_size": "176575"
               },
               "fixed_width_downsampled":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_d.gif",
                   "width": "200",
                   "height": "150",
                   "size": "91764",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_d.webp",
                   "webp_size": "48794"
               },
               "downsized_medium":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "original":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022",
                   "frames": "30",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.mp4",
                   "mp4_size": "282838",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.webp",
                   "webp_size": "703614"
               },
               "fixed_height":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.gif",
                   "width": "267",
                   "height": "200",
                   "size": "739598",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.mp4",
                   "mp4_size": "126006",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.webp",
                   "webp_size": "366582"
               },
               "looping":
               {
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-loop.mp4",
                   "mp4_size": "1532064"
               },
               "original_mp4":
               {
                   "width": "480",
                   "height": "360",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.mp4",
                   "mp4_size": "282838"
               },
               "preview_gif":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.gif",
                   "width": "111",
                   "height": "83",
                   "size": "49837"
               },
               "480w_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/480w_s.jpg",
                   "width": "480",
                   "height": "360"
               }
           },
           "title": "ash ketchum pokemon GIF",
           "_score": 2300033
            }
            ],
            "pagination":
            {
                "total_count": 8308,
                "count": 1,
                "offset": 0
            },
            "meta":
            {
            "status": 200,
            "msg": "OK",
            "response_id": "5b7c5f75416b6d7a4d1ce3e9"
            } }
        buscaGIF((err,res)=> {
            console.log(res)
            deepEqual(res, expected)     
            done()
        })
    })
    it('deve receber valores de arquivo, resolvendo com .then/catch', () =>{
        const expected = {
	   "data":
   [
       {
           "type": "gif",
           "id": "amrNGnZUeWhZC",
           "slug": "pokemon-gif-gifs-amrNGnZUeWhZC",
           "url": "https://giphy.com/gifs/pokemon-gif-gifs-amrNGnZUeWhZC",
           "bitly_gif_url": "https://gph.is/1orIG0e",
           "bitly_url": "https://gph.is/1orIG0e",
           "embed_url": "https://giphy.com/embed/amrNGnZUeWhZC",
           "username": "",
           "source": "https://yukinari-okido.tumblr.com/post/78470121682",
           "rating": "g",
           "content_url": "",
           "source_tld": "yukinari-okido.tumblr.com",
           "source_post_url": "https://yukinari-okido.tumblr.com/post/78470121682",
           "is_sticker": 0,
           "import_datetime": "2014-03-05 21:02:00",
           "trending_datetime": "2016-08-03 10:45:02",
           "images":
           {
               "fixed_height_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_s.gif",
                   "width": "267",
                   "height": "200"
               },
               "original_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy_s.gif",
                   "width": "400",
                   "height": "300"
               },
               "fixed_width":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.gif",
                   "width": "200",
                   "height": "150",
                   "size": "431594",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.mp4",
                   "mp4_size": "90086",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.webp",
                   "webp_size": "241338"
               },
               "fixed_height_small_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100_s.gif",
                   "width": "133",
                   "height": "100"
               },
               "fixed_height_downsampled":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_d.gif",
                   "width": "267",
                   "height": "200",
                   "size": "157186",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_d.webp",
                   "webp_size": "74966"
               },
               "preview":
               {
                   "width": "150",
                   "height": "112",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.mp4",
                   "mp4_size": "43147"
               },
               "fixed_height_small":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.gif",
                   "width": "133",
                   "height": "100",
                   "size": "215973",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.mp4",
                   "mp4_size": "45308",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.webp",
                   "webp_size": "133212"
               },
               "downsized_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized_s.gif",
                   "width": "400",
                   "height": "300",
                   "size": "62647"
               },
               "downsized":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "downsized_large":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "fixed_width_small_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w_s.gif",
                   "width": "100",
                   "height": "75"
               },
               "preview_webp":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.webp",
                   "width": "147",
                   "height": "110",
                   "size": "47798"
               },
               "fixed_width_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_s.gif",
                   "width": "200",
                   "height": "150"
               },
               "fixed_width_small":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.gif",
                   "width": "100",
                   "height": "75",
                   "size": "132174",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.mp4",
                   "mp4_size": "36255",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.webp",
                   "webp_size": "88926"
               },
               "downsized_small":
               {
                   "width": "328",
                   "height": "246",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized-small.mp4",
                   "mp4_size": "176575"
               },
               "fixed_width_downsampled":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_d.gif",
                   "width": "200",
                   "height": "150",
                   "size": "91764",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_d.webp",
                   "webp_size": "48794"
               },
               "downsized_medium":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "original":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022",
                   "frames": "30",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.mp4",
                   "mp4_size": "282838",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.webp",
                   "webp_size": "703614"
               },
               "fixed_height":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.gif",
                   "width": "267",
                   "height": "200",
                   "size": "739598",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.mp4",
                   "mp4_size": "126006",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.webp",
                   "webp_size": "366582"
               },
               "looping":
               {
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-loop.mp4",
                   "mp4_size": "1532064"
               },
               "original_mp4":
               {
                   "width": "480",
                   "height": "360",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.mp4",
                   "mp4_size": "282838"
               },
               "preview_gif":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.gif",
                   "width": "111",
                   "height": "83",
                   "size": "49837"
               },
               "480w_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/480w_s.jpg",
                   "width": "480",
                   "height": "360"
               }
           },
           "title": "ash ketchum pokemon GIF",
           "_score": 2300033
            }
            ],
            "pagination":
            {
                "total_count": 8308,
                "count": 1,
                "offset": 0
            },
            "meta":
            {
            "status": 200,
            "msg": "OK",
            "response_id": "5b7c5f75416b6d7a4d1ce3e9"
            } }
        return buscaGIFComPromise().then(resultado =>{
            deepEqual(resultado, expected)
        })
        deepEqual(null, expected)
    })
    
    it('deve receber resolvendo com async/await, e convertendo para promise', async ()=> {
         const expected = {
	   "data":
   [
       {
           "type": "gif",
           "id": "amrNGnZUeWhZC",
           "slug": "pokemon-gif-gifs-amrNGnZUeWhZC",
           "url": "https://giphy.com/gifs/pokemon-gif-gifs-amrNGnZUeWhZC",
           "bitly_gif_url": "https://gph.is/1orIG0e",
           "bitly_url": "https://gph.is/1orIG0e",
           "embed_url": "https://giphy.com/embed/amrNGnZUeWhZC",
           "username": "",
           "source": "https://yukinari-okido.tumblr.com/post/78470121682",
           "rating": "g",
           "content_url": "",
           "source_tld": "yukinari-okido.tumblr.com",
           "source_post_url": "https://yukinari-okido.tumblr.com/post/78470121682",
           "is_sticker": 0,
           "import_datetime": "2014-03-05 21:02:00",
           "trending_datetime": "2016-08-03 10:45:02",
           "images":
           {
               "fixed_height_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_s.gif",
                   "width": "267",
                   "height": "200"
               },
               "original_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy_s.gif",
                   "width": "400",
                   "height": "300"
               },
               "fixed_width":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.gif",
                   "width": "200",
                   "height": "150",
                   "size": "431594",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.mp4",
                   "mp4_size": "90086",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w.webp",
                   "webp_size": "241338"
               },
               "fixed_height_small_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100_s.gif",
                   "width": "133",
                   "height": "100"
               },
               "fixed_height_downsampled":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_d.gif",
                   "width": "267",
                   "height": "200",
                   "size": "157186",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200_d.webp",
                   "webp_size": "74966"
               },
               "preview":
               {
                   "width": "150",
                   "height": "112",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.mp4",
                   "mp4_size": "43147"
               },
               "fixed_height_small":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.gif",
                   "width": "133",
                   "height": "100",
                   "size": "215973",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.mp4",
                   "mp4_size": "45308",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/100.webp",
                   "webp_size": "133212"
               },
               "downsized_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized_s.gif",
                   "width": "400",
                   "height": "300",
                   "size": "62647"
               },
               "downsized":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "downsized_large":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "fixed_width_small_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w_s.gif",
                   "width": "100",
                   "height": "75"
               },
               "preview_webp":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.webp",
                   "width": "147",
                   "height": "110",
                   "size": "47798"
               },
               "fixed_width_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_s.gif",
                   "width": "200",
                   "height": "150"
               },
               "fixed_width_small":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.gif",
                   "width": "100",
                   "height": "75",
                   "size": "132174",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.mp4",
                   "mp4_size": "36255",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/100w.webp",
                   "webp_size": "88926"
               },
               "downsized_small":
               {
                   "width": "328",
                   "height": "246",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-downsized-small.mp4",
                   "mp4_size": "176575"
               },
               "fixed_width_downsampled":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_d.gif",
                   "width": "200",
                   "height": "150",
                   "size": "91764",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200w_d.webp",
                   "webp_size": "48794"
               },
               "downsized_medium":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022"
               },
               "original":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.gif",
                   "width": "400",
                   "height": "300",
                   "size": "1607022",
                   "frames": "30",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.mp4",
                   "mp4_size": "282838",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.webp",
                   "webp_size": "703614"
               },
               "fixed_height":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.gif",
                   "width": "267",
                   "height": "200",
                   "size": "739598",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.mp4",
                   "mp4_size": "126006",
                   "webp": "https://media2.giphy.com/media/amrNGnZUeWhZC/200.webp",
                   "webp_size": "366582"
               },
               "looping":
               {
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-loop.mp4",
                   "mp4_size": "1532064"
               },
               "original_mp4":
               {
                   "width": "480",
                   "height": "360",
                   "mp4": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy.mp4",
                   "mp4_size": "282838"
               },
               "preview_gif":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/giphy-preview.gif",
                   "width": "111",
                   "height": "83",
                   "size": "49837"
               },
               "480w_still":
               {
                   "url": "https://media2.giphy.com/media/amrNGnZUeWhZC/480w_s.jpg",
                   "width": "480",
                   "height": "360"
               }
           },
           "title": "ash ketchum pokemon GIF",
           "_score": 2300033
            }
            ],
            "pagination":
            {
                "total_count": 8308,
                "count": 1,
                "offset": 0
            },
            "meta":
            {
            "status": 200,
            "msg": "OK",
            "response_id": "5b7c5f75416b6d7a4d1ce3e9"
            } }
       
         const resultado = await buscaGIFComPromise()
         deepEqual(resultado, expected)
    })
 })    