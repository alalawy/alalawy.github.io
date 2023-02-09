'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_24.part.js": "4031b4ab18bffdfd5deaa0a29545cf4d",
"version.json": "a2b89ce849d3419996407d35ce79acf7",
"main.dart.js_12.part.js": "d8d5f7fa54cf2d8ab901e0ae9bccb63b",
"index.html": "cb0343d21b0c42eb0da04feade88bda7",
"/": "cb0343d21b0c42eb0da04feade88bda7",
"main.dart.js_13.part.js": "5faf92be725bc2fa770c88cc2bfc9b2f",
"main.dart.js_25.part.js": "61453c3f1fbe5e5d87068bc20f0792cc",
"main.dart.js_11.part.js": "49dade0441be5bc3be27ef7100519859",
"main.dart.js_4.part.js": "dd7712f59013f8b7d97b21ad7b49386a",
"main.dart.js": "746463faf416d455ad4f7cb581bb4edf",
"main.dart.js_18.part.js": "624aa07bfbd8f3d27a0591d2c06b0511",
"main.dart.js_19.part.js": "ecbce268a1d3cd13af0c1ab931d0773b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js_26.part.js": "03b654b9bb13d50203bebb0dd51702b0",
"main.dart.js_5.part.js": "0f48a7fd5f5baf6853f6a4adce6d1dc8",
"main.dart.js_15.part.js": "bfd16f46f64aa993e94dc0a80da77085",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_23.part.js": "65f4efe53919d4b5d3b6201c78edcf3c",
"main.dart.js_9.part.js": "770c552e7400ffdf3904e64837e53afe",
"main.dart.js_22.part.js": "1ee0b326241a84a9629f7d5446743ed1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"MaterialIcons-Regular.ttf": "4e85bc9ebe07e0340c9c4fc2f6c38908",
"manifest.json": "241ec577d30b2670beca0258fbabfce9",
"main.dart.js_14.part.js": "21b3c825f6131cb5c0b3d4f60cf585f6",
"main.dart.js_1.part.js": "954e709a6c3d2af3699b8264c7b33b40",
"main.dart.js_20.part.js": "fecc2a1f35492a7f3c0f0fc1f3ef372c",
"main.dart.js_3.part.js": "79640ab53eca2a324a4bb9ab4f388fbb",
"main.dart.js_16.part.js": "ca6848d2bffe533bb40c2d0131ac43ee",
"assets/AssetManifest.json": "0cc14438b2e782d3c55074506a73272e",
"assets/NOTICES": "b69b9b54d53e38cf5f095519bdd54f7e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "0cf88c60af4debd2e740d32ac2db9aa1",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Frame_131.webp": "9c7c2f8fe09434814086c67dba55eaf2",
"assets/assets/images/Frame_4.webp": "3dbf035aac86edfa4ac205ef6ed72ea2",
"assets/assets/images/Group_132.webp": "318d11f00893bfeecddfce0abea6dc37",
"assets/assets/images/Frame_130.webp": "8e5a9e3f158fa8127aff6c78d2e36691",
"assets/assets/images/app_launcher_icon.webp": "3dbf035aac86edfa4ac205ef6ed72ea2",
"assets/assets/images/Group_3.webp": "5b3d54d08efe251fccf6a97a18f998b2",
"assets/assets/images/Section_5_-_Unduh_aplikasi.webp": "74a81481d9c685f6b748d3fc556f2b20",
"assets/assets/images/Frame_45.webp": "3cdd46620b45ecf736248f6c87244277",
"assets/assets/images/Google_Play_Store_badge_EN.webp": "d6064097032546b1d7a94e3947ebe9a8",
"assets/assets/images/Group_33.webp": "0277a97d8fda2dcce6300028259627a7",
"assets/assets/images/Group_33_(1).webp": "19bffc1103d588c1129aad300215efd9",
"assets/assets/images/favicon.webp": "ffeb79191bfce0fbd10f40682606bbf4",
"assets/assets/images/Download_on_the_App_Store_Badge.webp": "fbc144e5ab1de8734985c01648644d03",
"assets/assets/images/logo-baru.webp": "41c4ec96b1632c27f766be2e1c2db8f2",
"assets/assets/images/iPhone_14_Pro_(1).webp": "55a0b4a7bc3a2ce77821c46746f887fe",
"assets/assets/images/indonesia-26817__480.webp": "92826b3cd8fd212bb6f987cb1a1bde91",
"assets/assets/images/Frame_7.webp": "77568e65b145b1125159402cd4582e9c",
"assets/assets/images/Component_1.webp": "6eb44c2e8782e1bf54bf8a62164542aa",
"main.dart.js_2.part.js": "6429962967baea2e6f1be14e1e640b0e",
"main.dart.js_17.part.js": "d458fb35bedce3a735dd673b96791a83",
"main.dart.js_21.part.js": "d2117e66f0a6d6998a08e560a5ce8b17",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
