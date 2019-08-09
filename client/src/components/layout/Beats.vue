<template>
  <div class="Beats">
    <div class="bg-image">
      <div class="container">
        <div class="row">
          <div class="col s12 m12 royalplayer">
            <ul id="beatlists1" style="display:none;">
                <li data-path="content/mp3/groove.wav"  data-downloadable="no"  data-duration="03:15">
                <p><span style="font-weight:bold;">GROOVE</span></p>
              </li>
              <li data-path="content/mp3/Gobble.mp3"  data-downloadable="no" data-duration="03:09">
                  <p><span style="font-weight:bold;">GOBBLE SPIT WORSHIP - </span>FREE BEAT WHEN SIGNUP</p>
              </li>
              <li data-path="content/mp3/04.mp3"   data-duration="04:19">
                  <p><span style="font-weight:bold;">DJ SLiiNK X DiRTY SOUTH JOE</span> - CERTiFiED TRAP TOUR OFFiCiAL MiX</p>
              </li>
            <li data-path="content/mp3/05.mp3"  data-downloadable="no" data-duration="03:54">
                <p><span style="font-weight:bold;">Knife Party</span> - LRAD (CRNKN FESTIE RMX)</p>
            </li>
          </ul>
          <div v-bind:id="id" class="col m12 s12">
            <ul id="beatlists" style="display:none;">
              <li data-source="beatlists1" data-thumbnail-path="content/thumbnails/large1.jpg">
              <p class="minimalDarkCategoriesTitle"><span class="bold">Title: </span>My playlist 1</p>
              <p class="minimalDarkCategoriesType"><span class="bold">Type: </span><span class="minimalDarkCategoriesTypeIn">HTML</span></p>
              <p class="minimalDarkCategoriesDescription"><span class="bold">Description: </span>This playlist is created using html elements.</p>
            </li>
            </ul>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col m12 s12">
            <div class="card info">
              <div class="card-content black">
                <span class="card-title green-text">INFO</span>
                <p class="info green-text">This section allows you to purchase beats through paypal debit and credit options. Click the pay now button below to a specific beat and it will take you to the checkout page.  You can hear the beat first before leasing, above is the Beat Player. <br>Thank You For Your Time With "That's For Real Music".</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col m6 s12 offset-m3">
          <ul v-if="Beats" class="collection">
            <li v-for="(beat, id) in Beats" :key="id" class="collection-item black white-text">
              <!-- <p>{{ beat.title }} - {{ beat.license }}</p> -->
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick">
                  <input type="hidden" name="hosted_button_id" value="M89FEUF44GPAW">

                  <div class="title">
                    <input type="hidden" name="on0" v-model="beat.title"><span class="beat-title">{{ beat.title }}:</span>
                    <span id="price-title">
                      {{ beat.mp3price }}
                    </span>
                  </div>
                  <span class="lease-option">
                    <select name="os0">
                      <option value="MP3">MP3 $15.00 USD</option>
                    </select>
      
                  <input type="hidden" name="currency_code" value="USD">
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                  </span>
              </form>

                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick">
                  <input type="hidden" name="hosted_button_id" value="A8L9UZBKVVJ4Y">

                  <span class="lease-option">
                    <span class="price-title">
                      {{ beat.mp3wavprice }}
                    </span>
                  <input type="hidden" name="on0" v-model="beat.title"><select name="os0">
                    <option value="MP3 AND WAV">MP3 AND WAV $30.00 USD</option>
                  </select> 

                  <input type="hidden" name="currency_code" value="USD">
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                  </span>
                </form>




              <!-- <div class="col m3 s12">
                <div class="card small beat-section">
                  <div class="card-content title">
                    <p>{{ beat.title }}</p>
                    <p>{{ beat.license }}</p>
                  </div>
                  <div class="card-action" id="download-link">
                    <a v-bind:href="beat.download" download>Download</a>
                  </div>
                </div>
              </div> -->
            </li>
           </ul>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beats',
  data(){
    return {
      id: 'Beats',
      Beats: [
        {
        id: 1,
        img: "/img/beatimage.ff5f5e45.jpg",
        title: "GROVE",
        license: "LEASE OPTIONS",
        download: "#",
        mp3price: "$15 MP3 Lease",
        mp3wavprice: "$30 MP3 AND WAV Lease"
        },
        {
        id: 2,
        img: "/img/beatimage.ff5f5e45.jpg",
        title: "EAST COAST GROVE",
        license: "Lease",
        download: "#",
        mp3price: "$15 MP3 Lease",
        mp3wavprice: "$30 MP3 AND WAV Lease"
        },
      ]
    }
  },
  created(){
    if(this.id="Beats"){
      FWDRAPUtils.onReady(function(){
          new FWDRAP({
              //main settings
              instanceName:"player2",
              parentId:"Beats",
              playlistsId:"beatlists",
              mainFolderPath:"content",
              skinPath:"modern_skin_dark",
              showSoundCloudUserNameInTitle:"yes",
              googleAnalyticsTrackingCode:"",
              useDeepLinking:"no",
              useYoutube:"yes",
              useVideo:"yes",
              rightClickContextMenu:"default",
              showButtonsToolTips:"yes",
              initializeOnlyWhenVisible:"no",
              autoPlay:"no",
              loop:"no",
              shuffle:"no",
              useHEXColorsForSkin:"yes",
              addKeyboardSupport:"yes",
              privatePassword:"428c841430ea18a70f7b06525d4b748a",
              soundCloudAPIKey:"0aff03b3b79c2ac02fd2283b300735bd",
              normalHEXButtonsColor:"#ce93d8",
              selectedHEXButtonsColor:"#9dd893",
              maxWidth:801,
              volume:.8,
              toolTipsButtonsHideDelay:1.5,
              toolTipsButtonFontColor:"#5a5a5a",
              //controller settings
              animateOnIntro:"yes",
              showNextAndPrevButtons:"yes",
              showFullScreenButton:"yes",
              showThumbnail:"yes",
              showSoundAnimation:"yes",
              showLoopButton:"yes",
              showShuffleButton:"yes",
              showDownloadMp3Button:"yes",
              showBuyButton:"no",
              showShareButton:"no",
              disableAudioScrubbar:"no",
              expandBackground:"no",
              titleColor:"#ce93d8",
              timeColor:"#ce93d8",
              //controller align and size settings (described in detail in the documentation!)
              controllerHeight:76,
              startSpaceBetweenButtons:9,
              spaceBetweenButtons:8,
              separatorOffsetOutSpace:5,
              separatorOffsetInSpace:9,
              lastButtonsOffsetTop:14,
              allButtonsOffsetTopAndBottom:14,
              titleBarOffsetTop:13,
              mainScrubberOffsetTop:47,
              spaceBetweenMainScrubberAndTime:10,
              startTimeSpace:10,
              scrubbersOffsetWidth:2,
              scrubbersOffestTotalWidth:0,
              volumeButtonAndScrubberOffsetTop:47,
              spaceBetweenVolumeButtonAndScrubber:6,
              volumeScrubberOffestWidth:4,
              scrubberOffsetBottom:10,
              equlizerOffsetLeft:1,
              //playlists window settings+
              showPlaylistsSearchInput:"no",
              usePlaylistsSelectBox:"no",
              showPlaylistsSelectBoxNumbers:"yes",
              showPlaylistsButtonAndPlaylists:"no",
              showPlaylistsByDefault:"no",
              randomizePlaylist:"no",
              thumbnailSelectedType:"opacity",
              startAtPlaylist:0,
              startAtTrack:0,
              startAtRandomTrack:"no",
              buttonsMargins:0,
              thumbnailMaxWidth:350, 
              thumbnailMaxHeight:350,
              horizontalSpaceBetweenThumbnails:40,
              verticalSpaceBetweenThumbnails:40,
              mainSelectorBackgroundSelectedColor:"#FFFFFF",
              mainSelectorTextNormalColor:"#ce93d8",
              mainSelectorTextSelectedColor:"#000000",
              mainButtonTextNormalColor:"#ce93d8",
              mainButtonTextSelectedColor:"#FFFFFF",
              //playlist settings
              playTrackAfterPlaylistLoad:"no",
              showPlayListButtonAndPlaylist:"yes",
              showPlayListOnAndroid:"yes",
              showPlayListByDefault:"yes",
              showPlaylistItemPlayButton:"yes",
              showPlaylistItemDownloadButton:"yes",
              showPlaylistItemBuyButton:"yes",
              forceDisableDownloadButtonForPodcast:"yes",
              forceDisableDownloadButtonForOfficialFM:"yes",
              forceDisableDownloadButtonForFolder:"yes",
              addScrollBarMouseWheelSupport:"yes",
              showTracksNumbers:"yes",
              playlistBackgroundColor:"#000000",
              trackTitleNormalColor:"#ce93d8",
              trackTitleSelectedColor:"#FFFFFF",
              trackDurationColor:"#ce93d8",
              maxPlaylistItems:100,
              nrOfVisiblePlaylistItems:12,
              trackTitleOffsetLeft:0,
              playPauseButtonOffsetLeftAndRight:11,
              durationOffsetRight:9,
              downloadButtonOffsetRight:11,
              scrollbarOffestWidth:7,
              //loggin
              isLoggedIn:"yes",
              playTrackOnlyWhenLoggedIn:"yes",
              loggedInMessage:"Please login to play this track.",
              //playback rate / speed
              showPlaybackRateButton:"yes",
              defaultPlaybackRate:1, //min - 0.5 / max - 3
              playbackRateWindowTextColor:"#ce93d8",
              //password window
              borderColor:"#ce93d8",
              secondaryLabelsColor:"#a1a1a1",
              textColor:"#ce93d8",
              inputBackgroundColor:"#ce93d8",
              inputColor:"#FFFFFF",
              //search bar settings
              showSearchBar:"yes",
              showSortButtons:"yes",
              searchInputColor:"#999999",
              searchBarHeight:38,
              inputSearchTextOffsetTop:1,
              inputSearchOffsetLeft:0,
              //popup settings
              showPopupButton:"yes",
              popupWindowBackgroundColor:"#878787",
              popupWindowWidth:750,
              popupWindowHeight:423
          })
      })}
    }
}



</script>

<style>

.Beats .bg-image {
  background: url(../../assets/speakers.jpg) no-repeat center center fixed;
  background-size: cover;
  background-position: center;
}

#Beats {
  padding-left: 0px;
  min-width: 100%;
  margin-top: 35px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(206,147,216,1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(206,147,216,1);
  box-shadow: 0px 0px 12px 0px rgba(206,147,216,1);
}

.card.info {
  -webkit-box-shadow: 0px 0px 12px 0px rgba(206,147,216,1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(206,147,216,1);
  box-shadow: 0px 0px 12px 0px rgba(206,147,216,1);
}

.card .card-content p.info {
  font-size: 1.0em;
}

.card.small.beat-section {
  height: 150px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(157,216,147,1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(157,216,147,1);
  box-shadow: 0px 0px 12px 0px rgba(157,216,147,1);
}

.card .card-content.title p {
  font-size: 1.1em;
  text-align: center;
}

#download-link a {
  color: #ce93d8;
  transition: color .3s ease-in-out;
}

#download-link a:hover {
  color: #9dd893;
}

.collection .collection-item {
  font-weight: 300;
}

.title {
  display: inline;
}

.title .beat-title {
  padding-right: 5px;
}

#price-title {
  padding-right: 5px;
}


</style>


