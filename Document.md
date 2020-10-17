# ビルド
npmを利用しているのでnodeのパスを通す必要がある。<br>
実行前に、/frontend にてnpm install を実行。
Spring boot(Gradle)が動かせるIDE(IntelliJのみ確認済み)なら実行ボタンで動かせる。
そうでなくとも gradlew bootrun でも実行可能。<br>
成功すると、localhost:8080に環境が立ち上がる。

# フロントエンドについて
フロントエンドではReactを使用しています。パッケージ管理はnpmです。<br>
SPAサイトとして作るつもりです。

# バックエンドについて
バックエンドはKotlin + spring boot です。<br>
認証をどうするかですが、Cookieで普通にやります。(JWTは怖いので)

## リクエスト
db-access/から始まるリクエストはデータベースに対するリクエストです。
コンテスト情報やログインの際はこちらにGETやPOSTを送って更新します。<br>
それ以外のリクエストは同じページ(index.html)を返します(SPAなので)。<br>
URLに応じて、以下のようにindex.jsがページ遷移を行うようにします。<br>
また、常にヘッダ(Header.js)が表示される用にします。ヘッダではルートへのリンクと、ログインして無ければ
サインインとログインボタン、しているなら自分のアカウントページへのリンク。<br>
サインイン状態はCookieのセッションid(_sforce_login_session)の有無で判断。

## URLと機能
- / (ルート) <br>
MainPage.jsによる、ホームのページ表示です。<br>
最新のコンテスト、ランキング等の表宇を行います。<br>
それぞれクリック時にコンテストページや、ランキングページに飛ぶように。

- /signin <br>
SignInPage.jsによるアカウント作成ページ。<br>

- /login <br>
ユーザー名とパスワード周りは/signinと同じ。<br>

- /contest/$contestName <br>
$contestNameはコンテストの名前、問題とかがある
参加可能は、出た問題に関わっているWriter Admin権限有は参加不可。

- /coordinate <br>
Writer Adminのみアクセス可能。Writerは作問ページへ、Adminは問題プールとコンテスト
作成ページへ移行可能

- /coordinate/problems/$user-name <br>
自分の作っている問題一覧+新しい問題作成 問題爆破もここで(コンテストに割り当てられていないもののみ)

- /coordinate/problems/$user-name/$problem-name <br>
問題編集 議論

- /coordinate/problems/pool <br>
問題プール Adminのみアクセス可能

- /coordinate/contests <br>
Adminのみアクセス可能 現在のコンテスト一覧に加えて新しくコンテストが開ける。

- /coordinate/contest/$contest-name <br>
コンテスト編集