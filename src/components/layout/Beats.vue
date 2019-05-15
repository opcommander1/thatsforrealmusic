<template>
  <div class="Beats">
    <div class="bg-image">
      <div class="container">
        <div class="row">
          <div class="col s12 m12 royalplayer">
            <ul id="beatlists1" style="display:none;">
                <li data-path="content/mp3/02.mp3" data-thumbpath="content/thumbnails/small2.jpg" data-downloadable="no" data-duration="04:41">
                <p><span style="font-weight:bold;">MACKLEMORE & RYAN LEWIS vs MAJOR LAZER</span> -  can't hold us remix (ft swappi and 1st klase)</p>
              </li>
              <li data-path="content/mp3/03.mp3" data-thumbpath="content/thumbnails/small3.jpg" data-downloadable="no" data-duration="03:49">
                  <p><span style="font-weight:bold;">Crush ft. Camden Cox</span> - Could This Be Real (Luminox Remix)</p>
              </li>
              <li data-path="content/mp3/04.mp3" data-thumbpath="content/thumbnails/small4.jpg"  data-duration="04:19">
                  <p><span style="font-weight:bold;">DJ SLiiNK X DiRTY SOUTH JOE</span> - CERTiFiED TRAP TOUR OFFiCiAL MiX</p>
              </li>
            <li data-path="content/mp3/05.mp3" data-thumbpath="content/thumbnails/small5.jpg" data-downloadable="no" data-duration="03:54">
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
                <p class="info green-text">This section allows you to download a beat for free, when you sign up for free to be a member.  Use the beat to add your own lyrics, or change up the style of the beat in your own software.  You can hear the beat first before downloading, above is the Beat Player.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <ul v-if="Beats">
            <li v-for="(beat, id) in Beats" :key="id">
              <div class="col m4 s12">
                <div class="card small beat-section">
                  <div class="card-image">
                    <img v-bind:src="beat.img" alt="">
                  </div>
                  <div class="card-content title">
                    <p>{{ beat.title }}</p>
                  </div>
                  <div class="card-action" id="download-link">
                    <a v-bind:href="beat.download" download>Download</a>
                  </div>
                </div>
              </div>
            </li>
           </ul>
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
        title: "West Coast Grove",
        download: "#"
        },
        {
        id: 2,
        img: "/img/beatimage.ff5f5e45.jpg",
        title: "East Coast Grove",
        download: "#"
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
              showShareButton:"yes",
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
              showPlaylistsSearchInput:"yes",
              usePlaylistsSelectBox:"yes",
              showPlaylistsSelectBoxNumbers:"yes",
              showPlaylistsButtonAndPlaylists:"yes",
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
          });
      })};
    },
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
  -webkit-box-shadow: 0px 0px 12px 0px rgba(157,216,147,1);
  -moz-box-shadow: 0px 0px 12px 0px rgba(157,216,147,1);
  box-shadow: 0px 0px 12px 0px rgba(157,216,147,1);
}

.card .card-content.title p {
  font-size: 1.3em;
  text-align: center;
}

#download-link a {
  color: #ce93d8;
  transition: color .3s ease-in-out;
}

#download-link a:hover {
  color: #9dd893;
}

</style>


