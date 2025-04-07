'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2be61d787998c789f02f114cc7231a72",
"assets/AssetManifest.bin.json": "c11d09ac6c9e3c4beda0f62d6757fbdc",
"assets/AssetManifest.json": "fb8b7ad0b543d28658b687c78811784b",
"assets/assets/img/Background%2520(1).png": "4996d140d3275e90745c406732dd544e",
"assets/assets/img/Background%2520(2).png": "2f9349f897b8c12bb1159c5f9cca30f2",
"assets/assets/img/Background%2520(3).png": "1c24893182eb978f6ea8ea26a9b51394",
"assets/assets/img/Container%2520(1).png": "34b73ca7d01df5c392f504447a87237e",
"assets/assets/img/Container%2520(2).png": "9891399e22f47c678f5f5caa8138a063",
"assets/assets/img/Container%2520(3).png": "516aca1e40bb950bdb7cc62332eedf06",
"assets/assets/img/Container.png": "14d95bca000820bb4777d80a17c396b6",
"assets/assets/img/gradient.png": "1f2bd5f97ccb7f066f7ffc161ad6a610",
"assets/assets/img/Gradient2.png": "f104e14a3499699566867e2ebc4ffc56",
"assets/assets/img/gradient3.png": "43cce4326cd6206bf16d45fad355277e",
"assets/assets/img/gradient4.png": "1fc9b3c1c786aab759e27d6c8143695e",
"assets/assets/img/icon1.png": "663b5de35b536f7e0c80d147a44b933b",
"assets/assets/img/icon10.svg": "dff6d391506f9a11029035e90becf92e",
"assets/assets/img/icon11.svg": "23080c818a246bd48df12d8c6ef1ec55",
"assets/assets/img/icon12.svg": "298b4091f09a04a3ea5ce160361e9209",
"assets/assets/img/icon13.svg": "0fb599a237bf33bf1c81fb0ebdf1e614",
"assets/assets/img/icon2.svg": "23217990cc6ee06214ad643d8377b269",
"assets/assets/img/icon3.svg": "ca65e854884f849331fad07c356190ad",
"assets/assets/img/icon4.svg": "ba615ae6f8004b194f554a3f40645034",
"assets/assets/img/icon5.svg": "3679dde9257970c83909d37247040afe",
"assets/assets/img/icon6.svg": "567a487ae9bad106eb006de757222687",
"assets/assets/img/icon7.svg": "d348c523967ff28e2d4c8380f1ab4148",
"assets/assets/img/icon8.svg": "6aed43673d1f49589757afadc3b5039c",
"assets/assets/img/icon9.svg": "e291a2bcbe2386496cbed75cb2ddcb90",
"assets/assets/img/img1.png": "20d951440a537ca5cf1dc39dab00a00a",
"assets/assets/img/imgHirro.png": "33706b33ee3e36626fd05d79f045609b",
"assets/assets/img/overlay.png": "5c7fc0ac89159905aa1c4331425c7876",
"assets/assets/img/prof1.png": "bb29d988fa6ef1a08efa0aae8c20fa45",
"assets/assets/img/prof2.png": "051849efa2242e96a66c03a44ba2d1d7",
"assets/assets/img/profilgrup.png": "5314643ab17f76701a2e3fa57e8dcd6a",
"assets/assets/img/Sublime.png": "9c1e749968fc996c48aa8c326dd5b5d3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e47950bd9723d016c3822441bb3ae659",
"assets/NOTICES": "e0c542bd113f3a1fef53836ac8d2d7cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d191d1fd75203079c6a8e1083cb4410b",
"/": "d191d1fd75203079c6a8e1083cb4410b",
"main.dart.js": "224d1db6d3ce088c5d28327df2116b5e",
"manifest.json": "cf03ae4c09af2d909428f0c37ce7250a",
"version.json": "fcbcee811f82e7e95b36339987108a3e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
