'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "15229902de15ee8733d74b6448ed1912",
".git/config": "7e9441487992a2c2f93f3ff2903cf879",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1aa3b94b1662d9df59f7acab4ebfa812",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "079cb5fb50d67458d95345738ca41281",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd63a2897332506f2b0e92b8d975f637",
".git/logs/refs/heads/master": "dd63a2897332506f2b0e92b8d975f637",
".git/logs/refs/remotes/origin/master": "50e591e4a65089f9f93df7df3c842d9a",
".git/objects/03/bca157c080dc612ede53a7099af2d6bc88919c": "da27c38d2237778ed8ac7d5a780857c0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/d58904d844e86636246ddedaa8972844f39bd6": "d2817bc7b4bf8dda9916c78f659bae26",
".git/objects/0a/4a5ba49a1232f32514958d5e566858bdc5d4c6": "b53c285f64acf8010a3621f708b981ad",
".git/objects/11/8157cdc344f451296d44616f59112ed405d3a2": "5013edf7d5724e03b4aa6dfbd4939c63",
".git/objects/15/a89f9e6ba231afbae0ac191d35137114c2ca64": "bb29c71a55b207d23bededecafc96108",
".git/objects/16/268d73e5da636576bcaf49a0af2253c0bcd34e": "a4c8bbe518ad114d5928861d8ba37726",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/28/ca2db6b22bf6bb14b580fa3cb0b18349a2f485": "6220d33d4dffa323a7f127a80af3c0ff",
".git/objects/29/0d736bd669533c9daba8926e7e29dbab546cf2": "69b218122e6cf1f3321afa734c58997b",
".git/objects/2b/4dc8c893f6edf39e32d516dc8220acc9adbabc": "940b43216a27a7b9f3b3772a4a864728",
".git/objects/31/20e1dd74f77b37d6284b9a80bd11223d7fc1f8": "e7bbffba1788361704981337f67bded3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/41/177dc5962676eea90f82197e4bae24ceb31659": "3268571612f844826df92682184071c9",
".git/objects/43/fccc9e85b5ad4e4cde28e0711cbdbb0b59e762": "4fb591edcdb84c111f802b0502650d36",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/a99a3dced4cfe61581ea145515cc593c0e1bf5": "fdcc0dfea9b479ad3c473d2ee4177c43",
".git/objects/47/e154b4110ab1dfc95352ffde2b10fa3cb11cad": "b91ebdbb709c06faa5159e75017cf010",
".git/objects/53/ea44bfaf848ea541e9b0f5e33d293d901e3dff": "fd72bbfd0002ee6ef22e53462b55a924",
".git/objects/55/90dcb93a8cb9c339998af5bb344a3437337bff": "968776acf88b786d98f383809ae03bb6",
".git/objects/56/bae68232e4bb44cc109577f3380314bd7ddf92": "712a61e0ec72de0ba472360ec7f36f58",
".git/objects/58/e914b99187e7ef90dfb24c182d81c6f2ade8a0": "5fb639ddfe677c56957eed6b6959fe50",
".git/objects/59/11012f9eeec402ba091dade680e33fe93efbcd": "8348f635f52e3b4387f3e7b4289254b8",
".git/objects/5a/79e868705132b899e04e71912fde5cd19715df": "24c0343947d1f6856f79c07a7b276ec9",
".git/objects/5d/cbebaf90aff41e44bc8cc4933979a31a5b7be0": "21db4f84faa66ba7d9efbd99e8d2647f",
".git/objects/63/2aad3e3108629e7fd3777473e05c7dbb560b71": "84920ec198e44a82791554728d9f97cc",
".git/objects/64/e1af0d63ec2fb88556107d7e22cb71702b8b68": "dd4334dfbc1c61f2a287b40d0a405efe",
".git/objects/68/4482d5d158f816fcbe06d991845b39beeb66a2": "12bce351c8fdde4265b982d05cada244",
".git/objects/6d/f021dc578b5f1b19bf56d01c8ac649d4f95cbc": "75cf269b26ac0a7153f79a0da5d0d5fb",
".git/objects/71/47a7b7e2d049655b25bca749d67a0ccd357168": "46c111267211bb27f7fb7071df94ddaa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/025f78352c3017b77dfe5111992ffc38a6f5eb": "fe299882f2c7dae7906ea288736fb9e4",
".git/objects/80/bdd5054c48134bc0f98bbf0e96c5fd73bf13ac": "61ce18375771b89bdd19feac36c49b00",
".git/objects/82/5ce53609cf97b2b00b7da88b9ad3fbe2becdff": "bedd2f1edf9adf30eb86707cad1abcde",
".git/objects/85/0839dcc50a6355e09746f5d712e266c358b79b": "7d1887324d675bff27e5bb2ed7e2f553",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/dba985f7f4f648c45728edcfacbee61f4f2437": "885e82c87ac509d3a2b7f8bb249be79b",
".git/objects/8b/ecf2cf4593b929aae26c0bb653741a98ed3e3a": "c62876ccd5a53839af854e324bfaa8b3",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/0aa8d14c4c40f9214d279cb2715435285417be": "c0cf735717ee666186efd80f16b8a82a",
".git/objects/95/f4ef8059a4b82723ec2d8e5bbf1b297a604036": "50af912ed8639ab36d4a0831a6e59eb6",
".git/objects/96/f8c34e378b089b7ffb91b410714a6f5d97cdc7": "860db49db7572d2840556e281f16be9c",
".git/objects/9a/4a2f71e0e8bffb5cfb3c5288aa0a2705aeba23": "08923364685ea47227aa5b4b434e9f0f",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/f789dac8b9280aedd1b1be9b2e7509c2ec9c22": "7dab374636632112c182ae894fa81a1c",
".git/objects/a1/27e0b019d101eda84a15fca42ed50296251cdd": "90f69e1bad1ade9171d2c86af0970dae",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/208067117c1824c916257902372210367397d5": "ac3898b519e892ce1941237b4f5e184c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/fe3da1ed6908231efb1cdbdb8140b9376c461d": "0b50542ceb8485bdd03daa3ced7c4922",
".git/objects/ad/18b1d1d7c895a807795f0630e5a0c2917f23f5": "6185b0f5a56439c8b5affd64d5153d59",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b4/3e0dfb336d9b048dea3a18fc3a8c8a9f0e4079": "ce10deb6ba469fef6fadfb35c0fcb625",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/866655847fbd9e33070889f4b00c042e18d940": "724bd339a41f6ca9a344090d5a49295b",
".git/objects/c6/c81b0be05fa75d0d948bebc936b761e795dab2": "d38b24d7897694a45fd9cf7c41373406",
".git/objects/c7/ee98b22f57c25b0c30119fd7f25fe699ab66b9": "e1b8ad4fdfb627f53d57dd1ec79ff01b",
".git/objects/cb/cc27009536a2b82af0ffe571541d8c755cd97c": "de27c951d0375e85d12e9a11e1ac8798",
".git/objects/cd/cb5acc07947586b47d7c84bae21c8795460e73": "1d9028d9c94a6526987048ed5d5dafb2",
".git/objects/cf/af25d9514a822c769173f6ac12ed991b5a7407": "58e9cb58abcb866d02ff80658015c63f",
".git/objects/d3/0386e8d2a187670b6dedf1c1a32d80bda22eba": "8d7983bd8b75fcff98990c7039def370",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d9/1ad6209a90d83eb1a3b405a682439ea8a5ec7e": "8b47826570156aabdcad3c4374c13ddb",
".git/objects/d9/fb62c6689a7ffa1e8c414a451db82170b9d2ae": "3893de4170b6b044d18da6d20e25765b",
".git/objects/dd/20fe37ee150f6b630ef66e7622f41f45d8d84f": "2f9d1bc1eedf707c60fbdac8766fee25",
".git/objects/e4/619387123d1ab79e4cfd929e107c79612058e2": "27e0b05dfa98787fe46c2a2f6d3ec7d7",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/13a741f56515722cc3cd8cd17794f212e33f7a": "496f51e7125e4df7dbef9cde71629d0a",
".git/objects/f3/1afdd23544ef10bd2ed2ffc53cf254796d6294": "54e8b23a1171c1db032d5a55a7e1b674",
".git/objects/f3/222145ddc387f1f07be7692fdd75e2329f237c": "c959dfd273755c66c0c3df5c81e1a95e",
".git/objects/f4/4eb283ddd307bb86ca455efeedda2d25471ba6": "0baf785ca94676703a02e0581309f73c",
".git/objects/f8/806d5b9ef3606d0b7e07f46045252d75b3c8cd": "ac999c87da24ab561aebff90e141436f",
".git/refs/heads/master": "5728e27a4d86ea8cfefef94b8ffc73e1",
".git/refs/remotes/origin/master": "5728e27a4d86ea8cfefef94b8ffc73e1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4b18c59aa73a14605a5c9afa22709ea2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8f57b39c9ec948f1d8a489b7ce5f29ea",
"/": "8f57b39c9ec948f1d8a489b7ce5f29ea",
"main.dart.js": "22693c660638da704eccfa4dfea9a9f7",
"manifest.json": "f4f702415de4aa6b094b75320260c81b",
"version.json": "51300ae5f474d2960132c26e85bc14f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
