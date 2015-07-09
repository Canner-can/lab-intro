# Canner helper

canner helper 會放做can時所需要的東西

請先 `npm install`

## Tools

開發can時以components為概念開發，所以最終需把每個區塊拼湊起來

每次開發時可以直接clone這個repo，可以省去設置這些東吸的麻煩

### gulp

gulp可以很方便的減少開發時reload browser; 編譯js, scss的時間

所以在一開使請先去 `/gulpfile/config.js` 設定所有相關檔案的路徑

有加註`EDIT`的地方就是你需要改的地方，如果路徑一樣的話就不需改了

參照一下config.js裡面的註解，如果有不懂的地方再開issue

(目前這個repo檔案的路徑就是現在conifg.js的設定)

### scss

`scss`可以`import`各個分散的scss成一個檔案，語法可以參照 `scss/test.scss`

而檔名`_*.scss`與`*.scss`的差別在於，底線開頭的檔案不會被編譯出來

視情況所需去決定該檔案是否要 `_`


### js

js用browserify去整合成一個檔案

可以參考`js/index.js`

只要require(`js_path`) 則可以將其他js整合進同一個檔案

### hbs / html

`gulpfile`會自動幫你把編輯過的`hbs`用canner編譯

因此只要設定好`package.json`，之後就可以全部都在`hbs`上做開發

另外因為有設定browsersync，所以每次更動時都會自動reload

記得要去config.js的views設定檔案路徑