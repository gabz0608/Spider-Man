$ErrorActionPreference = 'Stop'
$root = Join-Path $PSScriptRoot '..\public\media'
New-Item -ItemType Directory -Force -Path $root | Out-Null
$items = @(
  @('tobey-01.jpg','zQ8AxTPiCiS5nnwXpwTBPBHSaa5.jpg'),@('tobey-02.jpg','jHxCeXnSchAuwHnmVatTgqMYdX8.jpg'),@('tobey-03.jpg','2PDTWfuBWQKVC7aPAqJK5UCpz08.jpg'),
  @('tobey-04.jpg','6al048Lat3eLVQOuKtc9h6Tu94d.jpg'),@('tobey-05.jpg','8G6HCS82vNxgg5wp7oBDSk32XpF.jpg'),@('tobey-06.jpg','vqZnytUpDDAZI6JU7WtCqdq84L.jpg'),
  @('tobey-07.jpg','FfAU0PUs8AJkMU2VbkVNFtRXR4.jpg'),@('tobey-08.jpg','xslNxb3T3HW8dt70ybbR5lrBJRj.jpg'),@('tobey-09.jpg','w1oD1MzHjnBJc5snKupIQaSBLIh.jpg'),
  @('andrew-01.jpg','HVcza6tJtWFrLriuh3Ano4Vt46.jpg'),@('andrew-02.jpg','sxskOU71CO8LaNX2LOtjYFUtKv7.jpg'),@('andrew-03.jpg','ac0kRKTfiJ4GcoUfb0XIO5vgC8q.jpg'),
  @('andrew-04.jpg','k0hlAzTryCYX1O1LyC6P8tAa8s0.jpg'),@('andrew-05.jpg','hDvqcbZhq9ux0euxYxCP9N6m1Rh.jpg'),@('andrew-06.jpg','u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg'),
  @('tom-01.jpg','fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg'),@('tom-02.jpg','tPpYGm2mVecue7Bk3gNVoSPA5qn.jpg'),@('tom-03.jpg','lAsr1ytUq0ATWdCbcjf59pupPFy.jpg'),
  @('tom-04.jpg','vamhMTvh9m9zFHDoR0v1nRtf6T4.jpg'),@('tom-05.jpg','34jW8LvjRplM8Pv06cBFDpLlenR.jpg'),@('tom-06.jpg','ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg'),
  @('tom-07.jpg','iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'),@('tom-08.jpg','14QbnygCuTO0vl7CAFmPf1fgZfV.jpg'),@('tom-09.jpg','AeK2MPOpYrOOgZNfFnfwp0L8tNn.jpg'),
  @('verse-01.jpg','8mnXR9rey5uQ08rZAvzojKWbDQS.jpg'),@('verse-02.jpg','qGQf2OHIkoh89K8XeKQzhxczf96.jpg'),@('verse-03.jpg','1ntePsIqeklfmrQJqZPncCydsqY.jpg'),
  @('verse-04.jpg','kVd3a9YeLGkoeR50jGEXM6EqseS.jpg'),@('verse-05.jpg','9xfDWXAUbFXQK585JvByT5pEAhe.jpg'),@('verse-06.jpg','jbthbh0KzaUWFPYvkfmXAamjI8j.jpg')
)
foreach($item in $items){
  $target=Join-Path $root $item[0]
  if(!(Test-Path $target)){Invoke-WebRequest -Uri "https://image.tmdb.org/t/p/w1280/$($item[1])" -OutFile $target -UseBasicParsing}
}
$posters=@(
 @('poster-tobey-1.jpg','https://www.sonypictures.com/sites/default/files/title-key-art/spiderman_rating.jpg'),
 @('poster-tobey-2.jpg','https://www.sonypictures.com/sites/default/files/chameleon/title-movie/323363_Spider-Man2_2004_1400x2100_US_1.jpg'),
 @('poster-tobey-3.jpg','https://www.sonypictures.com/sites/default/files/chameleon/title-movie/230057_Spider-Man3_2007_1400x2100_US_1.jpg'),
 @('poster-andrew-1.jpg','https://www.sonypictures.com/sites/default/files/title-key-art/theamazingspiderman_onesheet_rating.jpg'),
 @('poster-andrew-2.jpg','https://www.sonypictures.com/sites/default/files/chameleon/title-movie/456177_ASM2HE_1400x2100_Eng%20%28US%29_1.jpg'),
 @('poster-tom-1.jpg','https://www.sonypictures.com/sites/default/files/title-key-art/spider_man_homecoming_rating.jpg'),
 @('poster-tom-2.jpg','https://www.sonypictures.com/sites/default/files/title-key-art/Spider-Man-FarFromHome-rating.jpg'),
 @('poster-tom-3.jpg','https://www.sonypictures.com/sites/default/files/title-key-art/spidermannowayhome_onesheet_1400x2100_pg13.jpg'),
 @('poster-verse-1.jpg','https://www.sonypictures.com/sites/default/files/title-key-art/spiderman_verse_rating_0.jpg'),
 @('poster-verse-2.jpg','https://www.sonypictures.com/sites/default/files/title-key-art/DP_7175931_SPIDER-MANACROSSTHESPIDER-VERSE_2000x3000_HEDkRedShadowKeyArt_0.jpg')
)
foreach($item in $posters){$target=Join-Path $root $item[0];if(!(Test-Path $target)){Invoke-WebRequest -Uri $item[1] -OutFile $target -UseBasicParsing}}
$covers=@(
 @('comic-01.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/5/80/019e4c1c62da/portrait_uncanny.jpg'),
 @('comic-02.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/6/03/019e4c2a4978/portrait_uncanny.jpg'),
 @('comic-03.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/9/20/019e4c44effb/portrait_uncanny.jpg'),
 @('comic-04.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/9/40/019e4bfa7f9a/portrait_uncanny.jpg'),
 @('comic-05.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/6/50/019e4bd27c9f/portrait_uncanny.jpg'),
 @('comic-06.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/3/03/019e4c30b689/portrait_uncanny.jpg'),
 @('comic-07.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/f/10/598363848588e/portrait_uncanny.jpg'),
 @('comic-08.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/d/40/5196582d03800/portrait_uncanny.jpg'),
 @('comic-09.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/8/b0/57a0bcf7b5004/portrait_uncanny.jpg'),
 @('comic-10.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/3/10/580e72b3258a0/portrait_uncanny.jpg'),
 @('comic-11.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/a/00/57b71f662fdc8/portrait_uncanny.jpg'),
 @('comic-12.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/d/b0/57c4543392337/portrait_uncanny.jpg')
)
foreach($item in $covers){$target=Join-Path $root $item[0];if(!(Test-Path $target)){Invoke-WebRequest -Uri $item[1] -OutFile $target -UseBasicParsing}}
$exactCovers=@(
 @('comic-01.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/f/10/598363848588e/portrait_uncanny.webp'),@('comic-02.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/d/40/5196582d03800/portrait_uncanny.webp'),
 @('comic-03.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/e/70/57a0cce2aa7c0/portrait_uncanny.webp'),@('comic-04.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/a/00/57b71f662fdc8/portrait_uncanny.webp'),
 @('comic-05.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/d/b0/57c4543392337/portrait_uncanny.webp'),@('comic-06.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/9/50/5970ca5b25a9c/portrait_uncanny.webp'),
 @('comic-07.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/7/40/5903c9cc66c89/portrait_uncanny.webp'),@('comic-08.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/7/10/53767557adfc5/portrait_uncanny.webp'),
 @('comic-09.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/9/90/519b7e7eb534a/portrait_uncanny.webp'),@('comic-10.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/6/c0/5915d778aff00/portrait_uncanny.webp'),
 @('comic-11.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/3/c0/4e67d6122b965/portrait_uncanny.webp'),@('comic-12.jpg','https://cdn.marvel.com/u/prod/marvel/i/mg/d/10/544018036c563/portrait_uncanny.webp')
)
foreach($item in $exactCovers){Invoke-WebRequest -Uri $item[1] -OutFile (Join-Path $root $item[0]) -UseBasicParsing}
Write-Output "Downloaded $((Get-ChildItem $root -File).Count) media files."
